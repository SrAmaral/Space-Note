import {Request, Response} from 'express';

import db from '../database/connection';

export const indexUsers = async (request: Request, response: Response) => {
  const filters = request.query;

  const search = filters.search as string;

  if(!filters.search){
    const users = await db ('users')
    return response.json(users);
  }
  const users = await db ('users')
  .where('users.id', '=', search)
   .join('notes', 'users.id', '=', 'notes.id' )
   .select(['users.*', 'notes.*']);

  return response.json(users);
}

export const createUsers = async (request: Request, response: Response) => {
  const {
    name,
    password,
    email,
  } = request.body;

  

  

  const trx = await db.transaction();

  try {
    const insertedNotesIds = await trx('users').insert({
      name,
      password,
      email,
    });
  
    await trx.commit();
  
    return response.status(201).send();

  }catch (err) {
    console.log(err)
    await trx.rollback();
    return response.status(400).json({
      error: 'Unexpected error while creating new note'
    })
  }
}