import React from 'react';
import propTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props => 
	 
          <li>
          	<GuestName isEditing ={props.isEditing} handleNameEdits = {e => props.setName(e.target.value)}> {props.name}</GuestName>
            <label>
              <input type="checkbox" checked = {props.isConfirmed} onChange = {props.handleConfirmation}/> Confirmed
            </label>
            <button onClick = {props.handleToggleEditing}>{props.isEditing ? "save" : "Edit"}</button>
            <button onClick = {props.handleRemove}>remove</button>
          </li>;
    
         
       

Guest.propTypes = {
	name: propTypes.string.isRequired,
	isConfirmed: propTypes.bool.isRequired,
	isEditing: propTypes.bool.isRequired,
	handleConfirmation: propTypes.func.isRequired,
	handleToggleEditing: propTypes.func.isRequired,
	setName: propTypes.func.isRequired,
	handleRemove: propTypes.func.isRequired
}


export default Guest;