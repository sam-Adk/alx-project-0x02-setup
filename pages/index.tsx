import Head from "next/head";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Hello, Next.js + Tailwind + TypeScript!</h2>
        <p className="mt-2">This is the starting point for our ALX project.</p>
      </main>
    </div>
  );
}
