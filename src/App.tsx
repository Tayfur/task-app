import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import {
  TaskContainer,
  TaskTitle,
  TaskTitleText,
  Card,
  CardTitleText,
  CardTask,
} from './components/styled';
import TaskCard from './components/taskCard';
const itemsFromBackend = [
  { id: '1', content: 'First task' },
  { id: '2', content: 'Second task' },
  { id: '3', content: 'Third task' },
  { id: '4', content: 'Fourth task' },
  { id: '5', content: 'Fifth task' },
];

const columnsFromBackend = {
  ['1']: {
    name: 'To do',
    items: itemsFromBackend,
  },
  ['2']: {
    name: 'In Progress',
    items: [],
  },
  ['3']: {
    name: 'Done',
    items: [],
  },
};

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function App() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div
      style={{
        margin: 'auto',
        display: 'flex',
        width: '1200px',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <TaskContainer key={columnId}>
              <TaskTitle>
                <TaskTitleText>{column.name}</TaskTitleText>
              </TaskTitle>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <TaskContainer
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {column.items.map((item: any, index: any) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <Card
                                  color={
                                    snapshot.isDropAnimating
                                      ? 'yellow'
                                      : 'white'
                                  }
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {item.content}
                                </Card>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </TaskContainer>
                  );
                }}
              </Droppable>
            </TaskContainer>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
