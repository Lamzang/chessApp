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
      {renderPiece(-20, -10, pieceData.red[0], "red", 0)}
      {renderPiece(-20, -10, pieceData.red[1], "red", 1)}
      {renderPiece(-20, -10, pieceData.red[4], "red", 4)}
      {renderPiece(-20, -10, pieceData.blue[0], "blue", 0)}
    </div>
  );
}
