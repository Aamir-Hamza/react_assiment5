
 import "./App.css"
function App() {
 

  return (
    <>
    <div style={{display:"flex", justifyContent:"center", gap:"40px", backgroundColor:"black", color:"white", height:"50px", alignItems:"center"}}>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>

    </div>
    <div>
      <h1   className="mainheading"  style={{textAlign:"center", }}>Welcome to my website</h1>
    </div>
    <footer style={{
      backgroundColor:"black",
      color:"white",
      textAlign:"center",
      padding:"20px",
      position:"absolute",
      bottom:"0px",
      width:"1202px"
    }}>
      <p style={{textAlign:"center"}}>Copyright 2024</p>
    </footer>
      
    </>
  )
}

export default App
