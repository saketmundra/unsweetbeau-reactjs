import logo from './logo.svg';
import './App.css';
import Upload from './Components/upload';
import Post from './Components/post';
import Profile from './Components/profile';
import Questions from './Components/questions';

function App() {
  return (
    <div className="App">
      <div className='col col1'>
        <Upload/>
        <Post/>
        <Post/>
      </div>
      <div className='col col2'>
        <Profile/>
        <Questions/>  
      </div>
    </div>
  );
}

export default App;
