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
        if (['+', '-', '*', '/', '%'].includes(input)) {
            this.setState({ operator: input,
                            prevValue: this.state.inputValue,
                            inputValue: '' });
        } else if (input === '+/-') {
            this.setState({ inputValue: (parseFloat(this.state.inputValue) * -1).toString() });
        } else if (input === 'AC') {
            this.setState({ inputValue: '0',
                            prevValue: '',
                            operator: '' });
        }
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
                <div className="calculator-row">
                    <Button onClick={this.handleInput} value="AC" />
                    <Button onClick={this.handleInput} value="+/-" />
                    <Button onClick={this.handleInput} value="%" />
                    <Button onClick={this.handleInput} value="/" />
                </div>
                <div className="calculator-row">
                    <Button onClick={this.handleInput} value="7" />
                    <Button onClick={this.handleInput} value="8" />
                    <Button onClick={this.handleInput} value="9" />
                    <Button onClick={this.handleInput} value="*" />
                </div>
                <div className="calculator-row">
                    <Button onClick={this.handleInput} value="4" />
                    <Button onClick={this.handleInput} value="5" />
                    <Button onClick={this.handleInput} value="6" />
                    <Button onClick={this.handleInput} value="-" />
                </div>
                <div className="calculator-row">
                    <Button onClick={this.handleInput} value="1" />
                    <Button onClick={this.handleInput} value="2" />
                    <Button onClick={this.handleInput} value="3" />
                    <Button onClick={this.handleInput} value="+" />
                </div>
                <div className="calculator-row">
                    <Button onClick={this.handleInput} value="0" />
                    <Button onClick={this.handleInput} value="." />
                    <Button onClick={this.calculate} value="=" />
                </div>
            </div>
        );
    }

}

export default Calculator;