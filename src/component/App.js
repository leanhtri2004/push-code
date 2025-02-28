import {Routes, Route} from 'react-router-dom';
import '../App.css';
import { Header } from './Header';
import { MainContainer } from './MainContainer';

function App() {
  return (
    <div className='w-full h-auto flex flex-col bg-primary'>
      <Header/>
      <main className='mt-16 md:mt-18 py-4 px-14 w-full'>        
        <Routes>
          <Route path='/' element={<MainContainer />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
