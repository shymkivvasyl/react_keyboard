import React from 'react';

export class App extends React.Component {
  state = {
    lastKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { lastKey } = this.state;

    return lastKey ? (
      <div className="App">
        <p className="App__message">The last pressed key is [{lastKey}]</p>
      </div>
    ) : (
      <div className="App">
        <p className="App__message">Nothing was pressed yet</p>
      </div>
    );
  }
}
