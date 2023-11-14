import { useRecoilValue } from "recoil";
import { renderPiece } from "../util/render";
import { pieceDataState } from "../recoil/chessAtoms";

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
      {renderPiece(-20, -10, pieceData.red[0], "red", 0, 0)}
      {renderPiece(-20, -10, pieceData.red[1], "red", 1, 1)}
      {renderPiece(-20, -10, pieceData.red[2], "red", 2, 2)}
      {renderPiece(-20, -10, pieceData.red[3], "red", 3, 3)}
      {renderPiece(-20, -10, pieceData.red[4], "red", 4, 4)}
      {renderPiece(-20, -10, pieceData.red[5], "red", 2, 5)}
      {renderPiece(-20, -10, pieceData.red[6], "red", 1, 6)}
      {renderPiece(-20, -10, pieceData.red[7], "red", 0, 7)}
      {renderPiece(-20, -10, pieceData.red[8], "red", 8, 8)}
      {renderPiece(-20, -10, pieceData.red[9], "red", 8, 9)}
      {renderPiece(-20, -10, pieceData.red[10], "red", 8, 10)}
      {renderPiece(-20, -10, pieceData.red[11], "red", 8, 11)}
      {renderPiece(-20, -10, pieceData.red[12], "red", 8, 12)}
      {renderPiece(-20, -10, pieceData.red[13], "red", 8, 13)}
      {renderPiece(-20, -10, pieceData.red[14], "red", 8, 14)}
      {renderPiece(-20, -10, pieceData.red[15], "red", 8, 15)}
      {renderPiece(-20, -10, pieceData.blue[0], "blue", 0, 0)}
    </div>
  );
}
