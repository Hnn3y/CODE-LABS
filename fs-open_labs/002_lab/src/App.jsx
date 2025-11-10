// fs-labs/01_lab/02_curriculum-visualizer/App.jsx

import { useMemo } from "react"

// Small reusable card
const PartCard = ({ name, exercises }) => {
  // Badge logic: difficulty by number of exercises
  const difficulty =
    exercises < 10 ? "Easy" : exercises < 15 ? "Medium" : "Hard"

  const badgeColor =
    difficulty === "Easy"
      ? "bg-green-500"
      : difficulty === "Medium"
      ? "bg-yellow-500"
      : "bg-red-500"

  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-md flex flex-col justify-between">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-300 mb-4">{exercises} exercises</p>
      <span
        className={`self-start text-xs font-semibold px-2 py-1 rounded-full text-white ${badgeColor}`}
      >
        {difficulty}
      </span>
    </div>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ]

  // Compute total only once
  const total = useMemo(
    () => parts.reduce((sum, p) => sum + p.exercises, 0),
    [parts]
  )

  // Simple progress bar logic (relative to 50 exercises for demo)
  const maxExercises = 50
  const progressPercent = Math.min((total / maxExercises) * 100, 100)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{course}</h1>

      {/* Grid of PartCards */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {parts.map((part, idx) => (
          <PartCard key={idx} name={part.name} exercises={part.exercises} />
        ))}
      </div>

      {/* Total + Progress Bar */}
      <div className="mt-8 bg-gray-800 p-4 rounded-xl shadow-md">
        <p className="mb-2 text-lg font-semibold">
          Total exercises: {total}
        </p>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          Progress toward {maxExercises} exercises
        </p>
      </div>
    </div>
  )
}

export default App
