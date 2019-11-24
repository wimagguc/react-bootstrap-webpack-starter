import React from 'react';
import DemoApi from 'demo_api';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      loginPassword: null,
      loginUsername: null,
    };
  }

  handleUsernameChange = e => {
    this.setState({
      loginUsername: e.target.value,
    });
  };

  handlePasswordChange = e => {
    this.setState({
      loginPassword: e.target.value,
    });
  };

  handleButtonClick = e => {
    e.preventDefault();

    const button = e.target || e.srcElement;
    if (button.classList.contains('busy')) {
      return;
    }

    button.classList.add('busy');

    const apiClient = DemoApi.ApiClient.instance;
    const api = new DemoApi.LoginApi(apiClient);

    const { loginUsername, loginPassword } = this.state;

    const params = {
      email: loginUsername,
      username: loginUsername,
      password: loginPassword,
    };

    api.loginCreate(params, (error, data, response) => {
      button.classList.remove('busy');
      if (error) {
        alert(`This is an error: ${JSON.stringify(error)}`);
      } else if (response.body && response.body.key) {
        alert(`Store this access token: ${response.body.key}`);
        localStorage.setItem('access_token', response.body.key);
        localStorage.setItem('login', loginUsername);
        localStorage.setItem('password', loginPassword);
      }
    });
  };

  render() {
    if (this.state.hasError) {
      return <p className="text-warning text-center">Something went wrong.</p>;
    }
    return (
      <div className="row h-100 justify-content-center align-items-center">
        <div className="card col-4 mt-5">
          <article className="card-body">
            <h4 className="card-title text-center mb-4 mt-5">Sign in</h4>
            <hr />
            <form>
              <div className="form-group">
                <label>Your email</label>
                <input
                  name=""
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  onChange={this.handleUsernameChange}
                />
              </div>
              <div className="form-group">
                <a className="float-right" href="#">
                  Forgot?
                </a>
                <label>Your password</label>
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={this.handleButtonClick}
                >
                  Login
                </button>
                <div className="loader" />
              </div>
            </form>
          </article>
        </div>
      </div>
    );
  }
}
