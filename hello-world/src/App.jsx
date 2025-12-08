import './App.css'

function Welcome(){
  return <h2>Hi, this is Akash.</h2>
}

function Button(){
  return <button>Click Me</button>
}

function App() {
  return (
    <div>
      <h1>React World</h1>
      <Welcome />
      <Button />
    </div>
  )
}

export default App
