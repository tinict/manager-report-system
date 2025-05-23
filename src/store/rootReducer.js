import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/store/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;