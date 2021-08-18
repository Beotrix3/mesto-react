function EditAvatarPopup() {
  return (
    <>
      <input id="url" name="avatar" type="url" className="popup__info popup__info_type_link" placeholder="Ссылка на картинку" required />
      <span id="url-error" className="popup__input-error popupLink-input-error"></span>
    </>
  )
}

export default EditAvatarPopup