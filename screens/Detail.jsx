import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  View,
} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import {getMovie} from '../services/services';
import dateFormat from 'dateformat';

const placeholderImage = require('../assets/images/placeholder.png');
const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const {movieId} = route.params;

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const [rating, setRating] = useState(0);

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
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
              <View style={styles.genresContainer}>
                {movieDetail.genres.map(genre => (
                  <Text style={styles.genre} key={genre.id}>
                    {genre.name}
                  </Text>
                ))}
              </View>
            )}
            <StarRating
              rating={movieDetail.vote_average / 2}
              onChange={newRating => setRating(newRating)} // Update the rating state on change
              starSize={30}
              starStyle={{marginHorizontal: 2}}
              maxStars={5}
              color={'gold'}
            />
            <Text style={styles.overview}>{movieDetail.overview}</Text>

            <Text style={styles.release}>
              {'Release date: ' +
                dateFormat(movieDetail.release_date, 'mmmm dS, yyyy')}
            </Text>
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height / 2.5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
});

export default Detail;
