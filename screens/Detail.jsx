import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {getMovie} from '../services/services';

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieDetail.id;

  const [detail, setDetail] = useState();

  useEffect(() => {
    getMovie(movieId).then(data => {
      setDetail(data);
    });
  }, []);

  return (
    <React.Fragment>
      <Text>{movieDetail.title}</Text>
    </React.Fragment>
  );
};

export default Detail;
