import React from 'react';

import PackingListClient from '@/components/packing-list/PackingListClient';
import {
  enjoymentAndFun,
  essentialsForSurvival,
  healthAndSafety,
  outdoorComfortAndRecreation,
} from '@/data/packing_list';

const PackingList = ({}) => {
  return (
    <PackingListClient
      essentialsForSurvival={essentialsForSurvival}
      outdoorComfortAndRecreation={outdoorComfortAndRecreation}
      healthAndSafety={healthAndSafety}
      enjoymentAndFun={enjoymentAndFun}
    />
  );
};

export default PackingList;
