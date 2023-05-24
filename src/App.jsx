// import Header from "./components/Header";
// import { VerticalList } from "./components/drag-and-drop/VerticalList";
// import React from "react";
// import { Columns } from "react-bulma-components";

// export default function App() {
//   return (
//     <div>
//       <Columns class='ml-6 mt-3'>
//         <Columns.Column>
//           <Header />
//           <Columns>
//             <Columns.Column size={12}>
//               <VerticalList />
//             </Columns.Column>
//           </Columns>
//         </Columns.Column>
//       </Columns>
//     </div>
//   );
// }
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import DnDExample from './components/drag-and-drop/DndExample';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DnDExample />
    </DndProvider>
  );
}

export default App;
