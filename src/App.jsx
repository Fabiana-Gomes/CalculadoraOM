import React, { useState } from 'react';
import './index.css';


     {/* Opção Cursos unitários */}


  const coursesData = [
  { id: 1, name: "Desenvolvedor de Aplicativos para Android", price: 20 },
  { id: 2, name: "Operador de Caixa", price: 20 },
  { id: 3, name: "Lógica de Programação", price: 20 },
  { id: 5, name: "Assistente Contábil 2015", price: 20 },
  { id: 6, name: "Gestão Administrativa", price: 20 },
  { id: 7, name: "Mídias Sociais 2016", price: 20 },
  { id: 8, name: "Windows 10", price: 20 },
  { id: 9, name: "Windows 10 Kids", price: 20 },
  { id: 10, name: "Internet Kids", price: 20 },
  { id: 11, name: "Meu Novo emprego", price: 20 },
  { id: 12, name: "Word 2016", price: 20 },
  { id: 14, name: "Introdução à Informática v.2", price: 20 },
  { id: 15, name: "Crédito, Cobrança e Atendimento", price: 20 },
  { id: 16, name: "Power Point 2016", price: 20 },
  { id: 17, name: "Youtuber", price: 20 },
  { id: 18, name: "Operador de Drone", price: 20 },
  { id: 19, name: "Empreendedorismo", price: 20 },
  { id: 20, name: "Sketchup", price: 20 },
  { id: 21, name: "HTML e CSS", price: 20 },
  { id: 22, name: "Word 2016 Kids", price: 20 },
  { id: 23, name: "Vitrinismo", price: 20 },
  { id: 24, name: "Liderança Eficaz", price: 20 },
  { id: 25, name: "Atendente de Farmácia v.2", price: 20 },
  { id: 26, name: "Gestão de RH v.2", price: 20 },
  { id: 27, name: "Técnicas de Vendas V2", price: 20 },
  { id: 28, name: "Departamento Pessoal v.2", price: 20 },
  { id: 29, name: "Word 2019", price: 20 },
  { id: 30, name: "Excel 2019", price: 20 },
  { id: 31, name: "Power Point 2019", price: 20 },
  { id: 32, name: "Windows 10 v.2", price: 20 },
  { id: 33, name: "Desenvolvedor de Games Kids", price: 20 },
  { id: 34, name: "Melhor Idade v.2", price: 20 },
  { id: 35, name: "Internet - Versão 4", price: 20 },
  { id: 36, name: "Midias Sociais Versão 3", price: 20 },
  { id: 37, name: "Segurança Digital", price: 20 },
  { id: 38, name: "Departamento Pessoal - Versão 3", price: 20 },
  { id: 39, name: "Marketing Digital", price: 20 },
  { id: 40, name: "Assistente Contábil - Versão 2", price: 20 },
  { id: 41, name: "Facebook Business", price: 20 },
  { id: 42, name: "Lógica de Programação - Versão 2", price: 20 },
  { id: 43, name: "Guia de Prevenção - Covid-19", price: 20 },
  { id: 44, name: "Aplicativos de Chamada", price: 20 },
  { id: 45, name: "Gestão Administrativa - Versão 2", price: 20 },
  { id: 46, name: "Aplicativos de Acesso Remoto", price: 20 },
  { id: 47, name: "Matemática Financeira com HP12C", price: 20 },
  { id: 48, name: "Multimídia - Versão 3", price: 20 },
  { id: 49, name: "Armazenamento em Nuvem", price: 20 },
  { id: 50, name: "Técnicas de Memorização", price: 20 },
  { id: 51, name: "Documentos Google", price: 20 },
  { id: 52, name: "Síndico de Condomínio", price: 20 },
  { id: 53, name: "Telemarketing - Versão 2", price: 20 },
  { id: 54, name: "Domínio", price: 20 },
  { id: 55, name: "Marketing Pessoal", price: 20 },
  { id: 56, name: "Normas da ABNT para Trabalhos Acadêmicos - Versão 2", price: 20 },
  { id: 57, name: "Chromebook", price: 20 },
  { id: 58, name: "Agente de Portaria", price: 20 },
  { id: 59, name: "Whatsapp Business", price: 20 },
  { id: 60, name: "WordPress", price: 20 },
  { id: 61, name: "Cuidador de Idosos", price: 20 },
  { id: 62, name: "Logística", price: 20 },
  { id: 63, name: "Biossegurança", price: 20 },
  { id: 64, name: "Google Education Avançado", price: 20 },
  { id: 65, name: "Google Education Básico", price: 20 },
  { id: 66, name: "Windows 11", price: 20 },
  { id: 67, name: "Canva", price: 20 },
  { id: 68, name: "Windows 11 Kids", price: 20 },
  { id: 69, name: "After Effects", price: 25 },
  { id: 70, name: "Programação em PHP", price: 25 },
  { id: 71, name: "AutoCAD 2D 2015", price: 25 },
  { id: 72, name: "AutoCAD 3D 2015", price: 25 },
  { id: 73, name: "CorelDraw X8", price: 25 },
  { id: 74, name: "Excel 2016 Avançado", price: 25 },
  { id: 75, name: "Desenvolvedor de Games 3D - Módulo II   v.2", price: 25 },
  { id: 76, name: "Administrativo Informatizado v.3", price: 25 },
  { id: 77, name: "Adobe Premiere Pro CC", price: 25 },
  { id: 78, name: "Desenvolvedor de Games 3D - Módulo I v.2", price: 25 },
  { id: 79, name: "Desenvolvedor de Aplicativos Android v.2", price: 25 },
  { id: 80, name: "Desenvolvedor de Games 3D - Módulo III v.2", price: 25 },
  { id: 81, name: "Robótica", price: 25 },
  { id: 82, name: "Desenvolvedor de Games Online", price: 25 },
  { id: 83, name: "Photoshop CC", price: 25 },
  { id: 84, name: "Java Básico", price: 25 },
  { id: 85, name: "AutoCad 2D 2020", price: 25 },
  { id: 86, name: "3Ds Max 2020", price: 25 },
  { id: 87, name: "Excel 2019 Avançado", price: 25 },
  { id: 88, name: "Excel 2019 Dashboard", price: 25 },
  { id: 89, name: "Manutenção de Computadores - Versão 2", price: 25 },
  { id: 90, name: "Programação em PHP versão 2", price: 25 },
  { id: 91, name: "Adobe After Effects CC", price: 25 },
  { id: 92, name: "Adobe Illustrator CC", price: 25 },
  { id: 93, name: "AutoCAD 3D 2022", price: 25 },
  { id: 94, name: "Desenvolvedor de Games Online V2", price: 25 },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [gestorInfo, setGestorInfo] = useState(null);
  const [searchTerm20, setSearchTerm20] = useState("");
  const [searchTerm25, setSearchTerm25] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCourseNames, setSelectedCourseNames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCourseCount, setSelectedCourseCount] = useState(0);
  const [isSchoolPhysical, setIsSchoolPhysical] = useState(false);
  const [selectedHabitants, setSelectedHabitants] = useState(null);
  const [isExclusivePlaza, setIsExclusivePlaza] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);


  const handleOptionClick = (option) => {
    setSelectedOption(option);


{/*///////////////////////// Gestor /////////////////////*/}

    if (option === 'opcao1') {
      setGestorInfo({
        titulo: 'Plano Gestor',
        nomePlano: 'Gestor.',
        valorMensal: 'R$ 399,00.',
        taxaAdicional: '7,99% sobre todas as mensalidades processadas no edpay.',
        inclusoes: 'Acesso completo aos recursos e funcionalidades oferecidos pela modalidade Gestor.',
        exclusividade: 'O plano não inclui direito a exclusividade.',
      });
    } else {
      setGestorInfo(null); 
    }
  };

{/*///////////////////////// Opções /////////////////////*/}

    const courses20 = coursesData.filter(course =>
      course.price === 20 && course.name.toLowerCase().includes(searchTerm20.toLowerCase())
    );
  
    const courses25 = coursesData.filter(course =>
      course.price === 25 && course.name.toLowerCase().includes(searchTerm25.toLowerCase())
    );
  
    const handleCourseSelect = (course) => {
      if (selectedCourses.length < 100 || selectedCourses.includes(course.name)) {
        if (!selectedCourses.includes(course.name)) {
          setSelectedCourses([...selectedCourses, course.name]);
          setSelectedCourseNames([...selectedCourseNames, course.name]);
          setTotalPrice(totalPrice + course.price);
          setSelectedCourseCount(selectedCourseCount + 1); // 

        }
      }
    };

      const handleCourseRemove = (courseName) => {
      const updatedSelectedCourses = selectedCourses.filter(name => name !== courseName);
      const updatedSelectedCourseNames = selectedCourseNames.filter(name => name !== courseName);
      setSelectedCourses(updatedSelectedCourses);
      setSelectedCourseNames(updatedSelectedCourseNames);
      setTotalPrice(totalPrice - coursesData.find(course => course.name === courseName).price);
      setSelectedCourseCount(selectedCourseCount - 1); 

    };

    const handleProductSelect = (productName) => {
      if (selectedProducts.includes(productName)) {
        setSelectedProducts(selectedProducts.filter(name => name !== productName));
      } else {
        setSelectedProducts([...selectedProducts, productName]);
      }
    };

    return (
      <div className='Selecao-container'>
        <div className='linha-azul'></div>
        <div className='linha-branca'></div>
        <div className='nomepag'>
          <h1>Calculadora Comercial Ouro Moderno</h1>
        </div>
        <div className='right-div'></div>
    
{/*///////////////////////// Opções /////////////////////*/}

        <label
          className={`label-option ${selectedOption === 'opcao1' ? 'selected' : ''}`}
        >
          <input
            type='radio'
            value='opcao1'
            checked={selectedOption === 'opcao1'}
            onChange={() => handleOptionClick('opcao1')}
          />
          Gestor
        </label>
        <label
          className={`label-option ${selectedOption === 'opcao2' ? 'selected' : ''}`}
        >
          <input
            type='radio'
            value='opcao2'
            checked={selectedOption === 'opcao2'}
            onChange={() => handleOptionClick('opcao2')}
          />
          Cursos
        </label>
        <label
          className={`label-option ${selectedOption === 'opcao3' ? 'selected' : ''}`}
        >
          <input
            type='radio'
            value='opcao3'
            checked={selectedOption === 'opcao3'}
            onChange={() => handleOptionClick('opcao3')}
          />
          Combos
        </label>
    
{/*///////////////////////// Gestor /////////////////////*/}

        {gestorInfo && (
          <div className='info-container'>
            <h2>{gestorInfo.titulo}</h2>
            <div className='linha-Gestor2'></div>
            <div className='plano-gestor-info'>
              <p>Nome da modalidade: <span>{gestorInfo.nomePlano}</span></p>
              <p>Valor Mensal: <span>{gestorInfo.valorMensal}</span></p>
              <p>Taxa Adicional: <span>{gestorInfo.taxaAdicional}</span></p>
              <p>Inclusões: <span>{gestorInfo.inclusoes}</span></p>
              <p>Exclusividade: <span>{gestorInfo.exclusividade}</span></p>
            </div>
            <div className='linha-Gestor1'></div>
            <button>Compartilhar</button>
          </div>
        )}
    
   
{/*///////////////////////// Cursos /////////////////////*/}

    {selectedOption === 'opcao2' && (
      <div className="CursosUni">
        <div className="Column">
          <p>Valor unitário: R$20</p>
          <input
            type="text"
            placeholder="Pesquisar curso por nome"
            value={searchTerm20}
            onChange={(e) => setSearchTerm20(e.target.value)}
          />
          <ul className="CoursesList">
            {courses20.length > 0 ? (
              courses20.map((course) => (
                <li key={course.id} className="CourseItem" onClick={() => handleCourseSelect(course)}>
                  {course.name}
                </li>
              ))
            ) : (
              <li className="CourseItem">Curso não encontrado</li>
            )}
          </ul>
        </div>
        <div className="Column">
          <p>Valor unitário: R$25</p>
          <input
            type="text"
            placeholder="Pesquisar curso por nome"
            value={searchTerm25}
            onChange={(e) => setSearchTerm25(e.target.value)}
          />
          <ul className="CoursesList">
            {courses25.length > 0 ? (
              courses25.map((course) => (
                <li key={course.id} className="CourseItem" onClick={() => handleCourseSelect(course)}>
                  {course.name}
                </li>
              ))
            ) : (
              <li className="CourseItem">Curso não encontrado</li>
            )}
          </ul>
        </div>
        <div className={`SelectedCourses custom-selected-courses`}>
          <h2>Cursos Selecionados</h2>
          <div className='linha-curso'></div>
          <ul>
            {selectedCourseNames.map((courseName, index) => (
              <li key={index}>
                {courseName} <button onClick={() => handleCourseRemove(courseName)}>-</button>
              </li>
            ))}
          </ul>
          <p className='Total TotalPrice'>
            Total: R${totalPrice},00 com {selectedCourseCount} cursos selecionados
          </p>
          <button className='share-button'>Compartilhar</button>
              </div>
            </div>
          )}
    
{/*///////////////////////// Combos /////////////////////*/}

        {selectedOption === 'opcao3' && (
          <div className='CombosContainer'>
            <p>Possui uma escola física?</p>
            <label>
              <input
                type='radio'
                name='physicalSchool'
                checked={isSchoolPhysical}
                onChange={() => setIsSchoolPhysical(true)}
              />
              Sim
            </label>
            <label>
              <input
                type='radio'
                name='physicalSchool'
                checked={!isSchoolPhysical}
                onChange={() => setIsSchoolPhysical(false)}
              />
              Não
            </label>
            <p>Quantos habitantes a cidade possui?</p>
            <label>
              <input
                type='radio'
                name='habitants'
                checked={selectedHabitants === 'option1'}
                onChange={() => setSelectedHabitants('option1')}
              />
              51.000 ou mais
            </label>
            <label>
              <input
                type='radio'
                name='habitants'
                checked={selectedHabitants === 'option2'}
                onChange={() => setSelectedHabitants('option2')}
              />
              Até 50.000 H
            </label>
            <label>
              <input
                type='radio'
                name='habitants'
                checked={selectedHabitants === 'option3'}
                onChange={() => setSelectedHabitants('option3')}
              />
              Até 30.000 H
            </label>
            <label>
              <input
                type='radio'
                name='habitants'
                checked={selectedHabitants === 'option4'}
                onChange={() => setSelectedHabitants('option4')}
              />
              Até 10.000 H
            </label>
            <p>É uma praça exclusiva?</p>
        <label>
          <input
            type='radio'
            name='exclusivePlaza'
            checked={isExclusivePlaza}
            onChange={() => setIsExclusivePlaza(true)}
          />
          Sim
        </label>
        <label>
          <input
            type='radio'
            name='exclusivePlaza'
            checked={!isExclusivePlaza}
            onChange={() => setIsExclusivePlaza(false)}
          />
          Não
        </label>
        <p>Qual produto irá adquirir?</p>
        <label>
          <input
            type='checkbox'
            name='product'
            checked={selectedProducts.includes('Ouro Moderno Presencial')}
            onChange={() => handleProductSelect('Ouro Moderno Presencial')}
          />
          Ouro Moderno Presencial
        </label>
        <label>
          <input
            type='checkbox'
            name='product'
            checked={selectedProducts.includes('Online')}
            onChange={() => handleProductSelect('Online')}
          />
          Online
        </label>
        <label>
          <input
            type='checkbox'
            name='product'
            checked={selectedProducts.includes('NR')}
            onChange={() => handleProductSelect('NR')}
          />
          NR
        </label>
        <label>
          <input
            type='checkbox'
            name='product'
            checked={selectedProducts.includes('Inglês')}
            onChange={() => handleProductSelect('Inglês')}
          />
          Inglês
        </label>
      </div>
    )}
    




      </div>
    );
}
export default App;