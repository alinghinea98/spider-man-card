import './App.css';
import {BrowserView, MobileView} from 'react-device-detect';
import Browser from './components/browser-view-mode/Browser';
import Mobile from './components/mobile-view-mode/Mobile';

function App() {
  return (
    <div className="App">
        <BrowserView>
            <Browser/>
        </BrowserView>
        <MobileView>
            <Mobile />
        </MobileView>
    </div>
  );
}

export default App;
