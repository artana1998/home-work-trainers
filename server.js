import express from 'express';
import trainersRoutes from './trainers.routes.js';

const app = express();

app.use(express.json());

app.use('/trainers', trainersRoutes);
app.use('/home', express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
