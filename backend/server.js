const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api/ping', (req, res) => {
	  res.json({ message: 'Backend is alive!' });
});

app.listen(PORT, () => {
	  console.log(`Backend running on http://localhost:${PORT}`);
});
