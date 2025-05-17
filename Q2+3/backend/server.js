import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import middleware from './middleware/middleware.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(express.json())
app.use(middleware);
app.use('/users', userRoutes);

// This makes http://localhost:5000/ serve the index.html file
// Comment this line to just interact with the backend -- it has more features (CRUD)
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

