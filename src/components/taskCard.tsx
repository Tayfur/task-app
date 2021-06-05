import React, { useState } from 'react';
import {
  TaskContainer,
  TaskTitle,
  TaskTitleText,
  Card,
  CardTitleText,
  CardTask,
} from './styled';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
interface TaskCardProps {
  title: string;
}
const Todo = [
  {
    id: 'gary',
    name: 'create react app',
  },
  {
    id: 'cato',
    name: 'install npm',
  },
  {
    id: 'kvn',
    name: 'KVN',
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
  },
];

const TaskCard: React.FC<TaskCardProps> = ({ title }) => {
  const [characters, updateCharacters] = useState(Todo);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <>
      <TaskContainer>
        <TaskTitle>
          <TaskTitleText>{title}</TaskTitleText>
        </TaskTitle>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CardTask>
                            <CardTitleText>{name}</CardTitleText>
                          </CardTask>
                        </Card>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </TaskContainer>
    </>
  );
};

export default TaskCard;
