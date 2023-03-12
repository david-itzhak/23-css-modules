import './App.css';
import Info from "./components/Info";

function App() {
    return (
        <div className="App">
            <Info/>
            <div className="info">
                <h1>App info</h1>
                <h2>Heading in the App component</h2>
                <button className="my-button">Click me in the App component</button>
            </div>

        </div>
    );
}

export default App;
