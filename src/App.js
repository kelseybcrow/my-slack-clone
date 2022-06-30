import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
    return (
        <div className='App'>
            <h1>Hello Clever Programmer... Let's build the Slack Clone 🚀</h1>
            <Header />
            <div className='app__body'>
                <Sidebar />
            </div>
        </div>
    );
}

export default App;
