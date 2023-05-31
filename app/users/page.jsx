import getUsers from "@/libs/getUsers";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Our Users",
  description: "Our super users are good",
};

export default async function UserPage() {
  const users = await getUsers();

  return (
    <>
      <h1>Our Developers</h1>
      <hr />
      {users.map((item, index) => {
        return (
          <div className="user-box" key={index}>
            <h3>
              <Link href={`/users/${item.username}`}>{item.name}</Link>
            </h3>
            <p>Email : {item.email}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
