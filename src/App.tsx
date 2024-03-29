import React from "react";
import Controls from "./page/Controls/Controls";

const App: React.FC = () => {
  const app = require("photoshop").app;

  return (
    <div>
      <Controls></Controls>
    </div>
  );
};

export default App;
