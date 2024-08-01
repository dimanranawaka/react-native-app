import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {getMovie} from '../services/services';
import {ScrollView} from 'react-native-gesture-handler';

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieId;

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <Text>{movieDetail.title}</Text>
        </ScrollView>
      )}
    </React.Fragment>
  );
};

export default Detail;
