import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'contact_management',
  };
  

export const db = {
  async query(sql, values) {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute(sql, values);
    connection.end();
    return results;
  },
  async createUser(email, password) {
    return this.query(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password]);
  },
  async getUserByEmail(email) {
    const result = await this.query(`SELECT * FROM users WHERE email = ?`, [email]);
    return result[0];
  },
  async addContact(contact) {
    return this.query(`INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)`, [contact.name, contact.email, contact.phone]);
  },
  async getContacts() {
    return this.query(`SELECT * FROM contacts`);
  },
};
