function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <form name={props.name} className="popup__container" noValidate onSubmit={props.onSubmit}>
        <button type="button" className="popup__close-button popup__close-button_edit-profile" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__save-button" value="Сохранить">{props.textOnButton}</button>
      </form>
    </div>
  )
}

export default PopupWithForm