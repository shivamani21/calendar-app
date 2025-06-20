import Calendar from './components/Calendar';
import './styles/Calendar.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Professional Calendar</h1>
        {/* <p className="app-subtitle">Company Assessment Project</p> */}
      </header>
      
      <main>
        <Calendar />
      </main>
    </div>
  );
}

export default App;