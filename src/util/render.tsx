import BlueKnight from "../components/chessPiece/BlueKnigth";
import RedKing from "../components/chessPiece/RedKing";
import RedKnight from "../components/chessPiece/RedKnight";
import RedRook from "../components/chessPiece/RedRook";

export const renderPiece = (
  x: number,
  y: number,
  [pieceX, pieceY]: number[],
  team: string,
  id: number
) => {
  if (x === pieceX && y === pieceY) {
    if (team === "red" && id === 0) {
      return <RedRook />;
    } else if (team === "red" && id === 1) {
      return <RedKnight />;
    } else if (team === "red" && id === 4) {
      return <RedKing />;
    } else if (team === "blue" && id === 0) {
      return <BlueKnight />;
    }
  }
};

export const renderDeadPiece = (
  x: number,
  y: number,
  [pieceX, pieceY]: number[],
  team: string,
  id: number
) => {
  const deadArray = [];
  if (x === pieceX && y === pieceY) {
    if (team === "red" && id === 0) {
      deadArray.push(<RedRook />);
    } else if (team === "red" && id === 1) {
      deadArray.push(<RedKnight />);
    } else if (team === "red" && id === 4) {
      deadArray.push(<RedKing />);
    } else if (team === "blue" && id === 0) {
      deadArray.push(<BlueKnight />);
    }
  }
  return deadArray;
};
