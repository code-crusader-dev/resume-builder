import { useState } from "react";
import Home from "./pages/Home";
import Builder from "./pages/Builder";

export default function App() {
  const [page, setPage] = useState("home");

  return page === "home" ? (
    <Home onStart={() => setPage("builder")} />
  ) : (
    <Builder />
  );
}
