
import './App.css'
import ProductProvider from './context/ProductProvider'
import Home from './pages/Home'


function App() {

  return (
    <>
      <ProductProvider>
        <Home/>
      </ProductProvider>
    </>
  )
}

export default App
