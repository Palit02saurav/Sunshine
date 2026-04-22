const createContactTable = (db) => {
  db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      phone VARCHAR(15),
      email VARCHAR(100),
      message TEXT
    )
  `);
};

const insertContact = (db, name, phone, email, message) => {
  return db.promise().query(
    "INSERT INTO contacts (name, phone, email, message) VALUES (?, ?, ?, ?)",
    [name, phone, email, message]
  );
};

module.exports = { createContactTable, insertContact };