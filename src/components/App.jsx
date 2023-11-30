import React from "react"
import Chessboard from "./Chessboard"

const App = () => (
  <div>
    <div className="flex justify-center bg-black py-5">
      <h1 className="text-white text-xl font-bold">Chess Game</h1>
    </div>

    <div className="flex justify-center m-5 bg-black py-5 bg-orange-500	">
        <Chessboard /> 
    </div>
  </div>
)

export default App
