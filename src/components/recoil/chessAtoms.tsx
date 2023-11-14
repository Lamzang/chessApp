import { atom } from "recoil";

export interface IPieceDataState {
  knight: {
    position: number[];
    team: string;
    isDie: boolean;
  };
}

export const pieceDataState = atom<IPieceDataState>({
  key: "pieceDataState",
  default: {
    knight: {
      position: [0, 0],
      team: "red",
      isDie: false,
    },
  },
});
