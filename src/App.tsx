import { useState } from "react";
import { Routes } from "./routes";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
