import { IDragItem } from "../components/Square";
import { chessPiece } from "../constants/chessType";
import { IPieceDataState } from "../recoil/chessAtoms";

export const canMovePiece = (
  item: IDragItem,
  toX: number,
  toY: number,
  pieceData: IPieceDataState,
  positions: number[][]
) => {
  if (positions.some(([px, py]) => px === toX && py === toY)) {
    return false;
  }
  if (item.piece === chessPiece.KNIGHT) {
    return canMoveKnight(toX, toY, pieceData.knight.position);
  } else if (item.piece === chessPiece.KING) {
    return canMoveKing(toX, toY, pieceData.king.position);
  } else {
    return false;
  }
};

export const isTherePiece = (
  toX: number,
  toY: number,
  positions: number[][]
) => {
  return positions.some(([px, py]) => px === toX && py === toY);
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
