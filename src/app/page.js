"use client";

import Home from "./components/Home/Home";

async function getData() {
  const res = await fetch(`https://api.github.com/users/abuanwar072/repos`, {
    cache: "force-cache",
    next: {
      revalidate: 20,
    },
  }); // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <Home data={data} />
    </>
  );
}
