import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section";

export default function CoreConcepts() {
  return (
    <>
      <Section title={"Core Concepts"} id={"core-concepts"}>
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
      </Section>
    </>
  );
}
