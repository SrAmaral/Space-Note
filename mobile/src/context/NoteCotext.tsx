import React, {createContext, useState} from 'react';

interface NoteContextData {
  id: string;
  title: string;
  text: string;
  star: boolean;
  done: boolean;
  isTodo: boolean;
  todos: JSON;
  todoIdNote: number;
  resultCalc: number;

  setTitleFc(): void;
  setTextFc(): void;
  setStarFc(): void;
  setDoneFc(): void;
  setIsTodoFc(): void;
  setIdFc(): void;
  setTodosFc(): void;
  setContextToInitial(): void;
  setResultCalc(): void;
  sortNotes(): void;
  setTodoIdNoteFc(): void;
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
  const [todoIdNote, setTodoIdNote] = useState();
  const [resultCalc, setResultCalc] = useState('');

  const setTitleFc = (title) => {
    setTitle(title);
  };
  const setTextFc = (text) => {
    setText(text);
  };
  const setStarFc = (star) => {
    setStar(star);
  };
  const setDoneFc = (done) => {
    setDone(done);
  };
  const setIsTodoFc = (isTodo) => {
    setIsTodo(isTodo);
  };
  const setIdFc = (id) => {
    setId(id);
  };
  const setTodosFc = (todos) => {
    setTodos(todos);
  };
  const setTodoIdNoteFc = (todos) => {
    setTodoIdNote(todos);
  };

  const sortNotes = (notes) => {};

  const setContextToInitial = () => {
    setTitleFc('');
    setTextFc('');
    setStarFc(false);
    setDoneFc(false);
    setIsTodoFc(false);
    setTodoIdNote();
    setTodos([{titleTodo: '', complete: false}]);
    setTodoIdNote();
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
          setResultCalc,
          sortNotes,
          setTodoIdNoteFc,
        }}>
        {children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteContext;
