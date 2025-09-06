


export const Notification = ({ message }) => {
  const posStyle = {
    color:"Green", 
    fontSize: "40px", 
    backgroundColor: 'HoneyDew', 
    outlineWidth: 'thick', 
    outlineStyle: 'outset', 
    outlineColor: 'green', 
    padding:'20px'}
  

  

  
  if (message === null) {
    return null
  }

  return (
    <div className='error' style={posStyle}>
      {message}
    </div>
  )
}

export const NegNotification = ({ message }) => {
  

  const negStyle = {
    color:"Red", 
    fontSize: "40px", 
    backgroundColor: 'LavenderBlush', 
    outlineWidth: 'thick', 
    outlineStyle: 'outset', 
    outlineColor: 'Red', 
    padding:'20px'}

  
  if (message === null) {
    return null
  }

  return (
    <div className='error' style={negStyle}>
      {message}
    </div>
  )
}



