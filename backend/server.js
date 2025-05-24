const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

// Routes
app.use('/api', require('./routes/testRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
