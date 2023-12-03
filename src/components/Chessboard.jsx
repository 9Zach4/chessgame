import React from "react"
import { chessGrid, chessPiece } from "./data"

const ChessBoard = () => (
  <div className="border p-5 border-dashed border-white border-4">
    <div className="border border-solid border-black border-1">
      <div className="grid grid-cols-8">
        {chessGrid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((col, colIndex) => (
              <div
                key={col}
                className={`h-12 w-12 ${
                  (rowIndex + colIndex) % 2 === 0 ? "bg-pink-500" : "bg-violet-800"
                }`}>
                
             {rowIndex <= 0 && colIndex <= 0 &&
              chessPiece
                 .filter((piece) => piece.id <=10  && piece.color === "black")
                  .map((piece, pieceIndex) => (
              
            <img key={pieceIndex} src={piece.img} alt={piece.type} className="h-12 w-12" />
            ))
            }          

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default ChessBoard
