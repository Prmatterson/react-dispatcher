import { React } from "react";
import { TechGrid } from "./TechGrid";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TimeIntervals from "./TimeIntervals";
import { Columns } from "react-bulma-components";
import Techs from '../Techs'

export const VerticalList = () => {

  const styles = {
    width: "100%",
    height: 2100,
    border: "1px solid black",
    position: "relative",
    marginTop: "30px",
    marginBottom: "30px",
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Techs />
      <Columns style={styles}>
        <Columns.Column size={1}>
          <TimeIntervals />
        </Columns.Column>
        <Columns.Column size={11}>
          <TechGrid snapToGrid={true} />
        </Columns.Column>
      </Columns>
      <CustomDragLayer snapToGrid={true} />
    </DndProvider>
  );
};
