import React from 'react';
import Header from 'components/base/Header';
import AppTemplate from 'components/base/AppTemplate';

const App = () => (
  <AppTemplate header={<Header right="오른쪽에 뭐?" />}>
    내용이 들어갈 자리
  </AppTemplate>
);

export default App;
