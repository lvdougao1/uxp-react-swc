import React from "react";
import { Button, Slider, Picker, Item } from "@adobe/react-spectrum";
interface ControlsProps {}

const Controls: React.FC<ControlsProps> = (props) => {
  return (
    <div>
      <Button variant="cta">Click me</Button>
      <Picker>
        <Item>One</Item>
        <Item>Two</Item>
        <Item>Three</Item>
      </Picker>
    </div>
  );
};

export default Controls;
