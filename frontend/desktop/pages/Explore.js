import React, { useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import EventCard from '../components/EventCard';
import Data, { push } from '../assets/data.js'
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';

function Explore() {
  const t = {};
  var i;
  var data = [];
  var _ud = localStorage.getItem('user_data');
  var ud = JSON.parse(_ud);
  var etags = ud.tags;

  const isFocused = useIsFocused()
  const [eventData, setEventData] = React.useState([]);

  useEffect(() => {
      axios.post('https://togethrgroup1.herokuapp.com/api/retrieveevents', {
        Tags: etags
      })
      .then((response) => {
        console.log(response); 
        for (i = 0; i < response.data.length; i++){
          var event = response.data[i];
          data.push(event);
        }
        localStorage.setItem('user_events', JSON.stringify(data));
        console.log(data);
      }, (error) => {
        console.log(error);
        alert("Something went wrong!");
      });
      setEventData(data);
      alert(eventData);
    } , [isFocused])
    
  return (
    <SafeAreaView style={{flex: 1}}>
    <NavigationBar/>
    <View style={styles.page}>
      
      <CardStack 
      disableTopSwipe = {true}
      disableBottomSwipe = {true}
      disableLeftSwipe = {true}
      disableRightSwipe = {true}
      style={styles.content}
      ref={swiper => {t.swiper = swiper }}
      renderNoMoreCards={() => <Text style={{ fontSize: 18, color: 'gray' }}>No more events to display</Text>}
      onSwipedLeft={() => 
        
        alert('swiped left')
      }
      onSwipedRight={() => 
        alert('swiped right')
      }
      onSwipedBottom={() => 
        
        alert('swiped down')
      }>
        {eventData.map((item, index) => (
        <Card key={index}>
          <EventCard
            title={item.EventName}
            description={item.EventDescription}
            startDate={item.StartDate}
            endDate={item.EndDate}
            attendees={item.Attendees}
            />
        </Card>
         ))}
      </CardStack>

      <View style={{flexDirection:'row'}}> 
      <TouchableOpacity 
        onPress={() => t.swiper.swipeLeft()}>
       <Ionicons name="close-circle"  size={50} color="back" />
      </TouchableOpacity>

      <Text style={styles.buttonSpace}></Text>

      <TouchableOpacity 
        onPress={() => t.swiper.swipeBottom()}>
       <Ionicons name="heart-outline"  size={45} color="back" />
      </TouchableOpacity>

      <Text style={styles.buttonSpace}></Text>

      <TouchableOpacity 
        onPress={() => t.swiper.swipeRight()}>
       <Ionicons name="checkmark-circle"  size={50} color="back" />
      </TouchableOpacity>

    </View>
    </View>
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  content:{
   flex: 5,
   alignItems: 'center',
   justifyContent: 'center',
 },
 page:{
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center', 
  paddingBottom: 50,
},
buttonSpace:{
  width: 20
}
})
export default Explore;