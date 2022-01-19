import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/foundation/Header';
import Navigation from './components/foundation/Navigation';
import { DateViewContainer, BookmarkSection, NoMatchRouteWarning } from './sections';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='App w-screen min-h-screen p-10 bg-bgGray'>
          <Header>Astronomy Picture Of the Day</Header>
          {/* <Navigation /> */}
          <Navigation />
          <Routes>
            <Route exact path='/' element={<Navigate to='/dateview' />}></Route>
            <Route path='/dateview' element={<DateViewContainer />}></Route>
            <Route path='/bookmarks' element={<BookmarkSection />}></Route>
            <Route path='*' element={<NoMatchRouteWarning />}></Route>
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
