import axios from "axios";

export default async function getSingleUser(username) {
  // api call
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?username=${username}`
  );

  // error handle
  if (!response?.data) throw new Error("Single user get problem");

  // data send
  return response.data[0];
}
