import * as React from 'react';
import {StyleSheet, Text, View , Image, ScrollView, Button} from 'react-native';
import 'react-native-gesture-handler';
import { Movie } from '../components/Movie'

export const HomeScreen= ({ navigation }) => {
    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=600d38b9ea12ad8eed83670ed81d230c&page=2";  
    const FEATURED_API2 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=600d38b9ea12ad8eed83670ed81d230c&page=1";  
  
    
    const [movies, setMovies] = React.useState([]); 

    React.useEffect(() => {
      fetch(FEATURED_API2+ FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
              setMovies(data.results);
      });
  }, []);
  
    return (
     
      <View style={styles.container}>
        <Text style={styles.title}>Movie Catalog</Text>
      <ScrollView style={styles.results}>
       {movies && movies.map((movie) => <Movie key={movie.id} {...movie}/>)}
      </ScrollView>
      <Button
          title="Tv Shows Section"
          onPress={() => navigation.navigate('TvShow')}
        />
          <Button
          title="Movies Section"
          onPress={() => navigation.navigate('Movie')}
        />
      </View>
      
    );
    
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#000000',
      alignItems:'center',
      justifyContent:'flex-start',
      paddingTop: 70,
      paddingHorizontal:20,
    },
    title:{
    color:'#FFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign:'center',
    marginBottom: 20,
    },
    searchbox:{
    fontSize:20,
    fontWeight:'300',
    padding: 20,
    width:'100%',
    backgroundColor: '#FFF',
    borderRadius:8,
    marginBottom:40
    },
    results:{
      flex:1,
    },
  })