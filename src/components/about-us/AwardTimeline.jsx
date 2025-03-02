import React from 'react';
import AwardTimelineCard from './AwardTimelineCard';
import awardData from '../../data/missionVison.json';

const AwardTimeline = () => {
  return (
    <section
      className="w-full py-12 mt-10 "
      style={{
        background: 'linear-gradient(180deg, rgba(248, 250, 245, 0.40) 0%, rgba(247, 207, 216, 0.40) 54.72%, rgba(51, 11, 81, 0.00) 100%)',
      }}
    >
      <AwardTimelineCard data={awardData} />
    </section>
  );
};

export default AwardTimeline;