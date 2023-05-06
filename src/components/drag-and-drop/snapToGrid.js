export const snapToGrid = (x, y) => {
  const snappedX = Math.round(x / 1);
  const snappedY = Math.round(y / 24) * 24;
  return [snappedX, snappedY];
};
