import { Outlet } from 'react-router';
import { useTheme } from '../context/theme/useTheme';
import { MdLightMode } from 'react-icons/md';
import { MdNightlight } from 'react-icons/md';
import { Toaster, toast } from 'react-hot-toast';

const PageLayout = () => {
  const { isDark, setIsDark } = useTheme();

  const handleisDark = () => {
    setIsDark((curr) => !curr);
    toast(isDark ? '😎 Morning' : '😴 Night night', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };
  return (
    <div
      className={`relative ${isDark ? 'bg-[#242424] text-white' : 'bg-[#c5ebfe] text-black'}`}
    >
      <button
        onClick={handleisDark}
        className="absolute top-4 right-8 text-4xl"
      >
        {' '}
        {isDark ? <MdLightMode /> : <MdNightlight />}
      </button>
      <main>
        <Outlet />
      </main>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default PageLayout;
