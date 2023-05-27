import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '@env';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const api = `${API_URL}/sentimentos`;

const Tela = () => {
    const [texto, setTexto] = useState('');
    const [sentimento, setSentimento] = useState('');

    const handlePress = async () => {
        console.log(`${api}`)
        const { data } = await axios.post(`${api}`, {
            texto: texto
        })
        console.log('data', data)

        setSentimento(data.texto);
    };

    const onChangeText = (e) => {
        setTexto(e.target.value)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escreva uma frase para o ChatGPT dizer qual o sentimento dele sobre a frase!
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite uma frase aqui"
                value={texto}
                onChangeText={setTexto}
            />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <Text>{sentimento}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
    input: {
        marginTop: 8,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 4,
        width: '100%',
    },
    button: {
        marginTop: 16,
        backgroundColor: '#8B4690',
        borderRadius: 3,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});

export default Tela;