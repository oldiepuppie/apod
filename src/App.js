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
