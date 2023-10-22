import Data from './components/Data'
import Error from './components/Error'
import Loading from './components/Loading'
import './App.css'

function App (): JSX.Element {
  return (
    <>
      <Data />
      <Error />
      <Loading />
    </>
  )
}

export default App
