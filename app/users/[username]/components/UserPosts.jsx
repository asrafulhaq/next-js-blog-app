import React from "react";

export default async function UserPosts({ promise }) {
  const posts = await promise;
  return (
    <ul>
      {posts.map((item, index) => {
        return (
          <li key={index}>
            <h5>{item.title}</h5>
          </li>
        );
      })}
    </ul>
  );
}
