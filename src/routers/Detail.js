import React from 'react';

export default class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/')
        }
    }

    render() {
        return <span>hello</span>
    }
}