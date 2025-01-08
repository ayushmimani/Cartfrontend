import './App.css'
import store from './Store/store'
import { Provider } from 'react-redux'
import Parent from './Components/Parent'

function App() {
  return (
    <Provider store={store}> 
      <Parent/>
    </Provider>
  )
}

export default App
