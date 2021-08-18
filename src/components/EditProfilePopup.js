function EditProfilePopup() {
  return (
    <>
      <input id="username" name="name" type="text" className="popup__info popup__info_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
      <span id="username-error" className="popup__input-error popupName-input-error"></span>
      <input id="about" name="about" type="text" className="popup__info popup__info_type_description" placeholder="О себе" minLength="2" maxLength="200" required />
      <span id="about-error" className="popup__input-error popupDescription-input-error"></span>
    </>
  )
}
export default EditProfilePopup