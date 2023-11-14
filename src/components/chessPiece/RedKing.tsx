import { useDrag } from "react-dnd";
import { chessPiece } from "../../constants/chessType";

export default function RedKing() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: chessPiece.KING,
    item: { id: 2, piece: chessPiece.KING },
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
      ♔
    </div>
  );
}
