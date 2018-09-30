import { Component } from 'react';
import { hideHeader, showHeader } from 'store/modules/base';
import { connect } from 'react-redux';

class HideHeader extends Component {
  constructor(props) {
    super(props);
    props.hideHeader(); // 이 컴포넌트가 사용되면 헤더를 숨기고,
  }

  componentWillUnmount() {
    this.props.showHeader(); // 컴포넌트가 사라지기 전까지는 헤더를 보여줌
  }

  render() {
    return null;
  }
}

export default connect(
  () => ({}),
  {
    hideHeader,
    showHeader,
  }
)(HideHeader);
