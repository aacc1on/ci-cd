const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <body style="margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh;background:#0d1117;">
        <div style="text-align:center;">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="100" style="margin-bottom:20px;">
            <h1 style="color:white;font-family:Arial;">hello world</h1>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`👉 http://localhost:${PORT}`);
});