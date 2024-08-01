import React, {useState, useEffect} from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {getMovie} from '../services/services';
// import {ScrollView} from 'react-native-gesture-handler';

const placeholderImage = require('../assets/images/placeholder.png');

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
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }
          />
        </ScrollView>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});

export default Detail;
