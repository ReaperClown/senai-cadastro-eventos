const moment = require("moment");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let id = 0;
let eventos = [];

const menu = {
  0: "0 = Encerrar o sistema e mostrar os próximos eventos." + "\n",
  1: "1 = Cadastrar um novo evento." + "\n",
  2: "2 = Mostrar os eventos cadastrados." + "\n",
};

let menuKeys = Object.keys(menu);

function showMenu() {
  for (let i = 0; i < menuKeys.length; i++) {
    let fullMenu = menu[menuKeys[i]];
    console.log("\n" + fullMenu);
  }

  rl.question("\nQual opção deseja selecionar? ", function (answer) {
    if (answer === "0") {
      closeMenu();
    } else if (answer === "1") {
      cadastro();
    } else if (answer === "2") {
      showEventos();
    } else if (answer === "9") {
      showMenu();
    } else {
      console.log("Essa opção não existe no menu.");
      console.log("Reiniciando o sistema...");
      restart();
    }
  });
}

function restart() {
  rl.question(
    "\nQual opção deseja selecionar? (Digite 9 para ver o menu novamente): ",
    function (answer) {
      if (answer === "0") {
        closeMenu();
      } else if (answer === "1") {
        cadastro();
      } else if (answer === "2") {
        showEventos();
      } else if (answer === "9") {
        showMenu();
      } else {
        console.log("Essa opção não existe no menu.");
        console.log("Reiniciando o sistema...");
        restart();
      }
    }
  );
}

function showEventos() {
  console.log("\nVocê escolheu mostrar os próximos eventos.");
  console.log("\nPróximos eventos da Savinis: " + "\n");
  console.log(eventos);
  console.log("\nRetornando ao menu...");
  restart();
}

function closeMenu() {
  console.log("\nVocê escolheu encerrar.");
  console.log("\nPróximos eventos da Savinis: " + "\n");
  console.log(eventos);
  console.log("\nAté a próxima!");
  rl.close();
}

function cadastro() {
  rl.question("\nQual seu nome completo? ", function (answer) {
    if (answer.length > 6 && isNaN(Number(answer))) {
      rl.question("Qual será o nome do evento? ", function (answer) {
        let nomeEvt = answer;
        if (nomeEvt.length > 5 && isNaN(nomeEvt)) {
      rl.question("Qual será a data do evento? (Digite no formato: Dia/Mês/Ano): ", function (answer) {
        let strData = answer;
        let partesData = strData.split("/");
        let data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        if (moment(answer, 'DD/MM/YYYY', true).isValid() && data >= new Date()) {
          rl.question("Qual sua idade? ", function (answer) {
            if (answer >= 18 && !isNaN(answer) && answer.length > 0 && answer.length < 3) {
              rl.question("Qual será o horário de início do evento? (Exemplo: 12:00) (Formato 24h): ", function (answer) {
                let inicio = answer;
                if (moment(inicio, 'HH:mm', true).isValid() && isNaN(inicio) && inicio.includes(":")) {
                  rl.question("Qual será o horário de término do evento? (Exemplo: 13:00) (Formato 24h): ", function (answer) {
                    let fim = answer;
                    if (moment(fim, 'HH:mm', true).isValid() && isNaN(fim) && fim.includes(":") && fim > inicio) {

                      function randomNumber(min, max) {
                        return Math.floor(Math.random() * (max - min + 1) + min)
                      }
                      
                      const intRand = randomNumber(1, 100)

                      let evento = {
                        id: id + 1,
                        nome: nomeEvt,
                        participantes: intRand,
                        data: strData,
                        inicio: inicio,
                        fim: fim
                      };

                      eventos.push(evento);
                      console.log("\nEvento cadastrado com sucesso!");
                      console.log("\nLista de eventos: " + "\n");
                      console.log(eventos);
                      console.log("\nRetornando ao menu...");
                      id++;
                      
                      restart();
                    } else {
                      console.log("\nHorário de término inválido, o formato de hora não pode conter letras ou símbolos, não pode estar vazio, deve seguir o padrão Hora:Minuto e deve ser maior que o horário de início, tente novamente.");
                      restart();
                    }
                  });
                } else {
                  console.log("\nFormato de hora inválido, o formato de hora não pode conter letras ou símbolos, não pode estar vazio e deve seguir o padrão Hora:Minuto, tente novamente.");
                  restart();
                }
              });
            } else {
              console.log("\nOps, idade inválida, nossos eventos são permitidos apenas para maiores de idade e o campo de idade não pode estar vazio e deve conter apenas números, tente novamente.");
              restart();
            }
          });
        } else {
          console.log("\nData inválida, a data não pode estar vazia, deve estar no formato Dia/Mês/Ano e seu valor deve ser maior que a data de hoje, tente novamente.");
          restart();
        }
          });
        } else {
          console.log("\nNome do evento inválido, o nome do evento precisa conter mais de 5 letras e não pode conter apenas números, tente novamente.");
          restart();
        }
      });
    } else {
      console.log("\nOps, seu nome não cumpre os requisitos, nomes não podem conter números, estarem vazios ou ter menos de 6 caracteres" + "\n" + "Tente novamente." + "\n");
      console.log("Reiniciando o sistema...");
      restart();
    }
    
  });
  
}

function welcome() {
  console.log(
    "\nBem vindo ao sistema de cadastro de eventos da Savinis! Para começar escolha uma opção do menu a seguir: " +
      "\n"
  );

  for (let i = 0; i < menuKeys.length; i++) {
    let fullMenu = menu[menuKeys[i]];
    console.log(fullMenu);
  }

  rl.question("Qual opção deseja selecionar? ", function (answer) {
    if (answer === "0") {
      closeMenu();
    } else if (answer === "1") {
      cadastro();
    } else if (answer === "2") {
      showEventos();
    } else {
      console.log("Essa opção não existe no menu.");
      console.log("Reiniciando o sistema...");
      restart();
    }
  });
}

welcome();
