import logo from './logo.svg';
import './App.css';

function App() {

  const handleRegistration = e => {
    console.log('Registration will be added');
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleRegistration}>
        <h3>Please Register</h3>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name='password' id="" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
