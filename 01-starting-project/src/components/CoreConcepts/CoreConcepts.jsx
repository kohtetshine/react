import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
  return (
    <>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
    </>
  );
}