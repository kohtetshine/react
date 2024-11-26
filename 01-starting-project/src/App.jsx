import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButtons from './components/TabButtons/TabButtons';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <TabButtons />
      </main>
    </>
  );
}

export default App;
