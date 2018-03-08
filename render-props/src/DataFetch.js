import React, { Component } from 'react';

export default class DataFetch extends Component {
    state = { loading: false, data: [] };

    async componentDidMount() {
        this.setState({ loading: true });
        const request = await window.fetch(this.props.url, this.props.options);
        const data = await request.json();
        this.setState({ data, loading: false });

    }

    render() {
        const { loading, data } = this.state;
        return this.props.children({ loading, data })
    }

}