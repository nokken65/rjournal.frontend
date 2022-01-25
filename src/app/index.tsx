import 'reseter.css';
import './index.scss';

import Routing from '@/pages';

import { withProviders } from './providers';

const App = () => {
  return (
    <div className='flex w-full bg-bg'>
      <Routing />
    </div>
  );
};

export default withProviders(App);
