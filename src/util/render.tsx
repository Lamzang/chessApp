import ChessPiece from "../components/ChessPiece";

export const renderPiece = (
  x: number,
  y: number,
  [pieceX, pieceY]: number[],
  team: string,
  category: string,
  id: number,
  image: string
) => {
  if (x === pieceX && y === pieceY) {
    return <ChessPiece id={id} team={team} category={category} image={image} />;
  }
};
