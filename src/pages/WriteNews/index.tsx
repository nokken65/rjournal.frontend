import { reflect } from '@effector/reflect';
import React from 'react';

import { liveCommentsModel } from '@/features/LiveComments';
import { asideMenuModel } from '@/shared/uiKit';

const WriteNewsPageView: React.FC = () => {
  return <div>Write</div>;
};

const WriteNewsPage = reflect({
  view: WriteNewsPageView,
  bind: {},
  hooks: {
    mounted: () => {
      asideMenuModel.events.setAsideMenuHidden(true);
      liveCommentsModel.events.setLiveCommentsHidden(true);
    },
  },
});

export default WriteNewsPage;
