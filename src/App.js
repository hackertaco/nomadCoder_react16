import React from "react";
import { createPortal } from "react-dom";
function Portals() {
  return createPortal(<Ms />, document.getElementById("touchMe"));
}
const Ms = () => "just touched this";
function App() {
  return (
    <div className="App">
      <Portals />
    </div>
  );
}

export default App;
