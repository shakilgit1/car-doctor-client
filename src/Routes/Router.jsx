
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import BookService from '../Pages/Home/BookService';
import Bookings from '../Pages/Bookings';
import PrivetRoute from '../Pages/PrivetRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
        path: '/',
        element: <Home></Home>
        },
        {
        path: '/login',
        element: <Login></Login>
        },
        {
        path: '/signup',
        element: <Register></Register>
        },
        {
        path: '/services/:id',
        element: <PrivetRoute><BookService></BookService></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
        path: '/bookings',
        element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
        }
    ]
    },
  ]);

export default router;