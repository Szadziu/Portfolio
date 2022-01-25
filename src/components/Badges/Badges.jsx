import { BUNCH_OF_BADGES } from '../../constants';
import * as P from './parts';

const Badges = () => {
  const renderBadges = () => {
    return (
      <P.BadgesList>
        {BUNCH_OF_BADGES.map((badge) => (
          <P.Item key={badge.id}>
            <P.Badge
              href={badge.link}
              target='_blank'
              image={badge.image}
            ></P.Badge>
          </P.Item>
        ))}
      </P.BadgesList>
    );
  };
  return <>{renderBadges()}</>;
};

export default Badges;
