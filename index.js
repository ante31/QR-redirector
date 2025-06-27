const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/app', (req, res) => {
  const userAgent = req.headers['user-agent'].toLowerCase();

  if (userAgent.includes('android')) {
    return res.redirect('https://play.google.com/store/apps/details?id=com.ante3101.Gricko');
  }

  if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
    return res.redirect('https://apps.apple.com/us/app/gricko/id6745101950');
  }

  // Fallback for unknown or desktop users
  return res.redirect('https://gymbox.com/404');
});

app.listen(PORT, () => {
  console.log(`QR Redirect server running on port ${PORT}`);
});
