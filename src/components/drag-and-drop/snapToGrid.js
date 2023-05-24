// Changing the fractions changes how much the box moves relative to pointer movement
export const snapToGrid = (x, y) => {
  console.log(`x ${x} y ${y}`);

  const columnWidth = 350;
  const columnNum = Math.floor(x / columnWidth);
  const snappedX = columnNum * columnWidth;
  const snappedY = Math.round(y / 24) * 24;
  return [snappedX, snappedY];
};
