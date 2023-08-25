import React, { useState } from 'react';

function combos() {
    const [escolaFisica, setEscolaFisica] = useState('');
    const [habitantes, setHabitantes] = useState('');
    const [showMessages, setShowMessages] = useState(false);

    const handleEscolaFisicaChange = (event) => {
        setEscolaFisica(event.target.value);
        // Reset the habitantes selection when escolaFisica changes
        setHabitantes('');
        setShowMessages(false);
    };

    const handleHabitantesChange = (event) => {
        const selectedHabitantes = event.target.value;
        setHabitantes(selectedHabitantes);

        // Set showMessages to true only if "Até 10.000" is selected
        setShowMessages(selectedHabitantes === 'Até 10.000');
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
                <input
                    type="radio"
                    name="habitantes"
                    value="Até 10.000"
                    onChange={handleHabitantesChange}
                /> Até 10.000
            </label>
            <label>
                <input
                    type="radio"
                    name="habitantes"
                    value="Até 30.000"
                    onChange={handleHabitantesChange}
                /> Até 30.000
            </label>
            <label>
                <input
                    type="radio"
                    name="habitantes"
                    value="Até 50.000"
                    onChange={handleHabitantesChange}
                /> Até 50.000
            </label>
            <label>
                <input
                    type="radio"
                    name="habitantes"
                    value="51.000+"
                    onChange={handleHabitantesChange}
                /> 51.000+
            </label>

            {showMessages && habitantes === 'Até 10.000' && (
                <>
                    <div className='linha-02'></div>
                    <div className='nao10'>
                    <div className='linha-10'></div>
                    <h1>Plano sem escola física</h1>
                    <p>Taxa de adesão:   R$ 499,00</p>
                    <p>Sem exclusividade de praça</p>
                    <p>Será cobrado valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês</p>
                    </div>
                </>
            )}


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
