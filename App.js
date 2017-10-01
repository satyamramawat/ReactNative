import React, {Component} from 'react';
import { AppRegistry,
   StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
 } from 'react-native';

 import Note from './app/components/Note';

export default class App extends Component {

  state={
    noteArray:[{date:'1st October 2017', note:'Created by SATYAM'}],
    noteText:'',
    }

  render() {

    let notes = this.state.noteArray.map((val,key)=>{
     return<Note key={key} keyval={key} val={val} deleteMethod={
       ()=>this.deleteNote(key)
       }/>
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTER -</Text>

          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            
            <TextInput style={styles.textInput}
                 onChangeText={(noteText)=> this.setState({noteText})} value={this.state.noteText}
                 placeholder='> Type your note here' placeholderTextColor='white' underlineColorAndroid='transparent'>
            </TextInput> 
          
        </View>
            
          <ScrollView style={styles.scrollContainer}>
          {notes}  
          </ScrollView>  

          <View style={styles.footer}>

          <TouchableOpacity onPress={this.adminInfo.bind(this)} style={styles.adminButton}>
                <Text style={styles.adminText}>Admin Info</Text>
            </TouchableOpacity>
            
            
          </View> 
            
        </View>
    );
  }
  addNote()
  {
   if(this.state.noteText)
   {
     var d= new Date();
     this.state.noteArray.push( {'date': d.getFullYear() + "/" +(d.getMonth()+1) + "/" + d.getDate(),'note':this.state.noteText});
     this.setState({noteArray:this.state.noteArray})
     this.setState({noteText:''});
   }
  }

  deleteNote(key)
  {
   this.state.noteArray.splice(key,1);
   this.setState({noteArray:this.state.noteArray})
  }

  adminInfo()
  {
    Alert.alert(
      'Admin Information',
      'Satyam Ramawat - satyamramawat@gmail.com',
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  header:{
    backgroundColor: '#E91E64',
    alignItems: 'center',
    justifyContent:'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color:'white',
    fontSize:18,
    padding:26,
  },
  scrollContainer:
  {
    flex: 1,
    marginBottom: 100,
  },
  footer:{
    position:'absolute',
    alignItems:'center',
    bottom:-7,
    left: 0,
    right: 0,

    padding: 20,
    paddingTop:0,
    backgroundColor:'#252525',
    borderTopWidth: 2,
    borderTopColor:'#ededed',
    
  },
  addButton:{
    backgroundColor: '#252525',
    width:90,
    height: 90,
    borderRadius: 50,
    borderColor: '#fff',
    borderStyle:'solid',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex:10,
  },
  addButtonText:{
     color:'#fff',
     fontSize: 24,
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop:46,
    backgroundColor:'#252525',
    borderTopWidth: 2,
    borderTopColor:'#ededed',

  },
 
  adminButton:{
    backgroundColor: '#E91E64',
    width:160,
    height: 30,
    top:5,
    borderRadius: 50,
    borderColor: '#fff',
    borderStyle:'solid',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  adminText:{
    color:'#fff',
    fontSize: 15,
 },

});

AppRegistry.registerComponent('cal',()=> cal);