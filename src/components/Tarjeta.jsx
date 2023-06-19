import React, {useState} from 'react';
import { Select, Box, Button, Alert, AlertIcon, Heading, Text} from '@chakra-ui/react';
import imagen from '../assets/aire-acondicionado.png';
import styles from './estilos.module.css';


const Tarjeta = () => {
    const [area, setArea] = useState(0);
    const [zona, setZona] = useState('');
    const [tipoDeInmueble, setTipoDeInmueble] = useState('');
    const [cantidadEquipos, setCantidadEquipos] = useState(0);
    const [clima, setClima] = useState('');
    const [btv, setBTV] = useState(0);
    const [error, setError] = useState(false);
    const [tipoAire, setTipoAire] = useState('');


    const handleChange = (event) => {
        event.preventDefault();

        if(event.target.id === 'area'){

            if(event.target.value===''){
                setArea(0);
            }else{setArea(parseInt(event.target.value));}


        } else if(event.target.id === 'zona'){
            setZona(event.target.value);


        } else if(event.target.id === 'tipo'){
            setTipoDeInmueble(event.target.value);
        } else if(event.target.id === 'equipos'){
            if(event.target.value===''){
                setCantidadEquipos(0);
            }else{setCantidadEquipos(parseInt(event.target.value));}
           
        } else if(event.target.id === 'clima'){
            setClima(event.target.value);
        }


    }

    const handleconsulta = () => {
        if(area === 0 || zona==='' || cantidadEquipos===0 || clima===''){
            setError(true);
        }
        else{
            setError(false);
            console.log(btv);
        
        if(area<20){
            if(zona==='Residencial'){
                if (cantidadEquipos===1) {
                    setBTV(6000)
                } else
                if (cantidadEquipos===2) {
                    setBTV(7000)
                } else
                if (cantidadEquipos===3) {
                    setBTV(8000)
                } else
                if (cantidadEquipos===4) {
                    setBTV(9000)
                } else
                if (cantidadEquipos===5) {
                    setBTV(10000)
                } else
                if (cantidadEquipos===6) {
                    setBTV(10000)
                } else
                if (cantidadEquipos===7) {
                    setBTV(11000)
                } else
                if (cantidadEquipos===8) {
                    setBTV(12000)
                } else
                if (cantidadEquipos===9) {
                    setBTV(13000)
                } else
                if (cantidadEquipos===10) {
                    setBTV(14000)
                }
            }
            if(zona==='Comercial'){
                if(cantidadEquipos===1){
                    setBTV(8000);
                }else if(cantidadEquipos===2){
                    setBTV(9000);
                }else if(cantidadEquipos===3){
                    setBTV(10000);
                }else if(cantidadEquipos===4){
                    setBTV(11000);
                }else if(cantidadEquipos===5){
                    setBTV(12000);
                }else if(cantidadEquipos===6){
                    setBTV(12000);
                }else if(cantidadEquipos===7){
                    setBTV(13000);
                }else if(cantidadEquipos===8){
                    setBTV(14000);
                }else if(cantidadEquipos===9){
                    setBTV(15000);
                }else if(cantidadEquipos===10){
                    setBTV(16000);
                }
            }
        }else if(area===20){
            if(cantidadEquipos===1){
                setBTV(10000);
            }else if(cantidadEquipos===6){
                setBTV(14000);
            }
        }else if(area===25){
            if(cantidadEquipos===2){
                setBTV(11000);
            }else if(cantidadEquipos===7){
                setBTV(15000)
            }
        }else if(area===30){
            if(cantidadEquipos===3){
                setBTV(12000);
            }else if(cantidadEquipos===8){
                setBTV(16000)
            }
        }else if(area===35){
            if(cantidadEquipos===4){
                setBTV(13000);
            }else if(cantidadEquipos===9){
                setBTV(17000)
            }
        }
        else if(area===40){
            if(cantidadEquipos===5){
                setBTV(14000);
            }else if(cantidadEquipos===10){
                setBTV(18000)
            }
        }else if(area>40){
            
            if (cantidadEquipos===1) {
                setBTV(14000)
            } else
            if (cantidadEquipos===2) {
                setBTV(15000)
            } else
            if (cantidadEquipos===3) {
                setBTV(16000)
            } else
            if (cantidadEquipos===4) {
                setBTV(17000)
            } else
            if (cantidadEquipos===5) {
                setBTV(18000)
            } else
            if (cantidadEquipos===6) {
                setBTV(18000)
            } else
            if (cantidadEquipos===7) {
                setBTV(19000)
            } else
            if (cantidadEquipos===8) {
                setBTV(20000)
            } else
            if (cantidadEquipos===9) {
                setBTV(21000)
            } else
            if (cantidadEquipos===10) {
                setBTV(22000)
            }
  
        }

        if(zona==='Residencial'){
            if(clima==='Humedo'){
                setTipoAire('Aire acondicionado Split, Aire acondicionado por conductos y Aire acondicionado fancoil ');
            }
            else if(clima==='HumedoSeco'){
                setTipoAire('Aire acondicionado multisplit, Aire acondicionado solar, Aire acondicionado con bomba de calor, Aire acondicionado sin unidad exterior y Aire acondicionado inverter')
            }
            else{
                setTipoAire('Aire acondicionado portátil y Aire acondicionado evaporativo')
            }
        }
        else{
            if(clima==='Humedo'){
                setTipoAire('N/A');
            }
            else if(clima==='HumedoSeco'){
                setTipoAire('Aire acondicionado Split Cassette, Aire acondicionado VRV y Aire acondicionado con enfriadoras de agua')
            }
            else{
                setTipoAire('Aire acondicionado Roof Top')
            }
        }

        }


        
    }

    
  return (
    <Box marginTop='5vh'>
        <Box w='50vw' 
            noOfLines={4} 
            display="flex"  
            alignItems="center" 
            justifyContent='space-around' 
            height="60vh" 
            marginLeft='25vw' 
            flexDirection='row'
            borderWidth='1px' 
            borderRadius='lg'
            padding='3vw'
            bg='gray.50'
            >

            
            <div className={`${styles.imgContainer} ${styles.contenedorImagen}`}>
                <Heading>BTV calculator</Heading>
                <img src={imagen} alt="Mi imagen" />
            </div>

            <Box width='15vw' display='flex' flexDirection='column'>
                <Text fontSize='3xl'>Ingresa los datos para realizar el cálculo</Text>
                <Select id='area' placeholder='Selecciona el área del inmueble'  marginTop='2vh' bg='white' onChange={handleChange}>
                    <option value='10'>{'<20'}</option>
                    <option value='20'>20</option>
                    <option value='25'>25</option>
                    <option value='30'>30</option>
                    <option value='40'>40</option>
                    <option value='50'>{'>40'}</option>
                </Select>


                <Select id='zona' placeholder='Selecciona la zona del inmueble'  marginTop='2vh' bg='white' onChange={handleChange}>
                    <option value='Residencial'>Residencial</option>
                    <option value='Comercial'>Comercial</option>
                </Select>
                {zona === 'Comercial' && <Select id='tipo' placeholder='Selecciona el tipo de inmueble'  marginTop='2vh' bg='white' onChange={handleChange}>
                    <option value='Colegio'>Colegio</option>
                    <option value='Comercio'>Comercio</option>
                    <option value='Oficina'>Oficina</option>
                </Select>}
                
                <Select id='equipos' placeholder='Cantidad de equipos'  marginTop='2vh' bg='white' onChange={handleChange}>
                    {(area<20 || area>40 || area===20 ) && <option value='1'>1</option>}
                    {(area<20 || area>40 || area===25 ) && <option value='2'>2</option>}
                    {(area<20 || area>40 || area===30 ) && <option value='3'>3</option>}
                    {(area<20 || area>40 || area===35 ) && <option value='4'>4</option>}
                    {(area<20 || area>40 || area===40 ) && <option value='5'>5</option>}
                    {(area<20 || area>40 || area===20 ) && <option value='6'>6</option>}
                    {(area<20 || area>40 || area===25 ) && <option value='7'>7</option>}
                    {(area<20 || area>40 || area===30 ) && <option value='8'>8</option>}
                    {(area<20 || area>40 || area===35 ) && <option value='9'>9</option>}
                    {(area<20 || area>40 || area===40 ) && <option value='10'>10</option>}
                </Select>
                <Select id='clima' placeholder='Selecciona el clima'  marginTop='2vh' bg='white' onChange={handleChange}>
                    <option value='Humedo'>Húmedo</option>
                    <option value='HumedoSeco'>Húmedo y seco</option>
                    <option value='Seco'>Seco</option>
                </Select>

                {error && <Alert status='warning' mt='2vh'>
                    <AlertIcon />
                    Debes llenar todos los campos
                </Alert>}

                <Button colorScheme='gray' marginTop='2vh' onClick={handleconsulta}>Consultar</Button>
                

            </Box>
            
        </Box>

        <Box w='50vw' 
            noOfLines={4} 
            display="flex"  
            alignItems="center" 
            justifyContent='space-around' 
            height="25vh" 
            marginLeft='25vw' 
            flexDirection='row'
            borderWidth='1px' 
            borderRadius='lg'
            marginTop='5vh'
            padding='3vw'
            bg='gray.50'
            >
            <Heading width='10vw'>Resultados</Heading>
            <Box width='30vw'>
                <Text fontSize='2xl'>Los BTV necesarios son: {btv}</Text>
                <Text fontSize='2xl'>Las tipologías son: {tipoAire}</Text>
            </Box>
            


        </Box>

    </Box>
    
    
  );
};

export default Tarjeta;