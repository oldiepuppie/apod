import { BrowserRouter } from 'react-router-dom';
import Header from './components/foundation/Header';
import { DateViewContainer, BookmarkSection } from './sections';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header>Astronomy Picture Of Day</Header>
        <DateViewContainer />
        <BookmarkSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
