import React, { useState } from "react";

function TodoItem(props) {
  const [line, setLine] = useState(false);

  function handleClick() {
    line ? setLine(false) : setLine(true);
  }

  return (
    <div
      style={line ? { textDecoration: "line-through" } : null}
      onClick={handleClick}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;
