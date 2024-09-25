
import './App.css';

import { useState } from 'react';

import { mockedPeople, defaultValues} from "./constants/mocked-form-values.js";

import UserForm from './layout/user-form.jsx';
import UserList from "./layout/user-list.jsx";

function App() {
  const [list, setList] = useState(mockedPeople);
  const [values, setValues] = useState(defaultValues);

  const handleSetValues = user => {
      setValues(user);
  };

  const handleSubmit = (formData) => {
      if (!formData.id) {
          formData.id = Math.floor(Math.random() * 100);
          setList(prevList => [...prevList, formData]);
      } else {
          const newList = list.filter((item) => item.id !== formData.id);
          newList.push(formData);
          setList(newList);
          handleSetValues(defaultValues);
      }
  };

  const handleRemove = user => {
      const newList = list.filter((item) => item.id !== user.id);
      setList(newList);
  }

  return <>
      <UserForm handleSubmitForm={handleSubmit} formValues={values}/>
      <UserList list={list} handleSetValues={handleSetValues}  handleRemove={handleRemove}/>
  </>
}

export default App
