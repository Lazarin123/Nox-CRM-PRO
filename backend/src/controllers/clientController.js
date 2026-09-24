const db = require('../config/database');

exports.getClients = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM clients ORDER BY id DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createClient = async (req, res) => {
  const { name, email, phone, document } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO clients (name, email, phone, document) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, phone, document]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, document } = req.body;
  try {
    const { rows } = await db.query(
      'UPDATE clients SET name=$1, email=$2, phone=$3, address=$4, document=$5 WHERE id=$6 RETURNING *',
      [name, email, phone, address, document, id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM clients WHERE id = $1', [id]);
    res.json({ message: 'Cliente removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
