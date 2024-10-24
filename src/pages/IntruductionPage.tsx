import logo from "/logo.png";

const IntroductionPage = () => {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Welcome to Ino TV UI
      </h1>

      <p className="text-lg text-gray-700 mb-4 text-center">
        Ino TV UI is a library of components for building TV applications.
      </p>
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="Ino TV UI Logo"
          className="w-32 h-32"
        />
      </div>
      <div className="mt-6"></div>
    </div>
  );
};

export default IntroductionPage;
