'use strict';

const e = React.createElement;

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'World!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      '???'
    );
  }
}

const domContainer = document.querySelector('#my_button_container');
ReactDOM.render(e(MyButton), domContainer);
