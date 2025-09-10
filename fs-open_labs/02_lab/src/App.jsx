//->> PROJECT: Random Compliment Generator
// Purpose: Practice multiple components + random array logic

const App = () => {
  const compliments = [
    "You're coding like a pro!",
    "Keep pushing, you're unstoppable 💪",
    "Debugging = Growing, you're doing great!",
    "Your future self is proud of you 🚀",
    "Smart + Consistent = YOU 🔥"
  ];

  // Pick one compliment randomly
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const selectedCompliment = compliments[randomIndex];

  // Compliment component
  const Compliment = ({ text }) => (
    <p className="text-xl font-semibold text-green-400">
      {text}
    </p>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Random Compliment Generator</h1>
        <Compliment text={selectedCompliment} />
        <p className="mt-4 text-sm text-gray-400">Refresh to get a new compliment ✨</p>
      </div>
    </div>
  );
};

export default App;
