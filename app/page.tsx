import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-screen p-24 ">
      <Link href="/about">About</Link>
      <Link href="/users">Users</Link>
    </main>
  );
}
