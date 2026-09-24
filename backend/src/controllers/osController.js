const db = require('../config/database');

exports.getServiceOrders = async (req, res) => {
  try {
    const { rows } = await db.query(`
      SELECT so.*, c.name as client_name, c.phone as client_phone 
      FROM service_orders so
      JOIN clients c ON so.client_id = c.id
      ORDER BY so.id DESC
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createServiceOrder = async (req, res) => {
  const { client_id, title, description, value, status } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO service_orders (client_id, title, description, value, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [client_id, title, description, value || 0, status || 'Pendente']
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOS = async (req, res) => {
  const { id } = req.params;
  const { client_id, title, description, value, status } = req.body;
  try {
    const { rows } = await db.query(
      'UPDATE service_orders SET client_id=$1, title=$2, description=$3, value=$4, status=$5, updated_at=CURRENT_TIMESTAMP WHERE id=$6 RETURNING *',
      [client_id, title, description, value, status, id]
    );
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOS = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM service_orders WHERE id = $1', [id]);
    res.json({ message: 'Ordem de Serviço removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
