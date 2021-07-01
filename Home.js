import React, { Component } from "react"; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; 
import { Header, AirbnbRating, Icon } from "react-native-elements"; 
import { RFValue } from "react-native-responsive-fontsize"; 
import axios from "axios";
import {WebView} from 'react-native-webview';

export default class HomeScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            article_details: {}
        }
    }

    getArticles=()=>{
        const {url} = "http://127.0.0.1:5000/get-article"
        axios.get(url)
        .then(response=>{
            this.setState({
                article_details = details
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    dislikeArticle=()=>{
        const {url} = "http://127.0.0.1:5000/disliked-articles"
        axios.post(url).then(response=>{
            this.getArticles()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    likeArticle=()=>{
        const {url} = "ttp://localhost:5000/liked-articles"
        axios.post(url).then(response=>{
            this.getArticles()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    readArticle=()=>{
        const {url} = this.state.article_details.data.url;
        return <WebView source={{uri: url}}/>
    }

    componentDidMount(){
        this.getArticles()
    }

    render() {
      const { articleDetails } = this.state;
      if (articleDetails.poster_link) {
        const {
            id,
            index,
            timestamp,
            url,
            title,
            text,
            lang,
            total_events
        } = articleDetails;
  
        return (
          <View style={styles.container}>


              <Header
                centerComponent={{
                  text: "Recommended Articles",
                  style: styles.headerTitle
                }}
                rightComponent={{ icon: "search", color: "#fff" }}
                backgroundColor={"blue"}
              />

                <View style={styles.upperBottomContainer}>
                    <Text>I guess you can read these if you want</Text>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.subtitle}>{`Language:  ${lang}`}</Text>
                </View>

                <View style={styles.container3}>

                  <View style={{ flex: 0.3 }}>
                    <AirbnbRating
                      count={5}
                      reviews={["", "", "", "", ""]}
                      defaultRating={rating}
                      isDisabled={true}
                      size={RFValue(20)}
                    />
                  </View>


                  <View style={styles.container4}>

                    <TouchableOpacity onPress={this.likeArticle}>
                      <Icon
                        reverse
                        name={"like"}
                        type={"simeplelineicons"}
                        size={RFValue(30)}
                        color={"#4DDFEF"}
                      />
                      <Text>LIKE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.dislikeArticle}>
                      <Icon
                        reverse
                        name={"dislike"}
                        type={"simplelineicons"}
                        size={RFValue(30)}
                        color={"#4DDFEF"}
                      />
                      <Text>DISLIKE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.readArticle}>
                      <Icon
                        reverse
                        name={"book-reader"}
                        type={"fontawesome5"}
                        size={RFValue(30)}
                        color={"#4DDFEF"}
                      />
                      <Text>READ</Text>
                    </TouchableOpacity>

                </View>
              </View>
            </View>
        );
      }
      return null;
    }
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(18)
  },
  upperBottomContainer: {
    flex: 0.2,
    alignItems: "center"
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    fontSize: RFValue(14),
    fontWeight: "300"
  },
  container3: {
    flex: 0.35
  },

  container4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});