import { configure } from '@storybook/angular';

function loadStories() {
  require('../src/stories/homeComponent.ts');
//   require('../src/stories/taskList.ts');
}

configure(loadStories, module);