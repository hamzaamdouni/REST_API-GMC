import axios from "axios";
import { GET_ALL_PERSON, GET_PERSON, GET_PERSON_FAIL, GET_PERSON_LOAD } from "../constants/persons";

export const getAllpersons = () => async (dispatch) => {
  dispatch({ type: GET_PERSON_LOAD });
  try {
    let result = await axios.get("/api/person/");
    dispatch({ type: GET_ALL_PERSON, payload: result.data }); 
  } catch (error) {
    dispatch({ type: GET_PERSON_FAIL });
  }
};

export const deleteperson = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/person/${id}`);
    dispatch(getAllpersons());
  } catch (error) {
    dispatch({ type: GET_PERSON_FAIL });
  }
};

export const addperson = (person, history) => async (dispatch) => {
  try {
    await axios.post("/api/person", person);
    history.push("/persons");
    dispatch(getAllpersons());
  } catch (error) {
    dispatch({ type: GET_PERSON_FAIL });
  }
};

export const getperson = (id) => async (dispatch) => {
  dispatch({ type: GET_PERSON_LOAD });
  try {
    let result = await axios.get(`/api/person/${id}`);
    dispatch({ type: GET_PERSON, payload: result.data }); //{msg,person}
  } catch (error) {
    dispatch({ type: GET_PERSON_FAIL });
  }
};
export const editperson = (id, person, history) => async (dispatch) => {
  try {
    await axios.put(`/api/person/${id}`, person);
    dispatch(getAllpersons());
    history.push("/persons");
  } catch (error) {
    dispatch({ type: GET_PERSON_FAIL });
  }
};