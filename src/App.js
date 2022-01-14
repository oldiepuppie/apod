/* TODO - Page 컴포넌트 작성, 렌더링
import { Route } from 'react-router-dom';
import { DateView, BookmarkSection } from './sections';
*/
import Header from './components/foundation/Header';
import DateViewContainer from './containers/date-view/DateViewContainer';

function App() {
  return (
    <div className='App'>
      <Header>Astronomy Picture Of Day</Header>
      <DateViewContainer />
    </div>
  );
}

export default App;
