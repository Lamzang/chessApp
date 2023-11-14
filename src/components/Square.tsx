/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilState, useRecoilValue } from "recoil";
import { pieceDataState } from "../recoil/chessAtoms";
import { useDrop } from "react-dnd";
import { chessPiece, chessTeam } from "../constants/chessType";
import { canMovePiece, isTherePiece } from "../util/checkMoves";

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
      accept: chessPiece.PIECE,
      drop: (item: IDragItem) => {
        if (item.team === chessTeam.RED) {
          let oppoData = {};
          const newPieceData = {
            ...pieceData,
            red: [
              ...pieceData.red.slice(0, item.id),
              [x, y],
              ...pieceData.red.slice(item.id + 1),
            ],
          };
          if (isTherePiece(x, y, pieceData.blue)) {
            const deadIndex = pieceData.blue.findIndex(
              (pos) => pos[0] === x && pos[1] === y
            );
            oppoData = {
              ...newPieceData,
              blue: [
                ...newPieceData.blue.slice(0, deadIndex),
                [-20, -10],
                ...newPieceData.blue.slice(deadIndex + 1),
              ],
            };
          }

          setPieceData({ ...newPieceData, ...oppoData });
        } else {
          let oppoData = {};
          const newPieceData = {
            ...pieceData,
            blue: [
              ...pieceData.blue.slice(0, item.id),
              [x, y],
              ...pieceData.blue.slice(item.id + 1),
            ],
          };
          if (isTherePiece(x, y, pieceData.red)) {
            const deadIndex = pieceData.red.findIndex(
              (pos) => pos[0] === x && pos[1] === y
            );
            oppoData = {
              ...newPieceData,
              red: [
                ...newPieceData.red.slice(0, deadIndex),
                [-20, -10],
                ...newPieceData.red.slice(deadIndex + 1),
              ],
            };
          }
          setPieceData({ ...newPieceData, ...oppoData });
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
        {renderPiece(x, y, pieceData.red[0], "red", chessPiece.ROOK, 0, "♖")}
        {renderPiece(x, y, pieceData.red[1], "red", chessPiece.KNIGHT, 1, "♘")}
        {renderPiece(x, y, pieceData.red[2], "red", chessPiece.BISHOP, 2, "♗")}
        {renderPiece(x, y, pieceData.red[3], "red", chessPiece.QUEEN, 3, "♕")}
        {renderPiece(x, y, pieceData.red[4], "red", chessPiece.KING, 4, "♔")}
        {renderPiece(x, y, pieceData.red[5], "red", chessPiece.BISHOP, 5, "♗")}
        {renderPiece(x, y, pieceData.red[6], "red", chessPiece.KNIGHT, 6, "♘")}
        {renderPiece(x, y, pieceData.red[7], "red", chessPiece.ROOK, 7, "♖")}
        {renderPiece(x, y, pieceData.red[8], "red", chessPiece.PAWN, 8, "♙")}
        {renderPiece(x, y, pieceData.red[9], "red", chessPiece.PAWN, 9, "♙")}
        {renderPiece(x, y, pieceData.red[10], "red", chessPiece.PAWN, 10, "♙")}
        {renderPiece(x, y, pieceData.red[11], "red", chessPiece.PAWN, 11, "♙")}
        {renderPiece(x, y, pieceData.red[12], "red", chessPiece.PAWN, 12, "♙")}
        {renderPiece(x, y, pieceData.red[13], "red", chessPiece.PAWN, 13, "♙")}
        {renderPiece(x, y, pieceData.red[14], "red", chessPiece.PAWN, 14, "♙")}
        {renderPiece(x, y, pieceData.red[15], "red", chessPiece.PAWN, 15, "♙")}
        {renderPiece(x, y, pieceData.blue[0], "blue", chessPiece.ROOK, 0, "♖")}
        {renderPiece(
          x,
          y,
          pieceData.blue[1],
          "blue",
          chessPiece.KNIGHT,
          1,
          "♘"
        )}
        {renderPiece(
          x,
          y,
          pieceData.blue[2],
          "blue",
          chessPiece.BISHOP,
          2,
          "♗"
        )}
        {renderPiece(x, y, pieceData.blue[3], "blue", chessPiece.QUEEN, 3, "♕")}
        {renderPiece(x, y, pieceData.blue[4], "blue", chessPiece.KING, 4, "♔")}
        {renderPiece(
          x,
          y,
          pieceData.blue[5],
          "blue",
          chessPiece.BISHOP,
          5,
          "♗"
        )}
        {renderPiece(
          x,
          y,
          pieceData.blue[6],
          "blue",
          chessPiece.KNIGHT,
          6,
          "♘"
        )}
        {renderPiece(x, y, pieceData.blue[7], "blue", chessPiece.ROOK, 7, "♖")}
        {renderPiece(x, y, pieceData.blue[8], "blue", chessPiece.PAWN, 8, "♙")}
        {renderPiece(x, y, pieceData.blue[9], "blue", chessPiece.PAWN, 9, "♙")}
        {renderPiece(
          x,
          y,
          pieceData.blue[10],
          "blue",
          chessPiece.PAWN,
          10,
          "♙"
        )}
        {renderPiece(
          x,
          y,
          pieceData.blue[11],
          "blue",
          chessPiece.PAWN,
          11,
          "♙"
        )}
        {renderPiece(
          x,
          y,
          pieceData.blue[12],
          "blue",
          chessPiece.PAWN,
          12,
          "♙"
        )}
        {renderPiece(
          x,
          y,
          pieceData.blue[13],
          "blue",
          chessPiece.PAWN,
          13,
          "♙"
        )}
        {renderPiece(
          x,
          y,
          pieceData.blue[14],
          "blue",
          chessPiece.PAWN,
          14,
          "♙"
        )}
        {renderPiece(
          x,
          y,
          pieceData.blue[15],
          "blue",
          chessPiece.PAWN,
          15,
          "♙"
        )}
      </div>
    </div>
  );
}
