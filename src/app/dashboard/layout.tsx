import wait from "@/lib/wait";
import { Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<h2>Loading Navbar .....</h2>}>
        <Navbar />
      </Suspense>
      {children}
      <Suspense fallback={<h2>Loading user .....</h2>}>
        <User />
      </Suspense>
      <Footer />
    </div>
  );
}

async function User() {
  await wait(1000);
  return <div>Users</div>;
}
