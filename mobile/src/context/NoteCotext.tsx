import React, {createContext, useState} from 'react';

interface NoteContextData {
  id: string;
  title: string;
  text: string;
  star: boolean;
  done: boolean;
  isTodo: boolean;
  todos: Array<object>;
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

  const sortNotes = (notes) => {};

  const setContextToInitial = () => {
    setTitleFc('');
    setTextFc('');
    setStarFc(false);
    setDoneFc(false);
    setIsTodoFc(false);
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
        }}>
        {children}
      </NoteContext.Provider>
    </>
  );
};

export default NoteContext;
