import './App.css';
import Tarjeta from './components/Tarjeta';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Tarjeta titulo='titulo' contenido='tarjeta'/>
    </ChakraProvider>
  );
}

export default App;
