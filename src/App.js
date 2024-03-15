import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/neyro" element={<h1>тут будет нейронка</h1>} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;
