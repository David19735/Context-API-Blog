import { toBeEnabled } from '@testing-library/jest-dom/matchers';
import React,{useState} from 'react';

{/*Creamos un contexto = Estado global*/}

const ContextoTema=React.createContext();

const ProovedorTema = ({children}) => {

    const [tema, cambiarTema]=useState({
        alineado:'center',
        fuente:18
    });

    const aumentarFuente=()=>{
        cambiarTema({...tema, fuente:tema.fuente+1});
    }

    const disminuirFuente=()=>{
        cambiarTema({...tema,fuente:tema.fuente-1})
    }

    const alinearIzquierda=()=>{
        cambiarTema({...tema,alineado:'left'})
    }

    const alinearDerecha=()=>{
        cambiarTema({...tema, alineado:'right'})
    }

    const alinearCentro=()=>{
        cambiarTema({...tema,alineado:'center'})
    }

    return(
        <ContextoTema.Provider value={{tema,aumentarFuente,disminuirFuente,alinearIzquierda,alinearDerecha,alinearCentro}}>
            {children}
        </ContextoTema.Provider>
    );
}
 
export {ContextoTema,ProovedorTema};