const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Moneybuddy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true }, // Add this line for username
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Define Expense schema
const expenseSchema = new mongoose.Schema({
  name: String,
  amount: Number,
});

const Expense = mongoose.model('Expense', expenseSchema);

// Backend route to add daily purchase
app.post('/api/add-purchase', async (req, res) => {
  try {
    const { name, amount } = req.body;

    // Create a new expense
    const newExpense = new Expense({
      name,
      amount,
    });

    // Save to the database
    await newExpense.save();

    res.status(200).json({ success: true, message: 'Expense added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.get('/register', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ username: user.username, message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
});


