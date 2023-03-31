import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Layout from './Layout';
import MovieList from './Movies';
import Podcasts from './podcasts';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home saying="The Joel Hilton Movie Collection" />}
            />
            <Route path="podcasts" element={<Podcasts />} />
            <Route path="movies" element={<MovieList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function GoButton(props: any) {
//   return (
//     <div>
//       <button onClick={props.blahClick}>GO!</button>
//       <br></br>
//     </div>
//   );
// }

// function AmountOfGo(props: any) {
//   return <label>{props.num}</label>;
// }

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <GoButton blahClick={() => setCount(count + 1)} />
//       <AmountOfGo num={count} />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// class Welcome extends React.Component {
//   render() {
//     return <h1>Give rando numbers</h1>;
//   }
// }

// class Conclusion extends React.Component {
//   render() {
//     return <p>Hope you enjoyed</p>;
//   }
// }

// function Rando() {
//   return (
//     <div>
//       <h2>Random Number: {Math.random()}</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Welcome />
//       <Rando />
//       <br />
//       <Conclusion />
//     </div>
//   );
// }

// export default App;
