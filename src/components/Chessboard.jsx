const chessBoard = () => {
  const rows = 8
  const cols = 8
  const board = []

  for (let i = 0; i < rows; i += 1) {
    board.push([])
    for (let j = 0; j < cols; j +=1) {
      board[i].push(null)
    }
  }
  

  return board
}
export default chessBoard
