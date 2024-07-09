import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ContextoTema } from '../contextos/contextoTema';



const Controles = () => {

    const {aumentarFuente,disminuirFuente,alinearIzquierda,alinearDerecha,alinearCentro}=useContext(ContextoTema);

    return ( 
        <ContenedorControles>
            <div>
                <Boton onClick={aumentarFuente}>Aumentar fuente</Boton>
                <Boton onClick={disminuirFuente}>Disminuir fuente</Boton>
            </div>

            <div>
                <Boton onClick={alinearIzquierda}>Centrar a la izquierda</Boton>
                <Boton onClick={alinearCentro}>Centrar al centro</Boton>
                <Boton onClick={alinearDerecha}>Centrar a la derecha</Boton>
            </div>
        </ContenedorControles>
     );
}
 
const ContenedorControles = styled.div`
    margin-top: 20px;
`;
 
const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #191668;
    }
`;

export default Controles;