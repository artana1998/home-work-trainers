import fs from 'fs';



let trainersData = JSON.parse(fs.readFileSync('./trainers.json', 'utf8'));

function getAllTrainers(req, res) {
    res.json(trainersData);
}

function getTrainerById(req, res) {
    const trainer = trainersData.find(t => t.id === req.params.id);
    if (trainer) {
        res.json(trainer);
    } else {
        res.status(404).json({ message: 'Trainer not found' });
    }
}

function addTrainer(req, res) {
    const newTrainer = req.body;
    trainersData.push(newTrainer);
    saveTrainersData();
    res.status(201).json(newTrainer);
}

function updateTrainer(req, res) {
    const trainerId = req.params.id;
    const updatedTrainer = req.body;
    const index = trainersData.findIndex(t => t.id === trainerId);
    if (index !== -1) {
        trainersData[index] = { ...trainersData[index], ...updatedTrainer };
        saveTrainersData();
        res.json(trainersData[index]);
    } else {
        res.status(404).json({ message: 'Trainer not found' });
    }
}

function deleteTrainer(req, res) {
    const trainerId = req.params.id;
    const index = trainersData.findIndex(t => t.id === trainerId);
    if (index !== -1) {
        trainersData.splice(index, 1);
        saveTrainersData();
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Trainer not found' });
    }
}

function deleteAllTrainers(req, res) {
    trainersData.splice(0, trainersData.length);
    saveTrainersData();
    res.status(204).end();
}

function saveTrainersData() {
    fs.writeFileSync('./trainers.json', JSON.stringify(trainersData, null, 2));
}

export default {
    getAllTrainers,
    getTrainerById,
    addTrainer,
    updateTrainer,
    deleteTrainer,
    deleteAllTrainers
};
