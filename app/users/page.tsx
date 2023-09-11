import React from "react";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";
import Card from '../components/Card'

export const metadata: Metadata = {
  title: "Users",
};
export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
        <br />
        {users.map((user) => {
          return (
            <>
              <Card user={user}/>
            </>
          );
        })}
      </h2>
    </section>
  );

  return content;
}
