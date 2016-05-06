import { configure } from '@kadira/storybook';
import '../app/css/base.css';

function loadStories() {
  require('../app/components/DataTable/DataTable.story');
}

configure(loadStories, module);
