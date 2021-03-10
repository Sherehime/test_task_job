import React, { Component } from 'react';
import './Game.css';
import CardView from './CardView';
import { connect } from 'react-redux'
import { flipUpCard, checkUnmatchedPair, checkMatchedPair, initGame, showNumCardsSelection } from './actions';
import QuantityCard from './QuantityCard';
import GameStatus from './GameStatus';

let timeOut = null;

class Game extends Component {
    render() {
        const cardViews = this.getCardViews();
        let gameHUD = undefined;

        if (this.props.showNumCardsSelection) {
            gameHUD = <QuantityCard onInitGame={this.props.onInitGame} />;
        } else {
            gameHUD = <GameStatus
                gameComplete={this.props.gameComplete}
                turnCard={this.props.turnCard}
                pairsFound={this.props.pairsFound}
                ShowCardsQuantity={this.props.ShowCardsQuantity}
            />;
        }

        return (
            <div className='Game'>
                <div className='status'>
                    {gameHUD}
                </div>
                <div className='CardContainer'>
                    {cardViews}
                </div>
            </div>
        );
    }

    getCardViews() {
        const cardViews = this.props.cards.map(c =>
            <CardView key={c.id}
                id={c.id}
                image={c.image}
                imageUp={c.imageUp}
                matched={c.matched}
                onClick={this.props.onCardClicked} />
        );
        return cardViews;
    }
}


const mapStateToProps = state => {
    return {
        cards: state.cards,
        turnCard: state.turnCard,
        gameComplete: state.gameComplete,
        pairsFound: state.pairsFound,
        showNumCardsSelection: state.showNumCardsSelection
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCardClicked: id => {
            clearInterval(timeOut);
            dispatch(flipUpCard(id));
            dispatch(checkMatchedPair());
            timeOut = setTimeout(() => {
                dispatch(checkUnmatchedPair())
            }, 4000);
        },
        ShowCardsQuantity: () => {
            dispatch(showNumCardsSelection());
        },
        onInitGame: numPairs => {
            dispatch(initGame(numPairs));
        }
    }
}

const GameView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default GameView;

