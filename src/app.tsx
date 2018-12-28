import './app.scss';

import * as React from 'react';
import { render } from 'react-dom';

export interface IAppProps {
}

export interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                Welcome to React-Typescript boilerplate
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
