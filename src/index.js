import 'preact/debug';
import { h, render } from 'preact';
import { Logo } from './logo';
import './styles.css';

function App() {
  return (
    <div class="app">
      <Logo />
      <h1>Hello CodeSandbox!</h1>
      <p>
        Check out our{' '}
        <a href="https://preactjs.com/guide/v10/tutorial">Documentation</a>
      </p>
    </div>
  );
}

render(<App />, document.getElementById('app'));
