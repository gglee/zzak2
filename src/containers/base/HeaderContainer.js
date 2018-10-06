import React, { Component } from 'react';

import { connect } from 'react-redux';
import Header from 'components/base/Header';
import Button from 'components/common/Button';

class HeaderContainer extends Component {
  render() {
    if (!this.props.visible) return null; // visible 값이 false 일 때에는 숨기기

    const { user } = this.props;
    return (
      <Header
        right={
          user ? null : (
            <Button to="/login" outline>
              로그인
            </Button>
          )
        }
      />
    );
  }
}

export default connect(({ base, user }) => ({
  visible: base.header,
  user: user.user,
}))(HeaderContainer);
