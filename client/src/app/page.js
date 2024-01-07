export default async function getData() {
  const res = await fetch("http://localhost:8080/api/home", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return <main>{(data.message = "default")}</main>;
}

// This is also way to write same code as above in better way..:)

// async function getData() {
//   const res = await fetch("http://localhost:8080/api/home");

//   // if (!res.ok) {
//   //   throw new Error("Failed to fetch data");
//   // }
//   return res.json();
// }

// export default async function page() {
//   const data = await getData();
//   return <main>{data.message}</main>;
// }
