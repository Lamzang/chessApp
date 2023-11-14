import { atom } from "recoil";

export interface IPieceDataState {
  red: number[][];
  blue: number[][];
}

export const pieceDataState = atom<IPieceDataState>({
  key: "pieceDataState",
  default: {
    red: [
      [1, 7],
      [3, 7],
    ],
    blue: [[1, 0]],
  },
});
