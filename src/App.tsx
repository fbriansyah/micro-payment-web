import DashboardPage from './pages/dashboard/dashboard-page';
import ErrorPage from './pages/error-page';
import LoginPage from './pages/login/login-page'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <LoginPage />,
  },
  {
    path: '/app',
    element: <DashboardPage />,
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )

}

export default App
