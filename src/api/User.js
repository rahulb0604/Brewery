import axios from "axios";

export async function loginUser(email, password, setError, setErrMsg) {
  try {
    const response = await axios.post(
      "http://localhost:8000/api-v1/user/login",
      {
        email: email,
        password: password,
      }
    );
    await localStorage.setItem(
      "userId",
      JSON.stringify(response.data.data._id)
    );
    console.log(response.data.data);
    return response.data;
  } catch (error) {
    console.error(error);
    setError(true);
    setErrMsg(error.response.data.error);
  }
}

export async function registerUser(
  username,
  email,
  password,
  setError,
  setErrMsg
) {
  try {
    const response = await axios.post(
      "http://localhost:8000/api-v1/user/register",
      {
        username: username,
        email: email,
        password: password,
      }
    );
    await localStorage.setItem(
      "userId",
      JSON.stringify(response.data.data._id)
    );
    console.log(response.data);
    await localStorage.setItem(
      "userId",
      JSON.stringify(response.data.data._id)
    );
    return response.data;
  } catch (error) {
    console.error(error);
    setError(true);
    setErrMsg(error.response.data.error);
  }
}
