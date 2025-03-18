import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-700 mb-4">
          This is a simple test of Tailwind CSS.
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="input">
            Input Field
          </label>
          <input
            id="input"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type something..."
          />
        </div>

        <div className="mb-4">
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => setCount(count + 1)}
          >
            Click Me
          </button>
        </div>

        <div className="mb-4 text-center">
          <span className="text-xl font-semibold">Count: {count}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-500 text-white p-4 rounded-lg">Red Box</div>
          <div className="bg-green-500 text-white p-4 rounded-lg">
            Green Box
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-lg">Blue Box</div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg">
            Yellow Box
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
