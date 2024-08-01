import React, {useState} from 'react';
import {Text} from 'react-native';

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieDetail.id;

  const [detail, setDetail] = useState();

  return (
    <React.Fragment>
      <Text>{movieDetail.title}</Text>
    </React.Fragment>
  );
};

export default Detail;
