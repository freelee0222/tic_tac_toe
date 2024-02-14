import React, { useState } from 'react';
import Board from './Board';
import ResetButton from './ResetButton';
import AutoButton from './AutoButton';
import '../styles/Game.css';

const Game = () => {
    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [isXNextState, setXNextState] = useState(true);
//Update the "boardState" depending on what square is clicked and alternate the  "isXNextState" on every click.
    const handleClick = i => {
        const squares = boardState.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        if (isXNextState === true) {
            squares[i] = "X";
            setXNextState(false);
        } else {
            squares[i] = "O";
            setXNextState(true);
        }
        setBoardState(squares);
        calculateWinner(boardState);
    }
//Scans through every possible winning/tie scenario and returns a winner or tie, otherwise returns null
//Used to define the "winner" variable
    const calculateWinner = squares => {
        //Calculates top row
        if (squares[0] === squares[1] && squares[1] === squares[2] && squares[0] !== null && squares[1] !== null && squares[2] !== null) {
            return (squares[0]);
        }
        //Calcualtes middle row
        else if (squares[3] === squares[4] && squares[4] === squares[5] && squares[3] !== null && squares[4] !== null && squares[5] !== null) {
            return (squares[3]);
        }
        //Calculates bottom row
        else if (squares[6] === squares[7] && squares[7] === squares[8] && squares[6] !== null && squares[7] !== null && squares[8] !== null) {
            return (squares[6]);
        }
        //Calculates left column
        else if (squares[0] === squares[3] && squares[3] === squares[6] && squares[0] !== null && squares[3] !== null && squares[6] !== null) {
            return (squares[0]);
        }
        //Calculates middle column
        else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== null && squares[4] !== null && squares[7] !== null) {
            return (squares[1]);
        }
        //Calculates right column
        else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== null && squares[5] !== null && squares[8] !== null) {
            return (squares[2]);
        }
        //Calculates left to right diagonal
        else if (squares[0] === squares[4] && squares[4] === squares[8] && squares[0] !== null && squares[4] !== null && squares[8] !== null) {
            return (squares[0]);
        }
        //Calculates right to left diagonal
        else if (squares[2] === squares[4] && squares[4] === squares[6] && squares[2] !== null && squares[4] !== null && squares[6] !== null) {
            return (squares[2]);
        }
        //Calculates a tie
        else if (!squares.includes(null)) {
            return "Tie";
        }
        //Otherwise returns null
        else {
            return null;
        }
    }
//Takes "isXNextState" and the result of the "calculateWinner" function as arguments in order to create a string to display to the user.
//Used to define the "status" variable
const setStatus = (next, winner) => {
    if (winner) {
        if (winner === "Tie") {
            return (`It's a Tie!`);
        }
        return (`${winner} Wins!`);
    }
    else if (next === true) {
        return (`X's Turn.`);
    } else {
        return (`O's Turn.`);
    }
}
//This reset function will be passed into the ResetBoard component as a prop
    const resetGame = e => {
        e.preventDefault();
        setBoardState(Array(9).fill(null));
        setXNextState(true);
    }



    const auto = (next, squares) => {
        let cpu
        let player
        if(next === true) {
             cpu = "X"
             player = "O"
        } else {
             cpu = "O"
             player = "X"
        }
        //1. Go for the win.
        if(squares[1] === cpu && squares[2] === cpu && squares[0] === null){
            handleClick(0);
        }
        else if(squares[3] === cpu && squares[6] === cpu && squares[0] === null){
            handleClick(0);
        }
        else if(squares[4] === cpu && squares[8] === cpu && squares[0] === null){
            handleClick(0);
        }
        else if(squares[4] === cpu && squares[7] === cpu && squares[1] === null){
            handleClick(1);
        }
        else if(squares[0] === cpu && squares[2] === cpu && squares[1] === null){
            handleClick(1);
        }
        else if (squares[0] === cpu && squares[1] === cpu && squares[2] === null) {
            handleClick(2);
        }
        else if (squares[4] === cpu && squares[6] === cpu && squares[2] === null) {
            handleClick(2);
        }
        else if (squares[5] === cpu && squares[8] === cpu && squares[2] === null) {
            handleClick(2)
        }
        else if(squares[0] === cpu && squares[6] === cpu && squares[3] === null){
            handleClick(3);
        }
        else if(squares[4] === cpu && squares[5] === cpu && squares[3] === null){
            handleClick(3);
        }
        else if(squares[0] === cpu && squares[8] === cpu && squares[4] === null){
            handleClick(4);
        }
        else if(squares[2] === cpu && squares[6] === cpu && squares[4] === null){
            handleClick(4);
        }
        else if(squares[1] === cpu && squares[7] === cpu && squares[4] === null){
            handleClick(4);
        }
        else if(squares[3] === cpu && squares[5] === cpu && squares[4] === null){
            handleClick(4);
        }
        else if (squares[2] === cpu && squares[8] === cpu && squares[5] === null) {
            handleClick(5);
        }
        else if (squares[3] === cpu && squares[4] === cpu && squares[5] === null) {
            handleClick(5);
        }
        else if (squares[0] === cpu && squares[3] === cpu && squares[6] === null) {
            handleClick(6);
        }    
        else if (squares[2] === cpu && squares[4] === cpu && squares[6] === null) {
            handleClick(6);
        }     
        else if (squares[7] === cpu && squares[8] === cpu && squares[6] === null) {
            handleClick(6);
        }      
        else if (squares[1] === cpu && squares[4] === cpu && squares[7] === null) {
            handleClick(7);
        }
        else if (squares[6] === cpu && squares[8] === cpu && squares[7] === null) {
            handleClick(7);
        }
        else if (squares[0] === cpu && squares[4] === cpu && squares[8] === null) {
           handleClick(8);
        }
        else if (squares[2] === cpu && squares[5] === cpu && squares[8] === null) {
            handleClick(8);
         }
         else if (squares[6] === cpu && squares[7] === cpu && squares[8] === null) {
            handleClick(8);
         }
         //2. Go for the block.
        else if(squares[1] === player && squares[2] === player && squares[0] === null){
            handleClick(0);
        }
        else if(squares[3] === player && squares[6] === player && squares[0] === null){
            handleClick(0);
        }
        else if(squares[4] === player && squares[8] === player && squares[0] === null){
            handleClick(0);
        }
        else if(squares[4] === player && squares[7] === player && squares[1] === null){
            handleClick(1);
        }
        else if(squares[0] === player && squares[2] === player && squares[1] === null){
            handleClick(1);
        }
        else if (squares[0] === player && squares[1] === player && squares[2] === null) {
            handleClick(2);
        }
        else if (squares[4] === player && squares[6] === player && squares[2] === null) {
            handleClick(2);
        }
        else if (squares[5] === player && squares[8] === player && squares[2] === null) {
            handleClick(2);
        }
        else if(squares[0] === player && squares[6] === player && squares[3] === null){
            handleClick(3);
        }
        else if(squares[4] === player && squares[5] === player && squares[3] === null){
            handleClick(3);
        }
        else if(squares[0] === player && squares[8] === player && squares[4] === null){
            handleClick(4);
        }
        else if(squares[2] === player && squares[6] === player && squares[4] === null){
            handleClick(4);
        }
        else if(squares[1] === player && squares[7] === player && squares[4] === null){
            handleClick(4);
        }
        else if(squares[3] === player && squares[5] === player && squares[4] === null){
            handleClick(4);
        }
        else if (squares[2] === player && squares[8] === player && squares[5] === null) {
            handleClick(5);
        }
        else if (squares[3] === player && squares[4] === player && squares[5] === null) {
            handleClick(5);
        }
        else if (squares[0] === player && squares[3] === player && squares[6] === null) {
            handleClick(6);
        }    
        else if (squares[2] === player && squares[4] === player && squares[6] === null) {
            handleClick(6);
        }     
        else if (squares[7] === player && squares[8] === player && squares[6] === null) {
            handleClick(6);
        }      
        else if (squares[1] === player && squares[4] === player && squares[7] === null) {
            handleClick(7);
        }
        else if (squares[6] === player && squares[8] === player && squares[7] === null) {
            handleClick(7);
        }
        else if (squares[0] === player && squares[4] === player && squares[8] === null) {
           handleClick(8);
        }
        else if (squares[2] === player && squares[5] === player && squares[8] === null) {
            handleClick(8);
         }
         else if (squares[6] === player && squares[7] === player && squares[8] === null) {
            handleClick(8);
         }
                 //3. Go for the middle.
         else if (squares[4] === null){
             handleClick(4);
         }
                 //4. Go for the win.
         else if(squares[2] === null) {
             handleClick(2);
         }
         else if(squares[6] === null) {
            handleClick(6);
        }
        else if(squares[8] === null) {
            handleClick(8);
        }
        else if(squares[0] === null) {
            handleClick(0);
        }
         else {
            handleClick(squares.indexOf(null));
         }
    }

    const winner = calculateWinner(boardState);
    let status = setStatus(isXNextState, winner);

    return (
        <div className="game">
            <div className="game-board">
                <h1 className="game-title">Tic-Tac-Toe</h1>
                <Board
                    squares={boardState}
                    handleClick={(i) => handleClick(i)}
                />
                <div className="game-info">
                    <span className="game-status">{status}</span>
                </div>
                <ResetButton resetBoard={resetGame} />
                <AutoButton autoGo={() => auto(isXNextState, boardState)} />
            </div>
        </div>
    );
}

export default Game;