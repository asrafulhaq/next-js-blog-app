import getSingleUser from "@/libs/getSingleUser";
import getUserPosts from "@/libs/getUserPosts";
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const user = await getSingleUser(params.username);
  return {
    title: user.name,
    description: `Hi ${user.name}, you are welcome`,
  };
}

export default async function SingleUser({ params }) {
  const user = await getSingleUser(params.username);

  // const [user, posts] = await Promise.all([
  //   getSingleUser(params.username),
  //   getUserPosts(params.username),
  // ]);

  return (
    <>
      <h1>Name : {user.name}</h1>
      <p>Email : {user.email}</p>
      <p>Username : {user.username}</p>
      <hr />
      <h2>{user.name} Posts :</h2>
      <Suspense fallback={<h2>Loading . . . </h2>}>
        <UserPosts promise={getUserPosts(user.id)} />
      </Suspense>
    </>
  );
}
