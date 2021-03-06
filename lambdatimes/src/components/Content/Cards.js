import React from 'react';
import Card from './Card';
import propTypes from 'prop-types';
import { CardsContain } from '../../Styles';

const Cards = props => {
  return (
    <CardsContain>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((card, index) => {
              return (
                <Card 
                key={index}
                tab={card.tab}
                card={card}
                />
              );
            })}
    </CardsContain>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  card:  propTypes.shape({
    tab: propTypes.string,
    img: propTypes.string,
    author: propTypes.string
  })
}

export default Cards;