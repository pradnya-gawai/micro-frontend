import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UseStateDemo from './Hooks/UseStateDemo';
import UseRefDemo from './Hooks/UseRefDemo';

// Components for each Hook page
// const UseStateDemo = () => <h2>This is the useState page</h2>;
const UseEffectDemo = () => <h2>This is the useEffect page</h2>;
// const UseRefDemo = () => <h2>This is the useRef page</h2>;
const UseReducerDemo = () => <h2>This is the useReducer page</h2>;
const UseCallbackDemo = () => <h2>This is the useCallback page</h2>;
const UseMemoDemo = () => <h2>This is the useMemo page</h2>;
const UseContextDemo = () => <h2>This is the useContext page</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">React Hooks</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/usestate">useState</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/useeffect">useEffect</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/useref">useRef</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/usereducer">useReducer</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/usecallback">useCallback</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/usememo">useMemo</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/usecontext">useContext</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to React Hooks Tutorial</h1>} />
            <Route path="/usestate" element={<UseStateDemo />} />
            <Route path="/useeffect" element={<UseEffectDemo />} />
            <Route path="/useref" element={<UseRefDemo />} />
            <Route path="/usereducer" element={<UseReducerDemo />} />
            <Route path="/usecallback" element={<UseCallbackDemo />} />
            <Route path="/usememo" element={<UseMemoDemo />} />
            <Route path="/usecontext" element={<UseContextDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
