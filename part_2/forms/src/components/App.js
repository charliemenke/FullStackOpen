import React, { useState, useEffect } from 'react'
import ContactService from '../utils/contact_service'
import Contacts from './Contacts'
import ContactForm from './ContactForm'
import Message from './Message'


const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newPhone, setNewPhone ] = useState('')
    const [ newMessage, setNewMessage ] = useState(null)

    useEffect(() => {
        ContactService.getAll()
            .then(resp => {
                console.log(resp);
                
                setPersons(resp)
            })
            .catch(e => console.error(e))     
    },[])

    const addContact = (event) => {
        event.preventDefault()
        if(persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            ContactService.newContact({name: newName, number: newPhone})
                .then(resp => {
                    setNewMessage(`Added ${newName}`)
                    setPersons([...persons, resp])
                    setTimeout(() => {
                        setNewMessage(null)
                    }, 3000)
                })
                .catch(e => console.error(e))
        } 
        setNewName('')
        setNewPhone('')
    }

    const removeContact = (id) => {
        ContactService.deleteContact(id)
        .then(() => setPersons(persons.filter(person => person.id !== id)))
        .catch(e => console.error(e))
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {    
        console.log(event.target.value)
        setNewPhone(event.target.value)
    }

  return (
    <div>
        <h2>Phonebook</h2>
        <h3>Add a new contact</h3>
        <Message message={newMessage} />
        <ContactForm addContact={addContact} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange} />
        <h2>Numbers</h2>
        <Contacts persons={persons} removeContact={removeContact} />
    </div>
  )
}

export default App