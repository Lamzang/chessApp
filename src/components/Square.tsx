/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilState, useRecoilValue } from "recoil";
import { pieceDataState, piecePositionsSelector } from "../recoil/chessAtoms";
import { useDrop } from "react-dnd";
import { chessPiece } from "../constants/chessType";
import { canMovePiece } from "../util/checkMoves";

import { Overlay } from "./Overlay";
import { renderPiece } from "../util/render";

interface ISquare {
  x: number;
  y: number;
  isBlack: boolean;
}

export interface IDragItem {
  id: number;
  piece: string;
}

export default function Square({ x, y, isBlack }: ISquare) {
  const [pieceData, setPieceData] = useRecoilState(pieceDataState);
  const piecePositions = useRecoilValue(piecePositionsSelector);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: [chessPiece.KNIGHT, chessPiece.KING],
      drop: (item: IDragItem) => {
        if (item.piece === chessPiece.KNIGHT) {
          setPieceData({
            ...pieceData,
            knight: { ...pieceData.knight, position: [x, y] },
          });
        } else if (item.piece === chessPiece.KING) {
          setPieceData({
            ...pieceData,
            king: { ...pieceData.king, position: [x, y] },
          });
        }
      },
      canDrop: (item: IDragItem) =>
        canMovePiece(item, x, y, pieceData, piecePositions),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y, pieceData.knight.position, pieceData.king.position]
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
        {renderPiece(x, y, pieceData.knight.position, chessPiece.KNIGHT)}
        {renderPiece(x, y, pieceData.king.position, chessPiece.KING)}
      </div>
    </div>
  );
}
