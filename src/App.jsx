
import { useState } from 'react'

import './App.css'
import UserForm from './components/user-form.jsx'
import UserList from "./components/user-list.jsx";

const mockedPeople = [
    {
        id: 1,
        firstName: "Bruce",
        lastName: "Wayne",
        gender: "Man",
        qualification: "Senior",
        phoneNumber: "123456789",
        email: "batman@test.test",
        comment: "i`m not Batman",
        employment: ['Part-time'],
    },
    {
        id: 2,
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "Woman",
        qualification: "Middle",
        phoneNumber: "987654321",
        email: "b_widow@test.test",
        comment: "i`m not Spy Black Widow",
        employment: ['Part-time', 'Full-time', 'Over-time'],
    },
];

const defaultValues = {
    email: "",
    gender: "",
    comment: "",
    lastName: "",
    firstName: "",
    employment: [],
    phoneNumber: "",
    qualification: "",
};

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
