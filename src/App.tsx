import { useState } from "react";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes />
      </div>
    </AuthContextProvider>
  );
}

export default App;
