import { useDrag } from "react-dnd";
import { chessPiece, chessTeam } from "../../constants/chessType";

export default function BlueKnight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: chessPiece.KNIGHT,
    item: { id: 0, piece: chessPiece.KNIGHT, team: chessTeam.BLUE },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        fontSize: "40px",
        color: "blue",
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
