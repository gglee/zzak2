import React from 'react';
import HideHeader from 'components/base/HideHeader';
import AuthTemplate from 'components/auth/AuthTemplate';
import AuthFormContainer from 'containers/auth/AuthFormContainer';

const AuthPage = ({ match }) => {
  const { authType } = match.params;
  return (
    <div>
      <AuthTemplate type={authType}>
        <HideHeader />
        <AuthFormContainer type={authType} />
      </AuthTemplate>
    </div>
  );
};

export default AuthPage;
