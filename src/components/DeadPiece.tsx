import { useRecoilValue } from "recoil";
import { renderPiece } from "../util/render";
import { pieceDataState } from "../recoil/chessAtoms";
import { chessPiece } from "../constants/chessType";

export default function DeadPiece() {
  const pieceData = useRecoilValue(pieceDataState);
  return (
    <div
      style={{
        width: "100vw",
        height: "20vh",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {renderPiece(-20, -10, pieceData.red[0], "red", chessPiece.ROOK, 0, "♖")}
      {renderPiece(
        -20,
        -10,
        pieceData.red[1],
        "red",
        chessPiece.KNIGHT,
        1,
        "♘"
      )}
      {renderPiece(
        -20,
        -10,
        pieceData.red[2],
        "red",
        chessPiece.BISHOP,
        2,
        "♗"
      )}
      {renderPiece(-20, -10, pieceData.red[3], "red", chessPiece.QUEEN, 3, "♕")}
      {renderPiece(-20, -10, pieceData.red[4], "red", chessPiece.KING, 4, "♔")}
      {renderPiece(
        -20,
        -10,
        pieceData.red[5],
        "red",
        chessPiece.BISHOP,
        5,
        "♗"
      )}
      {renderPiece(
        -20,
        -10,
        pieceData.red[6],
        "red",
        chessPiece.KNIGHT,
        6,
        "♘"
      )}
      {renderPiece(-20, -10, pieceData.red[7], "red", chessPiece.ROOK, 7, "♖")}
      {renderPiece(-20, -10, pieceData.red[8], "red", chessPiece.PAWN, 8, "♙")}
      {renderPiece(-20, -10, pieceData.red[9], "red", chessPiece.PAWN, 9, "♙")}
      {renderPiece(
        -20,
        -10,
        pieceData.red[10],
        "red",
        chessPiece.PAWN,
        10,
        "♙"
      )}
      {renderPiece(
        -20,
        -10,
        pieceData.red[11],
        "red",
        chessPiece.PAWN,
        11,
        "♙"
      )}
      {renderPiece(
        -20,
        -10,
        pieceData.red[12],
        "red",
        chessPiece.PAWN,
        12,
        "♙"
      )}
      {renderPiece(
        -20,
        -10,
        pieceData.red[13],
        "red",
        chessPiece.PAWN,
        13,
        "♙"
      )}
      {renderPiece(
        -20,
        -10,
        pieceData.red[14],
        "red",
        chessPiece.PAWN,
        14,
        "♙"
      )}
      {renderPiece(
        -20,
        -10,
        pieceData.red[15],
        "red",
        chessPiece.PAWN,
        15,
        "♙"
      )}
      {renderPiece(
        -20,
        -10,
        pieceData.blue[0],
        "blue",
        chessPiece.KNIGHT,
        0,
        "♘"
      )}
    </div>
  );
}
