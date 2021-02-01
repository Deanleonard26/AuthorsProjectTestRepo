import logo from './logo.svg';
import './App.css';
import StoriesShortcut from './components/StoriesShortcut/StoriesShortcut'
import JoinTheMovement from './components/JoinTheMovement/Movement';
import Footer from './components/Footer/Footer';
import Instagram from './components/Instagram/Instagram';
import Journey from './components/Journey/Journey';
import Podcast from './components/Podcast/Podcast'
import Scrollsnap from './components/ScrollSnap/Scrollsnap';
import AuthorsStory from './components/AuthorsStory/AuthorsStory'
import Form from './components/Form'

function App() {
  
  return (
    <div className="App">
    <Form/>
    {/* <AuthorsStory/> */}
      {/* <Scrollsnap/> */}
      {/* <Journey/>
      <StoriesShortcut/>
      <JoinTheMovement/>
      <Instagram/>
      <Podcast/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
