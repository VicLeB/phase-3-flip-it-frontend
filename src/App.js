import './App.css';
import Header from './components/Header';
import HouseSearch from './components/HouseSearch';
import HouseForm from './components/HouseForm'

function App() {

  return (
    <div className="App">
      <div className='container'>

        <Header />        

        <div className='other-houses'>

          <HouseSearch />

          <HouseForm />

        </div>
      </div>
    </div>
  );
}

export default App;
