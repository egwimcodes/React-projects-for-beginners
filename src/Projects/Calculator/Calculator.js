import React, { useState, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
    const [values, setValues] = useState("");

    function display(value) {
        setValues(prevValues => prevValues + value);
    }

    function handleClear() {
        setValues('');
    }

    function handleEqual() {
        try {
            setValues(eval(values).toString());
        } catch (error) {
            setValues('Error');
        }
    }

    // Function to handle key press events
    function handleKeyPress(event) {
        const keyPressed = event.key;

        // Allow numeric keys, operators, and decimal point
        if (/[\d+\-*/.=]/.test(keyPressed)) {
            display(keyPressed);
        } else if (keyPressed === 'Enter') {
            handleEqual();
        } else if (keyPressed === 'Backspace') {
            setValues(prevValues => prevValues.slice(0, -1));
        }
    }

    // Add event listener for key presses when component mounts
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        // Remove event listener when component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <div className="container">
            <form name='calc' className='calculator'>
                <div className="code-owner"><a href="https://github.com/egwimcodes">egwimcodes</a></div>
                <input type="text" className='value' value={values} readOnly />
                <span onClick={handleClear} className='num clear'>C</span>
                <span onClick={() => display('/')}>/</span>
                <span onClick={() => display('*')}>*</span>
                <span onClick={() => display('7')}>7</span>
                <span onClick={() => display('8')}>8</span>
                <span onClick={() => display('9')}>9</span>
                <span onClick={() => display('-')}>-</span>
                <span onClick={() => display('4')}>4</span>
                <span onClick={() => display('5')}>5</span>
                <span onClick={() => display('6')}>6</span>
                <span onClick={() => display('+')} className='plus'>+</span>
                <span onClick={() => display('1')}>1</span>
                <span onClick={() => display('2')}>2</span>
                <span onClick={() => display('3')}>3</span>
                <span onClick={() => display('0')}>0</span>
                <span onClick={() => display('00')}>00</span>
                <span onClick={() => display('.')}>,</span>
                <span onClick={handleEqual} className='num equal'>=</span>
            </form>
        </div>
    );
}

export default Calculator;
