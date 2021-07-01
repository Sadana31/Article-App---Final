import React, { Component } from "react"; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; 
import { Header, AirbnbRating, Icon } from "react-native-elements"; 
import { RFValue } from "react-native-responsive-fontsize"; 
import axios from "axios";

export default class RecommendedArticleScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        const url = "http://localhost:5000/recommended-articles";
        axios.get(url).then(async response=>{
            this.setState({
                data: response.data.data
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    keyExtractor = (item,index) => index.toString();

    renderItems = ({ item, index }) => {
        return (
          <Card
            key={`card-${index}`}
            featuredTitle={item.title}
            containerStyle={styles.cardContainer}
            featuredTitleStyle={styles.title}
          />
        );
      };

    render(){
        const {data} = this.state;

        return(
            <View style={styles.containerStyle}>
                <Flatlist
                data={data}
                renderItem={this.renderItems}
                keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    title: {
      color: "#fff",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(25),
      marginTop: RFValue(65)
    },
    subtitle: {
      fontWeight: "bold",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(15)
    },
    cardContainer: {
      flex: 1,
      borderRadius: RFValue(10),
      justifyContent: "center",
      height: RFValue(110),
      marginBottom: RFValue(20)
    }
});

