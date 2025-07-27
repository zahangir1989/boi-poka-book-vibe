import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErroroPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetail from './components/BookDetail/BookDetail';
import ListtedBooks from './components/ListedBooks/ListtedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
    {
      path:"/",
      element:<Home></Home>,
    },
    {
      path:'books/:bookId',
      element:<BookDetail></BookDetail>,
      loader:() => fetch('booksData.json')
    },
    {
      path:'listtedBooks',
      element:<ListtedBooks></ListtedBooks>,
      loader:() => fetch('/booksData.json')
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
