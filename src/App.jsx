import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/foundation/Header';
import { DateViewContainer, BookmarkSection } from './sections';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Suspense fallback={<div>Loading...</div>}>
          <Header>Astronomy Picture Of Day</Header>
          <DateViewContainer />
          <BookmarkSection />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
