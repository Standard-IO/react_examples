import './App.css';

//components
import Profile from './components/Profile'
import UserList from './components/UserList'

// CONTEXT
import UserState from './context/User/UserState';

import 'bootstrap/dist/css/bootstrap.css';
 
function App() {
  return (
    <UserState>
      <UserList />
    </ UserState>
  );
}

export default App;
