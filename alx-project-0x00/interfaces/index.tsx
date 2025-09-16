import React from "react";

export interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
      {title}
    </button>
  );
};

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application clone system</h1>
      <Pill title="Get Started" />
    </main>
  );
};
