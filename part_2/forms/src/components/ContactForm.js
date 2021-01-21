const ContactForm = ({addContact, newName, handleNameChange, newPhone, handlePhoneChange}) => {
    return(
        <form onSubmit={addContact}>
            <div>
                name:
                <input
                    value={newName}
                    onChange={handleNameChange}
                />
                number:
                <input
                    value={newPhone}
                    onChange={handlePhoneChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default ContactForm