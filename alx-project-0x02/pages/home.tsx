// pages/home.tsx
import React from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <Card title="Card One" content="This is the first card." />
        <Card title="Card Two" content="This is the second card." />
      </main>
    </div>
  );
};

export default Home;


