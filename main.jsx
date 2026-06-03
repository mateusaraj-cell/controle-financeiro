import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <h1 style={{ textAlign: "center", marginTop: "50px" }}>
      🚀 Sistema React funcionando!
    </h1>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
