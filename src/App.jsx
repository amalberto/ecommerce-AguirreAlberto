import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar'
import Error404 from './components/error404/Error404'
import CategoriaValidator from './components/categoriaValidator/CategoriaValidator'
import ProductoValidator from './components/productoValidator/ProductoValidator'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer mensaje="Bienvenido/a a mi tienda" />} 
        />
        <Route 
          path="/categoria/:categoriaId" 
          element={<CategoriaValidator mensaje="Productos por categoría" />} 
        />
        <Route 
          path="/item/:itemId" 
          element={<ProductoValidator />} 
        />
        <Route 
          path="/404" 
          element={<Error404 />} 
        />
        <Route 
          path="*" 
          element={<Error404 />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App