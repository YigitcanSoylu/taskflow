const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middleware/logger');

const app = express();

// JSON formatındaki istek gövdelerini okuyabilmek için
app.use(express.json());

// Tüm isteklere ait bilgileri kaydet
app.use(logger);

// Ana endpoint
app.get('/', (req, res) => {
res.status(200).json({
message: 'TASKFLOW API is running!',
version: '1.0.0'
});
});

// Görev endpointlerini bağla
app.use('/tasks', taskRoutes);

module.exports = app;
