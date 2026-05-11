import { useNavigate } from 'react-router';
import { useLogin } from '../context/login/useLogin';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todo } from '../types/todo.types';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../context/theme/useTheme';
import { FaDeleteLeft } from 'react-icons/fa6';

const TodoList = () => {
  const [input, setInput] = useState<string>('');
  const [todo, setTodo] = useState<Todo[]>([]);
  const { isDark } = useTheme();
  const { username, login, setUsername, setLogin } = useLogin();
  const navigate = useNavigate();

  const handleAdd = () => {
    setTodo((curr) => [
      ...curr,
      {
        id: uuidv4(),
        task: input,
      },
    ]);
    setInput('');

    toast.success('New task added!');
  };

  const handleDelete = (id: string) => {
    setTodo((curr) => curr.filter((todo) => todo.id !== id));

    toast.error('Task deleted!');
  };

  const handleLogout = () => {
    setUsername('');
    setLogin(false);
    navigate('/');
  };

  useEffect(() => {
    if (!login) {
      navigate('/');
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className={`rounded-xl p-8 font-bold ${isDark ? 'bg-[#4f4a44]' : 'bg-[#21a9ff]'}`}
      >
        <div className="flex justify-between items-center p-3">
          <h1>Welcome, {username}!</h1>
          <button
            onClick={handleLogout}
            className={`p-3 rounded-xl ${isDark ? 'bg-black text-white' : 'bg-blue-900 text-white'}`}
          >
            Log Out
          </button>
        </div>
        <p>Have a grate and productive day!</p>

        <div>
          <ul>
            {todo.map((todo) => (
              <li
                key={todo.id}
                className={`flex justify-between items-center p-3 ${isDark ? 'bg-[#7f766f]' : 'bg-[#47cfe7]'}`}
              >
                {todo.task}
                <button onClick={() => handleDelete(todo.id)}>
                  <FaDeleteLeft className=" text-3xl text-red-600" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center p-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`border rounded-sm p-2 w-75 ${isDark ? 'border-white bg-[#3c3a3b]' : 'border-black bg-[#ABE7FF]'}`}
          />
          <button
            onClick={handleAdd}
            className={`p-3 rounded-xl ${isDark ? 'bg-black text-white' : 'bg-blue-900 text-white'}`}
          >
            Add Task
          </button>
        </div>

        <Toaster />
      </div>
    </div>
  );
};

export default TodoList;
