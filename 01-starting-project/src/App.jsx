import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButtons from './components/TabButtons/TabButtons';
import { EXAMPLES } from './data';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) { 
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>);
  }
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title}
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButtons>
            <TabButtons isSelected={selectedTopic === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons isSelected={selectedTopic === 'props'} onSelect={()=>handleSelect('props')}>Props</TabButtons>
            <TabButtons isSelected={selectedTopic === 'state'} onSelect={()=>handleSelect('state')}>State</TabButtons>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
