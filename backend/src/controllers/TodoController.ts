import {Request, Response} from 'express';

import db from '../database/connection';

export const indexTodos = async (request: Request, response: Response) => {
  
  const filters = request.query;

  const search = filters.search as string;

  
    const notes = await db ('notes')
    .where('notes.id', '=', search)
    .join('todos', 'notes.id', '=', 'todos.note_id' )
    .select('todos.*');

    

    return response.json(notes);
  }

  
  // const todos = await db ('notes')
  //   .where('notes.id', '=', id)
  //   .join('todos', 'notes.id', '=', 'todos.note_id' )
  //   .select(['notes.*', 'todos.*']);
  //   console.log(todos)

  // return response.json(todos);


export const createTodo = async (request: Request, response: Response) => {
  const {
    id,
    titleTodo,
    complete,
  } = request.body;

  

  

  const trx = await db.transaction();

  try {
    const insertedNotesIds = await trx('todos').insert({
      note_Id: id,
      titleTodo,
      complete,
    });
  
    
  
     await trx.commit();
  
    return response.status(201).json({
      id,
      titleTodo,
      complete,
    });

  }catch (err) {
    console.log(err)
    await trx.rollback();
    return response.status(400).json({
      error: 'Unexpected error while creating new note'
    })
  }
}

export const updateTodo = async (request: Request, response: Response) => {
  const {id} = request.params;
  const { 
   titleTodo, 
   complete,
   
  } = request.body;
   

  const updateNote = {
    complete
    
  };

  

  
  const notes = await db ('todos')
  .where('todos.id', '=', id).update(updateNote);

  return response.json(notes);



}

export const destroyTodo = async (request: Request, response: Response) => {
  const {id} = request.params;

  

  
  const notes = await db ('todos')
  .where('todos.note_id', '=', id)
  // .join('todos', 'notes.id', '=', 'todos.note_id' )
  .select('todos.*').delete();

  return response.json(notes);
}