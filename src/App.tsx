import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home';
import DetailPage from './pages/detail';
import { BASE_GITHUB_URL } from './config';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:name",
    element: <DetailPage />,
  },
],{ basename: import.meta.env.DEV ? '/' : BASE_GITHUB_URL });


  return ( 
    <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">

      <RouterProvider router={router} />
    </div>
  )
}

export default App
