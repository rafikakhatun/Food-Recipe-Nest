import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecipeDetails from './component/RecipeDetails.jsx'


  const route = createBrowserRouter([

  {
    path:"/",
    element:<App></App>

  },
  
  {
    path:"/recipe/:UserId",
    element:<RecipeDetails></RecipeDetails>,
    loader:()=> fetch("/fooddata.json")
  }




])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={route}/>
    
    
  </StrictMode>,
)


