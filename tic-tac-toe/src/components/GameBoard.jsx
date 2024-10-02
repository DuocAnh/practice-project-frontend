import { useState } from 'react';

export default function GameBoard({onSelectSuare, board}) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSuare();
    // }

    return <ol id="game-board">
        {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={() => 
                                onSelectSuare(rowIndex, colIndex)} 
                                disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>;
}