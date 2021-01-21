const style = {
  color: 'green',
  background: 'lightgrey',
  fontSize: 20,
  fontStyle: 'italic',
  borderStyle: 'solid',
  padding: 10,
  marginBottom: 10
}

const Message = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div style={style}>
        {message}
      </div>
    )
}

export default Message