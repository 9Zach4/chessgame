import React from "react"
import Chessboard from "./chessboard"

const App = () => (
  <div className="h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
    <div className="flex justify-center py-5">
      <h1 className="text-white text-3xl font-bold">CHESSGAME</h1>
    </div>
    <div className="flex justify-center p-7">
        <Chessboard /> 
    </div>
  </div>
)

export default App
