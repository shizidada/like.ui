import React, { useState } from "react";
import { Icon } from "antd";

function OperatorItem({ name, icon }) {
  const [isHover, setHover] = useState(false);
  const handleMouseEnter = e => {
    e.preventDefault();
    setHover(true);
  };
  const handleMouseLeave = e => {
    e.preventDefault();
    setHover(false);
  };

  return (
    <div
      className="operator-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon
        type={icon}
        style={{ fontSize: 28, color: isHover ? "#fff" : "#ccc" }}
      />
      <span className="item-text" style={{ color: isHover ? "#fff" : "#ccc" }}>
        {name}
      </span>
    </div>
  );
}

export default OperatorItem;
