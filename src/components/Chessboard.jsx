const chessBoard = () => {
  const rows = Array(8).fill().map((x, i) => 8 - i)
  const cols = Array(8).fill().map((x, i) => i)
  // Const board = []

  return (
    <div className="grid grid-cols-8">
      <div className="bg-white"></div>
      {rows.map((row) => (
        cols.map((col) => (
          <div key={row + col} className={`p-4 ${row + col % 2 === 0 ? "bg-white" : "bg-white"}` >
            {row}
            {col}
          </div>
          
        ))
      ))}
    </div>
  )
}
  
       // For (let i = 0; i < rows.lenght; i += 1) {
      
  //   const row = rows[i]
  //   for (let j = 0; j < cols.lenght; j += 1) {
  //     const col = cols[j]
  //     board.push({ row, col })
  //   }
  // }
  
  // return (
  //   <div className="grid grid-col-8 bg-black">
  //     {board.map((square) => (
  //       <div key={square.row + square.col}>
  //         {square.row}
  //         {square.col}
  //       </div>
  //     ))}
  //   </div>
  

export default chessBoard
