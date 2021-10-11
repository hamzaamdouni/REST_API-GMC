import { GET_ALL_PERSON, GET_PERSON, GET_PERSON_FAIL, GET_PERSON_LOAD } from "../constants/persons";
  
  const initialState = {
    persons: [],
    isLoad: false,
    isError: false,
    person: {},
  };
  
  const personReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_PERSON_LOAD:
        return { ...state, isLoad: true };
      case GET_ALL_PERSON:
        return {
          ...state,
          persons: payload.persons,
          isLoad: false,
          isError: false,
        };
      case GET_PERSON:
        return {
          ...state,
          person: payload.person,
          isLoad: false,
          isError: false,
        };
      case GET_PERSON_FAIL:
        return { ...state, isError: true, isLoad: false };
      default:
        return state;
    }
  };
  
  export default personReducer;