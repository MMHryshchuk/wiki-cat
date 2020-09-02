import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {WikiHeader} from '../components/ui/WikiHeader'
import {WikiFooter} from '../components/ui/WikiFooter'
import {MainPage} from './main/MainPage'
import {DetailPage} from './detail/DetailPage'
import {TopSearchPage} from './top-search/TopSearchPage'
import '../styles/_app.scss';
import ScrollToTop from "../components/ScrollToTop";


export const App: React.FC = () => {


    return (
        <div className="app_container">
            <BrowserRouter>
                <WikiHeader/>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/breeds/:id/info" component={DetailPage}/>
                        <Route exact path="/breeds/top" component={TopSearchPage}/>
                    </Switch>
                    <WikiFooter/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default App;
