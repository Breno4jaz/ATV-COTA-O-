import { StatusBar } from 'expo-status-bar';
import Home from './src/Home';

export default function App() {
  return (
    
    <>
      <StatusBar style="light" translucent={false} backgroundColor='#121212' />
      <Home />
    </>
    
  );
}


