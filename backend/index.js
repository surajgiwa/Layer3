const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const connectDB = require('./config/db'); // MongoDB connection
const protect = require('./middleware/protect'); // Adjust the path as necessary

dotenv.config();

// Connect to MongoDB
connectDB();

const auth = require('./routes/auth');
const users = require('./routes/users');

const app = express();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000' // Adjust this to match your frontend URL
}));

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});

const upload = multer({ storage: storage });

// Define Routes
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/auth', auth);
app.use('/api/users', users);

// Protected video upload route
app.post('/api/videos/upload', protect, upload.single('video'), (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Admin access required' });
  }

  const { id: userId } = req.user;
  const videoPath = req.file.path;

  // Insert video information into MongoDB
  const Video = require('./models/Video');
  const newVideo = new Video({
    userId: userId,
    filename: req.file.filename,
    filepath: videoPath
  });

  newVideo.save()
    .then(() => res.status(200).json({ message: 'Video uploaded successfully' }))
    .catch(err => next(err));
});

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Endpoint to retrieve the list of uploaded videos
app.get('/api/videos', (req, res) => {
  const Video = require('./models/Video');
  Video.find()
    .then(videos => res.status(200).json(videos))
    .catch(err => res.status(500).json({ message: 'Error retrieving videos' }));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
