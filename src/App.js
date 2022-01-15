/* TODO - Page 컴포넌트 작성, 렌더링
import { Route } from 'react-router-dom';
*/
import Header from './components/foundation/Header';
import { DateViewContainer, BookmarkSection } from './sections';

function App() {
  return (
    <div className='App'>
      <Header>Astronomy Picture Of Day</Header>
      <DateViewContainer />
      <BookmarkSection />
    </div>
  );
}

export default App;
