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
    ],
    blue: [[1, 0]],
  },
});
