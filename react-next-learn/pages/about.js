/*
 * @Author: Jiang.Jing 
 * @Date: 2019-04-11 22:17:54 
 * @Last Modified by: Jiang.Jing
 * @Last Modified time: 2019-04-11 22:33:15
 */
// export default () => <p>Welcome to About!</p>

import React, { Component } from 'react';
import { withRouter } from 'next/router'

// import Router from 'next/router';
// Router.beforePopState(({ url, as, options }) => {
//     console.log(url, as, options);
//     // I only want to allow these two routes!
//     if (as !== "/" || as !== "/other") {
//         // Have SSR render bad routes as a 404.
//         window.location.href = as
//         return false
//     }
//     return true
// });

// const handleRouteChange = url => {
//     console.log('App is changing to: ', url)
// }
// Router.events.on('routeChangeStart', handleRouteChange);

class About extends Component {

    static async getInitialProps(params) {
        // console.log(params);
        return {
            // 会映射到 props
            // param: "param",
            // param2: "param2",
        }
    }

    componentDidMount() { }

    render() {
        // console.log(this.props);
        const { name } = this.props.router.query;
        return (
            <div> Hello <span>{name}</span> Welcome to About! </div>
        )
    }
}

export default withRouter(About);


