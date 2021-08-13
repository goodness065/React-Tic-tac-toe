import React from 'react';
import Board from './Board';

const Game = () => {
    return (
        <div className="bg-blue-300 h-screen">
            <div className="text-center text-7xl pt-8">
                <h1>TIC TAC TOE</h1>
            </div>
            <Board />
        </div>
    )
}

export default Game
