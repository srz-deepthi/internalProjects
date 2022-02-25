
import './App.css';
import { Provider } from 'react-redux';
import Store from './companyStore/store'
import { BrowserRouter } from 'react-router-dom';
import DrawerLeft from './components/view/drawer'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <DrawerLeft/> 
        </div> 
      </BrowserRouter>
    </Provider>
  );
}
export default App;
