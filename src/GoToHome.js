import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const GoToHome = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-300 via-blue-200 to-teal-200">
      <div className="absolute top-4 left-4">
        <button onClick={() => navigate('/home')}>
          <FaArrowLeft className="text-2xl text-gray-700" />
        </button>
      </div>

      <div className="w-11/12 max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-center text-2xl font-semibold text-purple-700 mb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default GoToHome;