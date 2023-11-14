import { DndProvider } from "react-dnd";
import Square from "./Square";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Board() {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    squares.push(<Square key={i} x={x} y={y} isBlack={(x + y) % 2 === 1} />);
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100vw",
          height: "100vw",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}
