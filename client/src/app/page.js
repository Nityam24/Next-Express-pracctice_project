export default async function getData() {
  const res = await fetch("http://localhost:8080/api/home");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return <main>{data.message}</main>;
}

// async function getData() {
//   const res = await fetch("http://localhost:8080");

//   // if (!res.ok) {
//   //   throw new Error("Failed to fetch data");
//   // }
//   return res.json();
// }

// export default async function page() {
//   const data = await getData();
//   return <main>{data.message}</main>;
// }

// async function getData() {
//   const res = await fetch("http://localhost:8080");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // if (!res.ok) {
//   //   // This will activate the closest `error.js` Error Boundary
//   //   throw new Error("Failed to fetch data");
//   // }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();

//   return <main>{data.message}</main>;
// }
