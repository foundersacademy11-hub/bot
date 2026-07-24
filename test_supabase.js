const axios = require('axios');
const SUPABASE_URL = "https://pgnxsgysnvrgsbuecesc.supabase.co";
const SUPABASE_KEY = "sb_publishable_i1qSlBg5OBbnLpSHuDN4UA_bH6bWAVQ";
async function test() {
    try {
        const url = SUPABASE_URL + '/rest/v1/registrations?limit=1';
        const headers = { "apikey": SUPABASE_KEY, "Authorization": "Bearer " + SUPABASE_KEY };
        const response = await axios.get(url, { headers });
        console.log(JSON.stringify(response.data[0], null, 2));
    } catch(e) {
        console.log("Error:", e.response ? e.response.data : e.message);
    }
}
test();
