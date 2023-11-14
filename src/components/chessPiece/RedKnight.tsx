/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDrag } from "react-dnd";
import { chessPiece, chessTeam } from "../../constants/chessType";

export default function RedKnight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: chessPiece.PIECE,
    item: { id: 1, piece: chessPiece.KNIGHT, team: chessTeam.RED },
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
