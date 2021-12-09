import { ListItemsProvider } from "./context/index";
import { UseList } from "./hooks/index";
import Header from './components/header/index';
import './App.css'

const App = () => {

  const { listItems, listOfPokemons,getListItems } = UseList();
  return (
    <>
    <ListItemsProvider value={{ listItems, listOfPokemons,getListItems }}>
        <Header />
      </ListItemsProvider>
    </>
  );
}

export default App;
