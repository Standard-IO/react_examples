import { useState } from 'react'
import './App.css'
import { Route, Routes, Link, useParams, Outlet, Navigate, useNavigate} from 'react-router-dom'

// is active element in navbar
import { NavLink } from './components/NavLink'

// Security
import { useAuth } from './useAuth'

// componenets 
const Home = () => <h1>Home</h1>
const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla',

  ]

  return (
    <div>
      <h1>Search Page</h1> 
      <ul>
      {tacos.map( taco => (
        <li key={taco}> <Link to={`/tacos/${taco}`}>{taco}</Link></li>
      ))}
      </ul>
      hola
    </div>
  ) 
}

const Tacos = () => {
  const  { tacoName } = useParams()
  return (
  <div>
    <h1>Tacos</h1>
    {tacoName}
    <br />
    <Link to="details">{tacoName}</Link>
    <Outlet />
  </div>
  )
}

const TacosDetails = () => {
  const { tacoName } = useParams()
  return ( 
    <div>
      <h2>Tacos Details</h2> 
      {tacoName} details.
    </div>
  )
}


// security
const Login = () => {

  const {login} = useAuth()
  const navigate = useNavigate()

  const handleClick = () => {
    login();
    navigate("/search-page");
  }

  return (
    <button onClick={handleClick}>login</button>
  )
}

const Protected_route = ({ children }) => {
  const { isAuthenticated} = useAuth();

  if (!isAuthenticated){
    return <Navigate to="/login" />
  }

  return children 
}

function App() {

  return (

    <div className="App">
      <header>
        <h1>Israel Rescalvo</h1>
        <nav>
          <ul>
            {/* personalized NavLink to use style when is selected */}
            <li><NavLink  to='/'>Home</NavLink></li> 
            <li><NavLink to='/search-page'>Search page</NavLink></li>
          </ul>
        </nav> 
      </header>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Sercurity element example */}
        <Route path="/search-page" element={<Protected_route> <SearchPage /> </Protected_route>} />

        {/* Anidado */}
        <Route path="/tacos/:tacoName" element={<Tacos />} >
          <Route path="details" element={<TacosDetails />} />
        </Route>
        <Route path="login"  element={<Login />} />

      </Routes>
      

      
      
    </div>
  )
}

export default App
