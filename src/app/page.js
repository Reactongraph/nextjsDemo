import LoginPage from "./component/loginPage";

async function getData() {
  const res = await fetch(
    "https://llw-backend.vercel.app/v1/master/article-category/list"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <LoginPage />
    </main>
  );
}
