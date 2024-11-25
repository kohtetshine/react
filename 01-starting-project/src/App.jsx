import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButtons from './components/TabButtons/TabButtons';
import { EXAMPLES } from './data';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcepts
              {...CORE_CONCEPTS[1]} />
            <CoreConcepts
              {...CORE_CONCEPTS[2]} />
            <CoreConcepts
              {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={()=>handleSelect('components')}>Components</TabButtons>
            <TabButtons onSelect={()=>handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons onSelect={()=>handleSelect('props')}>Props</TabButtons>
            <TabButtons onSelect={()=>handleSelect('state')}>State</TabButtons>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
