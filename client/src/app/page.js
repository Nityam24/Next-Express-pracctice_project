// export default async function Home() {
//   res = await fetch("https://localhost:8080/api/home")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       setMessage(data.message);
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//       setMessage("Error fetching data.");
//     });

//   return <div>{message}</div>;
// }

async function getData() {
  const res = await fetch("http://localhost:8080/api/home");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main>{data.message}</main>;
}
