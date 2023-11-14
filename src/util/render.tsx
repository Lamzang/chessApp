import BlueKnight from "../components/chessPiece/BlueKnigth";
import RedKing from "../components/chessPiece/RedKing";
import RedKnight from "../components/chessPiece/RedKnight";

export const renderPiece = (
  x: number,
  y: number,
  [pieceX, pieceY]: number[],
  team: string,
  id: number
) => {
  if (x === pieceX && y === pieceY) {
    if (team === "red" && id === 0) {
      return <RedKnight />;
    } else if (team === "red" && id === 1) {
      return <RedKing />;
    } else if (team === "blue" && id === 0) {
      return <BlueKnight />;
    }
  }
};
