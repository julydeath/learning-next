import wait from "@/lib/wait";

export default async function Navbar() {
  await wait(1000);
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
}
