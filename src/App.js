import './App.css';

function App() {
  return (
    <div className="App">
        <div id='top-nav'>
          <span>Demo</span>
        </div>
        <div id='main-body'>
          <div id='controls'>
            <div>
              <h2>Controls</h2>
              <div>
                <label for='fruit-select'>Favorite fruit </label>
                <select id='fruit-select'>
                  <option>Banana</option>
                  <option>Lime</option>
                  <option>Mango</option>
                </select>
              </div>
              <div>
                <label for='vegetable-select'>Favorite vegetable </label>
                <input type='text' id='vegetable-select'></input>
              </div>
              <div>
                <label for='bread-select'>Favorite bread </label>
                <input type='text' id='bread-select'></input>
              </div>
            </div>
          </div>
          <div id='composer'>
            <div>
              <div id='text-gen' contentEditable='true'></div>
            </div>
            <button onClick={generateText}>
              Generate text
            </button>
          </div>
        </div>
    </div>
  );
}

function generateText() {
  const currText = document.getElementById('text-gen').innerHTML
  const text = ' lorem ipsum ';
  const newHtml = `<span class='highlight'>${ text }</span>`;
  document.getElementById('text-gen').innerHTML = `${ currText } ${ newHtml }`;
}

export default App;
