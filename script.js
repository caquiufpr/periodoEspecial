const disciplinas = [
    {
        "codigo": "EM326",
        "nome": "Prática de Ensino e Estágio Supervisionado I",
        "prof": "Liane Maria Vargas Barbosa",
        "dep": "DTPEN",
        "horario": "08h00 09h30",
        "dias": [0],
        "inicio": "13 de Julho",
        "fim": "21 de Setembro",
        "obs": "A aula do dia 14 de Setembro será realizada no dia 15."
    },{
        "codigo": "EM389",
        "nome": "Prática de Docência em Química II",
        "prof": "Sonia Maria Chaves Haracemiv",
        "dep": "DTPEN",
        "horario": "08h00 9h30",
        "dias": [0],
        "inicio": "13 de Julho",
        "fim": "21 de Julho",
        "obs": "A aula do dia 14 de Setembro será realizada dia 15." 
    },
    {
        "codigo": "CQ076",
        "nome": "Química de Polímeros",
        "prof": "Sônia Faria Zawadzki",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [0, 1, 2, 3, 4],
        "inicio": "13 de Julho",
        "fim": "7 de Agosto",
        "obs": "" 
    },
    {
        "codigo": "CQ238",
        "nome": "Físico-Química I",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [5],
        "inicio": "13 de Julho",
        "fim": "3 de Agosto",
        "obs": "" 
    },{
        "codigo": "CQ048/CQ243",
        "nome": "Físico-Química III/Cinética",
        "prof": "Diego Guedes-Sobrinho",
        "dep": "DQUI",
        "horario": "16h00 19h00",
        "dias": [0, 1, 2, 3, 4],
        "inicio": "13 de Julho",
        "fim": "24 de Julho",
        "obs": "" 
    },{
        "codigo": "EM160",
        "nome": "Prática de Docência em Química I",
        "prof": "Liane Maria Vargas Barboza",
        "dep": "DTPEN",
        "horario": "18h30 20h00",
        "dias": [5],
        "inicio": "13 de Julho",
        "fim": "22 de Setembro",
        "obs": "" 
    },
    {
        "codigo": "CQ138/CQ221",
        "nome": "Química Geral",
        "prof": "Ronny Rocha Ribeiro",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [0, 2, 4],
        "inicio": "13 de Julho",
        "fim": "21 de Agosto",
        "obs": "" 
    },{
        "codigo": "EM161",
        "nome": "Prática de Docência em Química II",
        "prof": "Neusa Nogueira Fialho",
        "dep": "DTPEN",
        "horario": "19h00 20h30",
        "dias": [0],
        "inicio": "13 de Julho",
        "fim": "22 de Setembro",
        "obs": "Horários variados no mês de setembro, veja o caledário para mais informações." 
    },{
        "codigo": "CQ059/CQ275",
        "nome": "Tópicos Especiais em Química III - Catálise",
        "prof": "Shirley Nakagami, Marcio Peres de Araujo",
        "dep": "DQUI",
        "horario": "10h00 12h00",
        "dias": [1, 2, 3],
        "inicio": "14 de Julho",
        "fim": "13 de Agosto",
        "obs": "" 
    },{
        "codigo": "EM159",
        "nome": "Metodologia do Ensino de Química",
        "prof": "Neusa Nogueira Fialho",
        "dep": "DTPEN",
        "horario": "19h00 20h30",
        "dias": [2],
        "inicio": "15 de Julho",
        "fim": "23 de Setembro",
        "obs": "" 
    },{
        "codigo": "ET053/ET084",
        "nome": "Psicologia da Educação",
        "prof": "Tânia Stoltz",
        "dep": "DTFE",
        "horario": "18h30 20h30",
        "dias": [2],
        "inicio": "15 de Julho",
        "fim": "23 de Setembro",
        "obs": "" 
    },{
        "codigo": "CQ097",
        "nome": "Prática Pedagógica: Projetos Integrados I",
        "prof": "Joanez Aparecida Aires",
        "dep": "DQUI",
        "horario": "13h00 17h30",
        "dias": [3],
        "inicio": "16 de Julho",
        "fim": "17 de Setembro",
        "obs": "" 
    },{
        "codigo": "CQ161/CQ255",
        "nome": "Química Integrada I",
        "prof": "Everton Bedin",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [3],
        "inicio": "16 de Julho",
        "fim": "17 de Setembro",
        "obs": "" 
    },{
        "codigo": "CM301",
        "nome": "Cálculo em uma Variável Real",
        "prof": "Não informado",
        "dep": "DMAT",
        "horario": "19h00 21h00",
        "dias": [3],
        "inicio": "16 de Julho",
        "fim": "24 de Setembro",
        "obs": "" 
    },{
        "codigo": "CQ099",
        "nome": "Atividades Complementares",
        "prof": "Joanez Aparecida Aires",
        "dep": "DQUI",
        "horario": "15h00 19h00",
        "dias": [4],
        "inicio": "15h00",
        "fim": "",
        "obs": "" 
    },{
        "codigo": "CM041",
        "nome": "Cálculo I",
        "prof": "Alexandre Kirilov",
        "dep": "DMAT",
        "horario": "16h00 17h40",
        "dias": [0, 4],
        "inicio": "17 de Julho",
        "fim": "18 de Setembro",
        "obs": "" 
    },{
        "codigo": "CM041",
        "nome": "Cálculo I",
        "prof": "Raul Prado Raia",
        "dep": "DMAT",
        "horario": "19h00 20h40",
        "dias": [0, 4],
        "inicio": "17 de Julho",
        "fim": "18 de Setembro",
        "obs": "" 
    },{
        "codigo": "",
        "nome": "",
        "prof": "",
        "dep": "",
        "horario": "",
        "dias": [],
        "inicio": "",
        "fim": "",
        "obs": "" 
    }
];

const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Horário variado"]
let hue = -20;

let spaceToFill = document.getElementById("tableItem");

for (let i = 0; i <= 4; i++) {
    const cell = document.createElement('td');
    cell.id = "td" + i;
    spaceToFill.appendChild(cell);
}

let id = 0;

disciplinas.map(d => {
    // Append to table
    for (let i = 0; i < d.dias.length; i++) {

        // Create elements
        const el = document.createElement('div');
        const title = document.createElement('div');
        const prof = document.createElement('div');
        const dep = document.createElement('div');
        const hr = document.createElement('div');
        const dias = document.createElement('div');
        const per = document.createElement('div');
        const obs = document.createElement('div');

        const arrow = document.createElement('div');

        // Set id
        id++
        el.id = id;
        el.style.height = "60px"
        el.state = false
        el.onclick = () => {
            if (el.state) {
                console.log("closed");
                el.style.height = "60px"
                el.state = false;
            } else {
                console.log("open");
                el.style.height = "250px"
                el.state = true;
            }
        }

        // Set classes
        el.className = "box"
        title.className = "boxTitle"
        prof.className = "boxInfos"
        dep.className = "boxInfos"
        hr.className = "boxInfos"
        dias.className = "boxInfos"
        per.className = "boxInfos"
        obs.className = "boxInfos"

        // Prep var
        const horarios = d.horario.split(' ');
        let diasH = "";
        d.dias.map(dia => {diasH += diasDaSemana[dia] + "s "})
        let observa = "";
        if (d.obs != "") {
            observa = "Observação: " + d.obs;
        }

        // Inflate with information
        title.innerHTML = d.nome + " (" + d.codigo + ")";
        prof.innerHTML = "Professor(a): " + d.prof;
        dep.innerHTML = "Departamento: " + d.dep;
        hr.innerHTML = "Horário: " + horarios[0] + " às " + horarios[1];
        dias.innerHTML = "Dias: " + diasH;
        per.innerHTML = "Período: De " + d.inicio + " a " + d.fim;
        obs.innerHTML = observa;

        // Change color
        if (!d.color) {
            d.color = getColor()
        }

        el.style.backgroundColor = d.color

        // Append to div

        el.appendChild(title);
        el.appendChild(prof);
        el.appendChild(dep);
        el.appendChild(hr);
        el.appendChild(dias);
        el.appendChild(per);
        el.appendChild(obs);

        document.getElementById('td'+d.dias[i]).appendChild(el);
    }
})

function getColor() {
    if (hue > 360) {
        hue -= 360;
    } else {
        hue += 22
    }

    let v1 = hue;
    let v2 = "70%";
    let v3 = "50%";

    return "hsl(" + v1 + ", " + v2 + ", " + v3 + ")";
}