import React, {useEffect, Fragment} from 'react';
import {useHistory, withRouter} from 'react-router-dom';

const ScrollToTop:React.FC = ({ children}) => {
    const history = useHistory();
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return <Fragment>{children}</Fragment>;
};

export default withRouter(ScrollToTop);