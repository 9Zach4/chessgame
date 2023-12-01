import React from "react"
import { chessGrid } from "./constant"

const ChessBoard = () => (
  <div className="grid grid-cols-16">
    {chessGrid.map((row, rowIndex) => (
      <div key={rowIndex} className="flex">
        {row.map((col, colIndex) => (
          <div
            key={col}
            className={`h-12 w-12 ${(rowIndex+colIndex) % 2 === 0 ? "bg-white" : "bg-black"}`}
          ></div>
        ))}
        
      </div>
    ))}
  </div>
)

export default ChessBoard
