const tasks = require('../data/tasks');

// 1. Tüm görevleri listele
const getAllTasks = (req, res) => {
res.status(200).json({
success: true,
count: tasks.length,
data: tasks
});
};

// 2. ID'ye göre tek bir görevi getir
const getTaskById = (req, res) => {
const taskId = Number(req.params.id);


const task = tasks.find(task => task.id === taskId);

if (!task) {
    return res.status(404).json({
        success: false,
        message: 'Görev bulunamadı.'
    });
}

res.status(200).json({
    success: true,
    data: task
});



};

// 3. Yeni görev oluştur
const createTask = (req, res) => {
const { title, description, priority, assignee } = req.body;


const newTask = {
    id: tasks.length > 0
        ? Math.max(...tasks.map(task => task.id)) + 1
        : 1,
    title,
    description: description || '',
    priority: priority || 'medium',
    assignee: assignee || '',
    status: 'pending',
    createdAt: new Date().toISOString()
};

tasks.push(newTask);

res.status(201).json({
    success: true,
    message: 'Görev başarıyla oluşturuldu.',
    data: newTask
});


};

// 4. Mevcut görevi güncelle
const updateTask = (req, res) => {
const taskId = Number(req.params.id);


const taskIndex = tasks.findIndex(task => task.id === taskId);

if (taskIndex === -1) {
    return res.status(404).json({
        success: false,
        message: 'Güncellenecek görev bulunamadı.'
    });
}

const { title, description, priority, assignee, status } = req.body;

const allowedStatuses = ['pending', 'in-progress', 'completed'];
const allowedPriorities = ['low', 'medium', 'high'];

if (status !== undefined && !allowedStatuses.includes(status)) {
    return res.status(400).json({
        success: false,
        message: 'Geçersiz durum. pending, in-progress veya completed kullanın.'
    });
}

if (priority !== undefined && !allowedPriorities.includes(priority)) {
    return res.status(400).json({
        success: false,
        message: 'Geçersiz öncelik. low, medium veya high kullanın.'
    });
}

const updatedFields = {
    title,
    description,
    priority,
    assignee,
    status
};

for (const [key, value] of Object.entries(updatedFields)) {
    if (value !== undefined) {
        tasks[taskIndex][key] = value;
    }
}

res.status(200).json({
    success: true,
    message: 'Görev başarıyla güncellendi.',
    data: tasks[taskIndex]
});


};

// 5. Görevi sil
const deleteTask = (req, res) => {
const taskId = Number(req.params.id);


const taskIndex = tasks.findIndex(task => task.id === taskId);

if (taskIndex === -1) {
    return res.status(404).json({
        success: false,
        message: 'Silinecek görev bulunamadı.'
    });
}

const deletedTask = tasks.splice(taskIndex, 1)[0];

res.status(200).json({
    success: true,
    message: 'Görev başarıyla silindi.',
    data: deletedTask
});


};

module.exports = {
getAllTasks,
getTaskById,
createTask,
updateTask,
deleteTask
};
