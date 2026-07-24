const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionStrings = [
    "postgresql://postgres:d1VenlteHZVQIs3d@db.acnaidlegwkqcjxbdwra.supabase.co:5432/postgres",
    "postgresql://postgres:d1VenlteHZVQIs3d@db.acnaidlegwkqcjxbdwra.supabase.co:6543/postgres"
];

async function applySchema() {
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    
    for (const connStr of connectionStrings) {
        console.log(`Connecting using ${connStr}...`);
        const client = new Client({
            connectionString: connStr,
            ssl: { rejectUnauthorized: false },
            connectionTimeoutMillis: 10000
        });
        
        try {
            await client.connect();
            console.log("Connected successfully! Executing schema.sql...");
            await client.query(schemaSql);
            console.log("Schema applied successfully!");
            await client.end();
            return;
        } catch (err) {
            console.error(`Connection/execution error on ${connStr}:`, err.message);
            try { await client.end(); } catch (e) {}
        }
    }
}

applySchema();
