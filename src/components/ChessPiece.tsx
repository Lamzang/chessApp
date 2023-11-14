import { useDrag } from "react-dnd";
import { chessPiece } from "../constants/chessType";

interface IPiece {
  id: number;
  team: string;
  category: string;
  image: string;
}

export default function ChessPiece({ id, team, category, image }: IPiece) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: chessPiece.PIECE,
    item: { id: id, piece: category, team: team },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      style={{
        fontSize: "40px",
        color: `${team}`,
        opacity: isDragging ? 0.5 : 1,
        fontWeight: "bold",
        cursor: "move",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {image}
    </div>
  );
}
