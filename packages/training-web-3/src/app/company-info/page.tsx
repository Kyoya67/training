import { cookies } from "next/headers";

async function setCookieAction() {
  "use server";
  const cookieStore = await cookies();
  cookieStore.set("name", "John Doe");
  console.log("server action", cookieStore.get("name"));
}

export default async function Page() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("name");
  console.log("page", cookie);
  return (
    <div>
      <h1>企業概要</h1>
      <p>Cookie value: {cookie?.value || "No cookie found"}</p>
      <form action={setCookieAction}>
        <button type="submit">Set Cookie</button>
      </form>
    </div>
  );
}
