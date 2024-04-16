import React from 'react'


const Footer = () => {
  let footerStyle= {
    position: "relative",
    top: "100vh",
    width: "100%",
    
  }
  return (
    <footer className='bg-dark text-light text-center'style={footerStyle}>
      copyright &copy; MyTodosList.com
    </footer>
  )
}

export default Footer