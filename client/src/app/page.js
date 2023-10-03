export default async function Home() {
  res = await fetch("https://localhost:8080/api/home")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setMessage(data.message);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      setMessage("Error fetching data.");
    });

  return <div>{message}</div>;
}
