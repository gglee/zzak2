import React, { Component } from 'react';
import Button from 'components/common/Button';

import './AuthForm.scss';

class AuthForm extends Component {
  // fields가 없을 떄 튕기지 않도록 defaultProps 설정
  static defaultProps = {
    fields: {
      username: '',
      password: '',
      passwordComfirm: '',
    },
  };
  handleKeyPress = e => {
    // 엔터 입력 시 props로 전달 받은 onSubmit 함수 호출
    this.props.onSubmit();
  };

  render() {
    const {
      register,
      fields,
      onGoBack,
      onChange,
      onSubmit,
      error,
    } = this.props;
    const { username, password, passwordComfirm } = fields;

    return (
      <div className="AuthForm">
        {error && <div className="error">{error}</div>}
        <div class="inputs">
          <input
            name="username"
            placeholder="계정명"
            onChange={onChange}
            value={username}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={onChange}
            value={password}
            onKeyPress={this.handleKeyPress}
          />
          {register && (
            <input
              name="passwordComfirm"
              type="password"
              placeholder="비밀번호 다시 입력"
              onChange={onChange}
              value={passwordComfirm}
              onKeyPress={this.handleKeyPress}
            />
          )}
        </div>
        <div className="buttons">
          <Button onClick={onGoBack}>뒤로</Button>
          <Button
            className="full-width"
            active
            onClick={onSubmit}
            type="submit"
          >
            {register ? '회원가입' : '로그인'}
          </Button>
        </div>
      </div>
    );
  }
}
export default AuthForm;
