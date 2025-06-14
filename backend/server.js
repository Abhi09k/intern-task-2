const express = require('express');
const app = express();
const weatherRoute = require('./routes/weatherRoute');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/weather', weatherRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
