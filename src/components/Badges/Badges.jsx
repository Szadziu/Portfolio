import { BUNCH_OF_BADGES } from "../../constants";
import * as P from "./parts";

const Badges = () => {
  return (
    <P.BadgesList>
      {BUNCH_OF_BADGES.map((badge) => (
        <P.Item key={badge.id}>
          <P.Badge href={badge.link} target="_blank" image={badge.image} />
        </P.Item>
      ))}
    </P.BadgesList>
  );
};

export default Badges;

// parts.js
// Badges.styledComponents.js
// NazwaKomponentu.parts.js
// NazwaKomponentu.utils.js
// utils.js
