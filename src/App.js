import logo from './logo.svg';
import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div>
   
   <FullName/>
   <div className='content'>
   <ProfilePhoto/>
   <Address/>
   
   </div>

   </div>
  );
}

export default App;
