const express = require('express');
const cors = require('cors');
require('dotenv').config();
const apiRoutes = require('./routes/api');
const initDb = require('./config/initDb');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(cors({
  origin: ['https://nox-crm-pro.vercel.app/', 'http://localhost:1420'],
  credentials: true
}));

app.get('/', (req, res) => {
  res.json({ message: 'API CRM & Ordens de Serviço operacional' });
});

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  await initDb();
});
