import './App.css'
import { Welcome } from './welcome'
import { Button } from './Button'
import { Hello, HelloWithoutJSX } from './Hello'
import { Card, Card2 } from './Card'

function App() {
  return (
    <div>
      <h1>React World</h1>
      <Hello />
      <Welcome />
      <Button />
      <HelloWithoutJSX />
      <Card />
      <Card2 />
    
    </div>
  )
}

export default App
