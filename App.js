import Container from "./components/Container";
import Loader from "../src/Loading/Loader";
import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Container />
      ) : (
        <Loader/>
      )}
    </>
  );
}

export default App;
