import { useRecoilValue } from "recoil";
import Board from "./components/Board";
import { pieceDataState } from "./recoil/chessAtoms";

function App() {
  const check = useRecoilValue(pieceDataState);
  return (
    <div>
      <Board />
      <button
        style={{ position: "absolute", bottom: 0, left: 0 }}
        onClick={() => {
          console.log(check);
        }}
      >
        check
      </button>
    </div>
  );
}

export default App;
