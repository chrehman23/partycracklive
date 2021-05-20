import React from 'react';
import {withRouter} from 'react-router-dom';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <>
                <div className="footer">
                    <div className="copyright">
                        <p className="mb-0 text-center">©2021<a target="_blank" href="#">Partycrack </a> | All Rights
                            Reserved.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Footer);