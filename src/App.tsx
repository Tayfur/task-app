import React from 'react';
import TaskCard from './components/taskCard';
import { Container } from './components/styled';
const App: React.FC = () => {
  return (
    <Container>
      <TaskCard title={'To Do'}></TaskCard>
      <TaskCard title={'Progress'}></TaskCard>
      <TaskCard title={'Done'}></TaskCard>
    </Container>
  );
};

export default App;
