import { Routes, Route } from 'react-router-dom'

import SignInForm from './router/SignInForm';
import Main from './components/MainComponent/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/signForm' element={<SignInForm/>}/>
      </Routes>
    </div>
  );
}
export default App;