import React, { useState } from 'react';
import ReactGA from 'react-ga'
import { Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

ReactGA.initialize('UA-138302548-2');
ReactGA.pageview('/homepage');

function App() {
  const [ email, setEmail ] = useState('');
  const [ error, setError ] = useState(false);

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSubmit() {
    if (validateEmail(email)) {
      ReactGA.event({
        category: 'User',
        action: 'Sign up'
      });
      window.location.reload();
    } else {
      setError(true);
    }
  }
  
  function handleLinkClick() {
    ReactGA.event({
      category: 'Link',
      action: 'Click'
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Google Analytics Is Simple!
        </p>
        <a
          className="App-link"
          href="/"
          onClick={handleLinkClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click the link
        </a>
        <Input
          className="mt"
          label="Email"
          value={email}
          error={error}
          onChange={(e, { value }) => setEmail(value)}
        />
        <Button 
          style={{ marginTop: '16px'}}
          primary
          onClick={handleSubmit}
        >
          Sign up
        </Button>
        <div className="mt" style={{ width: '50%'}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lacinia sem, sit amet volutpat ligula. Proin tempor enim justo, id porttitor tortor mollis in. Etiam iaculis lorem at pharetra commodo.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
