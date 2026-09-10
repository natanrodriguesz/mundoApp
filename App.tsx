import { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";

export default function App(){
    
  const [nomePais, setNomePais] = useState("")
  const [pais, setPais] =useState<any>(null)

  function buscarPais(){
    fetch(`https://countries.dev/name/${nomePais}`)
    .then(response => response.json())
    .then(data => {
      setPais(data[0])
    })
  }
  
  return(

      <View style={{flex:1, justifyContent:'center', padding:20, backgroundColor:'#fefafa'}}>
        <Text style={{fontSize:30, fontWeight:'bold', marginBottom:20}}> país:</Text >
        <TextInput placeholder="digite o nome do país" 
        value={nomePais}
        onChangeText={setNomePais}
        style={{
          height:50, borderWidth:1, borderRadius:10, borderColor:'#000'
        }}/>

        <Button
         title='Buscar'
         onPress={buscarPais}/> 

         { pais && (
          <View>
            <Image 
            source={{uri:pais.flag.svg}}
            style={{height:300, width:400}}/>
        
          
            <Text>
              {pais.name}
            </Text>
          </View>
         )}


       
      </View>

      
    )

}
