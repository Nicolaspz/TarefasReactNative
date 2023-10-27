import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList
    } from 'react-native';
    import {FontAwesome} from '@expo/vector-icons'
import { useState,useEffect } from 'react';
import Tarefa from './src/Tarefas';

export default function App() {
  const [tarefa, setTarefa]=useState('')
  const [list, setList]=useState([])

  function handleDelete(item){
  let NewList = list.filter((tarefa)=>{
    return (tarefa.name !== item)
   })
   setList(NewList);
  }
function handdle(){
  if(tarefa === ''){
    return;
  }
  
  const dados={
    key:Date.now(),
    name:tarefa,
  }
  //const newList = [...list, dados];
  setList(oldAray=>[dados, ...oldAray]);
  setTarefa("");
}

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Tarefas </Text>
        
        <View style={styles.form}>
    <TextInput
    placeholder='Insira a tarefa'
    style={styles.input}
    onChangeText={(text)=>setTarefa(text)}

    />
    <TouchableOpacity style={styles.btnAdd} onPress={handdle} >
        <FontAwesome
            name='plus'
            size={20}
            color="#fff"
            d
            />
    </TouchableOpacity>
        
        </View>

     
       <FlatList 
       style={styles.list}
       data={list}
       keyExtractor={(item)=> item.key}
       renderItem={({item})=> <Tarefa data={item} deleteItem={()=>handleDelete(item.name)}/>}
       />
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop:28
  },
  title:{
    fontSize:28,
    fontWeight:'900',
    paddingStart:15,
    color:'#fff',
    marginBottom:10,
    
  },
  form:{
    flexDirection:'row',
    
    width:'100%',
    height:44,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:22
  },
  input:{
    width:'75%',
    backgroundColor:'#fbfbfb',
    height:44,
    borderRadius:4,
    paddingHorizontal:8,
  },
  btnAdd:{
    width:'15%',
    height:44,
    backgroundColor:'#73f7ff',
    marginLeft:8,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4,
  },
  list:{
    flex:1,
    backgroundColor:'#fff',
    paddingStart:'4%',
    paddingEnd:'4%'
  }
});
