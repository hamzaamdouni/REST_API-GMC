import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { addperson, editperson, getperson } from '../JS/actions/persons';

const AddPerson = () => {

    const [person, setPerson] = useState({});
    const [edit, setedit] = useState(false);
  
    const editPersonState = useSelector((state) => state.personReducer.person);
  
    const dispatch = useDispatch();
  
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        if (params.id) {
          dispatch(getperson(params.id));
        }
      }, [params.id, dispatch]);
      // when the component update
      useEffect(() => {
        if (params.id) {
          setedit(true);
        } else {
          setedit(false);
        }
        edit
          ? setPerson(editPersonState)
          : setPerson({ name: "", lastName: "", phone: "", email: "" });
      }, [edit, editPersonState, params.id]);
    
      // -*************************
      const handleChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
      };
    
      const handlePerson = () => {
        if (person.email && person.name) {
          if (edit) {
            dispatch(editperson(params.id, person, history));
          } else {
            dispatch(addperson(person, history));
          }
        } else {
          alert("email and required");
        }
      };

    return (
        <form>
      <h2>{edit ? "EDIT The person" : "Add a new Person"}</h2>
      <TextField
        id="outlined-number"
        label="name"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        name="name"
        value={person.name}
      />
      <TextField
        id="outlined-number"
        label="age"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        name="age"
        onChange={handleChange}
        value={person.ages}
      />{" "}
      <TextField
        id="outlined-number"
        label="email"
        type="text"
        name="email"
        InputLabelProps={{
          shrink: true,
        }}
        value={person.email}
        onChange={handleChange}
      />{" "}
      <TextField
        id="outlined-number"
        label="phone Number"
        type="number"
        name="phoneNumber"
        InputLabelProps={{
          shrink: true,
        }}
        value={person.phoneNumber}
        onChange={handleChange}
      />
      <Button onClick={handlePerson}>{edit ? "EDIT" : "SAVE"}</Button>
    </form>
    )
}

export default AddPerson
