import { useEffect } from 'react';
import Tela from './Tela'
import * as Font from 'expo-font';

export default function App() {
  const loadFonts = async () => {
    await Font.loadAsync({
      'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
      'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
      'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
      'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
      'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
      'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
      'Inter': require('./assets/fonts/Inter-Regular.ttf'),
      'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
      'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
      'Bungee Shade': require('./assets/fonts/BungeeShade-Regular.ttf')
    });
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Tela />
  );
}
