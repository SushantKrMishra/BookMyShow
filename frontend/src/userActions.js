import axios from "axios";
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(
      `http://16.171.225.190:8080/user/getUser`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message,
    });
  }
};
export const loginUser = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    const { data } = await axios.post(
      "http://16.171.225.190:8080/User/authenticate",
      { username, password }
    );
    dispatch({
      type: "LoginSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};
