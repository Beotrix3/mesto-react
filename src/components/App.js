import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import AddFormPopup from './AddFormPopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import api from '../utils/Api.js';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [cards, setCards] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function onCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => console.log(err))
  }, [])

  React.useEffect(() => {
    api.getUserInfo()
      .then((currentUser) => {
        setCurrentUser(currentUser)
      })
      .catch((err) => console.log(err))
  }, [setCurrentUser])

  return (
    <div className="App">
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={onCardClick}
          cards={cards}
          currentUser={currentUser}
        />
        <Footer />

        <PopupWithForm
          name={'verify-delete'}
          title={'Вы уверены?'}
          textOnButton={'Да'}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name={'element_add'}
          title={'Новое место'}
          textOnButton={'Создать'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        > <AddFormPopup />
        </PopupWithForm>
        
        <PopupWithForm
          name={'edit-avatar'}
          title={'Обновить аватар'}
          textOnButton={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        > <EditAvatarPopup />
        </PopupWithForm>

        <PopupWithForm
          name={'edit-profile'}
          title={'Редактировать профиль'}
          textOnButton={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        > <EditProfilePopup /></PopupWithForm>

      </div>
    </div>
  );
}

export default App