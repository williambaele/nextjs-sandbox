import React from "react";

export default function Card({ user }) {
  return (
    <div className="p-2 m-1 bg-red-400 rounded-2xl">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
