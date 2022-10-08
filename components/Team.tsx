import React from 'react';
import Profile from './Profile';

type Props = {};

const Team = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-4xl">Team</h1>
      <div className="flex flex-col lg:flex-row  items-center  justify-center lg:justify-between mb-20">
        <Profile
          name="Iqbal"
          job="programmer"
          image="/image/Screenshot_3.png"
        />
        <Profile name="Naufal" job="designer" image="/image/Screenshot_2.png" />
        <Profile name="Wawan" job="designer" image="/image/Screenshot_1.png" />
      </div>
    </div>
  );
};

export default Team;
