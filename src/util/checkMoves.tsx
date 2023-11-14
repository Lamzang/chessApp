import { IDragItem } from "../components/Square";
import { chessPiece, chessTeam } from "../constants/chessType";
import { IPieceDataState } from "../recoil/chessAtoms";

export const canMovePiece = (
  item: IDragItem,
  toX: number,
  toY: number,
  pieceData: IPieceDataState
) => {
  console.log(pieceData.red);
  if (item.team === chessTeam.RED) {
    if (isTherePiece(toX, toY, pieceData.red)) {
      return false;
    }
    return checkPiece(item.piece, toX, toY, pieceData.red[item.id]);
  } else {
    if (isTherePiece(toX, toY, pieceData.blue)) {
      return false;
    }
    return checkPiece(item.piece, toX, toY, pieceData.blue[item.id]);
  }
};

const isTherePiece = (toX: number, toY: number, positions: number[][]) => {
  return positions.some(([px, py]) => px === toX && py === toY);
};

const checkPiece = (
  piece: string,
  toX: number,
  toY: number,
  position: number[]
) => {
  if (piece === chessPiece.KNIGHT) {
    return canMoveKnight(toX, toY, position);
  } else if (piece === chessPiece.KING) {
    return canMoveKing(toX, toY, position);
  } else {
    return false;
  }
};

const canMoveKnight = (toX: number, toY: number, [x, y]: number[]) => {
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
};

const canMoveKing = (toX: number, toY: number, [x, y]: number[]) => {
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  if (dx === 0 && dy === 0) {
    return false;
  }
  return (dx === 1 || dx === 0) && (dy === 1 || dy === 0);
};
