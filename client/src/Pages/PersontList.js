import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllpersons } from '../JS/actions/persons';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PersonCard from '../Component/PersonCard/PersonCard';

const PersonList = () => {
    const persons = useSelector((state) => state.personReducer.persons);
    const isLoad = useSelector((state) => state.personReducer.isLoad);
    const isError = useSelector((state) => state.personReducer.isError);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllpersons());
    }, [dispatch]);
    return (
        <div>
            {isLoad ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <h4>Can not get the data</h4>
      ) : !persons.length ? (
        <h4>There is no person to show</h4>
      ) : (
        <div className="personList">
          {persons.map((el) => (
            <PersonCard person={el} key={el._id} />
          ))}
        </div>
      )}
        </div>
    )
}

export default PersonList
