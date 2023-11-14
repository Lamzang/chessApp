/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDrag } from "react-dnd";
import { chessPiece } from "../constants/chessType";

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: chessPiece.playable,
    item: { id: 1, piece: chessPiece.playable },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        fontSize: "40px",
        color: "red",
        opacity: isDragging ? 0.5 : 1,
        fontWeight: "bold",
        cursor: "move",
        zIndex: 2,
      }}
    >
      ♘
    </div>
  );
}
