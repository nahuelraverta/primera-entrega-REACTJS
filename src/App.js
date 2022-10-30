import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemsListContainer from './components/itemlistcontainer/ItemsListContainer';

function App() {
  return (
    <>
    <Navbar/>
    <ItemsListContainer name="Bienvenidos a COMIX -" info=" El lugar ideal para tus comics"/>
    
    </>
  );
}

export default App;
