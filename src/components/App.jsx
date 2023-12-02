import React from "react"
import Chessboard from "./chessboard"


const App = () => (
  <div className="h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700">
    <header className="flex justify-center py-5">
      <h1 className="text-white text-3xl font-bold">CHESSGAME</h1>
    </header>
    <div className="flex justify-center p-7">
      <Chessboard />
    </div>
  </div>
)

export default App
