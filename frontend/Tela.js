import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '@env';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar
} from 'react-native';
import Face from './Face';

const api = `${API_URL}/sentimentos`;
const colors = {
    positivo: '#53A446',
    negativo: '#D12626',
    neutro: '#CEE1E9',
    default: '#D3D3D3'
}

const parseFeelings = (feeling) => {
    if(feeling.includes('Positivo')) return 'Positivo!'
    if(feeling.includes('Negativo')) return 'Negativo!'
    if(feeling.includes('Neutro')) return 'Neutro!'

    return '';
}

const Tela = () => {
    const [texto, setTexto] = useState('');
    const [sentimento, setSentimento] = useState('');
    const [color, setColor] = useState(colors.default);

    const handleFeelings = (sentimento) => {
        switch (sentimento) {
            case 'Positivo!':
                setColor(colors.positivo)
                break;
            case 'Negativo!':
                setColor(colors.negativo)
                break;
            case 'Neutro!':
                setColor(colors.neutro)
                break;
            default:
                setColor(colors.default);
        }
    }

    const handlePress = async () => {
        const { data } = await axios.post(`${api}`, {
            texto: texto
        })

        const feelingParsed = parseFeelings(data.sentimento);
        handleFeelings(feelingParsed)

        setSentimento(feelingParsed);
    };

    useEffect(() => {

    }, [sentimento])

    return (
        <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <View style={styles.header}>
            <Text style={
                {...styles.logo,
                color: `${color === '#D3D3D3' ? '#000' : color}`}}
            >
                GPTFeelings
            </Text>
        </View>
        <View style={styles.container}>
        <View style={{
            ...styles.inputArea,
            backgroundColor: color
        }}>
            <TextInput
                style={styles.input}
                placeholder="Digite uma frase aqui"
                value={texto}
                onChangeText={setTexto}
            />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.feelingArea}>
            <Text
                style={styles.paragraph}
            >
                Saiba o sentimento do ChatGPT referente a sua frase!
            </Text>
            {sentimento ? (
                <Face 
                sentimento={sentimento}
                color={color}
                colors={colors}
                />
            ) : null}
        </View>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        height:43,
        padding: '10px',
        backgroundColor: "#FFF",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    inputArea: {
        height: 163,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        gap: 10,
    },
    logo: {
        fontFamily: 'Bungee Shade',
        fontSize: 16,
    },
    input: {
        width: '100%',
        height: 40,
        border: '1px solid #d3d3d3',
        borderRadius: 4,
        backgroundColor: '#fff',
        padding: 10,
        color: 'rgba(0,0,0,0.59)'
    },
    button: {
        backgroundColor: '#FFF',
        borderRadius: 4,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Inter-SemiBold',
        color: 'black',
        fontWeight: '600',
        fontSize: 14,
    },
    feelingArea:{
        alignItems: 'center',
        paddingTop: 30,
        gap: 50,
    },
    paragraph: {
        fontFamily: 'Inter',
        fontSize: 14,
        textAlign: 'center',
        width: '60%'
    },
});

export default Tela;