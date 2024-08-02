const request = require('supertest');
const app = require('../index');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // In-memory SQLite database for testing
  logging: false,
});

describe('POST /api/auth', () => {
  let token;

  beforeAll(async () => {
    await sequelize.authenticate(); // Connect to SQLite database

    // Define your User model with Sequelize
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    // Create a new user for testing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt);

    await User.sync({ force: true }); // Force sync to create tables

    const user = await User.create({
      email: 'test@example.com',
      password: hashedPassword,
    });

    const payload = {
      user: {
        id: user.id,
      },
    };

    token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5 days' });
  });

  afterAll(async () => {
    await sequelize.drop();
  });

  it('should return a token for valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({
        email: 'test@example.com',
        password: '123456',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should return 400 for invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({
        email: 'test@example.com',
        password: 'wrongpassword',
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body.errors[0].msg).toEqual('Invalid Credentials');
  });
});
