import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/components/DataTable/DataTable.story');
}

configure(loadStories, module);
