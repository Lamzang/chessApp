import { IDragItem } from "../components/Square";
import { chessPiece, chessTeam } from "../constants/chessType";
import { IPieceDataState } from "../recoil/chessAtoms";

export const canMovePiece = (
  item: IDragItem,
  toX: number,
  toY: number,
  pieceData: IPieceDataState
) => {
  if (item.team === chessTeam.RED) {
    if (isTherePiece(toX, toY, pieceData.red)) {
      return false;
    }
    if (item.piece === chessPiece.PAWN) {
      console.log(item.id);
      return canMoveRedPawn(toX, toY, pieceData.red[item.id]);
    }
    return checkPiece(
      item.piece,
      toX,
      toY,
      pieceData.red[item.id],
      pieceData.red,
      pieceData.blue
    );
  } else {
    if (isTherePiece(toX, toY, pieceData.blue)) {
      return false;
    }
    if (item.piece === chessPiece.PAWN) {
      return canMoveBluePawn(toX, toY, pieceData.blue[item.id]);
    }
    return checkPiece(
      item.piece,
      toX,
      toY,
      pieceData.blue[item.id],
      pieceData.blue,
      pieceData.red
    );
  }
};

export const isTherePiece = (
  toX: number,
  toY: number,
  positions: number[][]
) => {
  return positions.some(([px, py]) => px === toX && py === toY);
};

const checkPiece = (
  piece: string,
  toX: number,
  toY: number,
  position: number[],
  data: number[][],
  oppodata: number[][]
) => {
  if (piece === chessPiece.KNIGHT) {
    return canMoveKnight(toX, toY, position);
  } else if (piece === chessPiece.KING) {
    return canMoveKing(toX, toY, position);
  } else if (piece === chessPiece.ROOK) {
    return (
      canMoveRook(toX, toY, position) &&
      canOrthogonal(toX, toY, data, position) &&
      canOrthogonal(toX, toY, oppodata, position)
    );
  } else if (piece === chessPiece.BISHOP) {
    return (
      canMoveBishop(toX, toY, position) &&
      canDigonal(toX, toY, data, position) &&
      canDigonal(toX, toY, oppodata, position)
    );
  } else if (piece === chessPiece.QUEEN) {
    return (
      canMoveQueen(toX, toY, position) &&
      canOrthogonal(toX, toY, data, position) &&
      canOrthogonal(toX, toY, oppodata, position) &&
      canDigonal(toX, toY, data, position) &&
      canDigonal(toX, toY, oppodata, position)
    );
  } else {
    return false;
  }
};
const canOrthogonal = (
  toX: number,
  toY: number,
  positions: number[][],
  [x, y]: number[]
) => {
  if (x === toX) {
    const minY = Math.min(y, toY);
    const maxY = Math.max(y, toY);
    for (let i = minY + 1; i < maxY; i++) {
      if (isTherePiece(x, i, positions)) {
        return false;
      }
    }
  } else if (y === toY) {
    const minX = Math.min(x, toX);
    const maxX = Math.max(x, toX);
    for (let i = minX + 1; i < maxX; i++) {
      if (isTherePiece(i, y, positions)) {
        return false;
      }
    }
  } else {
    return true;
  }
  return true;
};

const canDigonal = (
  toX: number,
  toY: number,
  positions: number[][],
  [x, y]: number[]
) => {
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  if (dx === dy) {
    const xDirection = toX > x ? 1 : -1;
    const yDirection = toY > y ? 1 : -1;
    x += xDirection;
    y += yDirection;
    for (let i = 0; i < dx - 1; i++) {
      if (isTherePiece(x, y, positions)) {
        return false;
      }
      x += xDirection;
      y += yDirection;
    }
  } else {
    return true;
  }
  return true;
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

const canMoveRook = (toX: number, toY: number, [x, y]: number[]) => {
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  if (dx === 0 && dy === 0) {
    return false;
  }
  return dx === 0 || dy === 0;
};

const canMoveBishop = (toX: number, toY: number, [x, y]: number[]) => {
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  if (dx === 0 && dy === 0) {
    return false;
  }
  return dx === dy;
};

const canMoveQueen = (toX: number, toY: number, [x, y]: number[]) => {
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  if (dx === 0 && dy === 0) {
    return false;
  }
  return dx === dy || dx === 0 || dy === 0;
};

const canMoveRedPawn = (toX: number, toY: number, [x, y]: number[]) => {
  return y - toY === 1 && toX - x === 0;
};

const canMoveBluePawn = (toX: number, toY: number, [x, y]: number[]) => {
  return y - toY === -1 && toX - x === 0;
};
