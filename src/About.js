import GoToHome from "./GoToHome";

const About = () => {
  return (
    <GoToHome title="About">
      <div className="text-center">
        <p className="text-gray-500 text-lg">
          Welcome to <span className="text-purple-700 font-bold">Fruit.AI</span>.
        </p>
        <p className="text-gray-500 mt-2">
          We aim to revolutionize your health management by providing a powerful tool to track and improve your daily habits.
        </p>
      </div>
    </GoToHome>
  );
};

export default About;