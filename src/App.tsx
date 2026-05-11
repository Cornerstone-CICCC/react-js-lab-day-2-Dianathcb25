import { BrowserRouter, Routes, Route } from 'react-router';
import PageLayout from './layouts/PageLayout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import TodoList from './pages/TodoList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Login />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
