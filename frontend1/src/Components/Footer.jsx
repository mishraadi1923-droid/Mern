import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      © {year} MyMovies. All Rights Reserved.
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
    
  }
}

export default Footer