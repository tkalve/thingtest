import React from 'react';

class App extends React.Component {
  private state = {
    title: 'ThingTest 1982',
  };

  public render(): void {
    const { title } = this.state;
    return <h1>{title}</h1>;
  }
}

export default App;
