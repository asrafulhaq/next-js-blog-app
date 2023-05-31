export default async function getUsers() {
  // get api call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // get err
  if (!response.ok) throw new Error("Failed to get users");

  // return data
  return response.json();
}
