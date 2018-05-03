import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Tile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	incrementCount() {
		this.setState({ count: this.state.count + 1 }, () => {
			console.log(this.state.count)
		})
	}

	twoReset() {
		if(this.state.count === 2) {
			this.state.count = 0;
		}
	}

	threeReset() {
		if(this.state.count === 3) {
			this.state.count = 0;
		}
	}

	fourReset() {
		if(this.state.count === 4) {
			this.state.count = 0;
		}
	}

	handleClick() {

		this.incrementCount();

		switch(this.props.id) {
			case 0:
				console.log(this.props.id);//top left corner
			break;

			case 5:
				console.log(this.props.id);//top right corner
			break;

			case 48:
				console.log(this.props.id);//bottom left corner
			break;

			case 53:
				console.log(this.props.id);//bottom right corner
			break;

			case this.props.id > 0 && this.props.id < 5:
				console.log(this.props.id);//top row
			break;

			case this.props.id > 48 && this.props.id < 53:
				console.log(this.props.id);//bottom row
			break;

			case 6 || 18 || 24 || 30 || 36 || 42:
				console.log(this.props.id);//left column
			break;

			case 11 || 17 || 23 || 29 || 35 || 41:
				console.log(this.props.id);//right column
			break;

			default:
				console.log(this.props.id);//everything else
			break;
		}
	}

	render() {
		return (
			<button id={this.props.id} className="tile" onClick={this.handleClick}>
				{this.state.count}
			</button>
		)
	}
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	renderTile(i) {
		return (
			<Tile id={i} 
			/>
		);
	}

	render() {
		return (
			<div className="container">
				<div className='board-row'>
					{this.renderTile(0)}
					{this.renderTile(1)}
					{this.renderTile(2)}
					{this.renderTile(3)}
					{this.renderTile(4)}
					{this.renderTile(5)}
				</div>
				<div className="board-row">
					{this.renderTile(6)}
					{this.renderTile(7)}
					{this.renderTile(8)}
					{this.renderTile(9)}
					{this.renderTile(10)}
					{this.renderTile(11)}
				</div>
				<div className="board-row">
					{this.renderTile(12)}
					{this.renderTile(13)}
					{this.renderTile(14)}
					{this.renderTile(15)}
					{this.renderTile(16)}
					{this.renderTile(17)}
				</div>
				<div className="board-row">
					{this.renderTile(18)}
					{this.renderTile(19)}
					{this.renderTile(20)}
					{this.renderTile(21)}
					{this.renderTile(22)}
					{this.renderTile(23)}
				</div>
				<div className="board-row">
					{this.renderTile(24)}
					{this.renderTile(25)}
					{this.renderTile(26)}
					{this.renderTile(27)}
					{this.renderTile(28)}
					{this.renderTile(29)}
				</div>
				<div className="board-row">
					{this.renderTile(30)}
					{this.renderTile(31)}
					{this.renderTile(32)}
					{this.renderTile(33)}
					{this.renderTile(34)}
					{this.renderTile(35)}
				</div>
				<div className="board-row">
					{this.renderTile(36)}
					{this.renderTile(37)}
					{this.renderTile(38)}
					{this.renderTile(39)}
					{this.renderTile(40)}
					{this.renderTile(41)}
				</div>
				<div className="board-row">
					{this.renderTile(42)}
					{this.renderTile(43)}
					{this.renderTile(44)}
					{this.renderTile(45)}
					{this.renderTile(46)}
					{this.renderTile(47)}
				</div>
				<div className="board-row">
					{this.renderTile(48)}
					{this.renderTile(49)}
					{this.renderTile(50)}
					{this.renderTile(51)}
					{this.renderTile(52)}
					{this.renderTile(53)}
				</div>
			</div>
		);
	}
	
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);