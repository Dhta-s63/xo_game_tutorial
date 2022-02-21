import React, { Component } from 'react';
import Square from './Square';
import Input from './Input';

export default class Board extends Component {

    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    Table(size){
        let table = [];
        let count = 0;
        for(let i = 0; i < size; i++){
            let tableRow = [];
            for(let j = 0; j < size; j++){
                tableRow.push(this.renderSquare(count))
                count++;
            }
            count++;
            table.push(<div className="border-row">{tableRow}</div>);
        }
    }
    render() {
        return (
            <div>
                {this.Table}
            </div>
            /*
            <div>
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                
            </div>
            */
        )
    }
}