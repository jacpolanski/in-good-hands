import React, { useState } from "react";
import Entity from "./WhoWeHelp/Entity";
import Decoration from "../other/Decoration";

function HomeOrganizations() {
  const [entity, setEntity] = useState(1);

  return (
    <section id="organizations" className="element organizations-wrapper">
      <div className="organizations-text-wrapper">
        <div className="organizations-text_header">O nas</div>
        <Decoration />
        <div className="buttons">
          <button className="button-mid" onClick={() => setEntity(1)}>
            Fundacjom
          </button>
          <button className="button-mid" onClick={() => setEntity(2)}>
            Organizacjom pozarządowym
          </button>
          <button className="button-mid" onClick={() => setEntity(3)}>
            Lokalnym zbiórkom
          </button>
        </div>
        <div className="organizations-text_paragraph">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </div>
      </div>
      {entity === 1 && <Entity entity="Fundacja" entries={[0, 9]} />}
      {entity === 2 && <Entity entity="Organizacja" entries={[10, 16]} />}
      {entity === 3 && <Entity entity="Zbiórka" entries={[17, 20]} />}
    </section>
  );
}

export default HomeOrganizations;
