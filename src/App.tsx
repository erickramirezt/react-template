import { Route } from 'wouter'
import { HomePage } from './pages/application/home-page'

function App() {
  return (
    <>
      <Route path='/' component={HomePage} />
    </>
  )
}

export default App
