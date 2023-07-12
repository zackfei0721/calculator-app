import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

type Props = {}
type State = {
    inputValue: string,
    prevValue: string,
    operator: string,
};

class Calculator extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            inputValue: '0',
            prevValue: '',
            operator: '',
        };
    }

    handleInput = (input: string) => {

    }

    calculate = () => {
        let result = 0;

        const { inputValue, prevValue, operator } = this.state;
        const inputNumber = parseFloat(inputValue);
        const prevNumber = parseFloat(prevValue);

        if (operator === '+') {
            result = prevNumber + inputNumber;
        } else if (operator === '-') {
            result = prevNumber - inputNumber;
        } else if (operator === '*') {
            result = prevNumber * inputNumber;
        } else if (operator === '/') {
            result = prevNumber / inputNumber;
        } else if (operator === '%') {
            result = prevNumber % inputNumber;
        }

        this.setState({ inputValue: result.toString(),
                        prevValue: '',
                        operator: ''});

    }

    render() {
        return (
            <div>
                <Display value={this.state.inputValue} />
                <div>
                    <Button onClick={this.handleInput} value="AC" />
                    <Button onClick={this.handleInput} value="+/-" />
                    <Button onClick={this.handleInput} value="%" />
                    <Button onClick={this.handleInput} value="/" />
                </div>
            </div>
        );
    }

}

export default Calculator;