import React, {createContext, useState} from 'react';

interface NoteContextData {
  id: string;
  title: string;
  text: string;
  star: boolean;
  done: boolean;
  isTodo: boolean;
  todos: Array<object>;
  todoIdNote: number;
  resultCalc: string;

  setTitleFc(title: string): void;
  setTextFc(text: string): void;
  setStarFc(star: boolean): void;
  setDoneFc(done: boolean): void;
  setIsTodoFc(isTodo: boolean): void;
  setIdFc(id: any): void;
  setTodosFc(todos: any): void;
  setContextToInitial(): void;
  setResultCalcFc(): void;
  setTodoIdNoteFc(todos: any): void;
}

const NoteContext = createContext<NoteContextData>({} as NoteContextData);

export const NoteProvider: React.FC = ({children}) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [star, setStar] = useState(false);
  const [done, setDone] = useState(false);
  const [isTodo, setIsTodo] = useState(false);
  const [todos, setTodos] = useState([{titleTodo: '', complete: false}]);
  const [todoIdNote, setTodoIdNote] = useState(0);
  const [resultCalc, setResultCalc] = useState('');

  const setTitleFc = (title: string) => {
    setTitle(title);
  };
  const setTextFc = (text: string) => {
    setText(text);
  };
  const setStarFc = (star: boolean) => {
    setStar(star);
  };
  const setDoneFc = (done: boolean) => {
    setDone(done);
  };
  const setIsTodoFc = (isTodo: boolean) => {
    setIsTodo(isTodo);
  };
  const setIdFc = (id: any) => {
    setId(id);
  };
  const setTodosFc = (todos: any) => {
    setTodos(todos);
  };
  const setTodoIdNoteFc = (todos: any) => {
    setTodoIdNote(todos);
  };
  const setResultCalcFc = () => {
    setResultCalc('');
  } 

  

  const setContextToInitial = () => {
    setTitleFc('');
    setTextFc('');
    setStarFc(false);
    setDoneFc(false);
    setIsTodoFc(false);
    setTodoIdNote(0);
    setTodos([{titleTodo: '', complete: false}]);
  };
  return (
    <>
      <NoteContext.Provider
        value={{
          id,
          title,
          text,
          star,
          done,
          isTodo,
          todos,
          todoIdNote,
          resultCalc,
          setTitleFc,
          setTextFc,
          setStarFc,
          setDoneFc,
          setIsTodoFc,
          setIdFc,
          setTodosFc,
          setContextToInitial,
          setResultCalcFc,
          setTodoIdNoteFc,
        }}>
        {children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteContext;