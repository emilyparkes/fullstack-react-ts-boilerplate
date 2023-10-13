import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <h1>React Boilerplate</h1>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/add">Add a fruit</Link>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default App