import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/Layout/Main';
import Home from '../src/component/Home/Home';
import Errorsite from '../src/component/Errorsite/Errorsite';
import Statistics from './component/statistics/Statistics';
import Blog from '../src/component/Blogs/Blogs';
import MoreQuiz from './component/MoreQuiz/MoreQuiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Errorsite></Errorsite>,
      children: [{
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/home',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/home/:id',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <MoreQuiz></MoreQuiz>,
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
      ]


    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
