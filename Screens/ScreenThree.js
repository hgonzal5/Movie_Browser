import React, {useEffect, useState, Component} from 'react';
import { render } from 'react-dom';
import {View, Text, StyleSheet, ScrollView, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native';


// class ScreenTwo extends React.Component{

//     constructor(props){
//         super(props);

//         this.state = {
//             movies: [],
//         };
        

//     }
//         getMovies = async () => {

//                         const response = await fetch('http://www.omdbapi.com/?s=' + movieName + '&page=1' + '&apikey=1a313033');
                        
//                         const result = await response.json();
                        
   
//         console.log(props.route.params.movieName);

//         this.setState ({
//             movies: result.Search,
            
//         })
        
//     };


const ScreenThree = props => {

    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {

        const getMovieDetails = async (movieName, moviePoster, movieType, movieYear, movieId) => {
           
            const response = await fetch('http://www.omdbapi.com/?i=' + movieId +  '&plot=short&apikey=1a313033');
            const result = await response.json();
            console.log(result);
            setMovieDetails(result);
           console.log(movieDetails);
        };

        getMovieDetails(props.route.params.movieName,props.route.params.moviePoster,props.route.params.movieType, props.route.params.movieYear, props.route.params.movieId);
           
    },[]);
  
    
     // how you call a rating object<Text style={styles.textNextToImage}>{movieDetails.Ratings[0].Source} : {movieDetails.Ratings[0].Value}</Text>
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.posterContainer}>
                 <Image
                         style={styles.tinyImage}
                         source={{ uri: movieDetails.Poster }}
                     />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textNextToImage}>Title: {movieDetails.Title}</Text>
                <Text style={styles.textNextToImage}>Year: {movieDetails.Year}</Text>
                <Text style={styles.textNextToImage}>Rated: {movieDetails.Rated}</Text>
                <Text style={styles.textNextToImage}>Runtime: {movieDetails.Runtime}</Text>
                <Text style={styles.textNextToImage}>Genre: {movieDetails.Genre}</Text>
                <Text style={styles.textNextToImage}>Plot: {movieDetails.Plot}</Text>
                <Text style={styles.textNextToImage}>Production: {movieDetails.Production}</Text>
                <Text style={styles.textNextToImage}>Director: {movieDetails.Director}</Text>
                <Text style={styles.textNextToImage}>Writer: {movieDetails.Writer}</Text>
                <Text style={styles.textNextToImage}>Actors: {movieDetails.Actors}</Text>
                <Text style={styles.textNextToImage}>imdbRating: {movieDetails.imdbRating}</Text>
                <Text style={styles.textNextToImage}>imdbVotes: {movieDetails.imdbVotes}</Text>

            </View>
        </ScrollView>
      </SafeAreaView>
        
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00d8d6',
    },
    posterContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer:{
        flex: 1,
        padding:10,
    },
    tinyImage: {
        width: 250,
        height: 400,
        padding: 0,
        resizeMode: 'contain',
        
    },
    textNextToImage: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textShadowOffset: {
            height: 0,
            width: 0
        },
        textShadowColor: 'black',
        textShadowRadius: 4,
        

    },


    movieDetailButton: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 15,
        borderWidth: 1,
        height: 50,
        width: 300,
        borderRadius: 15,
      },

});

export default ScreenThree;