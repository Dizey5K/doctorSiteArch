// jshint esversion: 6
// jshint esversion: 6
/*jshint -W033 */
var mysql = require("mysql2");
/*
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Repeek201!",
    database: "client_gluhova",
  })
  .promise();
*/
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "WD237afMG#?",
    database: "client_gluhova",
  })
  .promise();

/* clients */
async function getAllUsers(searchTerm) {
  if (!searchTerm) {
    const [rows] = await pool.query(`
        SELECT *
        FROM clients
        ORDER BY id DESC
        `);
    return rows;
  } else {
    const [rows] = await pool.query(
      `
        SELECT *
        FROM clients
        WHERE INSTR(clients.username, ?)>0 OR INSTR(clients.form_message, ?) OR INSTR(clients.email, ?) OR INSTR(clients.phone, ?)
        
        ORDER BY id DESC
        `,
      [searchTerm, searchTerm, searchTerm, searchTerm]
    );
    return rows;
  }
}

async function getUser(id) {
  const [rows] = await pool.query(
    `
    SELECT * 
    FROM clients
    WHERE id = ?`,
    [id]
  );
  return rows[0];
}

async function addUser(client) {
  const [result] = await pool.query(
    `
    INSERT INTO clients (username, email, phone, form_message)
    VALUES (?, ?, ?, ?)
    `,
    [client.username, client.email, client.phone, client.form_message]
  );
  const id = result.insertId;
  return id;
}

async function deleteUser(id) {
  await pool.query(
    `
    DELETE
    FROM clients
    WHERE id = ?`,
    [id]
  );
}

/* admin */

async function getAdmin(id) {
  const [rows] = await pool.query(
    `
    SELECT * 
    FROM admin`
  );
  return rows[0];
}

module.exports = { getAllUsers, getUser, addUser, deleteUser, getAdmin };
