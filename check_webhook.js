const https = require('https');
https.get('https://api.telegram.org/bot8602881468:AAF04TGYwH18uuKPlGhC3qtAnmFBfHrZh_4/getWebhookInfo', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log(data));
});
