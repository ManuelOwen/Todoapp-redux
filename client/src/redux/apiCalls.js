import axios from "axios";
import { updateStart, updateSuccess, updateFailure } from "./userSlice";

export const loginUser = async (dispatch, data) => {
  dispatch(updateStart());
  try {
    const response = await axios.post(`${apiDomain}/auth/register`, data);
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateFailure());
  }
};

// onSubmit = (data) => {
//     console.log(data);
//     Axios.post(`${apiDomain}/auth/register`, data)
//       .then((response) => {
//         response.data.message && alert(response.data.message);
//         navigate("/");
//       })
//       .catch(({ response }) => {
//         alert(response.data.error);
//       });
//   };
