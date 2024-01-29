import wait from "@/lib/wait";
import Image from "next/image";

export default async function Page() {
  await wait(2000);
  return (
    <>
      <h1>DashBoard</h1>
      <Image
        src="/mountain-background.jpg"
        alt="image"
        width={250}
        height={250}
      />
    </>
  );
}
