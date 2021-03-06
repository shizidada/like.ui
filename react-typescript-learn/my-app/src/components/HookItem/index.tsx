import React, { useState, FunctionComponent } from "react";
import { Button } from "antd";

const HookItem: FunctionComponent = () => {
  const [hide, setHide] = useState(false);
  // console.log("HookItem :: ", hide);
  return (
    <Button
      onClick={() => {
        setHide(!hide);
      }}
    >
      {hide ? HookItem.name : 'show name ?'}
    </Button>
  );
};

export default HookItem;
