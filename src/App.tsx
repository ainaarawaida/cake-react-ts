import { useState, useRef, useLayoutEffect } from 'react'
import Hello from "./Hello.svelte";
import Counter from "./Counter.svelte";
import useStore from "./store";

import './App.css'

function SvelteWrapper(Component:any) {
  return (props:any) => {
    const svelteRef = useRef();
    useLayoutEffect(() => {
      while (svelteRef.current?.firstChild) {
        svelteRef.current?.firstChild?.remove();
      }
      new Component({
        target: svelteRef.current,
        props,
      });
    }, []);
    return <div ref={svelteRef}></div>;
  };
}

const SvelteHello = SvelteWrapper(Hello);
const SvelteCounter = SvelteWrapper(Counter);

function App() {
  const { count, increment } = useStore();
  const baseurl = (window as any)?.baseurl;

  return (
    <>
      <div>

      <SvelteHello
        extraText="This is a prop passed from React to Svelte"
        onClick={increment}
      />
    
      <SvelteCounter />

        <a href="https://book.cakephp.org/2/en/index.html" target="_blank">
          <img src={`${baseurl}images/cakephp.png`} className="logo" alt="cakePHP logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={`${baseurl}images/react.svg`} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CakePHP 2 + React</h1>
      <div className="card">
      <button className="btn btn-success" onClick={increment}>
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
