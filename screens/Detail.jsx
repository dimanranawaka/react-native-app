import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {getMovie} from '../services/services';

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieDetail.id;

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(data => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  return (
    <React.Fragment>
      {loaded && <Text>{movieDetail.title}</Text>}
    </React.Fragment>
  );
};

export default Detail;
