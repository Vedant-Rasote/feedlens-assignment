import './App.css';
import Filters from './components/Filters';
import Reviews from './components/Reviews';

function App() {
  return (
    <main className="container-fluid">
      <div className="row g-4 mt-1">
        <div className="col-sm-4 col-md-4 col-lg-3">
          <Filters />
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9">
          <Reviews />
        </div>
      </div>
    </main>
  );
}

export default App;
