import { combineReducers } from "redux";
import loginReducer from "../Login/reducer";
import registerReducer from "../Register/reducer";
import forgotPasswordReducer from "../ForgotPassword/reducer";
import resetPasswordReducer from "../CreateNewPassword/reducer";

export const mainReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
});
