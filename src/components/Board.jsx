import React from 'react';
import Square from './Square';
import '../styles/Board.css';

const Board = (props) => {
    const { squares, handleClick } = props;

    const renderSquare = (i) => {
        return (
            <Square value={squares[i]} handleClick={() => { handleClick(i) }} />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(2)}
                {renderSquare(1)}
                {renderSquare(0)}
            </div>
            <div className="board-row">
                {renderSquare(5)}
                {renderSquare(4)}
                {renderSquare(3)}
            </div>
            <div className="board-row">
                {renderSquare(8)}
                {renderSquare(7)}
                {renderSquare(6)}
            </div>
        </div>
    );
}

export default Board;