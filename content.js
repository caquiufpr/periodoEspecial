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
        "horario": "13h30 15h30",
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
        "horario": "19h00 22h00",
        "dias": [3],
        "inicio": "30 de Julho",
        "fim": "18 de Setembro",
        "obs": "A disciplina será parcialmente assíncrona. Mais informações na ficha." 
    },{
        "codigo": "CM300",
        "nome": "Introdução ao Cálculo (Calouros)",
        "prof": "Mael Sachine,Matheus Brito, Roberto Ribeiro, Saulo Oliveira",
        "dep": "DMAT",
        "horario": "10h00 12h00",
        "dias": [3],
        "inicio": "30 de Julho",
        "fim": "4 de Setembro",
        "obs": "Disciplina majoritariamente assíncrona." 
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
        "dias": [0, 2, 4],
        "inicio": "27 de Julho",
        "fim": "",
        "obs": "" 
    },
    {
        "codigo": "CQ047",
        "nome": "Físico-Química II",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [5],
        "inicio": "28 de Julho",
        "fim": "28 de Agosto",
        "obs": "Disciplina assíncrona com datas variadas." 
    },{
        "codigo": "CQ069/CQ264",
        "nome": "Quimiometria",
        "prof": "Frederico Luis Felipe Soares",
        "dep": "DQUI",
        "horario": "19h00 22h00",
        "dias": [0, 1, 2, 3, 4],
        "inicio": "27 de Julho",
        "fim": "7 de Agosto",
        "obs": "" 
    },{
        "codigo": "CQ135/CQ224",
        "nome": "Fundamentos de Química Inorgânica IV",
        "prof": "Herbert Winnischofer",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [2],
        "inicio": "27 de Julho",
        "fim": "2 de Setembro",
        "obs": "" 
    },{
        "codigo": "CQ153",
        "nome": "Tópicos Especiais em Química Inorgânica: Fundamentos da Química de Organometálicos",
        "prof": "Jaísa Fernandes Soares",
        "dep": "DQUI",
        "horario": "8h00 10h00",
        "dias": [1,3],
        "inicio": "28 de Julho",
        "fim": "15 de Setembro",
        "obs": "" 
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
        "horario": "7h30 11h30",
        "dias": [2],
        "inicio": "29 de Julho",
        "fim": "13 de Outubro",
        "obs": "Mais informações na ficha. Os professores podem variar." 
    },{
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Brasileira",
        "prof": "Maria Tereza Carneiro Soares",
        "dep": "DEPLAE",
        "horario": "7h30 11h30",
        "dias": [0],
        "inicio": "27 de Julho",
        "fim": "28 de Setembro",
        "obs": "Mais informações na ficha. Os professores podem variar." 
    },{
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Brasileira ",
        "prof": "Monica Ribeiro da Silva",
        "dep": "DEPLAE",
        "horario": "18h00 22h00",
        "dias": [1],
        "inicio": "28 de Julho",
        "fim": "25 de Agosto",
        "obs": "Mais informações na ficha." 
    },
    {
        "codigo": "CQ170/CQ297",
        "nome": "Operações Unitárias em Química Industrial I",
        "prof": " Izabel Cristina Riegel Vidotti Miyata",
        "dep": "DQUI",
        "horario": "9h00 12h00",
        "dias": [2],
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
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "8h00 9h30",
        "dias": [0],
        "inicio": "27 de Julho",
        "fim": "21 de Setembro",
        "obs": "" 
    },{
        "codigo": "CM042",
        "nome": "Cálculo II",
        "prof": "Não Informado",
        "dep": "DMAT",
        "horario": "13h30 15h30",
        "dias": [0,4],
        "inicio": "27 de Julho",
        "fim": "18 de Setembro",
        "obs": "" 
    },{
        "codigo": "CQ115",
        "nome": "Química Quântica",
        "prof": "Joaquim Delphino da Motta Neto",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [0, 3],
        "inicio": "27 de Julho",
        "fim": "3 de Setembro",
        "obs": "" 
    },{
        "codigo": "CQ115",
        "nome": "Química Quântica",
        "prof": "Joaquim Delphino da Motta Neto",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [0, 3],
        "inicio": "27 de Julho",
        "fim": "3 de Setembro",
        "obs": "" 
    },{
        "codigo": "CF109",
        "nome": "Física I",
        "prof": "Cristiano Francisco Woellner",
        "dep": "DFIS",
        "horario": "10h00 12h00",
        "dias": [1, 3],
        "inicio": "28 de Julho",
        "fim": "17 de Setembro",
        "obs": "" 
    },{
        "codigo": "CE009",
        "nome": "Introdução à Estatística",
        "prof": "Nivea da Silva Matuda Machado, Eliane Maria Wilbert Winter",
        "dep": "DEST",
        "horario": "13h30 15h30",
        "dias": [2],
        "inicio": "29 de Julho",
        "fim": "16 de Setembro",
        "obs": "" 
    },{
        "codigo": "ET053/ET8",
        "nome": "Psicologia da Educação",
        "prof": "Tania Stoltz",
        "dep": "DTFE",
        "horario": "18h00 20h00",
        "dias": [2],
        "inicio": "29 de Julho",
        "fim": "30 de Setembro",
        "obs": "" 
    },{
        "codigo": "CQ068",
        "nome": "Espectrometria II",
        "prof": "Anderson Barrison, Fabio Simoneli, Caroline Da Ros Montes D’Oca",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [3],
        "inicio": "30 de Julho",
        "fim": "24 de Setembro",
        "obs": "" 
    },{
        "codigo": "CF111",
        "nome": "Física III",
        "prof": "Alex Aparecido Ferreira",
        "dep": "DFIS",
        "horario": "8h00 10h00",
        "dias": [4],
        "inicio": "31 de Julho",
        "fim": "18 de Setembro",
        "obs": "" 
    },{
        "codigo": "CM300",
        "nome": "Introdução ao Cálculo (Calouros)",
        "prof": "Não informado",
        "dep": "DMAT",
        "horario": "18h00 20h00",
        "dias": [4],
        "inicio": "31 de Julho",
        "fim": "4 de Setembro",
        "obs": "" 
    }
]

const cycle3 = [
    {
        "codigo": "CQ019",
        "nome": "Cromatografia",
        "prof": "Bruno José Gonçalves da Silva",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [4],
        "inicio": "10 de Agosto",
        "fim": "18 de Setembro",
        "obs": "Parcialmente assíncrona."
    },{
        "codigo": "CQ047",
        "nome": "Físico-Química II",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "",
        "dias": [5],
        "inicio": "14 de Agosto",
        "fim": "25 de Setembro",
        "obs": "Disciplina assíncrona com horários para tirar dúvidas pelo Teams." 
    },{
        "codigo": "CQ048/CQ243",
        "nome": "Físico-Química III – Cinética Química ",
        "prof": "Diego Guedes-Sobrinho",
        "dep": "DQUI",
        "horario": "15hh00 18h00",
        "dias": [5],
        "inicio": "10 de Agosto",
        "fim": "28 de Agosto",
        "obs": "Aulas assíncronas com horário para tirar dúvidas pelo Teams."
    },{
        "codigo": "CQ049/CQ245",
        "nome": "Físico-Química IV/V",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [5],
        "inicio": "10 de Agosto",
        "fim": "11 de Setembro",
        "obs": "A disciplina será ofertada a partir de vídeos gravados e encontros para discussão de listas de exercícios em datas variadas." 
    },{
        "codigo": "CQ058a / CQ274a",
        "nome": "Tópicos Especiais em Química II – Introdução à Química Forense",
        "prof": "Dênio E. P. Souto, Clarice D. B. do Amaral, Bruno J. G. da Silva, Frederico L. F. Soares",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [0, 3, 4],
        "inicio": "10 de Agosto",
        "fim": "25 de Setembro",
        "obs": "A disciplina será majoritariamente por palestras de diversos peritos criminais." 
    },{
        "codigo": "CQ124/CQ231",
        "nome": "Fundamentos da Química Orgânica I / Química Orgânica I",
        "prof": "Daniel da Silveira Rampon e Marcelo Gonçalves Montes D’Oca",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [1, 3],
        "inicio": "11 de Agosto",
        "fim": "26 de Setembro",
        "obs": "" 
    },{
        "codigo": "CQ213",
        "nome": "História da Química (Noturno)",
        "prof": "Patricio Peralta Zamora",
        "dep": "DQUI",
        "horario": "18h30 19h30",
        "dias": [0],
        "inicio": "10 de Agosto",
        "fim": "28 de Agosto",
        "obs": "Uma boa parte será assíncrona." 
    },{
        "codigo": "LIB038",
        "nome": "Comunicação em Língua Brasileira de Sinais. LIBRAS: Fundamentos da Educação Bilíngue para Surdos",
        "prof": "Marcelo Porto",
        "dep": "Coordenação do Curso de Letras Libras",
        "horario": "18h00 20h00",
        "dias": [5],
        "inicio": "10 de Agosto",
        "fim": "26 de Setembro",
        "obs": "Totalmente assíncrona." 
    },{
        "codigo": "ET170",
        "nome": "Diversidade Étcnico-Racial, Gênero e Sexualidade",
        "prof": "Valeria Floriano Machado",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "15h00 17h00",
        "dias": [2],
        "inicio": "12 de Agosto",
        "fim": "16 de Setembro",
        "obs": "No dia 19/08 não terão astividades sícronas. Veja o cronograma para mais detalhes." 
    },{
        "codigo": "ET170",
        "nome": "Diversidade Étcnico-Racial, Gênero e Sexualidade",
        "prof": "Carolina dos Anjos de Borba",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "15h00 17h00",
        "dias": [2],
        "inicio": "12 de Agosto",
        "fim": "16 de Setembro",
        "obs": "No dia 19/08 não terão astividades sícronas. Veja o cronograma para mais detalhes." 
    },{
        "codigo": "ET170",
        "nome": "Diversidade Étcnico-Racial, Gênero e Sexualidade",
        "prof": "Paulo Vinicius Silva",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "20h30 22h30",
        "dias": [2],
        "inicio": "12 de Agosto",
        "fim": "16 de Setembro",
        "obs": "No dia 19/08 não terão astividades sícronas. Veja o cronograma para mais detalhes." 
    }
]