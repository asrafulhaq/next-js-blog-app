import axios from "axios";

export default async function getUserPosts(userId) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!response.data) throw new Error("Post fetch error");

  return response.data;
}
