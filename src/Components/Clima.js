import React from 'react';

const Clima = ({resultado}) => {
    // extraer valores 
    const {name, main} = resultado; 
    // para que no error dado que al principio no tenemosestos valores hasta que se complete y se ponga 
    // en los valores ;  si no hay nada en el main entonces retorna nulo
    if (!name) return null; 

    // para psar a grados kelvin 
    const kelvin = 273.15; 
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
            <h2>El clima de {name} es: </h2>
            <p className="temperatura">
                {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
            </p>

            <p> Temperatura Maxima: 
                {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
            </p>

            <p> Temperatura Minima: 
                {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
            </p>

            </div>
        </div>
    );
}
export default Clima;