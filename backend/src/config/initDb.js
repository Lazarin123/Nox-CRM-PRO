const db = require('./database');

const createTables = async () => {
  const queryText = `
    -- 1. Criação da tabela de clientes
    CREATE TABLE IF NOT EXISTS clients (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255),
      phone VARCHAR(50),
      address TEXT,
      document VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- 2. Garantir que as colunas existem caso a tabela já tenha sido criada anteriormente
    ALTER TABLE clients ADD COLUMN IF NOT EXISTS address TEXT;
    ALTER TABLE clients ADD COLUMN IF NOT EXISTS document VARCHAR(100);

    -- 3. Criação da tabela de ordens de serviço (service_orders)
    CREATE TABLE IF NOT EXISTS service_orders (
      id SERIAL PRIMARY KEY,
      client_id INT REFERENCES clients(id) ON DELETE CASCADE,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      value NUMERIC(10, 2) DEFAULT 0.00,
      status VARCHAR(50) DEFAULT 'Pendente',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.query(queryText);
    console.log('✅ Tabelas verificadas/criadas com sucesso no PostgreSQL.');
  } catch (err) {
    console.error('❌ Erro ao inicializar banco de dados:', err);
  }
};

module.exports = createTables;
