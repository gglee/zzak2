import React, { Component } from 'react';
import AuthForm from 'components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';

class AuthFormContainer extends Component {
  componentDidMount() {
    // 폼 정보 초기화
    const { AuthActions } = this.props;
    AuthActions.initalize();
  }

  componentDidUpdate(prevProps, prevState) {
    // type이 바뀔때 폼 정보 초기화
    // 회원가입 <-> 로그인
    if (prevProps.type !== this.props.type) {
      const { AuthActions } = this.props;
      authActions.initialize();
    }
  }

  handleChange = e => {
    // e.target에서 인풋의 변화 정보를 가져오고
    const { name, value } = e.target;
    // 액션을 발생시켜 리덕스의 상태를 업데이트 합니다.
    // 여기선 컴포넌트의 state를 사용해도 됩니다.
    const { AuthActions } = this.props;
    AuthActions.changeInput({
      field: name,
      value,
    });
  };

  handleGoBack = () => {
    // 라우터의 history를 사용하여 뒤로가기를 합니다
    // 코드 최 하단에서 withRouter HOC를 사용했기 때문에 history에 접근 가능 합니다.
    const { history } = this.props;
    history.goBack();
  };

  handleRegister = async () => {
    // 구현 전
  };

  handleLogin = () => {
    // 구현 전
  };

  render() {
    const { type, fields, error } = this.props;
    return (
      <AuthForm
        register={type === 'register'}
        onGoBack={this.handleGoBack}
        onChange={this.handleChange}
        onSubmit={type === 'register' ? this.handleRegister : this.handleLogin}
        fields={fields}
        error={error}
      />
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ auth }) => ({ fields: auth.fields, error: auth.error }),
    dispatch => ({
      AuthActions: bindActionCreators(authActions, dispatch),
    })
  )
);

export default enhance(AuthFormContainer);
