/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDrag } from "react-dnd";
import { chessPiece } from "../../constants/chessType";

export default function RedKnight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: chessPiece.KNIGHT,
    item: { id: 1, piece: chessPiece.KNIGHT },
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
