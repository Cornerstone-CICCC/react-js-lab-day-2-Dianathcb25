import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLogin } from '../context/login/useLogin';
import { useTheme } from '../context/theme/useTheme';

const Login = () => {
  const [input, setInput] = useState<string>('');
  const { setUsername, setLogin } = useLogin();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (input.trim() === '') return;
    setUsername(input);
    setLogin(true);
    navigate('/todos');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className={`rounded-xl p-8 font-bold ${isDark ? 'bg-[#4f4a44]' : 'bg-[#21a9ff]'}`}
      >
        <h1>Hi, what's your name?</h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`border rounded-sm p-2 w-75 ${isDark ? 'border-white bg-[#3c3a3b]' : 'border-black bg-[#ABE7FF]'}`}
          />
          <button
            onClick={handleLogin}
            className={`p-3 rounded-xl ${isDark ? 'bg-black text-white' : 'bg-blue-900 text-white'}`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
