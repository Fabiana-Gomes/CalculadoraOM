import React, { useState } from 'react';

function combos() {
    const [escolaFisica, setEscolaFisica] = useState('');

    const handleEscolaFisicaChange = (event) => {
        setEscolaFisica(event.target.value);
    };

    return (
        <div className='CombosContainer'>
            <p>É uma escola física?</p>
            <label>
                <input
                    type="radio"
                    name="escolaFisica"
                    value="Sim"
                    onChange={handleEscolaFisicaChange}
                /> Sim
            </label>
            <label>
                <input
                    type="radio"
                    name="escolaFisica"
                    value="Não"
                    onChange={handleEscolaFisicaChange}
                /> Não
            </label>

            <div className='linha-01'></div>

            <p>Quantos habitantes tem a cidade?</p>
            <label>
                <input type="radio" name="habitantes" value="Até 10.000" /> Até 10.000
            </label>
            <label>
                <input type="radio" name="habitantes" value="Até 30.000" /> Até 30.000
            </label>
            <label>
                <input type="radio" name="habitantes" value="Até 50.000" /> Até 50.000
            </label>
            <label>
                <input type="radio" name="habitantes" value="51.000+" /> 51.000+
            </label>

            {escolaFisica === 'Sim' && (
                <>
                    <div className='linha-02'></div>
                    
                    <p>É uma praça exclusiva?</p>
                    <label>
                        <input type="radio" name="pracaExclusiva" value="Sim" /> Sim
                    </label>
                    <label>
                        <input type="radio" name="pracaExclusiva" value="Não" /> Não
                    </label>
                    
                    <div className='linha-03'></div>
                    
                    <p>Qual produto você deseja? (selecione mais de um)</p>
                    <label>
                        <input type="checkbox" name="produtos" value="Ouro Moderno" /> Ouro Moderno
                    </label>
                    <label>
                        <input type="checkbox" name="produtos" value="Presencial" /> Presencial
                    </label>
                    <label>
                        <input type="checkbox" name="produtos" value="Online" /> Online
                    </label>
                    <label>
                        <input type="checkbox" name="produtos" value="NR" /> NR
                    </label>
                    <label>
                        <input type="checkbox" name="produtos" value="Inglês" /> Inglês
                    </label>
                </>
            )}
        </div>
    );
}

export default combos;
