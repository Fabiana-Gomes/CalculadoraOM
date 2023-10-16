import React, { useState } from 'react';

function combos() {
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState({
    pergunta1: "",
    pergunta2: "",
    pergunta3: "",
    pergunta4: [],
  });

  /*///////////////// Respostas para Sim é escola física ////////////////*/


  function determinarMensagem() {
    const { pergunta1, pergunta2, pergunta3, pergunta4 } = opcoesSelecionadas;  
    if (
      pergunta1 === "Sim" &&
      pergunta2 === "Até 10.000" &&
      pergunta3 === "Sim" &&
      pergunta4.includes("Ouro Moderno Presencial") &&
      pergunta4.includes("Online") &&
      pergunta4.includes("NR") &&
      pergunta4.includes("Inglês")
    ) {  
    return (
        <>
        <h1>Proposta combo 10.000 habitantes</h1>
        <div className="Linha-combos"></div>
        <p>Ouro Moderno Presencial: R$ 399,00.</p>
        <p>Cursos Online: R$ 199,00.</p>
        <p>Cursos de Inglês: R$ 199,00.</p>
        <p>Cursos de NR's: R$ 199,00.</p>
        <p>Total: R$ 996,00.</p>
        <p>Desconto Habitantes: 50% de desconto.</p>
        <p>Exclusividade: R$ 99,00.</p>
        <p>Total com desconto: R$ 598,00.</p>
        <div className="Linha-combos2"></div>
        <button className="botãocombos">Compartilhar</button>
        </>
      );
  }
  else if (
    pergunta1 === "Sim" &&
    pergunta2 === "Até 10.000" &&
    pergunta3 === "Não" &&
    pergunta4.includes("Ouro Moderno Presencial") &&
    pergunta4.includes("Online") &&
    pergunta4.includes("NR") &&
    pergunta4.includes("Inglês")
  ) { 
    return (
      <>
      <h1>Proposta combo 10.000 habitantes</h1>
      <div className="Linha-combos"></div>
      <p>Ouro Moderno Presencial: R$ 399,00.</p>
      <p>Cursos Online: R$ 199,00.</p>
      <p>Cursos de Inglês: R$ 199,00.</p>
      <p>Cursos de NR's: R$ 199,00.</p>
      <p>Total: R$ 996,00.</p>
      <p>Desconto Habitantes: 50% de desconto.</p>
      <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
      <p>Total com desconto: R$ 499,00.</p>
      <div className="Linha-combos2"></div>
      <button className="botãocombos">Compartilhar</button>
      </>
    );
}
else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Sim" &&
  pergunta4.includes("Ouro Moderno Presencial") &&
  pergunta4.includes("Online") &&
  pergunta4.includes("NR")
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Ouro Moderno Presencial: R$ 299,00.</p>
    <p>Cursos Online: R$ 99,00.</p>
    <p>Cursos de NR's: R$ 99,00.</p>
    <p>Exclusividade: R$ 99,00.</p>
    <p>Total: R$ 596,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
}
else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Não" &&
  pergunta4.includes("Ouro Moderno Presencial") &&
  pergunta4.includes("Online") &&
  pergunta4.includes("NR")
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Ouro Moderno Presencial: R$ 299,00.</p>
    <p>Cursos Online: R$ 99,00.</p>
    <p>Cursos de NR's: R$ 99,00.</p>
    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
    <p>Total: R$ 497,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
}

else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Não" &&
  pergunta4.includes("Ouro Moderno Presencial") &&
  pergunta4.includes("Online")
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Ouro Moderno Presencial: R$ 299,00.</p>
    <p>Cursos Online: R$ 99,00.</p>
    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
    <p>Total: R$ 398,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
}
else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Sim" &&
  pergunta4.includes("Ouro Moderno Presencial") &&
  pergunta4.includes("Online")
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Ouro Moderno Presencial: R$ 299,00.</p>
    <p>Cursos Online: R$ 99,00.</p>
    <p>Exclusividade: R$ 99,00.</p>
    <p>Total: R$ 497,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
}
else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Sim" &&
  pergunta4.includes("Ouro Moderno Presencial")
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Ouro Moderno Presencial: R$ 299,00.</p>
    <p>Exclusividade: R$ 99,00.</p>
    <p>Total: R$ 398,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
}
else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Não" &&
  pergunta4.includes("Ouro Moderno Presencial")
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Ouro Moderno Presencial: R$ 299,00.</p>
    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
    <p>Total: R$ 299,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
}
else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Não" &&
  pergunta4.includes("Online") &&
  pergunta4.includes("NR") 
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Cursos Online: R$ 99,00.</p>
    <p>Cursos NR: R$ 99,00.</p>
    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
    <p>Total: R$ 198,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
}
else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Sim" &&
  pergunta4.includes("Online") &&
  pergunta4.includes("NR") 
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Cursos Online: R$ 99,00.</p>
    <p>Cursos NR: R$ 99,00.</p>
    <p>Exclusividade: R$ 99,00.</p>
    <p>Total: R$ 297,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
}
else if (
  pergunta1 === "Sim" &&
  pergunta2 === "Até 10.000" &&
  pergunta3 === "Não" &&
  pergunta4.includes("Online") &&
  pergunta4.includes("NR") &&
  pergunta4.includes("Inglês")
) { 
  return (
    <>
    <h1>Proposta Taylor 10.000 habitantes</h1>
    <div className="Linha-combos"></div>
    <p>Cursos Online: R$ 99,00.</p>
    <p>Cursos NR: R$ 99,00.</p>
    <p>Cursos Inglês: R$ 99,00.</p>
    <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
    <p>Total: R$ 297,00.</p>
    <div className="Linha-combos2"></div>
    <button className="botãocombos">Compartilhar</button>
    </>
  );
  }
  else if (
    pergunta1 === "Sim" &&
    pergunta2 === "Até 30.000" &&
    pergunta3 === "Sim" &&
    pergunta4.includes("Ouro Moderno Presencial")
  ) { 
    return (
      <>
      <h1>Proposta Taylor 30.000 habitantes</h1>
      <div className="Linha-combos"></div>
      <p>Ouro Moderno Presencial: R$ 399,00.</p>
      <p>Exclusividade: R$ 149,00.</p>
      <p>Total: R$ 548,00.</p>
      <div className="Linha-combos2"></div>
      <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  else if (
    pergunta1 === "Sim" &&
    pergunta2 === "Até 30.000" &&
    pergunta3 === "Não" &&
    pergunta4.includes("Ouro Moderno Presencial")
  ) { 
    return (
      <>
      <h1>Proposta Taylor 30.000 habitantes</h1>
      <div className="Linha-combos"></div>
      <p>Ouro Moderno Presencial: R$ 399,00.</p>
      <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
      <p>Total: R$ 399,00.</p>
      <div className="Linha-combos2"></div>
      <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  else if (
    pergunta1 === "Sim" &&
    pergunta2 === "Até 50.000" &&
    pergunta3 === "Sim" &&
    pergunta4.includes("Ouro Moderno Presencial")
  ) { 
    return (
      <>
      <h1>Proposta Taylor 50.000 habitantes</h1>
      <div className="Linha-combos"></div>
      <p>Ouro Moderno Presencial: R$ 499,00.</p>
      <p>Exclusividade: R$ 199,00.</p>
      <p>Total: R$ 698,00.</p>
      <div className="Linha-combos2"></div>
      <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  else if (
    pergunta1 === "Sim" &&
    pergunta2 === "Até 50.000" &&
    pergunta3 === "Não" &&
    pergunta4.includes("Ouro Moderno Presencial")
  ) { 
    return (
      <>
      <h1>Proposta Taylor 50.000 habitantes</h1>
      <div className="Linha-combos"></div>
      <p>Ouro Moderno Presencial: R$ 499,00.</p>
      <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
      <p>Total: R$ 499,00.</p>
      <div className="Linha-combos2"></div>
      <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  else if (
    pergunta1 === "Sim" &&
    pergunta2 === "+ 51.000" &&
    pergunta3 === "Não" &&
    pergunta4.includes("Ouro Moderno Presencial")
  ) { 
    return (
      <>
      <h1>Proposta Taylor +51.000 habitantes</h1>
      <div className="Linha-combos"></div>
      <p>Ouro Moderno Presencial: R$ 599,00.</p>
      <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
      <p>Total: R$ 599,00.</p>
      <div className="Linha-combos2"></div>
      <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  else if (
    pergunta1 === "Sim" &&
    pergunta2 === "+ 51.000" &&
    pergunta3 === "Sim" &&
    pergunta4.includes("Ouro Moderno Presencial")
  ) { 
    return (
      <>
      <h1>Proposta Taylor +51.000 habitantes</h1>
      <div className="Linha-combos"></div>
      <p>Ouro Moderno Presencial: R$ 599,00.</p>
      <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
      <p>Total: R$ 599,00.</p>
      <div className="Linha-combos2"></div>
      <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
   if (
    pergunta1 === "Sim" &&
    pergunta2 === "Até 30.000" &&
    pergunta3 === "Não" &&
    pergunta4.includes("Ouro Moderno Presencial") &&
    pergunta4.includes("Online")
  ) { 
    return (
      <>
      <h1>Proposta Taylor 10.000 habitantes</h1>
      <div className="Linha-combos"></div>
      <p>Ouro Moderno Presencial: R$ 299,00.</p>
      <p>Cursos Online: R$ 99,00.</p>
      <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
      <p>Total: R$ 398,00.</p>
      <div className="Linha-combos2"></div>
      <button className="botãocombos">Compartilhar</button>
      </>
    );
  }



  }


  /*///////////////// Respostas para Não é escola física ////////////////*/

function determinarMensagem2() {
  const { pergunta1, pergunta2 } = opcoesSelecionadas;
  
  if (pergunta1 === "Não" && pergunta2 === "Até 10.000") {
    return (
      <>
        <h1>Plano sem escola física</h1>
        <div className="Linha-combos"></div>
        <p>Taxa de adesão: R$ 499,00.</p>
        <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
        <p>Inclusões: Acesso ao ambiente EAD e suas ferramentas.</p>
        <p>Taxa por curso: Será cobrado um valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês.</p>
        <div className="Linha-combos2"></div>
        <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  else if (pergunta1 === "Não" && pergunta2 === "Até 30.000") {
    return (
      <>
        <h1>Plano sem escola física</h1>
        <div className="Linha-combos"></div>
        <p>Taxa de adesão:   R$ 699,00.</p>
        <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
        <p>Inclusões: Acesso ao ambiente EAD e suas ferramentas.</p>
        <p>Taxa por curso: Será cobrado um valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês.</p>
        <div className="Linha-combos2"></div>
        <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  else if (pergunta1 === "Não" && pergunta2 === "Até 50.000") {
    return (
      <>
        <h1>Plano sem escola física</h1>
        <div className="Linha-combos"></div>
        <p>Taxa de adesão:   R$ 799,00.</p>
        <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
        <p>Inclusões: Acesso ao ambiente EAD e suas ferramentas.</p>
        <p>Taxa por curso: Será cobrado um valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês.</p>
        <div className="Linha-combos2"></div>
        <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  else if (pergunta1 === "Não" && pergunta2 === "+ 51.000") {
    return (
      <>
        <h1>Plano sem escola física</h1>
        <div className="Linha-combos"></div>
        <p>Taxa de adesão:   R$ 899,00.</p>
        <p>Exclusividade: O plano não inclui direito a exclusividade.</p>
        <p>Inclusões: Acesso ao ambiente EAD e suas ferramentas.</p>
        <p>Taxa por curso: Será cobrado um valor de R$ 8,99 por curso e R$ 17,99 por curso de inglês.</p>
        <div className="Linha-combos2"></div>
        <button className="botãocombos">Compartilhar</button>
      </>
    );
  }
  return null; 
}

 
/*///////////////// Funções comportamento botões /*//////////////////////


function atualizarOpcoes(pergunta, opcao) {
  if (pergunta === "pergunta1" && opcao === "Não") {
    setOpcoesSelecionadas({
      pergunta1: "Não",
      pergunta2: "",  
      pergunta3: "",  
      pergunta4: [],  
    });

  } else if (pergunta === "pergunta1" && opcao === "Sim") {
    setOpcoesSelecionadas({
      ...opcoesSelecionadas,
      pergunta1: "Sim",
    });

  } else if (pergunta === "pergunta3" && opcao === "Não") {
    setOpcoesSelecionadas({
      ...opcoesSelecionadas,
      pergunta3: "Não",  
    });

  } else if (pergunta === "pergunta4") {
    if (opcoesSelecionadas.pergunta4.includes(opcao)) {
      const updatedPergunta4 = opcoesSelecionadas.pergunta4.filter((item) => item !== opcao);
      setOpcoesSelecionadas({
        ...opcoesSelecionadas,
        pergunta4: updatedPergunta4,
      });
    } else {
      setOpcoesSelecionadas({
        ...opcoesSelecionadas,
        pergunta4: [...opcoesSelecionadas.pergunta4, opcao],
      });
    }
  } else {
    setOpcoesSelecionadas({
      ...opcoesSelecionadas,
      [pergunta]: opcao,
    });
  }
}

  return (
    <>
      <div className="container">
        <div className="combos-container">
          <h1 className="combos-h1">Selecione o combo conforme necessário:</h1>
          <div>
            <p>É uma escola física?</p>
            <button
              onClick={() => atualizarOpcoes("pergunta1", "Sim")}
              className={`button ${opcoesSelecionadas.pergunta1 === "Sim" ? "selected" : ""}`}
            >
              Sim
            </button>
            <button
              onClick={() => atualizarOpcoes("pergunta1", "Não")}
              className={`button ${opcoesSelecionadas.pergunta1 === "Não" ? "selected" : ""}`}
            >
              Não
            </button>
          </div>
          <div>
            <p>Quantos habitantes possui?</p>
            <button
              onClick={() => atualizarOpcoes("pergunta2", "Até 10.000")}
              className={`button ${opcoesSelecionadas.pergunta2 === "Até 10.000" ? "selected" : ""}`}
            >
              Até 10.000
            </button>
            <button
              onClick={() => atualizarOpcoes("pergunta2", "Até 30.000")}
              className={`button ${opcoesSelecionadas.pergunta2 === "Até 30.000" ? "selected" : ""}`}
            >
              Até 30.000
            </button>
            <button
              onClick={() => atualizarOpcoes("pergunta2", "Até 50.000")}
              className={`button ${opcoesSelecionadas.pergunta2 === "Até 50.000" ? "selected" : ""}`}
            >
              Até 50.000
            </button>
            <button
              onClick={() => atualizarOpcoes("pergunta2", "+ 51.000")}
              className={`button ${opcoesSelecionadas.pergunta2 === "+ 51.000" ? "selected" : ""}`}
            >
              + 51.000
            </button>
          </div>
          <div>
            <p>É uma praça exclusiva?</p>
            <button
               onClick={() => atualizarOpcoes("pergunta3", "Sim")}
               className={`button ${opcoesSelecionadas.pergunta3 === "Sim" ? "selected" : ""}`}
               disabled={opcoesSelecionadas.pergunta1 === "Não"}
             >
               Sim
             </button>
             <button
               onClick={() => atualizarOpcoes("pergunta3", "Não")}
               className={`button ${opcoesSelecionadas.pergunta3 === "Não" ? "selected" : ""}`}
               disabled={opcoesSelecionadas.pergunta1 === "Não"}
             >
               Não
            </button>
          </div>
          <div>
            <p>Quais produtos você deseja?</p>
            <button
              onClick={() => atualizarOpcoes("pergunta4", "Ouro Moderno Presencial")}
              className={`button ${opcoesSelecionadas.pergunta4.includes("Ouro Moderno Presencial") ? "selected" : ""}`}
              disabled={opcoesSelecionadas.pergunta1 === "Não"}
            >
              Ouro Moderno Presencial
            </button>
            <button
              onClick={() => atualizarOpcoes("pergunta4", "Online")}
              className={`button ${opcoesSelecionadas.pergunta4.includes("Online") ? "selected" : ""}`}
              disabled={opcoesSelecionadas.pergunta1 === "Não"}
            >
              Online
            </button>
            <button
              onClick={() => atualizarOpcoes("pergunta4", "NR")}
              className={`button ${opcoesSelecionadas.pergunta4.includes("NR") ? "selected" : ""}`}
              disabled={opcoesSelecionadas.pergunta1 === "Não"}
            >
              NR
            </button>
            <button
              onClick={() => atualizarOpcoes("pergunta4", "Inglês")}
              className={`button ${opcoesSelecionadas.pergunta4.includes("Inglês") ? "selected" : ""}`}
              disabled={opcoesSelecionadas.pergunta1 === "Não"}
            >
              Inglês
            </button>
          </div>
        </div>
         {determinarMensagem() && (
          <p className="mensagem">{determinarMensagem()}</p>
        )}
        
        {determinarMensagem2() && (
          <p className="mensagem"> {determinarMensagem2()}</p>
        )}
      </div>
     
    </>
  );
}

export default combos;