import {Request, Response} from 'express';

import db from '../database/connection';

interface TodosItem {
  titleTodo: string;
  complete: boolean;
}

  export const index = async (request: Request, response: Response) => {
    
      const notes = await db ('notes')
      return response.json(notes);
    
    
  }
  export const indexSpecific = async (request: Request, response: Response) => {
    const filters = request.query;
    const id = request.params;

    const search = filters.search as string;

  
    const notes = await db ('notes')
    .where('notes.id', '=', search)
    .select(['notes.*']);

    return response.json(notes);
  }

 export const create = async (request: Request, response: Response) => {
    const {
      title,
      text,
      star,
      done,
      isTodo,
      todos,
    } = request.body;

    

    
  
    const trx = await db.transaction();
  
    try {
      const insertedNotesIds = await trx('notes').insert({
        title,
        text,
        star,
        done,
        isTodo,
      });
    
      // const note_Id = insertedNotesIds[0];
    
      // const todosList = todos.map((todosItem: TodosItem) => {
      //   return {
      //     note_Id,
      //     titleTodo: todosItem.titleTodo,
      //     complete: todosItem.complete,
      //   }
      // });
    
      // await trx('todos').insert(todosList);
    
       await trx.commit();
    
      return response.status(201).json({title,
        text,
        star,
        done,
        isTodo});
  
    }catch (err) {
      console.log(err)
      await trx.rollback();
      return response.status(400).json({
        error: 'Unexpected error while creating new note'
      })
    }
  }
  interface resultNote{
    id: string,
		title: string,
    text: string,
    star: boolean,
    done: boolean,
    isTodo: boolean,
    create_at: string,

    
  }

  export const update = async (request: Request, response: Response) => {
    const {id} = request.params;
    const { 
      title,
      text,
      star,
      done,
      isTodo,
      todos,
      create_at,
     
    } = request.body;
     

    const updateNote: resultNote = {
      id,
      title,
      text,
      star,
      done,
      isTodo,
      create_at,
      
    };
  
    

    
    const notes = await db ('notes')
    .where('notes.id', '=', id).update(updateNote);

    return response.json(notes);
	


  }

  export const destroy = async (request: Request, response: Response) => {
    const {id} = request.params;

    

    
    const notes = await db ('notes')
    .where('notes.id', '=', id).delete()
    // .join('todos', 'notes.id', '=', 'todos.note_id' )
    // .select(['notes.*', 'todos.*']);

    return response.json(notes);
  }
