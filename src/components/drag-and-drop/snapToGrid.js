// Changing the fractions changes how much the box moves relative to pointer movement
export const snapToGrid = (x, y) => {
  const snappedX = Math.round(x / 1);
  const snappedY = Math.round(y / 24) * 24;
  return [snappedX, snappedY];
};
