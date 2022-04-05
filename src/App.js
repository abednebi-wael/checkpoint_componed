import logo from './logo.svg';
import './App.css';
import Address from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      
     
    </div>
  );
}

export default App;
