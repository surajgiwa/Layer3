const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'mydatabase.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening SQLite database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

const hashedPassword = '$2b$10$Nq8yaSH2B2zWUKnria7r2ODe9flKHV1lpFGL4itKWqK/KjyRn69VK'; // Example hashed password

// Create tables and insert admin user if not exists
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            isAdmin BOOLEAN DEFAULT FALSE
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Users table:', err.message);
        } else {
            console.log('Users table created or already exists.');

            db.get("SELECT COUNT(*) as count FROM users WHERE email = ?", ['giwas@uwindsor.ca'], (err, row) => {
                if (err) {
                    console.error('Error checking admin user:', err.message);
                } else if (row.count === 0) {
                    db.run(`
                        INSERT INTO users (name, email, password, isAdmin)
                        VALUES (?, ?, ?, ?)
                    `, ['Admin', 'giwas@uwindsor.ca', hashedPassword, 1], (err) => {
                        if (err) {
                            console.error('Error inserting admin user:', err.message);
                        } else {
                            console.log('Admin user inserted successfully.');
                        }
                    });
                } else {
                    console.log('Admin user already exists.');
                }

                db.close((err) => {
                    if (err) {
                        console.error('Error closing SQLite database:', err.message);
                    } else {
                        console.log('Closed SQLite database connection.');
                    }
                });
            });
        }
    });

    db.run(`
        CREATE TABLE IF NOT EXISTS videos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            upload_date DATETIME DEFAULT CURRENT_TIMESTAMP,
            filename TEXT,
            user_id INTEGER REFERENCES users(id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating Videos table:', err.message);
        } else {
            console.log('Videos table created or already exists.');
        }
    });
});

module.exports = db;
