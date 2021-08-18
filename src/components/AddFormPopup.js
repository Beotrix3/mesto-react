function AddFormPopup() {
  return (
    <>
      <input id="title" name="name" type="text" className="popup__info popup__info_type_title" placeholder="Название" minLength="2" maxLength="30" required />
      <span id="title-error" className="popup__input-error popupTitle-input-error"></span>
      <input id="link" name="link" type="url" className="popup__info popup__info_type_link" placeholder="Ссылка на картинку" required />
      <span id="link-error" className="popup__input-error popupLink-input-error"></span>
    </>
  )
}

export default AddFormPopup