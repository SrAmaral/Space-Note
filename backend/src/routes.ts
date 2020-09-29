import express from 'express';
import { create, index, destroy, update, indexSpecific } from './controllers/NotesController';
import { createTodo, indexTodos, updateTodo, destroyTodo } from './controllers/TodoController';
import { createUsers, indexUsers } from './controllers/UsersControllers';


const routes = express.Router();


routes.get('/notes', index);
routes.post('/notes', create);
routes.put('/notes/:id', update);
routes.delete('/notes/:id', destroy);

routes.get('/todos', indexTodos);
routes.post('/todos', createTodo);
routes.put('/todos/:id', updateTodo);
routes.delete('/todos/:id', destroyTodo);


routes.get('/users', indexUsers);
routes.post('/users', createUsers);

export default routes;
