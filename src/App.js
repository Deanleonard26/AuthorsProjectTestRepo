import logo from './logo.svg';
import './App.css';
import StoriesShortcut from './components/StoriesShortcut/StoriesShortcut'
import JoinTheMovement from './components/JoinTheMovement/Movement';
import Footer from './components/Footer/Footer';
import Instagram from './components/Instagram/Instagram';

function App() {
  
  return (
    <div className="App">
      <StoriesShortcut/>
      <JoinTheMovement/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
