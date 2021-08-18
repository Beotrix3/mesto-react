import React from "react";

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return(
    <div className="element">
      <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleCardClick} />
      <button type="button" className="element__delete-button"></button>
      <div className="element__container">
        <p className="element__title">{props.card.name}</p>
        <div className="element__like-container">
          <button id="like-button" type="button" className ="element__button"></button>
          <span className="element__like-number">0</span>
        </div>
      </div>
    </div>
  )
}

export default Card