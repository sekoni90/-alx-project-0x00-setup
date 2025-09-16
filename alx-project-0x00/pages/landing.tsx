import React from "react";
import Card from "../components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Example Card */}
      <Card />

      {/* Multiple Button instances */}
      <div className="mt-4 flex flex-col gap-2">
        <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
        <Button title="Large Rounded-full" size="large" shape="rounded-full" />
        <Button title="Small Rounded-full" size="small" shape="rounded-full" />
        <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
        <Button title="Large Rounded-md" size="large" shape="rounded-md" />
      </div>
    </div>
  );
};

export default Landing;