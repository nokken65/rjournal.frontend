import 'reseter.css';
import './index.scss';

import Routing from '@/pages';

import { withProviders } from './providers';

const App = () => {
  return <Routing />;
};

export default withProviders(App);
