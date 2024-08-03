import React ,{useState} from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Search = ({navigation}) => {
  const [text, onChangeText] = useState();
  const onsubmit = query => {
    console.log(query);
  };
  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder={'Search Movie or TV Show'}
            onChangeText={onChangeText}
            value={text}
          />
          </View>
          <TouchableOpacity
            onPress={() => {
             onsubmit(text)
            }}>
            <Icon name={'search-outline'} size={30} />
          </TouchableOpacity>
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
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },

  searchItems: {
    padding: 5,
  },

  noResults: {
    paddingTop: 20,
  },
});

export default Search;
