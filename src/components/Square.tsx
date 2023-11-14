/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilState, useRecoilValue } from "recoil";
import { pieceDataState } from "../recoil/chessAtoms";
import { useDrop } from "react-dnd";
import { chessPiece, chessTeam } from "../constants/chessType";
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
  team: string;
}

export default function Square({ x, y, isBlack }: ISquare) {
  const [pieceData, setPieceData] = useRecoilState(pieceDataState);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: [chessPiece.KNIGHT, chessPiece.KING],
      drop: (item: IDragItem) => {
        if (item.team === chessTeam.RED) {
          const newPieceData = {
            ...pieceData,
            red: [
              ...pieceData.red.slice(0, item.id),
              [x, y],
              ...pieceData.red.slice(item.id + 1),
            ],
          };
          setPieceData(newPieceData);
        } else {
          const newPieceData = {
            ...pieceData,
            blue: [
              ...pieceData.blue.slice(0, item.id),
              [x, y],
              ...pieceData.blue.slice(item.id + 1),
            ],
          };
          setPieceData(newPieceData);
        }
      },
      canDrop: (item: IDragItem) => canMovePiece(item, x, y, pieceData),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y, pieceData]
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
        {renderPiece(x, y, pieceData.red[0], "red", 0)}
        {renderPiece(x, y, pieceData.red[1], "red", 1)}
        {renderPiece(x, y, pieceData.blue[0], "blue", 0)}
      </div>
    </div>
  );
}
