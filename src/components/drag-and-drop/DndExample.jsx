import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'item';

const DragItem = ({ id, name, handleMove }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleMove(item.id, dropResult.name, dropResult.y);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </div>
  );
};

const DropColumn = ({ name, children, handleDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemType,
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      const dropY = clientOffset ? clientOffset.y : 0;
      return { name, y: dropY };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{ background: isOver ? 'lightgrey' : 'white', height: '1000px' }}>
      <h2>{name}</h2>
      {children}
    </div>
  );
};

const DnDExample = () => {
  const [columns, setColumns] = React.useState({
    'column-1': [
      { id: 'item-1', y: 0 },
      { id: 'item-2', y: 0 },
    ],
    'column-2': [],
    'column-3': [],
  });

  const moveItem = (itemId, targetColumn, dropY) => {
    const startColumn = Object.keys(columns).find((key) =>
      columns[key].some((item) => item.id === itemId)
    );

    if (startColumn) {
      const item = columns[startColumn].find((item) => item.id === itemId);
      const newStartColumnItems = columns[startColumn].filter(
        (i) => i.id !== itemId
      );

      const newTargetColumnItems = [
        ...columns[targetColumn],
        { ...item, y: dropY },
      ];

      setColumns({
        ...columns,
        [startColumn]: newStartColumnItems,
        [targetColumn]: newTargetColumnItems.sort((a, b) => a.y - b.y),
      });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {Object.keys(columns).map((columnName) => (
        <DropColumn key={columnName} name={columnName} handleDrop={moveItem}>
          {columns[columnName].map(({ id, y }) => (
            <div style={{ position: 'absolute', top: y }}>
              <DragItem key={id} id={id} name={id} handleMove={moveItem} />
            </div>
          ))}
        </DropColumn>
      ))}
    </div>
  );
};

export default DnDExample;
