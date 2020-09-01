import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {WikiHeader} from './components/ui/WikiHeader'
import {WikiFooter} from './components/ui/WikiFooter'
import {MainPage} from './pages/main/MainPage'
import {DetailPage} from './pages/detail/DetailPage'
import {TopSearchPage} from './pages/top-search/TopSearchPage';


export const App: React.FC = () => {
    return (
        <div className="container app_container">
            <BrowserRouter>
                <WikiHeader/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/breeds/:id/info" component={DetailPage}/>
                    <Route exact path="/breeds/top" component={TopSearchPage}/>
                </Switch>
                <WikiFooter/>
            </BrowserRouter>
        </div>
    );
}

export default App;