import React from 'react';
import {StyleSheet, Text, View , Image, ScrollView, TextInput} from 'react-native';
import { Movie } from './components/Movie';

export default function App() {

  const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=600d38b9ea12ad8eed83670ed81d230c&page=1";
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=600d38b9ea12ad8eed83670ed81d230c&query=";


  const [movies, setMovies ] = React.useState([]); 
  const [state, setState] = React.useState({
     s:"Enter a movie..",
     results:[],
     selected:{}
   });
  
  
  React.useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
            setMovies(data.results);
    });
}, []);

const handleOnsubmit = (e) => {
  e.preventDefault();

  fetch(SEARCH_API + state.s)
  .then((res) => res.json())
  .then((data) => {
    const results= data.results
    setMovies(data.results)
  })
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>MOVIE DB API</Text>
    <TextInput
    style={styles.searchbox}
    onChangeText={text => setState(prevState => {
        return {...prevState, s: text}
    })}
    onSubmitEditing={handleOnsubmit}
    value={state.s}
    />    
    <ScrollView style={styles.results}>
     
      {movies && movies.map((movie) => <Movie key={movie.id} {...movie}/>)}
      
    
    </ScrollView>
    
    </View>
    
  );
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#22254b',
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
