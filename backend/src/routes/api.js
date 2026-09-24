const express = require('express');
const router = express.Router();

// Importação ajustada para bater com a exportação do seu database.js
const pool = require('../config/database');

// ==========================================
// CLIENTES (GET, POST, PUT, DELETE)
// ==========================================
router.get('/clients', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro no GET /clients:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/clients', async (req, res) => {
  const { name, phone, address, document, email } = req.body;
  try {
    const query = `
      INSERT INTO clients (name, phone, address, document, email)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [name || null, phone || null, address || null, document || null, email || null];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro no POST /clients:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put('/clients/:id', async (req, res) => {
  const { id } = req.params;
  const { name, phone, address, document, email } = req.body;
  try {
    const query = `
      UPDATE clients 
      SET name = $1, phone = $2, address = $3, document = $4, email = $5 
      WHERE id = $6 
      RETURNING *;
    `;
    const values = [name || null, phone || null, address || null, document || null, email || null, id];
    const result = await pool.query(query, values);
    
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro no PUT /clients/:id:', error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/clients/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM clients WHERE id = $1', [id]);
    res.json({ message: 'Cliente removido com sucesso' });
  } catch (error) {
    console.error('Erro no DELETE /clients/:id:', error);
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// ORDENS DE SERVIÇO (GET, POST, PUT, DELETE)
// Tabela corrigida para: service_orders
// ==========================================
router.get('/orders', async (req, res) => {
  try {
    const query = `
      SELECT o.*, c.name as client_name 
      FROM service_orders o 
      LEFT JOIN clients c ON o.client_id = c.id 
      ORDER BY o.id DESC
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Erro no GET /orders:', error);
    res.status(500).json({ error: error.message });
  }
});

router.post('/orders', async (req, res) => {
  const { client_id, title, description, value, status } = req.body;
  try {
    const query = `
      INSERT INTO service_orders (client_id, title, description, value, status)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [client_id, title, description || '', value || 0, status || 'Pendente'];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro no POST /orders:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put('/orders/:id', async (req, res) => {
  const { id } = req.params;
  const { client_id, title, description, value, status } = req.body;
  try {
    const query = `
      UPDATE service_orders 
      SET client_id = $1, title = $2, description = $3, value = $4, status = $5, updated_at = CURRENT_TIMESTAMP
      WHERE id = $6 
      RETURNING *;
    `;
    const values = [client_id, title, description, value, status, id];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro no PUT /orders/:id:', error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/orders/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM service_orders WHERE id = $1', [id]);
    res.json({ message: 'Ordem eliminada com sucesso' });
  } catch (error) {
    console.error('Erro no DELETE /orders/:id:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
