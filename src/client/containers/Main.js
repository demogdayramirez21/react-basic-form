import React, { Component } from "react";
import Register from "../components/Register";
import { connect } from "react-redux";
import { submitForm } from '../redux/actions'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};

  render() {
    const { onSubmitForm } = this.props
    return <Register submitForm={onSubmitForm} />;
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: (form) => dispatch(submitForm(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
