import React from 'react'
import PopupWithForm from './PopupWithForm.js'

function AddPlacePopup(props) {
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onAddPlace({
      name: name,
      link: link
    })
  }

  return (
    <PopupWithForm
      name={'element_add'}
      title={'Новое место'}
      textOnButton={'Создать'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input id="title" name="name" type="text" className="popup__info popup__info_type_title" placeholder="Название" minLength="2" maxLength="30" required onChange={handleNameChange}/>
      <span id="title-error" className="popup__input-error popupTitle-input-error"></span>
      <input id="link" name="link" type="url" className="popup__info popup__info_type_link" placeholder="Ссылка на картинку" required onChange={handleLinkChange}/>
      <span id="link-error" className="popup__input-error popupLink-input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup