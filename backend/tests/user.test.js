const request = require('supertest');
const app = require('../index');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // In-memory SQLite database for testing
  logging: false,
});

describe('POST /api/users', () => {
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

    await User.sync({ force: true }); // Force sync to create tables
  });

  afterAll(async () => {
    await sequelize.drop();
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        email: 'test@example.com',
        password: '123456',
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should return 400 for an existing user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        email: 'test@example.com',
        password: '123456',
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body.errors[0].msg).toEqual('User already exists');
  });
});
