import { atom, selector } from "recoil";

export interface IPieceDataState {
  knight: {
    position: number[];
    team: string;
    isDie: boolean;
  };
  king: {
    position: number[];
    team: string;
    isDie: boolean;
  };
}

export const pieceDataState = atom<IPieceDataState>({
  key: "pieceDataState",
  default: {
    knight: {
      position: [1, 7],
      team: "red",
      isDie: false,
    },
    king: {
      position: [3, 7],
      team: "red",
      isDie: false,
    },
  },
});

export const piecePositionsSelector = selector({
  key: "piecePositionsSelector",
  get: ({ get }) => {
    const positons = get(pieceDataState);
    return [positons.knight.position, positons.king.position];
  },
});
