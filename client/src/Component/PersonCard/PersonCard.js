import React from 'react'

import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteperson, getperson } from '../../JS/actions/persons';

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import './PersonCard.css'

const PersonCard = ({ person }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
      let result = window.confirm("are you sure to delete that?");
      if (result) {
        dispatch(deleteperson(person._id));
      }
    };

    return (
        <div className="container">
        <div className="card">
          <div className="card-head">
            <img
              className="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhhklLpQnJpmdcRWm07dxiiIp22D9ZaFlhzNF5S7EMPxEinocq&usqp=CAU"
              alt="Username"
            />
          </div>
          <div className="card-body">
            <div>
              <span className="Person-name">
                {person.name} <b>{person.age || ""}</b>
                <span className="badge">PRO</span>
              </span>
              <span className="username">@{person.email}</span>
            </div>
            <div className="Person-infos">
              <span className="Person-description">
                <p>{person.phoneNumber}</p>
              </span>
            </div>
            <div className="btn-card">
              <Link to={`/edit/${person._id}`}>
                <EditIcon onClick={() => dispatch(getperson(person._id))} />
              </Link>
              <DeleteIcon onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    )
}

export default PersonCard
