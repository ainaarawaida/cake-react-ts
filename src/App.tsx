import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const baseurl = (window as any)?.baseurl;

  return (
    <>
      <div>
        <a href="https://book.cakephp.org/2/en/index.html" target="_blank">
          <img src={`${baseurl}images/cakephp.png`} className="logo" alt="cakePHP logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={`${baseurl}images/react.svg`} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CakePHP 2 + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Edit <code>app/React/src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Cakephp x2 and React logos to learn more
      </p>
      <button onClick={() => (window.location.href = `${baseurl}users/login`)}>
        Login
      </button>
    </>
  )
}

export default App
