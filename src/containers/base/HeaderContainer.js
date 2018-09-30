import React, { Component } from 'react';
import Header from 'components/base/Header';

import { connect } from 'react-redux';

class HeaderContainer extends Component {
  render() {
    if (!this.props.visible) return null;
    return <Header right="여기서 다시 오른쪽?" />;
  }
}

export default connect(({ base }) => ({ visible: base.header }))(
  HeaderContainer
);
