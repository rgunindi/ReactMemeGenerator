import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <section>
        <Main />
      </section>
    </div>
  );
}

export default App;
