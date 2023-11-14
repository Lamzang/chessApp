import RedKing from "../components/chessPiece/RedKing";
import RedKnight from "../components/chessPiece/RedKnight";
import { chessPiece } from "../constants/chessType";

export const renderPiece = (
  x: number,
  y: number,
  [pieceX, pieceY]: number[],
  piece: string
) => {
  if (x === pieceX && y === pieceY) {
    if (piece === chessPiece.KNIGHT) {
      return <RedKnight />;
    }

    if (piece === chessPiece.KING) {
      return <RedKing />;
    }
  }
};
