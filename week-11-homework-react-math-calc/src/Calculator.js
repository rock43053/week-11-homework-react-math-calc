import React from 'react';

export default class Calculator extends React.Component {

        constructor () {
            super ()

            this.state = {
                firstOperand: 0,
                operator: '+',
                secondOperand: 0,
                result: '0'
            }
            //this.onFirstOperandChange = this.onFirstOperandChange.bind(this)

        }


        onFirstOperandChange = (event) => {
            const newValue = event.target.value;
            this.setState({
                firstOperand: newValue
            });
        }

        onSecondOperandChange = (event) => {
            const secondOperand = event.target.value;
            this.setState({
                secondOperand
            });
         }

         onOperandChange = (event) => {
             const operator = event.target.value;
                this.setState({
                    operator
                })
            
        
         }

         calculate=() => {
            let result = 0;

            const {firstOperand, secondOperand, operator} = this.state;

            switch (operator) {
                case '+':
                    result = parseInt(firstOperand) + parseInt(secondOperand);
                    break;
                case '-':
                    result = parseInt(firstOperand) - parseInt(secondOperand);
                    break;
                case '*':
                    result = parseInt(firstOperand) * parseInt(secondOperand);
                    break;
                case '/':
                    result = parseInt(firstOperand) / parseInt(secondOperand);
                    break;
            }
            this.setState({
                result
            })
         }

    render() {
        return (
            <div>

                {/* first operand */}
                < input type="number" onChange={this.onFirstOperandChange} />

                <select onChange={this.onOperandChange} >
                    <option>*</option>
                    <option>/</option>
                    <option>+</option>
                    <option>-</option>
                </select>

                {/* second operand */}
                < input type="number" onChange={this.onSecondOperandChange}/>
                
                <button onClick={this.calculate}>=</button>

                <input value={this.state.result} type="text" disabled />


                











                </div>
            );

    }

}
