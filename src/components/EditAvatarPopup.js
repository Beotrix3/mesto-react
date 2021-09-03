import React from 'react'
import PopupWithForm from './PopupWithForm.js'

function EditAvatarPopup(props) {
  const avatarRef = React.useRef('')

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    })
    avatarRef.current.value = ''
  }

  return (
    <PopupWithForm
      name={'edit-avatar'}
      title={'Обновить аватар'}
      textOnButton={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input id="url" name="avatar" type="url" className="popup__info popup__info_type_link" placeholder="Ссылка на картинку" required ref={avatarRef}/>
      <span id="url-error" className="popup__input-error popupLink-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup