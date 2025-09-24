import React from "react";
import Header from "../components/layout/Header";
import Button from "../components/common/Button"; // ✅ import as named

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <div className="space-x-4">
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </div>
      </main>
    </div>
  );
};

export default About;

