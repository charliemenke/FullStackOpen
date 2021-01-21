
const Contacts = ({persons, removeContact}) => {
    return(      
        persons.map(person => (
            <div key={person.id}>
                <p>{person.name} : {person.number}</p>
                <button onClick={() => removeContact(person.id)} >Delete</button>
            </div>
        ))     
    )
}

export default Contacts