import { useDrag } from "react-dnd";
import { chessPiece, chessTeam } from "../../constants/chessType";

export default function RedQueen() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: chessPiece.PIECE,
    item: { id: 3, piece: chessPiece.QUEEN, team: chessTeam.RED },
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      ♕
    </div>
  );
}
