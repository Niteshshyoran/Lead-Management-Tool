// src/actions/leadActions.js
import { ADD_LEAD, UPDATE_LEAD, DELETE_LEAD, SET_LEADS } from './actionTypes';

// Action to add a lead
export const addLead = (lead) => {
  return {
    type: ADD_LEAD,
    payload: lead,
  };
};

// Action to update a lead
export const updateLead = (id, updatedLead) => {
  return {
    type: UPDATE_LEAD,
    payload: { id, updatedLead },
  };
};

// Action to delete a lead
export const deleteLead = (id) => {
  return {
    type: DELETE_LEAD,
    payload: id,
  };
};

// Action to set leads from API
export const setLeads = (leads) => {
  return {
    type: SET_LEADS,
    payload: leads,
  };
};
