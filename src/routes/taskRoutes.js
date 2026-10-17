const express = require('express');
const router = express.Router();

const {
getAllTasks,
getTaskById,
createTask,
updateTask,
deleteTask
} = require('../controllers/taskController');

// GET /tasks - Tüm görevleri listele
router.get('/', getAllTasks);

// POST /tasks - Yeni görev oluştur
router.post('/', createTask);

// GET /tasks/:id - Belirli bir görevi getir
router.get('/:id', getTaskById);

// PUT /tasks/:id - Görevi güncelle
router.put('/:id', updateTask);

// DELETE /tasks/:id - Görevi sil
router.delete('/:id', deleteTask);

module.exports = router;
