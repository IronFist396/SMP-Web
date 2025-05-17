import express from 'express'
import User from '../models/user.js'

const router = express.Router();

// Creating new user
router.post('/', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = new User({ name, email, age });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: 'Email must be unique' });
    res.status(400).json({ error: err.message });
  }
});


// Get all users => With name search and age filter functionality
// Also added pagination, i.e breaking large sets of data into chunks to be viewed on different pages

router.get('/', async (req, res) => {
  try {
    const { name, age, isActive, sortBy, order, limit = 10, page = 1 } = req.query;

    // Build filter
    const filter = {};
    if (name) filter.name = new RegExp(name, 'i'); // Case insensitive & supports partial match!
    if (age) filter.age = Number(age);
    if (isActive !== undefined) filter.isActive = isActive === 'true';

    // Build sort
    const sort = {};
    if (sortBy) {
      sort[sortBy] = order === 'desc' ? -1 : 1;
    }

    // Pagination
    const lim = parseInt(limit);
    const skip = (parseInt(page) - 1) * lim;

    const users = await User.find(filter).sort(sort).skip(skip).limit(lim);

    const total = await User.countDocuments(filter);
    const totalPages = Math.ceil(total / lim);

    res.json({
      page: parseInt(page),
      limit: lim,
      totalUsers: total,
      totalPages,
      users
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch {
    res.status(400).json({ error: 'Invalid user ID' });
  }
});

// Update user
router.put('/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deleting user
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch {
    res.status(400).json({ error: 'Invalid user ID' });
  }
});

export default router;
