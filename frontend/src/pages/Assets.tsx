import React from "react";
import Header from "../components/header/Header";

function Assets() {
  return (
    <div className="bg-pulse-bg min-h-screen">
      <Header />
      <div className="p-5">
        <h1 className="text-3xl font-bold text-pulse-text mb-2">Assets</h1>
        <p className="text-sm text-pulse-soft font-semibold">
          Unified view of stocks and crypto currencies
        </p>
      </div>
    </div>
  );
}

export default Assets;
