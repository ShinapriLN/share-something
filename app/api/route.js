
const mysql = require('mysql2/promise')

require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

export async function GET() {
    let results = await db.query('SELECT * FROM notes')

    return Response.json(results[0])
}

export async function POST(request) {
    const { title, content, name } = await request.json();

    const [result] = await db.execute('INSERT INTO notes (title, content, name) VALUES (?, ?, ?)', [title, content, name])
    return new Response(JSON.stringify({ message: 'Data added successfully', result }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

