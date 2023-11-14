import BlueKnight from "../components/chessPiece/BlueKnigth";
import RedBishop from "../components/chessPiece/RedBishop";
import RedKing from "../components/chessPiece/RedKing";
import RedKnight from "../components/chessPiece/RedKnight";
import RedPawn from "../components/chessPiece/RedPawn";
import RedQueen from "../components/chessPiece/RedQueen";
import RedRook from "../components/chessPiece/RedRook";

export const renderPiece = (
  x: number,
  y: number,
  [pieceX, pieceY]: number[],
  team: string,
  category: number,
  id: number
) => {
  if (x === pieceX && y === pieceY) {
    if (team === "red" && category === 0) {
      return <RedRook />;
    } else if (team === "red" && category === 1) {
      return <RedKnight />;
    } else if (team === "red" && category === 2) {
      return <RedBishop />;
    } else if (team === "red" && category === 3) {
      return <RedQueen />;
    } else if (team === "red" && category === 4) {
      return <RedKing />;
    } else if (team === "red" && category === 8) {
      return <RedPawn id={id} />;
    } else if (team === "blue" && category === 0) {
      return <BlueKnight />;
    }
  }
};
