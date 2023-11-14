import { useDrag } from "react-dnd";
import { chessPiece, chessTeam } from "../../constants/chessType";

interface IPawn {
  id: number;
}

export default function RedPawn({ id }: IPawn) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: chessPiece.PIECE,
    item: { id: id, piece: chessPiece.PAWN, team: chessTeam.RED },
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
      ♙
    </div>
  );
}
