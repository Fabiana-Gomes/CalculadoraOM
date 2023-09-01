import React, { useState, useEffect } from 'react';

function combos() {
    const [escolaFisica, setEscolaFisica] = useState('');
    const [habitantes, setHabitantes] = useState('');
    const [showMessage10k, setShowMessage10k] = useState(false);
    const [showMessage30k, setShowMessage30k] = useState(false);
    const [showMessage50k, setShowMessage50k] = useState(false);
    const [showMessage51k, setShowMessage51k] = useState(false);
    const [showMessageCombo10k, setShowMessageCombo10k] = useState(false);
    const [showMessageCombo210k, setShowMessageCombo210k] = useState(false);
    const [pracaExclusiva, setPracaExclusiva] = useState('');
    const [selectedProdutos, setSelectedProdutos] = useState([]);
    const [showMessageCombo30k, setShowMessageCombo30k] = useState(false);
    const [showMessageCombo230k, setShowMessageCombo230k] = useState(false);
    const [showMessageCombo50k, setShowMessageCombo50k] = useState(false);
    const [showMessageCombo250k, setShowMessageCombo250k] = useState(false);
    const [showMessageCombo51k, setShowMessageCombo51k] = useState(false);
    const [showMessageCombo251k, setShowMessageCombo251k] = useState(false);

    const handleEscolaFisicaChange = (event) => {
        setEscolaFisica(event.target.value);
    };

    const handleHabitantesChange = (event) => {
        const selectedHabitantes = event.target.value;
        setHabitantes(selectedHabitantes);
        setShowMessage10k(selectedHabitantes === 'Até 10.000' && escolaFisica === 'Não');
        setShowMessage30k(selectedHabitantes === 'Até 30.000' && escolaFisica === 'Não');
        setShowMessage50k(selectedHabitantes === 'Até 50.000' && escolaFisica === 'Não');
        setShowMessage51k(selectedHabitantes === '51.000+' && escolaFisica === 'Não');
    };

    const handlePracaExclusivaChange = (event) => {
        setPracaExclusiva(event.target.value);
    };

    const handleProdutoChange = (event) => {
        const selectedProduto = event.target.value;
        if (selectedProdutos.includes(selectedProduto)) {
            setSelectedProdutos(selectedProdutos.filter(item => item !== selectedProduto));
        } else {
            setSelectedProdutos([...selectedProdutos, selectedProduto]);
        }
    };

    useEffect(() => {
        setShowMessage10k(habitantes === 'Até 10.000' && escolaFisica === 'Não');
        setShowMessage30k(habitantes === 'Até 30.000' && escolaFisica === 'Não');
        setShowMessage50k(habitantes === 'Até 50.000' && escolaFisica === 'Não');
        setShowMessage51k(habitantes === '51.000+' && escolaFisica === 'Não');
    }, [escolaFisica, pracaExclusiva, selectedProdutos]);


    useEffect(() => {
        setShowMessageCombo10k(
            escolaFisica === 'Sim' &&
            habitantes === 'Até 10.000' &&
            pracaExclusiva === 'Não' &&
            selectedProdutos.length === 4 &&
            selectedProdutos.includes('Ouro Moderno Presencial') &&
            selectedProdutos.includes('Online') &&
            selectedProdutos.includes('NR') &&
            selectedProdutos.includes('Inglês')
        );

        setShowMessageCombo210k(
            escolaFisica === 'Sim' &&
            habitantes === 'Até 10.000' &&
            pracaExclusiva === 'Sim' &&
            selectedProdutos.length === 4 &&
            selectedProdutos.includes('Ouro Moderno Presencial') &&
            selectedProdutos.includes('Online') &&
            selectedProdutos.includes('NR') &&
            selectedProdutos.includes('Inglês')
        );


        setShowMessageCombo30k(
            escolaFisica === 'Sim' &&
            habitantes === 'Até 30.000' &&
            pracaExclusiva === 'Não' &&
            selectedProdutos.length === 4 &&
            selectedProdutos.includes('Ouro Moderno Presencial') &&
            selectedProdutos.includes('Online') &&
            selectedProdutos.includes('NR') &&
            selectedProdutos.includes('Inglês')
        );

        setShowMessageCombo230k(
            escolaFisica === 'Sim' &&
            habitantes === 'Até 30.000' &&
            pracaExclusiva === 'Sim' &&
            selectedProdutos.length === 4 &&
            selectedProdutos.includes('Ouro Moderno Presencial') &&
            selectedProdutos.includes('Online') &&
            selectedProdutos.includes('NR') &&
            selectedProdutos.includes('Inglês')
        );


        setShowMessageCombo50k(
            escolaFisica === 'Sim' &&
            habitantes === 'Até 50.000' &&
            pracaExclusiva === 'Não' &&
            selectedProdutos.length === 4 &&
            selectedProdutos.includes('Ouro Moderno Presencial') &&
            selectedProdutos.includes('Online') &&
            selectedProdutos.includes('NR') &&
            selectedProdutos.includes('Inglês')
        );

        setShowMessageCombo250k(
            escolaFisica === 'Sim' &&
            habitantes === 'Até 50.000' &&
            pracaExclusiva === 'Sim' &&
            selectedProdutos.length === 4 &&
            selectedProdutos.includes('Ouro Moderno Presencial') &&
            selectedProdutos.includes('Online') &&
            selectedProdutos.includes('NR') &&
            selectedProdutos.includes('Inglês')
        );


        setShowMessageCombo51k(
            escolaFisica === 'Sim' &&
            habitantes === '51.000+' &&
            pracaExclusiva === 'Não' &&
            selectedProdutos.length === 4 &&
            selectedProdutos.includes('Ouro Moderno Presencial') &&
            selectedProdutos.includes('Online') &&
            selectedProdutos.includes('NR') &&
            selectedProdutos.includes('Inglês')
        );

        setShowMessageCombo251k(
            escolaFisica === 'Sim' &&
            habitantes === '51.000+' &&
            pracaExclusiva === 'Sim' &&
            selectedProdutos.length === 4 &&
            selectedProdutos.includes('Ouro Moderno Presencial') &&
            selectedProdutos.includes('Online') &&
            selectedProdutos.includes('NR') &&
            selectedProdutos.includes('Inglês')
        );

    }, [escolaFisica, pracaExclusiva, selectedProdutos]);
   

    
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

            {showMessage10k && (
                <>
                    <div className='nao10'>
                    <div className='linha-10'></div>
                    <h1>Plano sem escola física</h1>
                    <p>Taxa de adesão:   R$ 499,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Inclusões: Acesso ao ambiente EAD e suas ferramentas.</p>
                    <p>Taxa por curso: Será cobrado um valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-04'></div>
                 </div>
                </>
            )}


             {showMessage30k && (
                <>
                    <div className='nao10'>
                    <div className='linha-10'></div>
                    <h1>Plano sem escola física</h1>
                    <p>Taxa de adesão:   R$ 699,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Inclusões: Acesso ao ambiente EAD e suas ferramentas.</p>
                    <p>Taxa por curso: Será cobrado um valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-04'></div>
                 </div>
                </>
            )}      

            {showMessage50k && (
                <>
                    <div className='nao10'>
                    <div className='linha-10'></div>
                    <h1>Plano sem escola física</h1>
                    <p>Taxa de adesão:   R$ 799,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Inclusões: Acesso ao ambiente EAD e suas ferramentas.</p>
                    <p>Taxa por curso: Será cobrado um valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-04'></div>
                 </div>
                </>
            )}  


            {showMessage51k && (
                <>
                    <div className='nao10'>
                    <div className='linha-10'></div>
                    <h1>Plano sem escola física</h1>
                    <p>Taxa de adesão:   R$ 899,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Inclusões: Acesso ao ambiente EAD e suas ferramentas.</p>
                    <p>Taxa por curso: Será cobrado um valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-04'></div>
                 </div>
                </>
            )} 

                    {showMessageCombo10k && (
                <>
                    <div className='simcombo1'>
                    <div className='linha-15'></div>
                    <h1>Proposta Combo 10.000 Habitantes</h1>
                    <p>Ouro Moderno Presencial: R$ 399,00.</p>
                    <p>Cursos Online: R$ 199,00.</p>
                    <p>Cursos de Inglês: R$ 199,00.</p>
                    <p>Cursos de NR's: R$ 199,00.</p>
                    <p>Total: R$ 996,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Desconto Habitantes: 50% de desconto.</p>
                    <p>Total com desconto: R$ 499,00.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-16'></div>
                 </div>
                </>
            )}  


                {showMessageCombo210k && (
                <>
                    <div className='simcombo1'>
                    <div className='linha-15'></div>
                    <h1>Proposta Combo 10.000 Habitantes</h1>
                    <p>Ouro Moderno Presencial: R$ 399,00.</p>
                    <p>Cursos Online: R$ 199,00.</p>
                    <p>Cursos de Inglês: R$ 199,00.</p>
                    <p>Cursos de NR's: R$ 199,00.</p>
                    <p>Total: R$ 996,00.</p>
                    <p>Desconto Habitantes: 50% de desconto.</p>
                    <p>Exclusividade: R$ 99,00.</p>
                    <p>Total com desconto: R$ 598,00.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-16'></div>
                 </div>
                </>
            )} 

                {showMessageCombo30k && (
                <>
                    <div className='simcombo1'>
                    <div className='linha-15'></div>
                    <h1>Proposta Combo 30.000 Habitantes</h1>
                    <p>Ouro Moderno Presencial: R$ 499,00.</p>
                    <p>Cursos Online: R$ 299,00.</p>
                    <p>Cursos de Inglês: R$ 299,00.</p>
                    <p>Cursos de NR's: R$ 299,00.</p>
                    <p>Total: R$ 1.396,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Desconto Habitantes: 50% de desconto.</p>
                    <p>Total com desconto: R$ 698,00.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-16'></div>
                 </div>
                </>
            )}  


                {showMessageCombo230k && (
                <>
                    <div className='simcombo1'>
                    <div className='linha-15'></div>
                    <h1>Proposta Combo 30.000 Habitantes</h1>
                    <p>Ouro Moderno Presencial: R$ 499,00.</p>
                    <p>Cursos Online: R$ 299,00.</p>
                    <p>Cursos de Inglês: R$ 299,00.</p>
                    <p>Cursos de NR's: R$ 299,00.</p>
                    <p>Total: R$ 1.396,00.</p>
                    <p>Desconto Habitantes: 50% de desconto.</p>
                    <p>Exclusividade: R$ 149,00.</p>
                    <p>Total com desconto: R$ 847,00.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-16'></div>
                 </div>
                </>
            )} 
            
            {showMessageCombo50k && (
                <>
                    <div className='simcombo1'>
                    <div className='linha-15'></div>
                    <h1>Proposta Combo 50.000 Habitantes</h1>
                    <p>Ouro Moderno Presencial: R$ 599,00.</p>
                    <p>Cursos Online: R$ 399,00.</p>
                    <p>Cursos de Inglês: R$ 349,00.</p>
                    <p>Cursos de NR's: R$ 349,00.</p>
                    <p>Total: R$ 1.696,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Desconto Habitantes: 47% de desconto.</p>
                    <p>Total com desconto: R$ 799,00.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-16'></div>
                 </div>
                </>
            )}  


                {showMessageCombo250k && (
                <>
                    <div className='simcombo1'>
                    <div className='linha-15'></div>
                    <h1>Proposta Combo 50.000 Habitantes</h1>
                    <p>Ouro Moderno Presencial: R$ 599,00.</p>
                    <p>Cursos Online: R$ 399,00.</p>
                    <p>Cursos de Inglês: R$ 349,00.</p>
                    <p>Cursos de NR's: R$ 349,00.</p>
                    <p>Total: R$ 1.696,00.</p>
                    <p>Desconto Habitantes: 50% de desconto.</p>
                    <p>Exclusividade: R$ 199,00.</p>
                    <p>Total com desconto: R$ 998,00.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-16'></div>
                 </div>
                </>
            )} 

                {showMessageCombo51k && (
                <>
                    <div className='simcombo1'>
                    <div className='linha-15'></div>
                    <h1>Proposta Combo 51.000 ou mais Habitantes</h1>
                    <p>Ouro Moderno Presencial: R$ 699,00.</p>
                    <p>Cursos Online: R$ 399,00.</p>
                    <p>Cursos de Inglês: R$ 399,00.</p>
                    <p>Cursos de NR's: R$ 399,00.</p>
                    <p>Total: R$ 1.896,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Desconto Habitantes: 48% de desconto.</p>
                    <p>Total com desconto: R$ 899,00.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-16'></div>
                 </div>
                </>
            )}  


                {showMessageCombo251k && (
                <>
                    <div className='simcombo1'>
                    <div className='linha-15'></div>
                    <h1>Proposta Combo 51.000 ou mais Habitantes</h1>
                    <p>Ouro Moderno Presencial: R$ 699,00.</p>
                    <p>Cursos Online: R$ 399,00.</p>
                    <p>Cursos de Inglês: R$ 399,00.</p>
                    <p>Cursos de NR's: R$ 399,00.</p>
                    <p>Total: R$ 1.896,00.</p>
                    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
                    <p>Desconto Habitantes: 48% de desconto.</p>
                    <p>Total com desconto: R$ 899,00.</p>
                    <button className='botao-compartilhar'>
                     Compartilhar 
                    </button>
                    <div className='linha-16'></div>
                 </div>
                </>
            )} 



            {escolaFisica === 'Sim' && (
                <>
                    <div className='linha-02'></div>
                    
                    <p>É uma praça exclusiva?</p>
            <label>
                <input
                    type="radio"
                    name="pracaExclusiva"
                    value="Sim"
                    onChange={handlePracaExclusivaChange}
                /> Sim
            </label>
            <label>
                <input
                    type="radio"
                    name="pracaExclusiva"
                    value="Não"
                    onChange={handlePracaExclusivaChange}
                /> Não
            </label>
                    
                    <div className='linha-03'></div>
                    
                    <p>Quais produtos você deseja?</p>
                    <label>
                        <input
                            type="checkbox"
                            name="produtos"
                            value="Ouro Moderno Presencial"
                            onChange={handleProdutoChange}
                        /> Ouro Moderno Presencial
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="produtos"
                            value="Online"
                            onChange={handleProdutoChange}
                        /> Online
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="produtos"
                            value="NR"
                            onChange={handleProdutoChange}
                        /> NR
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="produtos"
                            value="Inglês"
                            onChange={handleProdutoChange}
                        /> Inglês
                    </label>
                </>
            )}
    
        </div>
    );
}

export default combos;