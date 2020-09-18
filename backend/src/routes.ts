import express from 'express';
import { create, index, destroy, update, indexSpecific } from './controllers/NotesController';
import { createUsers, indexUsers } from './controllers/UsersControllers';


const routes = express.Router();


routes.get('/notes', index);
routes.get('/notes/:id', indexSpecific);
routes.post('/notes', create);
routes.put('/notes/:id', update);
routes.delete('/notes/:id', destroy);
routes.get('/users', indexUsers);
routes.post('/users', createUsers);

export default routes;