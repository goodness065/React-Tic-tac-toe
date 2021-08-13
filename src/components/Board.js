import React, {useState} from 'react';
import Square from './Square';

const Board = () => {
    const [square, setSquare] = useState(Array(9).fill(null))

    return (
        <div className ="mt-8">
            <div className="flex justify-center">
            <Square value= {square}/>
            <Square />
            <Square />
            </div>
            <div className="flex justify-center">
            <Square />
            <Square />
            <Square />
            </div>
            <div className="flex justify-center">
            <Square />
            <Square />
            <Square />
            </div>
        </div>
    )
}

export default Board
