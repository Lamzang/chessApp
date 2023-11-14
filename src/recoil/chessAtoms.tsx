import { atom } from "recoil";

export interface IPieceDataState {
  red: number[][];
  blue: number[][];
}

export const pieceDataState = atom<IPieceDataState>({
  key: "pieceDataState",
  default: {
    red: [
      [0, 7],
      [1, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [6, 7],
      [7, 7],
      [0, 6],
      [1, 6],
      [2, 6],
      [3, 6],
      [4, 6],
      [5, 6],
      [6, 6],
      [7, 6],
    ],
    blue: [[1, 0]],
  },
});
