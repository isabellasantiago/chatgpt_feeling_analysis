import { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


const handleColor = (color, colors) => {
    return color === colors.positivo ? 'rgba(66,156,51,0.53)' : color === colors.negativo ? 'rgba(236,2,2,0.53)' : color;
}


const handleFace = (sentimento) => {
    if(sentimento === "Positivo!") return (<Image source={require("./assets/positivo.png")} style={{ width: 136, height: 117 }} />)

    if(sentimento === "Negativo!") return (<Image source={require("./assets/negativo.png")} style={{ width: 136, height: 141 }}/>)

    if(sentimento === "Neutro!") return (<Image source={require("./assets/neutro.png")} style={{ width: 136, height: 108 }}/>)

    return null;
}

const Face = ({
    sentimento,
    color,
    colors
}) => {
    const [faceColor, setFaceColor] = useState('');

    useEffect(() => {
        setFaceColor(handleColor(color, colors))
    }, [color, sentimento])

    return(
    <View style={styles.container}>
        {sentimento === "Negativo!" ? (
            <Image source={require('./assets/no.png')} style={styles.noImg}/>
        ) : null}
        <View style={{
            ...styles.circle,
            backgroundColor: faceColor,
        }}>
            {sentimento ? handleFace(sentimento) : null}
        </View>
        <Text style={{
            ...styles.feelingText,
            color: faceColor,
        }}>
            {sentimento}
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        position: 'relative'
    },
    noImg: {
        position: 'absolute',
        top: -20,
        right: -30,
        width: 70,
        height: 52,
        transform: [{ rotate: '-11deg'}]
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 247,
        borderRadius: '50%',
        padding: 10,
    },
    feelingText: {
        fontFamily: 'Inter-Bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})

export default Face;