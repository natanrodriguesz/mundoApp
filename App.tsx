import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native"
import { useState, useEffect } from "react"

export default function App() {

  useEffect(() => {

    setTimeout (() => {

      setSplash(false)

    }, 3000)

  },[])

 

  const [splash, setSplash] = useState(true)

 const [nomePais, setNomePais] = useState("")

  const [pais, setPais] =useState<any>(null)


  function buscarPais(){

    fetch(`https://countries.dev/name/${nomePais}`)

    .then(response => response.json())

    .then(data => {

      setPais(data[0])

    })

  } 
 
  if (splash) {
    return (
      <View  style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F172A',
        padding: 24
      }}>
        <Image 
          source={require("./assets/ChatGPT Image 8 de set. de 2026, 20_04_13.png")} 
          style={{ 
            width: '80%', 
            maxHeight: 280, 
            resizeMode: 'contain',
            borderRadius: 20
          }}
        />
        <Text style={{
          fontSize: 32,
          fontWeight: '800',
          marginTop: 24,
          textAlign: 'center',
          color: '#F8FAFC',
          letterSpacing: 1
        }}>
          nextComport
        </Text>
      </View>
    )
  } 

  return ( 
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      style={{ flex: 1, backgroundColor: '#F8FAFC' }}
    >

    <ImageBackground source={{ uri: 'https://elements-resized.envatousercontent.com/elements-video-cover-images/48a76174-b0a1-4d4c-a920-1c9e6fbac594/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=e5d4c669895c7e8ca5625ba81dc230c9c715acb75aef80c68d5868e2a073dac4' }} style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center', // Centraliza os elementos na vertical
          alignItems: 'center',     // Centraliza os elementos na horizontal
        }}
        resizeMode="cover">

      <View style={{
        padding: 24,
        maxWidth: 500,
        width: '100%',
        alignSelf: 'center'
      }}>
        
        <Text style={{
          fontSize: 28, 
          fontWeight: '700', 
          marginBottom: 20, 
          color: '#f9f9fb',
          textAlign: 'center'
        }}>
          Buscar País
        </Text>

        <TextInput 
          placeholder="Digite o nome do país..." 
          placeholderTextColor="#94A3B8"
          value={nomePais}
          onChangeText={setNomePais}
          style={{
            height: 52, 
            borderWidth: 1.5, 
            borderRadius: 14, 
            borderColor: '#E2E8F0',
            backgroundColor: '#FFFFFF',
            paddingHorizontal: 16,
            fontSize: 16,
            color: '#0F172A',
            marginBottom: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.03,
            shadowRadius: 4,
            elevation: 1
          }}
        />

        
        <TouchableOpacity 
          onPress={buscarPais}
          activeOpacity={0.8}
          style={{
            height: 52,
            backgroundColor: '#2563EB', 
            borderRadius: 14,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#2563EB',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 3,
            marginBottom: 24
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
            Buscar
          </Text>
        </TouchableOpacity> 

        
        {pais && (
          <View style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#F1F5F9',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.05,
            shadowRadius: 12,
            elevation: 2
          }}>
            <Image 
              source={{ uri: pais.flags.png }}
              style={{
                height: 180, 
                width: '100%',
                borderRadius: 12,
                marginBottom: 20,
                resizeMode: 'cover'
              }}
            />
        
            <Text style={{ 
              fontSize: 22, 
              fontWeight: '700', 
              color: '#0F172A',
              marginBottom: 12,
              textAlign: 'center'
            }}>
              {pais.name}
            </Text>

            <View style={{ width: '100%', gap: 8 }}>
              {pais.capital && (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
                  <Text style={{ color: '#64748B', fontSize: 15, fontWeight: '500' }}>Capital:</Text>
                  <Text style={{ color: '#1E293B', fontSize: 15, fontWeight: '600' }}>
                    {pais.capital}
                  </Text>
                </View>
              )}

              {pais.callingCodes && (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 }}>
                  <Text style={{ color: '#64748B', fontSize: 15, fontWeight: '500' }}>Código telefônico:</Text>
                  <Text style={{ color: '#1E293B', fontSize: 15, fontWeight: '600' }}>
                    {pais.callingCodes}
                  </Text>
                </View>
              )}
            </View>

          </View>
        )}
      </View>
    </ImageBackground>
    </ScrollView>
  )
}

