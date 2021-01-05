import React, { FC } from 'react';
import List from '../List/List';
import './Results.scss';

interface Props {
  date?: string;
  curiosityPictures?: any[];
  opportunityPictures?: any[];
  spiritPictures?: any[];
}

const Results: FC<Props> = (props: Props) => {
  const {
    date,
    curiosityPictures,
    opportunityPictures,
    spiritPictures,
  } = props;

  return (
    <div className="Results--container">
      <div className="Results--Resultss">
        <List rover="Curiosity" date={date} pictures={curiosityPictures} />
        <List rover="Opportunity" date={date} pictures={opportunityPictures} />
        <List rover="Spirit" date={date} pictures={spiritPictures} />
      </div>
    </div>
  );
};

Results.defaultProps = {
  date: '',
  curiosityPictures: [],
  opportunityPictures: [],
  spiritPictures: [],
};

export default Results;
