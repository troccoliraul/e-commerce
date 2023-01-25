
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx';
import RyR from './components/RyR';

export default function App() {
  return (<>
  <NavBar background={'transparent'}/>
  <RyR title="RyR Store"/>
  <ItemListContainer greeting= "Lista de Productos"/>
  </>
    
  );
}
