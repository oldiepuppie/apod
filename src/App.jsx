import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/foundation/Header';
import Navigation from './components/foundation/Navigation';
import { DateViewContainer, BookmarkSection, NoMatchRouteWarning } from './sections';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='App flex flex-col w-screen min-h-screen p-3 vp12:p-20 vp12:items-center bg-bgGray'>
          <div className='vp12:flex vp12:flex-row'>
            <div className='vp12:flex vp12:flex-col pr-20 whitespace-pre-line	'>
              <Header>{'Astronomy\n Picture\n Of the Day'}</Header>
              <Navigation />
            </div>
            <Routes>
              <Route exact path='/' element={<Navigate to='/dateview' />}></Route>
              <Route path='/dateview' element={<DateViewContainer />}></Route>
              <Route path='/bookmarks' element={<BookmarkSection />}></Route>
              <Route path='*' element={<NoMatchRouteWarning />}></Route>
            </Routes>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
