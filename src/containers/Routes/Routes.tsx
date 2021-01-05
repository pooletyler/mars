import React, { FC, useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import getTodaysDate from '../../utils/getTodaysDate';
import getData from '../../utils/getData';
import Navbar from '../../components/Navbar/Navbar';
import history from './history';
import Results from '../Results/Results';
import './Routes.scss';

const Routes: FC<any> = () => {
  const [date, setDate] = useState(getTodaysDate());
  const [curiosityPictures, setCuriosityPictures] = useState([]);
  const [opportunityPictures, setOpportunityPictures] = useState([]);
  const [spiritPictures, setSpiritPictures] = useState([]);

  const API_KEY = 'NmLjSgn1q1bntn0tM7vBCXmHhhaie5HtcBa8aiqM';

  useEffect(() => {
    Promise.all([
      getData(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`
      ),
      getData(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${date}&api_key=${API_KEY}`
      ),
      getData(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${date}&api_key=${API_KEY}`
      ),
    ]).then((resolvedPictures: any[]) => {
      setCuriosityPictures(resolvedPictures[0].photos);
      setOpportunityPictures(resolvedPictures[1].photos);
      setSpiritPictures(resolvedPictures[2].photos);
    });
  }, []);

  const handleOnNavbarIconClick = () => {
    window.location.hash = '/';
  };

  const handleOnSearchButtonClick = () => {
    Promise.all([
      getData(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`
      ),
      getData(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${date}&api_key=${API_KEY}`
      ),
      getData(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${date}&api_key=${API_KEY}`
      ),
    ]).then((resolvedPictures: any[]) => {
      setCuriosityPictures(resolvedPictures[0].photos);
      setOpportunityPictures(resolvedPictures[1].photos);
      setSpiritPictures(resolvedPictures[2].photos);
    });
  };

  return (
    <HashRouter history={history}>
      <div className="Routes--container">
        <Navbar
          date={date}
          setDate={setDate}
          onIconClick={handleOnNavbarIconClick}
          onSearchButtonClick={handleOnSearchButtonClick}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Results
                curiosityPictures={curiosityPictures}
                opportunityPictures={opportunityPictures}
                spiritPictures={spiritPictures}
              />
            )}
          />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
