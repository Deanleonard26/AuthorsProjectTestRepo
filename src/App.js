import logo from './logo.svg';
import './App.css';
import StoriesShortcut from './components/StoriesShortcut/StoriesShortcut'
import JoinTheMovement from './components/JoinTheMovement/Movement';
import Footer from './components/Footer/Footer';
import Instagram from './components/Instagram/Instagram';
import Journey from './components/Journey/Journey';

function App() {
  
  return (
    <div className="App">
      <Journey/>
      <StoriesShortcut/>
      <JoinTheMovement/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
