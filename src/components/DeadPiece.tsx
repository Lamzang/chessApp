import { useRecoilValue } from "recoil";
import { renderPiece } from "../util/render";
import { pieceDataState } from "../recoil/chessAtoms";

export default function DeadPiece() {
  const pieceData = useRecoilValue(pieceDataState);
  return (
    <div>
      {renderPiece(-20, -10, pieceData.red[0], "red", 0)}
      {renderPiece(-20, -10, pieceData.red[1], "red", 1)}
      {renderPiece(-20, -10, pieceData.blue[0], "blue", 0)}
    </div>
  );
}
