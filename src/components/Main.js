import Card from "./Card.js";

function Main({cards, currentUser, onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
  return(
    <main>
      <section className="profile">
        <div className="profile__container-info">
          <img src={currentUser.avatar} alt="Аватар профиля" className="profile__avatar" />
          <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
      {cards.map((card) => <Card key={card._id} onCardClick={onCardClick} card={card} />)}
      </section>
    </main>
  )
}

export default Main