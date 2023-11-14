interface IOverlay {
  color: string;
}

export const Overlay = ({ color }: IOverlay) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 1,
        opacity: 1,
        backgroundColor: color,
      }}
    ></div>
  );
};
