const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Listening to app on ${PORT}`);
});