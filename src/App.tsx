
import './App.css'
import CountButton from './components/CountButton'
import Navbar from './components/Navbar'
import Accordion from './components/Accordion'

function App() {


  return (
    <>
      <Navbar/>
      <CountButton />
      <Accordion title='Hello'>
        <h4>Content</h4>
      </Accordion>
    </>
  )
}

export default App
