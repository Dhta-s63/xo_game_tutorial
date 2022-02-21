import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    Table(props){
        let table = [];
        let count = 0;
        for(let i = 0; i < this.props.table_size; i++){
            let tableRow = [];
            for(let j = 0; j < this.props.table_size; j++){
                tableRow.push(this.renderSquare(count))
                count++;
            }
            count++;
            table.push(<div className="border-row">{tableRow}</div>);
        }
        console.log({table})
        return table;
    }
    render() {
        return (
            <div>
                {this.Table()}
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