/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilState } from "recoil";
import { IPieceDataState, pieceDataState } from "./recoil/chessAtoms";
import { useDrop } from "react-dnd";
import Knight from "./chessPiece/Knight";
import { chessPiece } from "./constants/chessType";

interface ISquare {
  x: number;
  y: number;
  isBlack: boolean;
}

interface IDragItem {
  id: number;
  piece: string;
}

export default function Square({ x, y, isBlack }: ISquare) {
  const [pieceData, setPieceData] = useRecoilState(pieceDataState);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: chessPiece.playable,
      drop: () => {
        setPieceData({
          ...pieceData,
          knight: { ...pieceData.knight, position: [x, y] },
        });
      },
      canDrop: (item: IDragItem) =>
        canMovePiece(item, x, y, pieceData.knight.position),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y, pieceData.knight.position]
  );
  return (
    <div
      style={{
        width: "12.5%",
        height: "12.5%",
        border: "1px solid black",
        backgroundColor: isBlack ? "black" : "white",
        display: "flex",
      }}
    >
      <div
        ref={drop}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isOver && !canDrop && <Overlay color="red" />}
        {!isOver && canDrop && <Overlay color="yellow" />}
        {isOver && canDrop && <Overlay color="green" />}
        {renderPiece(x, y, pieceData.knight.position)}
      </div>
    </div>
  );
}

interface ISetDrop {
  piece: string;
  x: number;
  y: number;
  pieceData: IPieceDataState;
  setPieceData: () => null;
}

const renderPiece = (x: number, y: number, [pieceX, pieceY]: number[]) => {
  if (x === pieceX && y === pieceY) {
    return <Knight />;
  }
};

const canMovePiece = (
  item: IDragItem,
  toX: number,
  toY: number,
  [x, y]: number[]
) => {
  if (item.piece === chessPiece.playable) {
    return canMoveKnight(toX, toY, [x, y]);
  } else {
    return false;
  }
};

const canMoveKnight = (toX: number, toY: number, [x, y]: number[]) => {
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
};

interface IOverlay {
  color: string;
}

const Overlay = ({ color }: IOverlay) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 1,
        opacity: 1,
        backgroundColor: color,
      }}
    ></div>
  );
};
