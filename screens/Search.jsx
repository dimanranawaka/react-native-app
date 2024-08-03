import React ,{useState} from 'react';
import {SafeAreaView, View, TextInput,StyleSheet} from 'react-native';

const Search = ({navigation}) => {
  const [text, onChangeText] = useState();
  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Search Movie or TV Show'}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 0.5,
    height: 50,
    padding: 8,
  },
  container: {
    padding: 10,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Search;
