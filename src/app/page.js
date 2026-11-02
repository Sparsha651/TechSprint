"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to House Easy</h1>

      <button onClick={() => router.push("/login")}>
        Login
      </button>
    </div>
  );
}