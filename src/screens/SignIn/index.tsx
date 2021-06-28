import React from 'react';
import { Text, View, Image} from 'react-native';
import {ButtonIcon} from '../../Components/ButtonIcon';

import illustrationImg from '../../assets/illustration.png';
import {styles} from './styles'

export function SignIn(){
  return(
    <View style={styles.container}>           
      <Image 
        source={illustrationImg} 
        style={styles.image} 
        resizeMode={'stretch'}
      />   
      <View style={styles.content}>       
        <Text style={styles.title}>
          Conecte-se {'\n'} e organize suas {'\n'}jogatinas
        </Text>  

        <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {'\n'}
        favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar no discord"
          activeOpacity={0.7}
        />
        
      </View>
    </View>    
  );
}