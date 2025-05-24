const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; 


app.use(morgan('dev'));




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
