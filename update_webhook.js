const https = require('https');

const botToken = '8906068445:AAGc5L08H9a1Lc0oYIDL9o4ZqjJbLVMII4Y';
const edgeFunctionUrl = 'https://acnaidlegwkqcjxbdwra.supabase.co/functions/v1/api';

function request(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    console.log(`Setting webhook to ${edgeFunctionUrl}...`);
    const res = await request(`https://api.telegram.org/bot${botToken}/setWebhook?url=${encodeURIComponent(edgeFunctionUrl)}`);
    console.log("Telegram API Response:", res);
}

run();
