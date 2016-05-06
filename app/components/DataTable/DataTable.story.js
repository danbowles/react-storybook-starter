import React from 'react';
import mori from 'mori';
import { storiesOf, action } from '@kadira/storybook';
import DataTable from './';

const defaultData = mori.vector(
  mori.hashMap('column 1', 'AK', 'column 2', '100.00', 'column 3', '50.00'),
  mori.hashMap('column 1', 'AK', 'column 2', '150.00', 'column 3', '75.00'),
);
const defaultSelections = mori.hashMap(
  'column 1', 'AK'
);

storiesOf('DataTable', module)
  .add('with one selected column', () => {
    const data = defaultData;
    const selections = defaultSelections;
    return (
      <DataTable data={data} selections={selections} />
    );
  });
