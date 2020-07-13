const cycle1 = [
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
        "prof": "Carlos Roberto Vianna",
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
    }
];

const cycle2 = [
    {
        "codigo": "BQ005",
        "nome": "Introdução à Bioquímica",
        "prof": "Leda Satie Chubatsu",
        "dep": "Departamento de Bioquímica e Biologia Molecular",
        "horario": "14h00 16h00",
        "dias": [2,4],
        "inicio": "29 de Julho",
        "fim": "18 de Setembro",
        "obs": "" 
    },
    {
        "codigo": "CM005",
        "nome": "Álgebra Linear",
        "prof": "Alexandre Kirilov",
        "dep": "DMAT",
        "horario": "",
        "dias": [5],
        "inicio": "27 de Julho",
        "fim": "18 de Setembro",
        "obs": "A disciplina será parcialmente assíncrona. Mais informações na ficha." 
    },{
        "codigo": "CM300",
        "nome": "Introdução ao Cálculo",
        "prof": "Mael Sachine,Matheus Brito, Roberto Ribeiro, Saulo Oliveira",
        "dep": "DMAT",
        "horario": "",
        "dias": [5],
        "inicio": "27 de Julho",
        "fim": "4 de Setembro",
        "obs": "Disciplina assíncrona." 
    },{
        "codigo": "CQ042",
        "nome": "Química Ambiental",
        "prof": "Marco Tadeu Grassi",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [2],
        "inicio": "27 de Julho",
        "fim": "26 de Agosto",
        "obs": "A maior carga horária será de forma assíncrona." 
    },{
        "codigo": "CQ116",
        "nome": "Espectroscopia Ótica",
        "prof": "Diego Guedes-Sobrinho e Thiago Nogueira Marques Cervantes",
        "dep": "DQUI",
        "horario": "18h00 22h00",
        "dias": [0, 2, 3],
        "inicio": "27 de Julho",
        "fim": "",
        "obs": "" 
    },
    {
        "codigo": "CQ047",
        "nome": "Físico-Química II",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "",
        "dias": [5],
        "inicio": "27 de Julho",
        "fim": "28 de Agosto",
        "obs": "Disciplina assíncrona." 
    },{
        "codigo": "CQ069/CQ264",
        "nome": "Quimiometria",
        "prof": "Frederico Luis Felipe Soares",
        "dep": "DQUI",
        "horario": "18h30 21h30",
        "dias": [0, 1, 2, 3, 4],
        "inicio": "27 de Julho",
        "fim": "7 de Agosto",
        "obs": "" 
    },{
        "codigo": "CQ135/CQ224",
        "nome": "Fundamentos de Química Inorgânica IV",
        "prof": "Herbert Winnischofer",
        "dep": "DQUI",
        "horario": "19h00",
        "dias": [2],
        "inicio": "27 de Julho",
        "fim": "",
        "obs": "" 
    },{
        "codigo": "CQ153",
        "nome": "Tópicos Especiais em Química Inorgânica: Fundamentos da Química de Organometálicos",
        "prof": "Jaísa Fernandes Soares",
        "dep": "DQUI",
        "horario": "",
        "dias": [5],
        "inicio": "28 de Julho",
        "fim": "15 de Setembro",
        "obs": "O horário ainda está por ser decidido. Mais informações na ficha." 
    },
    {
        "codigo": "CQ213",
        "nome": "História da Química",
        "prof": "Patricio Peralta Zamora",
        "dep": "DQUI",
        "horario": "10h00 11h00",
        "dias": [0],
        "inicio": "3 de Agosto",
        "fim": "21 de Agosto",
        "obs": "" 
    },{
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Básica Brasileira",
        "prof": "Claudia Regina Baukat Silveira Moreira",
        "dep": "DEPLAE",
        "horario": "",
        "dias": [5],
        "inicio": "",
        "fim": "13 de Outubro",
        "obs": "Horários não definidos" 
    },{
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Brasileira",
        "prof": "Maria Tereza Carneiro Soares",
        "dep": "DEPLAE",
        "horario": "",
        "dias": [5],
        "inicio": "",
        "fim": "",
        "obs": "Mais informações na ficha." 
    },{
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Brasileira ",
        "prof": "Monica Ribeiro da Silva",
        "dep": "DEPLAE",
        "horario": "",
        "dias": [5],
        "inicio": "",
        "fim": "",
        "obs": "Mais informações na ficha." 
    },
    {
        "codigo": "CQ170/CQ297",
        "nome": "Operações Unitárias em Química Industrial I",
        "prof": " Izabel Cristina Riegel Vidotti Miyata",
        "dep": "DQUI",
        "horario": "",
        "dias": [5],
        "inicio": "5 de Agosto",
        "fim": "14 de Outubro",
        "obs": "" 
    },{
        "codigo": "EM159",
        "nome": "Metodologia do Ensino de Química ",
        "prof": "Neusa Nogueira Fialho",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h00 20h30",
        "dias": [2],
        "inicio": "29 de Julho",
        "fim": "23 de Setembro",
        "obs": "" 
    },{
        "codigo": "EM160",
        "nome": "Prática de Docência em Química I",
        "prof": "Liane Maria Vargas Barboza",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h00 20h30",
        "dias": [0,1],
        "inicio": "13 de Julho",
        "fim": "22 de Setembro",
        "obs": "" 
    },{
        "codigo": "EM161",
        "nome": "Prática de Docência em Química II",
        "prof": "Neusa Nogueira Fialho",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h00 20h30",
        "dias": [0,1],
        "inicio": "27 de Julho",
        "fim": "22 de Setembro",
        "obs": "" 
    },
    {
        "codigo": "EM326",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química I ",
        "prof": "Neusa Nogueira Fialho",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "8h00 9h30",
        "dias": [0],
        "inicio": "27 de Julho",
        "fim": "21 de Setembro",
        "obs": "" 
    },{
        "codigo": "EM326",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química I",
        "prof": "Liane Maria Vargas Barboza",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "8h00 9h30",
        "dias": [0],
        "inicio": "27 de Julho",
        "fim": "21 de Setembro",
        "obs": "" 
    },{
        "codigo": "EM389",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química II",
        "prof": "Sonia Maria Chaves Haracemiv",
        "dep": "Departamento de Teoria e Prática de Ensino ",
        "horario": "8h00 9h30",
        "dias": [0],
        "inicio": "27 de Julho",
        "fim": "21 de Setembro",
        "obs": "" 
    }
]