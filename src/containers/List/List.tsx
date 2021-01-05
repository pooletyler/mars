import React, { FC } from 'react';
import './List.scss';

interface Props {
  rover?: string;
  date?: string;
  pictures?: string[];
}

const List: FC<Props> = (props: Props) => {
  const { rover, date, pictures } = props;

  const noResults = (
    <div className="List--noResults">
      No pictures were taken by
      {` ${rover} `}
      on this day
    </div>
  );

  return (
    <div className="List--container">
      <div className="List--containerTitle">
        Pictures taken by
        {` ${rover} `}
        on This Day
      </div>
      <div className="List--pictures">
        {(pictures.length > 0 &&
          pictures.map((picture: any) => {
            return (
              <div>
                <img
                  className="List--picture"
                  src={picture.img_src}
                  alt={`Mars from the ${picture.camera.full_name} of the ${rover} Rover on ${date}`}
                />
              </div>
            );
          })) ||
          noResults}
      </div>
    </div>
  );
};

List.defaultProps = {
  rover: '',
  date: '',
  pictures: [],
};

export default List;
