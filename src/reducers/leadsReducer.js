// src/reducers/leadsReducer.js
import { ADD_LEAD, UPDATE_LEAD, DELETE_LEAD, SET_LEADS } from '../actions/actionTypes';

const initialState = {
  leads: [],
};

const leadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    case UPDATE_LEAD:
      return {
        ...state,
        leads: state.leads.map((lead) =>
          lead.id === action.payload.id ? { ...lead, ...action.payload.updatedLead } : lead
        ),
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    case SET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    default:
      return state;
  }
};

export default leadsReducer;
