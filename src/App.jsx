import React from 'react'
import Home1 from './Home/Home1'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rout from './Laout/Rout'
import About1 from './About/About1'
import Prodeuct from './Products/Prodeuct'
import Contacts from './Contacts/Contacts'

function App() {
  const router = createBrowserRouter(
     createRoutesFromElements(
      <Route path='/' element={<Rout />}>
        <Route index element={<Home1 />}/>
        <Route path='/about' element={<About1 />}/>
        <Route path='/products' element={<Prodeuct />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Route>
     )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
