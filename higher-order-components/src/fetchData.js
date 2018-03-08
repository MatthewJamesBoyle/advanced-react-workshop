import React, { Component } from 'react';

const withData = (url,options) => ReactCom => {
    return class FetchData extends Component{
        state = { loading: false, data: [] };

        async componentDidMount() {
            this.setState({ loading: true });
            const data = await window.fetch(url, options);
            this.setState({ data, loading: false });
        }
        render() {
            const { data, loading } = this.state;
            return <ReactCom data={data} loading={loading} {...this.props} />;
        }
    };
}

export default withData;