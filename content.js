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
    }, {
        "codigo": "CQ048/CQ243",
        "nome": "Físico-Química III/Cinética",
        "prof": "Diego Guedes-Sobrinho",
        "dep": "DQUI",
        "horario": "16h00 19h00",
        "dias": [0, 1, 2, 3, 4],
        "inicio": "13 de Julho",
        "fim": "24 de Julho",
        "obs": ""
    }, {
        "codigo": "CQ138/CQ221",
        "nome": "Química Geral",
        "prof": "Ronny Rocha Ribeiro",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [0, 2, 4],
        "inicio": "13 de Julho",
        "fim": "21 de Agosto",
        "obs": ""
    }, {
        "codigo": "CQ059/CQ275",
        "nome": "Tópicos Especiais em Química III - Catálise",
        "prof": "Shirley Nakagami, Marcio Peres de Araujo",
        "dep": "DQUI",
        "horario": "10h00 12h00",
        "dias": [1, 2, 3],
        "inicio": "14 de Julho",
        "fim": "13 de Agosto",
        "obs": ""
    }, {
        "codigo": "CQ097",
        "nome": "Prática Pedagógica: Projetos Integrados I",
        "prof": "Joanez Aparecida Aires",
        "dep": "DQUI",
        "horario": "13h00 17h30",
        "dias": [3],
        "inicio": "16 de Julho",
        "fim": "17 de Setembro",
        "obs": ""
    }, {
        "codigo": "CQ161/CQ255",
        "nome": "Química Integrada I",
        "prof": "Everton Bedin",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [3],
        "inicio": "16 de Julho",
        "fim": "17 de Setembro",
        "obs": ""
    }, {
        "codigo": "CM301",
        "nome": "Cálculo em uma Variável Real",
        "prof": "Carlos Roberto Vianna",
        "dep": "DMAT",
        "horario": "19h00 21h00",
        "dias": [3],
        "inicio": "16 de Julho",
        "fim": "24 de Setembro",
        "obs": ""
    }, {
        "codigo": "CQ099",
        "nome": "Atividades Complementares",
        "prof": "Joanez Aparecida Aires",
        "dep": "DQUI",
        "horario": "15h00 19h00",
        "dias": [4],
        "inicio": "15h00",
        "fim": "",
        "obs": ""
    }, {
        "codigo": "CM041",
        "nome": "Cálculo I",
        "prof": "Alexandre Kirilov",
        "dep": "DMAT",
        "horario": "16h00 17h40",
        "dias": [0, 4],
        "inicio": "17 de Julho",
        "fim": "18 de Setembro",
        "obs": ""
    }, {
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
        "dias": [2, 4],
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
    }, {
        "codigo": "CM300",
        "nome": "Introdução ao Cálculo (Calouros)",
        "prof": "Mael Sachine,Matheus Brito, Roberto Ribeiro, Saulo Oliveira",
        "dep": "DMAT",
        "horario": "10h00 12h00",
        "dias": [3],
        "inicio": "30 de Julho",
        "fim": "4 de Setembro",
        "obs": "Disciplina majoritariamente assíncrona."
    }, {
        "codigo": "CQ042",
        "nome": "Química Ambiental",
        "prof": "Marco Tadeu Grassi",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [2],
        "inicio": "27 de Julho",
        "fim": "26 de Agosto",
        "obs": "A maior carga horária será de forma assíncrona."
    }, {
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
    }, {
        "codigo": "CQ069/CQ264",
        "nome": "Quimiometria",
        "prof": "Frederico Luis Felipe Soares",
        "dep": "DQUI",
        "horario": "19h00 22h00",
        "dias": [0, 1, 2, 3, 4],
        "inicio": "27 de Julho",
        "fim": "7 de Agosto",
        "obs": ""
    }, {
        "codigo": "CQ135/CQ224",
        "nome": "Fundamentos de Química Inorgânica IV",
        "prof": "Herbert Winnischofer",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [2],
        "inicio": "27 de Julho",
        "fim": "2 de Setembro",
        "obs": ""
    }, {
        "codigo": "CQ153",
        "nome": "Tópicos Especiais em Química Inorgânica: Fundamentos da Química de Organometálicos",
        "prof": "Jaísa Fernandes Soares",
        "dep": "DQUI",
        "horario": "8h00 10h00",
        "dias": [1, 3],
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
    }, {
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Básica Brasileira",
        "prof": "Claudia Regina Baukat Silveira Moreira",
        "dep": "DEPLAE",
        "horario": "7h30 11h30",
        "dias": [2],
        "inicio": "29 de Julho",
        "fim": "13 de Outubro",
        "obs": "Mais informações na ficha. Os professores podem variar."
    }, {
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Brasileira",
        "prof": "Maria Tereza Carneiro Soares",
        "dep": "DEPLAE",
        "horario": "7h30 11h30",
        "dias": [0],
        "inicio": "27 de Julho",
        "fim": "28 de Setembro",
        "obs": "Mais informações na ficha. Os professores podem variar."
    }, {
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
    }, {
        "codigo": "EM159",
        "nome": "Metodologia do Ensino de Química ",
        "prof": "Neusa Nogueira Fialho",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h00 20h30",
        "dias": [2],
        "inicio": "29 de Julho",
        "fim": "23 de Setembro",
        "obs": ""
    }, {
        "codigo": "EM160",
        "nome": "Prática de Docência em Química I",
        "prof": "Liane Maria Vargas Barboza",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h00 20h30",
        "dias": [0, 1],
        "inicio": "13 de Julho",
        "fim": "22 de Setembro",
        "obs": ""
    }, {
        "codigo": "EM161",
        "nome": "Prática de Docência em Química II",
        "prof": "Neusa Nogueira Fialho",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h00 20h30",
        "dias": [0, 1],
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
    }, {
        "codigo": "EM326",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química I",
        "prof": "Liane Maria Vargas Barboza",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "8h00 9h30",
        "dias": [0],
        "inicio": "27 de Julho",
        "fim": "21 de Setembro",
        "obs": ""
    }, {
        "codigo": "EM389",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química II",
        "prof": "Sonia Maria Chaves Haracemiv",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "8h00 9h30",
        "dias": [0],
        "inicio": "27 de Julho",
        "fim": "21 de Setembro",
        "obs": ""
    }, {
        "codigo": "CM042",
        "nome": "Cálculo II",
        "prof": "Não Informado",
        "dep": "DMAT",
        "horario": "13h30 15h30",
        "dias": [0, 4],
        "inicio": "27 de Julho",
        "fim": "18 de Setembro",
        "obs": ""
    }, {
        "codigo": "CQ115",
        "nome": "Química Quântica",
        "prof": "Joaquim Delphino da Motta Neto",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [0, 3],
        "inicio": "27 de Julho",
        "fim": "3 de Setembro",
        "obs": ""
    }, {
        "codigo": "CQ115",
        "nome": "Química Quântica",
        "prof": "Joaquim Delphino da Motta Neto",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [0, 3],
        "inicio": "27 de Julho",
        "fim": "3 de Setembro",
        "obs": ""
    }, {
        "codigo": "CF109",
        "nome": "Física I",
        "prof": "Cristiano Francisco Woellner",
        "dep": "DFIS",
        "horario": "10h00 12h00",
        "dias": [1, 3],
        "inicio": "28 de Julho",
        "fim": "17 de Setembro",
        "obs": ""
    }, {
        "codigo": "CE009",
        "nome": "Introdução à Estatística",
        "prof": "Nivea da Silva Matuda Machado, Eliane Maria Wilbert Winter",
        "dep": "DEST",
        "horario": "13h30 15h30",
        "dias": [2],
        "inicio": "29 de Julho",
        "fim": "16 de Setembro",
        "obs": ""
    }, {
        "codigo": "ET053/ET8",
        "nome": "Psicologia da Educação",
        "prof": "Tania Stoltz",
        "dep": "DTFE",
        "horario": "18h00 20h00",
        "dias": [2],
        "inicio": "29 de Julho",
        "fim": "30 de Setembro",
        "obs": ""
    }, {
        "codigo": "CQ068",
        "nome": "Espectrometria II",
        "prof": "Anderson Barrison, Fabio Simoneli, Caroline Da Ros Montes D’Oca",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [3],
        "inicio": "30 de Julho",
        "fim": "24 de Setembro",
        "obs": ""
    }, {
        "codigo": "CF111",
        "nome": "Física III",
        "prof": "Alex Aparecido Ferreira",
        "dep": "DFIS",
        "horario": "8h00 10h00",
        "dias": [4],
        "inicio": "31 de Julho",
        "fim": "18 de Setembro",
        "obs": ""
    }, {
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
    }, {
        "codigo": "CQ047",
        "nome": "Físico-Química II",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "",
        "dias": [5],
        "inicio": "14 de Agosto",
        "fim": "25 de Setembro",
        "obs": "Disciplina assíncrona com horários para tirar dúvidas pelo Teams."
    }, {
        "codigo": "CQ048/CQ243",
        "nome": "Físico-Química III – Cinética Química ",
        "prof": "Diego Guedes-Sobrinho",
        "dep": "DQUI",
        "horario": "15hh00 18h00",
        "dias": [5],
        "inicio": "10 de Agosto",
        "fim": "28 de Agosto",
        "obs": "Aulas assíncronas com horário para tirar dúvidas pelo Teams."
    }, {
        "codigo": "CQ049/CQ245",
        "nome": "Físico-Química IV/V",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [5],
        "inicio": "10 de Agosto",
        "fim": "11 de Setembro",
        "obs": "A disciplina será ofertada a partir de vídeos gravados e encontros para discussão de listas de exercícios em datas variadas."
    }, {
        "codigo": "CQ058a / CQ274a",
        "nome": "Tópicos Especiais em Química II – Introdução à Química Forense",
        "prof": "Dênio E. P. Souto, Clarice D. B. do Amaral, Bruno J. G. da Silva, Frederico L. F. Soares",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [0, 3, 4],
        "inicio": "10 de Agosto",
        "fim": "25 de Setembro",
        "obs": "A disciplina será majoritariamente por palestras de diversos peritos criminais."
    }, {
        "codigo": "CQ124/CQ231",
        "nome": "Fundamentos da Química Orgânica I / Química Orgânica I",
        "prof": "Daniel da Silveira Rampon e Marcelo Gonçalves Montes D’Oca",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [1, 3],
        "inicio": "11 de Agosto",
        "fim": "26 de Setembro",
        "obs": ""
    }, {
        "codigo": "CQ213",
        "nome": "História da Química (Noturno)",
        "prof": "Patricio Peralta Zamora",
        "dep": "DQUI",
        "horario": "18h30 19h30",
        "dias": [0],
        "inicio": "10 de Agosto",
        "fim": "28 de Agosto",
        "obs": "Uma boa parte será assíncrona."
    }, {
        "codigo": "LIB038",
        "nome": "Comunicação em Língua Brasileira de Sinais. LIBRAS: Fundamentos da Educação Bilíngue para Surdos",
        "prof": "Marcelo Porto",
        "dep": "Coordenação do Curso de Letras Libras",
        "horario": "18h00 20h00",
        "dias": [5],
        "inicio": "10 de Agosto",
        "fim": "26 de Setembro",
        "obs": "Totalmente assíncrona."
    }, {
        "codigo": "ET170",
        "nome": "Diversidade Étcnico-Racial, Gênero e Sexualidade",
        "prof": "Valeria Floriano Machado",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "15h00 17h00",
        "dias": [2],
        "inicio": "12 de Agosto",
        "fim": "16 de Setembro",
        "obs": "No dia 19/08 não terão astividades sícronas. Veja o cronograma para mais detalhes."
    }, {
        "codigo": "ET170",
        "nome": "Diversidade Étcnico-Racial, Gênero e Sexualidade",
        "prof": "Carolina dos Anjos de Borba",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "15h00 17h00",
        "dias": [2],
        "inicio": "12 de Agosto",
        "fim": "16 de Setembro",
        "obs": "No dia 19/08 não terão astividades sícronas. Veja o cronograma para mais detalhes."
    }, {
        "codigo": "ET170",
        "nome": "Diversidade Étcnico-Racial, Gênero e Sexualidade",
        "prof": "Paulo Vinicius Silva",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "20h30 22h30",
        "dias": [2],
        "inicio": "12 de Agosto",
        "fim": "16 de Setembro",
        "obs": "No dia 19/08 não terão astividades sícronas. Veja o cronograma para mais detalhes."
    }, {
        "codigo": "CQ255",
        "nome": "Química Integrada",
        "prof": "Everton Bedin",
        "dep": "DQUI",
        "horario": "19h00 20h00",
        "dias": [4],
        "inicio": "?",
        "fim": "?",
        "obs": "Não foram encontradas datas na ficha da disciplina, porém a Carga Horária é de 90h, sendo 10h semanais."
    }
]

const cycle4 = [
    {
        "codigo": "BQ005",
        "nome": "Introdução à Bioquímica",
        "prof": "Leda Satie Chubatsu",
        "dep": "Departamento de Bioquímica e Biologia Molecular",
        "horario": "13h30 15h30",
        "dias": [2],
        "inicio": "04/11",
        "fim": "24/03",
        "obs": "Metade assíncrona (2h)",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/bq005-bioquimica-_leda.pdf"
    }, {
        "codigo": "CQ018",
        "nome": "Química Toxicológica",
        "prof": "Rilton Alves de Freitas",
        "dep": "DQUI",
        "horario": "17h30 21h30",
        "dias": [1],
        "inicio": "26/01",
        "fim": "23/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq018-quimica-toxicologica_rilton.pdf"
    }, {
        "codigo": "CQ019",
        "nome": "Cromatografia",
        "prof": "Btuno José Gonçalves da Silva",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [4],
        "inicio": "06/11",
        "fim": "18/12",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq019-cromatografia_bruno.pdf"
    }, {
        "codigo": "CQ043",
        "nome": "Estágio Supervisionado",
        "prof": "Lauro Camargo Dias Júnior, Liliana Micaroni, Regina Maria Queiroz de Mello, Maria Aparecida Ferreira César Oliveira ",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "-",
        "fim": "-",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq043_estagio_lauro_liliana_regina_cida.pdf"
    }, {
        "codigo": "CQ042",
        "nome": "Química Ambiental",
        "prof": "Marco Tadeu Grassi",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "18/01",
        "fim": "05/03",
        "obs": "8h de atividades assíncronas semanais.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq042_cq218-quimica-ambiental_marco_grassi.pdf"
    }, {
        "codigo": "CQ049",
        "nome": "Físico-Química IV",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/11",
        "fim": "22/01",
        "obs": "Aulas gravadas postadas no YouTube.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq049-fisico-quimica-iv_harley.pdf"
    }, {
        "codigo": "CQ052/CQ224",
        "nome": "Físico-Química Experimental III / IV",
        "prof": "Regina Maria Queiroz de Mello",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "01/02",
        "fim": "26/03",
        "obs": "Aulas gravadas postadas no YouTube.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq052_cq244_fisico-quimica-experimental-iii-_-iv-regina.pdf"
    }, {
        "codigo": "CQ058/CQ274",
        "nome": "Tópicos Especiais em Química II – Introdução à Química Forense",
        "prof": "Bruno J. G. da Silva, Clarice D. B. do Amaral, Frederico L. F. Soares",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [0, 3],
        "inicio": "05/11",
        "fim": "17/12",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq058_cq274_topicos-especiais-em-quimica-ii-introducao-a-quimica-forense-bruno_clarice_frederico.pdf"
    }, {
        "codigo": "CQ051",
        "nome": "Físico-Química Experimental II",
        "prof": "Rilton Alves de Freitas",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "?",
        "fim": "?",
        "obs": "Datas não informadas na ementa.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq051-fisico-quimica-experimental-ii-_rilton.pdf"
    }, {
        "codigo": "CQ132/CQ221",
        "nome": "Fundamentos de Química Inorgânica I",
        "prof": " Herbert Winnischofer, Márcio Peres de Araujo, Shirley Nakagaki",
        "dep": "DQUI",
        "horario": "20h 22h",
        "dias": [0],
        "inicio": "09/11",
        "fim": "08/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq132_221_herbert_marcio-peres_shirley.pdf"
    }, {
        "codigo": "CQ133",
        "nome": "Fundamentos de Química Inorgânica II (Grade Antiga)",
        "prof": "Fábio Souza Nunes, Giovana Gioppo Nunes",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [4],
        "inicio": "06/11",
        "fim": "26/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq133-fundamentos-de-quimica-inorganica-ii_fabio_giovana.pdf"
    }, {
        "codigo": "CQ135/CQ224",
        "nome": "Fundamentos de Química Inorgânica IV",
        "prof": "Aldo Zarbin, Herbert Winnischofer",
        "dep": "DQUI",
        "horario": "14h 16h",
        "dias": [2],
        "inicio": "18/11",
        "fim": "03/02",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq135-e-224-fundamentos-de-quimica-inorganica_herbert_aldo.pdf"
    }, {
        "codigo": "CQ155",
        "nome": "Introdução à Filosofia das Ciências para Química",
        "prof": "Roberto Dalmo Varallo Lima de Oliveira",
        "dep": "DQUI",
        "horario": "14h 18h",
        "dias": [2],
        "inicio": "04/11",
        "fim": "16/12",
        "obs": "Possui atividades síncronas mas com horários variados.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq155-introd-filosofia-ciencias-para-quim_dalmo.pdf"
    }, {
        "codigo": "CQ156",
        "nome": "Pesquisa em Ensino de Química",
        "prof": "Roberto Dalmo Varallo Lima de Oliveira",
        "dep": "DQUI",
        "horario": "18h 22h",
        "dias": [2],
        "inicio": "04/11",
        "fim": "18/12",
        "obs": "Possui atividades síncronas mas com horários variados.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq156-pesquisa-em-ensino-de-quimica_dalmo.pdf"
    }, {
        "codigo": "CQ158",
        "nome": "Projetos de Pesquisa em Ensino de Química II ",
        "prof": "Camila Silveira da Silva",
        "dep": "DQUI",
        "horario": "19h 23h",
        "dias": [1],
        "inicio": "03/11",
        "fim": "16/03",
        "obs": "O horário conta atividades assíncronas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq158-proj-pesquisa-ens-quimica-ii_camila.pdf"
    }, {
        "codigo": "CQ222",
        "nome": "Química Inorgânica II",
        "prof": "Fábio Souza Nunes",
        "dep": "DQUI",
        "horario": "19h 20h",
        "dias": [3],
        "inicio": "21/01",
        "fim": "25/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq222-quimica-inorganica-ii_fabio.pdf"
    }, {
        "codigo": "CQ223",
        "nome": "Química Inorgânica III",
        "prof": "Giovana Gioppo Nunes",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [1],
        "inicio": "03/11",
        "fim": "15/12",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq223-quimica-inorganica-iii_giovana.pdf"
    }, {
        "codigo": "CQ256",
        "nome": "Seminários de Educação em Química (Diurno)",
        "prof": "Roberto Dalmo Varallo Lima de Oliveira",
        "dep": "DQUI",
        "horario": "8h 12h",
        "dias": [1],
        "inicio": "03/11",
        "fim": "18/12",
        "obs": "Atividades síncronas com datas variadas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq256-semin-educ-quimica_dalmo.pdf"
    }, {
        "codigo": "CQ256N",
        "nome": "Seminários de Educação em Química (Noturno)",
        "prof": "Roberto Dalmo Varallo Lima de Oliveira",
        "dep": "DQUI",
        "horario": "18h 22h",
        "dias": [1],
        "inicio": "03/11",
        "fim": "18/12",
        "obs": "Atividades síncronas com datas variadas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq256-semin-educ-quim-noturno_dalmo.pdf"
    }, {
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Básica Brasileira",
        "prof": "Claudia Regina Baukat Silveira Moreira",
        "dep": "Deplae",
        "horario": "9h 10h30",
        "dias": [4],
        "inicio": "06/11",
        "fim": "26/02",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/ep073-politica-plan-da-ed-bras_claudia_moreira.pdf"
    }, {
        "codigo": "EP073/EP124",
        "nome": "Política e Planejamento da Educação Básica Brasileira",
        "prof": "Ângelo Ricardo de Souza",
        "dep": "Deplae",
        "horario": "19h 21h",
        "dias": [1],
        "inicio": "03/11",
        "fim": "09/02",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/ep073_ep124-politica-plan-educ-bras-_angelo.pdf"
    }, {
        "codigo": "CQ114",
        "nome": "Termodinâmica e Cinética",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "09/11",
        "fim": "12/03",
        "obs": "Aulas gravadas disponíveis no YouTube.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq114-termodinamica-e-cinetica_harley.pdf"
    }, {
        "codigo": "CQ171",
        "nome": "Operações Unitárias em Química Industrial II",
        "prof": "Izabel Cristina Rigel Vidotti Miyata",
        "dep": "DQUI",
        "horario": "9h 11h",
        "dias": [3],
        "inicio": "18/02",
        "fim": "01/04",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq171-oper-unitarias-em-quim-ind-ii_izabel.pdf"
    }, {
        "codigo": "EM161",
        "nome": "Prática de Docência em Química II",
        "prof": "Neusa Nogueira Fialho",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h 20h30",
        "dias": [0],
        "inicio": "09/12",
        "fim": "01/02",
        "obs": "O plano de ensino está no site da coordenação.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/em161-ficha_02_neusa_fialho.pdf"
    }, {
        "codigo": "EM326",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química I",
        "prof": "Neusa Nogueira Fialho",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "8h 9h30",
        "dias": [0],
        "inicio": "09/11",
        "fim": "25/01",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/em326-neusa_fialho_ficha02.pdf"
    }, {
        "codigo": "CE003",
        "nome": "Estatística II",
        "prof": "Fernando de Pol Mayer",
        "dep": "Departamento de Estatística",
        "horario": "18h30 20h30",
        "dias": [2],
        "inicio": "09/11",
        "fim": "26/02",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/ce003_fernando.pdf"
    }, {
        "codigo": "CE009",
        "nome": "Introdução à Estatística",
        "prof": "Fernando de Pol Mayer",
        "dep": "Departamento de Estatística",
        "horario": "18h30 20h30",
        "dias": [2],
        "inicio": "09/11",
        "fim": "26/02",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/ce009_fernando.pdf"
    }, {
        "codigo": "CQ047",
        "nome": "Físico-Química II",
        "prof": "Elisa Souza Orth",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [1, 3],
        "inicio": "19/01",
        "fim": "18/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq047_elisa.pdf"
    }, {
        "codigo": "CQ048/CQ243",
        "nome": "Físico-Química III - Cinética Química",
        "prof": "Diego Guedes-Sobrinho",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [0, 2],
        "inicio": "03/02",
        "fim": "26/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq048_cq243_diego.pdf"
    }, {
        "codigo": "CQ067",
        "nome": "Espectrometria I",
        "prof": "Fabio Simonelli",
        "dep": "DQUI",
        "horario": "15h 16h",
        "dias": [1],
        "inicio": "10/11",
        "fim": "17/12",
        "obs": "O horário varia em algumas datas. Avaliação final em Fevereiro.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq067_fabio_simonelli.pdf"
    }, {
        "codigo": "CQ069/CQ264",
        "nome": "Quimiometria",
        "prof": "Frederico Luis Felipe Soares",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [1, 3],
        "inicio": "03/11",
        "fim": "15/12",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq069_quimiometria-frederico.pdf"
    }, {
        "codigo": "CQ115/CQ246",
        "nome": "Química Quântica",
        "prof": "Diego Guedes Sobrinho, Thiago N M Cervantes",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [0, 2],
        "inicio": "09/11",
        "fim": "10/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq115_cq246_diego_thiago.pdf"
    }, {
        "codigo": "CQ134",
        "nome": "Fundamentos de Química Inorgânica III",
        "prof": "Flávio Massao Matsumoto",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "?",
        "fim": "?",
        "obs": "Assíncrona",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq134_flavio.pdf"
    }, {
        "codigo": "CQ138/211",
        "nome": "Química Geral",
        "prof": "Ronny Rocha Ribeiro",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [0, 2, 4],
        "inicio": "04/11",
        "fim": "08/02",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq138_cq211_ronny.pdf"
    }, {
        "codigo": "CQ211",
        "nome": "Química Geral",
        "prof": "Shirley Nakagaki, Aldo J. G. Zarbin",
        "dep": "DQUI",
        "horario": "9h30 12h",
        "dias": [2, 3],
        "inicio": "04/11",
        "fim": "03/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq211_shirley_aldo.pdf"
    }, {
        "codigo": "CQ213",
        "nome": "História da Química",
        "prof": "Patricio Peralta Zamora",
        "dep": "DQUI",
        "horario": "10h 12h",
        "dias": [0],
        "inicio": "09/11",
        "fim": "18/01",
        "obs": "Também existirão aulas assíncronas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq213_patricio.pdf"
    }, {
        "codigo": "EM159",
        "nome": "Metodologia do Ensino de Química",
        "prof": "Neusa Nogueira Fialho",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h 20h30",
        "dias": [2],
        "inicio": "11/12",
        "fim": "03/02",
        "obs": "Plano de Ensino disponível no site da coordenação.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/em_159_ficha02_neusa_fialho.pdf"
    }, {
        "codigo": "EM389",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química II",
        "prof": "Sonia Maria Chaves Haracemiv",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "8h 9h30",
        "dias": [0],
        "inicio": "09/11",
        "fim": "25/01",
        "obs": "Plano de Ensino disponível no site da coordenação.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/em389_ficha_02_sonia_haracemiv.pdf"
    }, {
        "codigo": "GC002",
        "nome": "Mineralogia I",
        "prof": "Anelize Manuela Bahaniuk Rumbelspeger, Leonardo Evangelista Lagoeiro",
        "dep": "Departamento de Geologia",
        "horario": "9h30 11h30",
        "dias": [4],
        "inicio": "03/11",
        "fim": "26/02",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/gc002_anelize_leonardo.pdf"
    }, {
        "codigo": "CQ046",
        "nome": "Físico-Química I",
        "prof": "Eduardo Lemos de Sá",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/11",
        "fim": "12/02",
        "obs": "A disciplina é majoritariamente assíncrona, porém possui alguns encontros conforme o cronograma.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq046_eduardo-lemos.pdf"
    }, {
        "codigo": "CQ112",
        "nome": "Introdução à Físico-Química",
        "prof": "Eduardo Lemos de Sá",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/11",
        "fim": "25/01",
        "obs": "A disciplina é majoritariamente assíncrona, porém possui alguns encontros conforme o cronograma.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq112_eduardo-lemos.pdf"
    }, {
        "codigo": "CQ113",
        "nome": "Termodinâmica e Eletroquímica",
        "prof": "Eduardo Lemos de Sá",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/11",
        "fim": "12/02",
        "obs": "A disciplina é majoritariamente assíncrona, porém possui alguns encontros conforme o cronograma.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq113_eduardo_lemos_noturno.pdf"
    }, {
        "codigo": "CQ238",
        "nome": "Físico-Química I",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [1],
        "inicio": "12/01",
        "fim": "16/03",
        "obs": "Aulas assíncronas com períodos síncronos para resolução de exercícios e dúvidas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/ficha-2-ere_ii-cq238-marcio-vidotti-corr.pdf"
    }, {
        "codigo": "CQ240",
        "nome": "Físico-Química II",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "14h 17h",
        "dias": [3],
        "inicio": "14/01",
        "fim": "18/03",
        "obs": "Aulas assíncronas com períodos síncronos para resolução de exercícios e dúvidas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/ficha-2-ere_ii-cq240-marcio-vidotti-corr.pdf"
    }, {
        "codigo": "GC001",
        "nome": "Geologia I",
        "prof": "Germán Vinueza",
        "dep": "DGEO",
        "horario": "14h 16h",
        "dias": [1],
        "inicio": "09/11",
        "fim": "26/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/gc001_geologia-1-german_vinueza.pdf"
    }, {
        "codigo": "CF110",
        "nome": "Física II",
        "prof": "Marcio Henrique Franco Bettega",
        "dep": "DFIS",
        "horario": "? ?",
        "dias": [0, 2],
        "inicio": "18/01",
        "fim": "17/03",
        "obs": "Não foram encontrados horários das aulas na ficha.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cf110-fisica-ii.pdf"
    }, {
        "codigo": "CF111",
        "nome": "Física III",
        "prof": "José Varalda",
        "dep": "DFIS",
        "horario": "- -",
        "dias": [5],
        "inicio": "09/11",
        "fim": "27/03",
        "obs": "Todas as atividades serão assíncronas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cf111-fisica-iii.pdf"
    }, {
        "codigo": "CF062",
        "nome": "Física IV",
        "prof": "Ismael André Heisler",
        "dep": "DFIS",
        "horario": "- -",
        "dias": [5],
        "inicio": "01/02",
        "fim": "15/03",
        "obs": "Apenas as provas serão realizadas de forma síncrona nas datas marcadas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cf062-fisica-iv.pdf"
    }, {
        "codigo": "CF110",
        "nome": "Física II",
        "prof": "Guinther Kellermann",
        "dep": "DFIS",
        "horario": "19h30 23h30",
        "dias": [0, 2],
        "inicio": "02/11",
        "fim": "22/02",
        "obs": "O horário das aulas na segunda vai das 19h30 às 21h30 e na quarta das 21h30 às 23h30.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cf110-fisica-ii-1.pdf"
    }, {
        "codigo": "CQ125/CQ232",
        "nome": "Fundamentos de Química Orgânica II / Química Orgânica II",
        "prof": "Claudiney Soares Cordeiro",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [0, 2, 4],
        "inicio": "04/11",
        "fim": "02/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq125_cq232_claudiney.pdf"
    }, {
        "codigo": "CQ126",
        "nome": "Fundamentos de Química Orgânica III",
        "prof": "Daniel da Silveira Rampon, Caroline da Ros Montes D’Oca e Sônia Faria Zawadzki",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/11",
        "fim": "01/04",
        "obs": "A disciplina ocorrerá de forma síncrona nas terças e quintas, porém nas terças será das 15h30 às 17h30 e nas quintas das 9h30 às 11h30.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq126_daniel_caroline_sonia.pdf"
    }, {
        "codigo": "CM005",
        "nome": "Álgebra Linear",
        "prof": "Aldemir José da Silva Pinto, Ana Gabriela Martínez, Lucelina Batista dos Santos, Pedro Danizete Damázio",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "18/01",
        "fim": "13/03",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cm005_aldemir_ana_lucelina_pedro.pdf"
    }, {
        "codigo": "CM041",
        "nome": "Cálculo I",
        "prof": "Ver ficha da disciplina",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/11",
        "fim": "24/03",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cm041_alexandre_jose_juan_lucas_olivier_raul_tanise.pdf"
    }, {
        "codigo": "CM042, CMI031, CMA211",
        "nome": "Cálculo II, Cálculo 2A",
        "prof": "Ver ficha da disciplina",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "01/12",
        "fim": "26/03",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cm042_cmi031_cma211_carlos_cleber_diego_elizabeth_jose_lucelina_paula.pdf"
    }, {
        "codigo": "CM045",
        "nome": "Geometria Analítica",
        "prof": "Carlos Roberto Vianna",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/11",
        "fim": "22/01",
        "obs": "Horário síncrono às terças para atendimento.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cm045_carlos_vianna.pdf"
    }, {
        "codigo": "CM300",
        "nome": "Introdução ao Cálculo (Diurno)",
        "prof": "Ver ficha da disciplina",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/11",
        "fim": "08/02",
        "obs": "Totalmente assíncrona. Cronograma disponível no site da coordenação.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cm300__alexandre_carlos_elias_mael_roberto_saulo_diurno.pdf"
    }, {
        "codigo": "CM300",
        "nome": "Introdução ao Cálculo (Noturno)",
        "prof": "Ver ficha da disciplina",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/11",
        "fim": "08/02",
        "obs": "Totalmente assíncrona. Cronograma disponível no site da coordenação.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cm300_alexandre_carlos_elias_mael_roberto_saulo_noturno.pdf"
    }, {
        "codigo": "CM301",
        "nome": "Cálculo em uma variável real",
        "prof": "Alexandre Kirilov, Adriana Luiza do Prado, Liangzhong Hu",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/11",
        "fim": "04/03",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cm301_alexandre_adriana_liangzhong.pdf"
    }, {
        "codigo": "CM302",
        "nome": "Cálculo em várias variáveis reais",
        "prof": "Adriana Luiz do Prado, Eduardo Hoefel, Elizabeth Wegner Karas, Liangzhong Hu",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/11",
        "fim": "18/12",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cm302_adriana_eduardo_elizabeth_liangzhong.pdf"
    }, {
        "codigo": "LIB038",
        "nome": "Comunicação em Língua Brasileira de Sinais e Fundamentos da Educação bilíngue de surdos",
        "prof": "André Nogueira Xavier",
        "dep": "Coordenação do Curso de Letras",
        "horario": "- -",
        "dias": [5],
        "inicio": "05/11",
        "fim": "17/12",
        "obs": "Totalmente assíncrona. Plano de ensino disponível no site da coordenação.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/lib038_andre_ficha_02.pdf"
    }, {
        "codigo": "LIB038",
        "nome": "Comunicação em Língua Brasileira de Sinais e Fundamentos da Educação bilíngue de surdos",
        "prof": "Brenno Barros Douettes",
        "dep": "Coordenação do Curso de Letras",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/11",
        "fim": "19/12",
        "obs": "Totalmente assíncrona. Plano de ensino disponível no site da coordenação.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/lib038_brenno_ficha_02.pdf"
    }, {
        "codigo": "CQ098",
        "nome": "Prática Pedagógica: Projetos Integrados II",
        "prof": "Joanez Aires",
        "dep": "DQUI",
        "horario": "15h 20h",
        "dias": [2],
        "inicio": "04/11",
        "fim": "24/02",
        "obs": "Existe mais uma ficha no site da coordenação.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq098_ficha_02_joanez.pdf"
    }, {
        "codigo": "CQ099",
        "nome": "Atividades Complementares",
        "prof": "Joanez Aires",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "05/11",
        "fim": "?",
        "obs": "Os horários serão combinados na primeira aula.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq099_joanez.pdf"
    }, {
        "codigo": "CQ116",
        "nome": "Espectroscopia Óptica (Diurno)",
        "prof": "Joaquim Delphino Da Motta Neto",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [0, 3],
        "inicio": "05/11",
        "fim": "04/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq116_joaquim.pdf"
    }, {
        "codigo": "CQ116",
        "nome": "Espectroscopia Óptica (Noturno)",
        "prof": "Joaquim Delphino Da Motta Neto",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [0, 3],
        "inicio": "05/11",
        "fim": "04/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq116_joaquim.pdf"
    }, {
        "codigo": "ET053",
        "nome": "Psicologia da Educação (Diurno)",
        "prof": "Américo Agostinho Rodrigues Walger",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/02",
        "fim": "27/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/et053_agostinho_diurno.pdf"
    }, {
        "codigo": "ET054",
        "nome": "Estágio Supervisionado em Processos Interativos na Educação",
        "prof": "Talita",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/02",
        "fim": "27/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/et054_talita_noturno.pdf"
    }, {
        "codigo": "ET053",
        "nome": "Psicologia da Educação (Noturno)",
        "prof": "Américo Agostinho Rodrigues Walger",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/02",
        "fim": "27/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/et084_agostinho_noturno.pdf"
    }, {
        "codigo": "ET170",
        "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
        "prof": "Carolina dos Anjos de Borba",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/11",
        "fim": "16/12",
        "obs": "Encontros síncronos em algumas datas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/et170_carolina_diurno.pdf"
    }, {
        "codigo": "ET170",
        "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
        "prof": "Paulo Vinicius Baptista da Silva",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/11",
        "fim": "02/03",
        "obs": "Encontros síncronos em algumas datas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/et170_paulo_noturno.pdf"
    }, {
        "codigo": "ET173",
        "nome": "Fundamentos da Educação Ambiental",
        "prof": "Carina Catiana Foppa",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "- -",
        "dias": [5],
        "inicio": "09/11",
        "fim": "08/03",
        "obs": "Horários variados, veja a ficha para mais informações.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/et173_carina_diurno.pdf"
    }, {
        "codigo": "CQ248",
        "nome": "Filosofia das Ciências para Química",
        "prof": "Roberto Dalmo Varallo Lima de Oliveira",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/11",
        "fim": "18/12",
        "obs": "Terá aulas síncronas mas com datas variadas, realizadas nas quartas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq248-filosofia.pdf"
    }
]

const cycle5 = [
    {
        "codigo": "CF109",
        "nome": "Física I (Diurno)",
        "prof": "Mauro Gomes Rodbard",
        "dep": "DFIS",
        "horario": "15h30 17h30",
        "dias": [0, 2],
        "inicio": "03/05",
        "fim": "18/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cf109-d.pdf",
        "per": [3]
    }, {
        "codigo": "CF109",
        "nome": "Física I (Noturno)",
        "prof": "Rafael Marques da Silva",
        "dep": "DFIS",
        "horario": "- -",
        "dias": [0, 2],
        "inicio": "03/05",
        "fim": "13/08",
        "obs": "Segundas das 19h30 às 21h30 e quartas das 21h30 às 23h30.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cf109-n.pdf",
        "per": [3]
    }, {
        "codigo": "CF110",
        "nome": "Física II (Noturno)",
        "prof": "Wilson Marques Junior",
        "dep": "DFIS",
        "horario": "- -",
        "dias": [0, 2],
        "inicio": "03/05",
        "fim": "17/07",
        "obs": "Segundas das 19h30 às 21h30 e quartas das 21h30 às 23h30.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cf110-n.pdf",
        "per": [4]
    }, {
        "codigo": "CF111",
        "nome": "Física III (Noturno)",
        "prof": "Fabio Marcel Zanetti",
        "dep": "DFIS",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/05",
        "fim": "04/08",
        "obs": "Disciplina assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cf111-n.pdf",
        "per": [5]
    }, {
        "codigo": "CF111",
        "nome": "Física III (Diurno)",
        "prof": "Alex Aparecido Ferreira",
        "dep": "DFIS",
        "horario": "- -",
        "dias": [1, 3],
        "inicio": "04/05",
        "fim": "10/08",
        "obs": "Horário não informado.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cf111.pdf",
        "per": [5]
    }, {
        "codigo": "CF112",
        "nome": "Física IV (Noturno)",
        "prof": "Rodrigo A.",
        "dep": "DFIS",
        "horario": "18h30 20h30",
        "dias": [2],
        "inicio": "05/05",
        "fim": "18/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cf112-n.pdf",
        "per": [6]
    }, {
        "codigo": "CF357",
        "nome": "Laboratório de Física Moderna",
        "prof": "Lucimara Stolz Roman",
        "dep": "DFIS",
        "horario": "- -",
        "dias": [5],
        "inicio": "10/05",
        "fim": "10/08",
        "obs": "Apenas o primeiro encontro e o exame serão síncronos. Disciplina do curso antigo.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cf357-d.pdf",
        "per": [4]
    }, {
        "codigo": "CM005",
        "nome": "Álgebra Linear",
        "prof": "Alexandre Kirilov",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "21/08",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm005.pdf",
        "per": [1]
    }, {
        "codigo": "CM041",
        "nome": "Cálculo I",
        "prof": "Alexandre Kirilov",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "18/08",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm041-calculo_1.pdf",
        "per": [0]
    }, {
        "codigo": "CM042",
        "nome": "Cálculo II",
        "prof": "Alexandre Kirilov",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "14/08",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm042-calculo_2.pdf",
        "per": [1]
    }, {
        "codigo": "CM043",
        "nome": "Cálculo III",
        "prof": "Alexandre Kirilov",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "20/08",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm043.pdf",
        "per": [9]
    }, {
        "codigo": "CM045",
        "nome": "Geometria Analítica",
        "prof": "Vários professores",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "11/07",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm045-ga.pdf",
        "per": [0]
    }, {
        "codigo": "CM300",
        "nome": "Introdução ao Cálculo",
        "prof": "Mael Sachine, Matheus Batagini Brito e Roberto Ribeiro Santos Junior",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "13/08",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm300.pdf",
        "per": [0]
    }, {
        "codigo": "CM301",
        "nome": "Cálculo em uma variável real",
        "prof": "Alexandre Kirilov, Adriana Luiza do Prado e Liangzhong Hu.",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "09/08",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm301.pdf",
        "per": [1]
    }, {
        "codigo": "CM302",
        "nome": "Cálculo em várias variáveis reais",
        "prof": "Elizabeth Wegner Karas e outros.",
        "dep": "DMAT",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "14/08",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm302.pdf",
        "per": [2]
    }, {
        "codigo": "CM303",
        "nome": "Introdução à Geometria Analítica e Álgebra Linear",
        "prof": "Abel Soares Siqueira",
        "dep": "DMAT",
        "horario": "19h 20h30",
        "dias": [1],
        "inicio": "03/05",
        "fim": "20/08",
        "obs": "Totalmente assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cm303.pdf",
        "per": [1]
    }, {
        "codigo": "CQ019",
        "nome": "Cromatografia",
        "prof": "Bruno José Gonçalves da Silva",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [2, 3],
        "inicio": "12/05",
        "fim": "11/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq019_diurno_bruno.pdf",
        "per": [8]
    }, {
        "codigo": "CQ218",
        "nome": "Química Ambiental",
        "prof": "Marco Tadeu Grassi",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "05/05",
        "fim": "10/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq041_218_marco_grasssi.pdf",
        "per": [8]
    }, {
        "codigo": "CQ049",
        "nome": "Química Ambiental",
        "prof": "Marco Tadeu Grassi",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "05/05",
        "fim": "10/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq041_218_marco_grasssi.pdf",
        "per": [9]
    }, {
        "codigo": "CQ043",
        "nome": "Estágio Supervisionado",
        "prof": "Vários professores",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "13/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq043_estagio_supervisionado_lauro_liliana_regina_cida.pdf",
        "per": [7]
    }, {
        "codigo": "CQ046",
        "nome": "Físico-Química I",
        "prof": "Eduardo Lemos de Sá",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [1],
        "inicio": "04/05",
        "fim": "17/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq046_diurno_eduardo_lemos.pdf",
        "per": [2]
    }, {
        "codigo": "CQ047",
        "nome": "Físico-Química II",
        "prof": "Elisa Souza Orth",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [2],
        "inicio": "05/05",
        "fim": "18/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq047_diurno_elisa.pdf",
        "per": [3]
    }, {
        "codigo": "CQ048",
        "nome": "Físico-Química III",
        "prof": "Elisa Souza Orth",
        "dep": "DQUI",
        "horario": "7h30 9h30",
        "dias": [1],
        "inicio": "04/05",
        "fim": "17/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq048_turmas_d1_d2_elisa.pdf",
        "per": [4]
    }, {
        "codigo": "CQ048",
        "nome": "Físico-Química III",
        "prof": "Elisa Souza Orth",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [1],
        "inicio": "04/05",
        "fim": "17/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq048_turmas_d1_d2_elisa.pdf",
        "per": [4]
    }, {
        "codigo": "CQ049",
        "nome": "Físico-Química IV",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "18/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq049_diurno_harley.pdf",
        "per": [5]
    }, {
        "codigo": "CQ050",
        "nome": "Físico-Química Experimental I",
        "prof": "Izabel Cristina Riegel Vidotti Miyata",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "11/05",
        "fim": "03/08",
        "obs": "Serão várias turmas, cada uma em seus dias e horários.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq50_cq239_turmas_dp_d_n_izabel.pdf",
        "per": [3]
    }, {
        "codigo": "CQ239",
        "nome": "Físico-Química Experimental I",
        "prof": "Izabel Cristina Riegel Vidotti Miyata",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "11/05",
        "fim": "03/08",
        "obs": "Serão várias turmas, cada uma em seus dias e horários.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq50_cq239_turmas_dp_d_n_izabel.pdf",
        "per": [2]
    }, {
        "codigo": "CQ051 / CQ242",
        "nome": "Físico-Química Experimental II / III",
        "prof": "Rilton Alves de Freitas",
        "dep": "DQUI",
        "horario": "7h30 9h30",
        "dias": [3],
        "inicio": "06/05",
        "fim": "19/08",
        "obs": "Cofira as outras turmas ofertadas dessa disciplina.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq051_cq242_diurno_rilton.pdf",
        "per": [4, 5]
    }, {
        "codigo": "CQ051 / CQ242",
        "nome": "Físico-Química Experimental II / III",
        "prof": "Rilton Alves de Freitas",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [3],
        "inicio": "06/05",
        "fim": "19/08",
        "obs": "Cofira as outras turmas ofertadas dessa disciplina.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq051_cq242_diurno_rilton.pdf",
        "per": [4, 5]
    }, {
        "codigo": "CQ051 / CQ242",
        "nome": "Físico-Química Experimental II / III",
        "prof": "Rilton Alves de Freitas",
        "dep": "DQUI",
        "horario": "7h30 9h30",
        "dias": [4],
        "inicio": "07/05",
        "fim": "20/08",
        "obs": "Cofira as outras turmas ofertadas dessa disciplina.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq051_cq242_diurno_rilton.pdf",
        "per": [4, 5]
    }, {
        "codigo": "CQ052",
        "nome": "Físico-Química Experimental III",
        "prof": "Regina Maria Queiroz de Mello",
        "dep": "DQUI",
        "horario": "8h30 9h30",
        "dias": [4],
        "inicio": "07/05",
        "fim": "13/08",
        "obs": "Cofira as outras turmas ofertadas dessa disciplina.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq052_regina.pdf",
        "per": [6]
    }, {
        "codigo": "CQ052",
        "nome": "Físico-Química Experimental III",
        "prof": "Regina Maria Queiroz de Mello",
        "dep": "DQUI",
        "horario": "9h30 10h30",
        "dias": [4],
        "inicio": "07/05",
        "fim": "13/08",
        "obs": "Cofira as outras turmas ofertadas dessa disciplina.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq052_regina.pdf",
        "per": [6]
    }, {
        "codigo": "CQ067",
        "nome": "Espectrometria",
        "prof": "Fabio Simonelli",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [1],
        "inicio": "04/05",
        "fim": "10/08",
        "obs": "Cofira as outras turmas ofertadas dessa disciplina.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq067_turmaa_turmab_fabio_simonelli.pdf",
        "per": [4]
    }, {
        "codigo": "CQ067",
        "nome": "Espectrometria",
        "prof": "Fabio Simonelli",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [2],
        "inicio": "05/05",
        "fim": "11/08",
        "obs": "Cofira as outras turmas ofertadas dessa disciplina.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq067_turmaa_turmab_fabio_simonelli.pdf",
        "per": [4]
    }, {
        "codigo": "CQ076",
        "nome": "Química de Polímeros",
        "prof": "Maria Aparecida Ferreira César-Oliveira",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [4],
        "inicio": "14/05",
        "fim": "30/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq076_diurno_cida.pdf",
        "per": [9]
    }, {
        "codigo": "CQ097",
        "nome": "Prática Pedagógica: Projetos Integrados I",
        "prof": "Joanez Aparecida Aires",
        "dep": "DQUI",
        "horario": "15h 17h",
        "dias": [2],
        "inicio": "03/05",
        "fim": "09/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq097_pratica_pedagogica_joanez.pdf",
        "per": [6]
    }, {
        "codigo": "CQ099",
        "nome": "Atividades Complementares",
        "prof": "Joanez Aparecida Aires",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "-",
        "fim": "-",
        "obs": "Apenas 3 encontros.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq099_atividades_complementares_joanez.pdf",
        "per": [9]
    }, {
        "codigo": "CQ112",
        "nome": "Introdução à Físico-Química",
        "prof": "Eduardo Lemos de Sá",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/05",
        "fim": "17/08",
        "obs": "Ocorrerão alguns encontros síncronos, conforme o cronograma.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq112_eduardo_lemos.pdf",
        "per": [1]
    }, {
        "codigo": "CQ113",
        "nome": "Termodinâmica e Eletroquímica",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "05/05",
        "fim": "18/08",
        "obs": "Disciplina assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq113_dpnoturno_harley.pdf",
        "per": [2]
    }, {
        "codigo": "CQ114",
        "nome": "Termodinâmica e Cinética",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "18/08",
        "obs": "Disciplina assíncrona.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq114_noturno_harley.pdf",
        "per": [5]
    }, {
        "codigo": "CQ115",
        "nome": "Química Quântica (Diurno)",
        "prof": "Diego Guedes-Sobrinho e Thiago N. M. Cervantes",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [1, 3],
        "inicio": "04/05",
        "fim": "21/08",
        "obs": "Disciplina com parte síncrona e assíncrona, verifique o cronograma.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq115_diurno_diego_thiago.pdf",
        "per": [4]
    }, {
        "codigo": "CQ246",
        "nome": "Química Quântica (Diurno)",
        "prof": "Diego Guedes-Sobrinho e Thiago N. M. Cervantes",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [1, 3],
        "inicio": "04/05",
        "fim": "21/08",
        "obs": "Disciplina com parte síncrona e assíncrona, verifique o cronograma.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq115_diurno_diego_thiago.pdf",
        "per": [7]
    }, {
        "codigo": "CQ115",
        "nome": "Química Quântica (Noturno)",
        "prof": "Diego Guedes-Sobrinho e Thiago N. M. Cervantes",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [0, 3],
        "inicio": "03/05",
        "fim": "16/08",
        "obs": "Disciplina com parte síncrona e assíncrona, verifique o cronograma.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq115_noturno_diego_thiago.pdf",
        "per": [4]
    }, {
        "codigo": "CQ246",
        "nome": "Química Quântica (Noturno)",
        "prof": "Diego Guedes-Sobrinho e Thiago N. M. Cervantes",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [0, 3],
        "inicio": "03/05",
        "fim": "16/08",
        "obs": "Disciplina com parte síncrona e assíncrona, verifique o cronograma.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq115_noturno_diego_thiago.pdf",
        "per": [7]
    }, {
        "codigo": "CQ116",
        "nome": "Espectroscopia Óptica",
        "prof": "Joaquim Delphino Da Motta Neto",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [0, 3],
        "inicio": "03/05",
        "fim": "19/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq116_diurno_joaquim.pdf",
        "per": [6]
    }, {
        "codigo": "CQ214",
        "nome": "Química Analítica I",
        "prof": "Frederico Luis Felipe Soares",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [0, 4],
        "inicio": "03/05",
        "fim": "20/08",
        "obs": "Segundas das 19h às 21h e sextas das 21h às 23h.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq119_214_noturno_frederico.pdf",
        "per": [1]
    }, {
        "codigo": "CQ119",
        "nome": "Fundamentos da Química Analítica I",
        "prof": "Frederico Luis Felipe Soares",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [0, 4],
        "inicio": "03/05",
        "fim": "20/08",
        "obs": "Segundas das 19h às 21h e sextas das 21h às 23h.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq119_214_noturno_frederico.pdf",
        "per": [2]
    }, {
        "codigo": "CQ124",
        "nome": "Fundamentos da Química Orgânica I (Diurno)",
        "prof": "Caroline Da Ros Montes D’Oca",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [0],
        "inicio": "03/05",
        "fim": "23/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq124_turmadp1_diurno_caroline.pdf",
        "per": [2]
    }, {
        "codigo": "CQ124",
        "nome": "Fundamentos da Química Orgânica I (Noturno)",
        "prof": "Daniel da Silveira Rampon",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "05/05",
        "fim": "21/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq124_turmadp2_noturno_daniel.pdf",
        "per": [2]
    }, {
        "codigo": "CQ125",
        "nome": "Fundamentos da Química Orgânica II (Noturno)",
        "prof": "Claudiney Soares Cordeiro",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "04/05",
        "fim": "19/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq125_cq232_noturno_claudiney.pdf",
        "per": [1]
    }, {
        "codigo": "CQ232",
        "nome": "Química Orgânica II (Noturno)",
        "prof": "Claudiney Soares Cordeiro",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "04/05",
        "fim": "19/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq125_cq232_noturno_claudiney.pdf",
        "per": [3]
    }, {
        "codigo": "CQ125",
        "nome": "Química Orgânica (?)",
        "prof": "Paulo Henrique Grgatti Zarbin",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [1, 3],
        "inicio": "10/05",
        "fim": "16/07",
        "obs": "Nome não bate com o código, mas verifique a ficha para mais informações.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq125_noturno_paulo_zarbin.pdf",
        "per": [2]
    }, {
        "codigo": "CQ126",
        "nome": "Fundamentos de Química Orgânica III (Noturno)",
        "prof": "Caroline da Ros Montes D’Oca",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [0, 2],
        "inicio": "03/05",
        "fim": "23/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq126_turma1_noturno_caroline.pdf",
        "per": [6]
    }, {
        "codigo": "CQ126",
        "nome": "Fundamentos de Química Orgânica III (Noturno)",
        "prof": "Daniel da Silveira Rampon",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [0, 2],
        "inicio": "03/05",
        "fim": "14/08",
        "obs": "Segundas das 19h às 21h e quartas das 21h às 23h.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq126_turma2_noturno_daniel.pdf",
        "per": [6]
    }, {
        "codigo": "CQ132",
        "nome": "Fundamentos de Química Inorgânica I (Diurno)",
        "prof": "Herbert Winnischofer, Márcio Peres de Araujo e Shirley Nakagaki",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [0],
        "inicio": "06/05",
        "fim": "29/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq132_221-fund_inorganica_i__diurno2_herbert_shirley_marcio.pdf",
        "per": [1]
    }, {
        "codigo": "CQ221",
        "nome": "Química Inorgânica I (Diurno)",
        "prof": "Herbert Winnischofer, Márcio Peres de Araujo e Shirley Nakagaki",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [0],
        "inicio": "06/05",
        "fim": "29/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq132_221-fund_inorganica_i__diurno2_herbert_shirley_marcio.pdf",
        "per": [1]
    }, {
        "codigo": "CQ132",
        "nome": "Fundamentos da Química Inorgânica I (Noturno)",
        "prof": "Herbert Winnischofer, Márcio Peres de Araujo e Shirley Nakagaki",
        "dep": "DQUI",
        "horario": "21h 23h",
        "dias": [0],
        "inicio": "03/05",
        "fim": "26/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq132_221fund_inorganica_i__noturno_herbert_shirley_marcio.pdf",
        "per": [1]
    }, {
        "codigo": "CQ221",
        "nome": "Química Inorgânica I (Noturno)",
        "prof": "Herbert Winnischofer, Márcio Peres de Araujo e Shirley Nakagaki",
        "dep": "DQUI",
        "horario": "21h 23h",
        "dias": [0],
        "inicio": "03/05",
        "fim": "26/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq132_221fund_inorganica_i__noturno_herbert_shirley_marcio.pdf",
        "per": [1]
    }, {
        "codigo": "CQ133",
        "nome": "Fundamentos da Química Inorgânica II (Diurno)",
        "prof": "Fábio Sousa Nunes e Giovana Gioppo Nunes",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [4],
        "inicio": "07/05",
        "fim": "20/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq133_diurno_e_noturno_fabio_giovana.pdf",
        "per": [2]
    }, {
        "codigo": "CQ133",
        "nome": "Fundamentos da Química Inorgânica II (Noturno)",
        "prof": "Fábio Sousa Nunes e Giovana Gioppo Nunes",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [3],
        "inicio": "06/05",
        "fim": "19/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq133_diurno_e_noturno_fabio_giovana.pdf",
        "per": [2]
    }, {
        "codigo": "CQ134",
        "nome": "Fundamentos de Química Inorgânica III",
        "prof": "Jaísa Fernandes Soares",
        "dep": "DQUI",
        "horario": "7h30 9h30",
        "dias": [2, 3],
        "inicio": "03/05",
        "fim": "19/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq134_cq225_inorganicaiii_inorganicav_diurno_jaisa.pdf",
        "per": [6, 7]
    }, {
        "codigo": "CQ225",
        "nome": "Química Inorgânica V",
        "prof": "Jaísa Fernandes Soares",
        "dep": "DQUI",
        "horario": "7h30 9h30",
        "dias": [2, 3],
        "inicio": "03/05",
        "fim": "19/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq134_cq225_inorganicaiii_inorganicav_diurno_jaisa.pdf",
        "per": [5]
    }, {
        "codigo": "CQ135",
        "nome": "Fundamentos de Química Inorgânica IV (Diurno)",
        "prof": "Aldo Zarbin e Herbert Winnischofer",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [2],
        "inicio": "05/05",
        "fim": "14/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq135_224-fund_inorganica_iv__diurno_aldo_herbert.pdf",
        "per": [5]
    }, {
        "codigo": "CQ224",
        "nome": "Química Inorgânica IV (Diurno)",
        "prof": "Aldo Zarbin e Herbert Winnischofer",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [2],
        "inicio": "05/05",
        "fim": "14/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq135_224-fund_inorganica_iv__diurno_aldo_herbert.pdf",
        "per": [4]
    }, {
        "codigo": "CQ135",
        "nome": "Fundamentos de Química Inorgânica IV (Noturno)",
        "prof": "Aldo Zarbin e Herbert Winnischofer",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "05/05",
        "fim": "14/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq135_224-fund_inorganica_iv__noturno_aldo_herbert.pdf",
        "per": [8]
    }, {
        "codigo": "CQ224",
        "nome": "Química Inorgânica IV (Noturno)",
        "prof": "Aldo Zarbin e Herbert Winnischofer",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "05/05",
        "fim": "14/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq135_224-fund_inorganica_iv__noturno_aldo_herbert.pdf",
        "per": [6]
    }, {
        "codigo": "CQ302",
        "nome": "Termodinâmica e Eletroquímica",
        "prof": "Harley Paiva Martins Filho",
        "dep": "DQUI",
        "horario": " ",
        "dias": [5],
        "inicio": "05/05",
        "fim": "18/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq302_noturno_harley.pdf",
        "per": [3, 4]
    }, {
        "codigo": "CQ267",
        "nome": "Química de Polímeros",
        "prof": "Maria Aparecida Ferreira César-Oliveira",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [4],
        "inicio": "05/05",
        "fim": "11/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq267_diurno_cida.pdf",
        "per": [9]
    }, {
        "codigo": "CQ256",
        "nome": "Seminários da Educação em Química (Noturno)",
        "prof": "Roberto Dalmo Varallo Lima de Oliveira",
        "dep": "DQUI",
        "horario": "19h00 21h00",
        "dias": [5],
        "inicio": "14/05",
        "fim": "30/07",
        "obs": "Ocorrerão alguns encontros síncronos, verificar o cronograma",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq256_noturno_roberto_dalmo.pdf",
        "per": [0]
    }, {
        "codigo": "CQ256",
        "nome": "Seminários da Educação em Química (Diurno)",
        "prof": "Roberto Dalmo Varallo Lima de Oliveira",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [5],
        "inicio": "07/05",
        "fim": "13/08",
        "obs": "Ocorrerão alguns encontros síncronos, verificar o cronograma",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq256_diurno_roberto_dalmo.pdf",
        "per": [0]
    }, {
        "codigo": "CQ248",
        "nome": "Filosofia das Ciências para Química",
        "prof": "Roberto Dalmo Varallo Lima de Oliveira",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [5],
        "inicio": "07/05",
        "fim": "13/08",
        "obs": "Ocorrerão alguns encontros síncronos, verificar o cronograma",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq248_diurno_roberto_dalmo.pdf",
        "per": [0]
    }, {
        "codigo": "CQ244",
        "nome": "Físico-Química Experimental IV",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "07/05",
        "fim": "20/08",
        "obs": "Ocorrerão alguns encontros síncronos e assíncronos, verificar o cronograma",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq244_marcio_vidotti.pdf",
        "per": [3, 4]
    }, {
        "codigo": "CQ243",
        "nome": "Físico-Química IV",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "05/05",
        "fim": "18/08",
        "obs": "Ocorreram alguns encontros síncronos e assíncronos, verificar o cronograma",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq243_marcio_vidotti.pdf",
        "per": [3, 4]
    }, {
        "codigo": "CQ238",
        "nome": "Físico-Química I",
        "prof": "Eduardo Lemos de Sá",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [5],
        "inicio": "06/05",
        "fim": "17/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq238_noturno_eduardo_lemos.pdf",
        "per": [2]
    }, {
        "codigo": "CQ231",
        "nome": "Química Orgânica I",
        "prof": "Daniel da Silveira Rampon",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [2],
        "inicio": "03/05",
        "fim": "23/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq231_turmad1_diurno_daniel.pdf",
        "per": [2]
    }, {
        "codigo": "CQ231",
        "nome": "Química Orgânica I",
        "prof": "Caroline Da Ros Montes D’Oca",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [2],
        "inicio": "05/05",
        "fim": "23/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq231_turma_d2_noturno_caroline.pdf",
        "per": [1]
    }, {
        "codigo": "CQ223",
        "nome": "Química Inorgânica III",
        "prof": "Giovana Gioppo Nunes",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [1],
        "inicio": "04/05",
        "fim": "17/08",
        "obs": "Duas turmas nas terças-feiras: 13h30 às 15h e 19hàs 20h30",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq223__diurno_e_noturno_giovana.pdf",
        "per": [3]
    }, {
        "codigo": "CQ222",
        "nome": "Química Inorgânica II (Diurno)",
        "prof": "Fábio Souza Nunes",
        "dep": "DQUI",
        "horario": "13h30 14h30",
        "dias": [2],
        "inicio": "05/05",
        "fim": "18/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq222_diurno_e_noturno_fabio_nunes.pdf",
        "per": [2]
    }, {
        "codigo": "CQ222",
        "nome": "Química Inorgânica II (Noturno)",
        "prof": "Fábio Souza Nunes",
        "dep": "DQUI",
        "horario": "19h 20h",
        "dias": [4],
        "inicio": "07/05",
        "fim": "20/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq222_diurno_e_noturno_fabio_nunes.pdf",
        "per": [2]
    }, {
        "codigo": "CQ214",
        "nome": "Química Analítica I",
        "prof": "Andrea Pinto de Oliveira",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [1],
        "inicio": "03/05",
        "fim": "20/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq214_119_diurno_andrea.pdf",
        "per": [1, 2]
    }, {
        "codigo": "CQ119",
        "nome": "Fundamentos da Química Analítica I",
        "prof": "Andrea Pinto de Oliveira",
        "dep": "DQUI",
        "horario": "9h30 11h30",
        "dias": [1],
        "inicio": "03/05",
        "fim": "20/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq214_119_diurno_andrea.pdf",
        "per": [1, 2]
    }, {
        "codigo": "CQ213",
        "nome": "História da Química",
        "prof": "Patricio Peralta Zamora",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [3],
        "inicio": "06/05",
        "fim": "29/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq213_diurno_patricio.pdf",
        "per": [0]
    }, {
        "codigo": "CQ255",
        "nome": "Química Integrada",
        "prof": "Everton Bedin",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [4],
        "inicio": "07/05",
        "fim": "09/07",
        "obs": "Matéria do 9º semestre para a o curso de licenciatura diurno e 10º semestre para o noturno.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq161_cq255__quimica_integrada_everton_bedin.pdf",
        "per": [8]
    }, {
        "codigo": "CQ161",
        "nome": "Química Integrada I",
        "prof": "Everton Bedin",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [4],
        "inicio": "07/05",
        "fim": "09/07",
        "obs": "Matéria do 9º semestre para a o curso de licenciatura diurno e 10º semestre para o noturno.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq161_cq255__quimica_integrada_everton_bedin.pdf",
        "per": [8]
    }, {
        "codigo": "CQ157",
        "nome": "Projetos de Pesquisa em Ensino de Química I",
        "prof": "Camila Silveira da Silva",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "05/05",
        "fim": "11/08",
        "obs": "3 horas semanais de atividades síncronas e 2 horas semanais de atividades assíncronas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq157_camila_silveira.pdf",
        "per": [7, 8]
    }, {
        "codigo": "CQ138",
        "nome": "Química Geral",
        "prof": "Ronny Rocha Ribeiro",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "20/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq138_cq211_ronny.pdf",
        "per": [0]
    }, {
        "codigo": "CQ211",
        "nome": "Química Geral",
        "prof": "Ronny Rocha Ribeiro",
        "dep": "DQUI",
        "horario": "- -",
        "dias": [5],
        "inicio": "03/05",
        "fim": "20/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/cq138_cq211_ronny.pdf",
        "per": [0]
    }, {
        "codigo": "BQ005",
        "nome": "Introdução à Bioquímica",
        "prof": "Leda Satie Chubatsu",
        "dep": "Departamento de Bioquímica e Biologia Molecular",
        "horario": "13h30 15h30",
        "dias": [2],
        "inicio": "05/05",
        "fim": "18/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/bq005_ficha_2__05_2021.pdf",
        "per": [5]
    }, {
        "codigo": "BQ069",
        "nome": "Introdução à Bioquímica",
        "prof": "Leda Satie Chubatsu",
        "dep": "Departamento de Bioquímica e Biologia Molecular",
        "horario": "13h30 15h30",
        "dias": [2],
        "inicio": "05/05",
        "fim": "18/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/bq069_ficha_2__05_2021.pdf",
        "per": [6]
    }, {
        "codigo": "CD044",
        "nome": "Técnicas de Representação Gráfica",
        "prof": "Andrea Faria Andrade",
        "dep": "Departamento de Expressão Gráfica",
        "horario": "13h30 15h30",
        "dias": [0],
        "inicio": "10/05",
        "fim": "01/07",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/ceg001_ficha2_cd004___quimica.pdf",
        "per": [9]
    }, {
        "codigo": "GC001",
        "nome": "Geologia I",
        "prof": "Eduardo Chemas Hindi",
        "dep": "DGEO",
        "horario": "13h30 15h30",
        "dias": [1],
        "inicio": "?",
        "fim": "?",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/gc001.pdf",
        "per": [2, 6]
    }, {
        "codigo": "GC002",
        "nome": "Mineralogia I",
        "prof": "Anelize Rumbelsperger",
        "dep": "DGEO",
        "horario": "9h30 11h30",
        "dias": [4],
        "inicio": "?",
        "fim": "?",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/gc002.pdf",
        "per": [3, 7]
    }, {
        "codigo": "EM326",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química I",
        "prof": "Liane Maria Vargas Barboza",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "7h30 9h",
        "dias": [0],
        "inicio": "?",
        "fim": "?",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/em326.pdf",
        "per": [7]
    }, {
        "codigo": "EM389",
        "nome": "Prática de Ensino e Estágio Supervisionado de Química II",
        "prof": "Sonia Maria Chaves Haracemiv",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "7h30 9h",
        "dias": [0],
        "inicio": "?",
        "fim": "?",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/em389.pdf",
        "per": [7]
    }, {
        "codigo": "EM160",
        "nome": "Prática de Docência de Química I",
        "prof": "Liane Maria Vargas Barboza",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h 21h",
        "dias": [0],
        "inicio": "?",
        "fim": "?",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/em160.pdf",
        "per": [7]
    }, {
        "codigo": "EM161",
        "nome": "Prática de Docência de Química II",
        "prof": "Sonia Maria Chaves Haracemiv",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h 21h",
        "dias": [0],
        "inicio": "?",
        "fim": "?",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/em161.pdf",
        "per": [8]
    }, {
        "codigo": "EM200",
        "nome": "Didádica",
        "prof": "Karina Rousseng Dal Pont",
        "dep": "Departamento de Teoria e Prática de Ensino",
        "horario": "19h 21h",
        "dias": [0],
        "inicio": "10/05",
        "fim": "05/07",
        "obs": "As aulas síncronas serão apenas em algumas datas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/em204_didatica_geografia_quimica_noturno_karina_dal_pont__2.pdf",
        "per": [3]
    }, {
        "codigo": "EP073",
        "nome": "Política e Planejamento da Educação Brasileira",
        "prof": "Jussara Maria Tavares Puglielli Santos",
        "dep": "Departamento de Planejamento e Administração Escolar",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/05",
        "fim": "10/08",
        "obs": "Aulas assíncronas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/ep073-ficha2_prof__jussara_t-_p-_santos_quimica__1.pdf",
        "per": [4, 5]
    }, {
        "codigo": "EP124",
        "nome": "Política e Planejamento da Educação Brasileira",
        "prof": "Jussara Maria Tavares Puglielli Santos",
        "dep": "Departamento de Planejamento e Administração Escolar",
        "horario": "- -",
        "dias": [5],
        "inicio": "04/05",
        "fim": "10/08",
        "obs": "Aulas assíncronas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/ep073-ficha2_prof__jussara_t-_p-_santos_quimica__1.pdf",
        "per": [6, 7]
    }, {
        "codigo": "EP074",
        "nome": "OTPE - Organização do Trabalho Pedagógico na Escola",
        "prof": "Jamil Cabral Sierra",
        "dep": "Departamento de Planejamento e Administração Escolar",
        "horario": "9h30 11h30",
        "dias": [0],
        "inicio": "04/05",
        "fim": "10/08",
        "obs": "Aulas assíncronas e síncronas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/ep074-ficha_2___cronograma_detalhado_otpe_n.pdf",
        "per": [5]
    }, {
        "codigo": "EP074",
        "nome": "OTPE - Organização do Trabalho Pedagógico na Escola",
        "prof": "Andréa Cordeiro",
        "dep": "Departamento de Planejamento e Administração Escolar",
        "horario": "- -",
        "dias": [0],
        "inicio": "03/05",
        "fim": "09/08",
        "obs": "Aulas assíncronas e síncronas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/ep074-otpe_quimica_andrea_cordeiro_diurno.pdf",
        "per": [5]
    }, {
        "codigo": "ET053",
        "nome": "Psicologia da Educação",
        "prof": "Maria de Fátima Joaquim Minetto",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "18h30 22h30",
        "dias": [1],
        "inicio": "04/05",
        "fim": "17/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/et053-ficha_2_et053_luciana.pdf",
        "per": [3]
    }, {
        "codigo": "ET170",
        "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
        "prof": "Carolina dos Anjos Borba",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "15h30 17h30",
        "dias": [2],
        "inicio": "12/05",
        "fim": "11/08",
        "obs": "Serão apenas alguns encontros síncronos.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/et170-ficha_2_et170_carol.pdf",
        "per": [0]
    }, {
        "codigo": "ET170",
        "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
        "prof": "Paulo Vinicius Baptista da Silva",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "21h 23h",
        "dias": [2],
        "inicio": "12/05",
        "fim": "05/08",
        "obs": "Serão apenas alguns encontros síncronos.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/et170-ficha_2_et170_paulo.pdf",
        "per": [0]
    }, {
        "codigo": "ET170",
        "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
        "prof": "Valeria Floriano Machado",
        "dep": "Departamento de Teoria e Fundamentos da Educação",
        "horario": "15h30 17h30",
        "dias": [2],
        "inicio": "12/05",
        "fim": "11/08",
        "obs": "Serão apenas alguns encontros síncronos.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/et170-ficha_2_et170_val_floriano.pdf",
        "per": [0]
    }, {
        "codigo": "TQ177",
        "nome": "Processos Químicos Inorgânicos",
        "prof": "Arion Zandonà Filho e Arislete Dantas de Aquino",
        "dep": "DEQ",
        "horario": "8h30 9h30",
        "dias": [1],
        "inicio": "11/05",
        "fim": "14/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/tq177-ficha2_tqi_para_quimica2021__rf.pdf",
        "per": [8]
    }, {
        "codigo": "TQ202",
        "nome": "Química Analítica Aplicada",
        "prof": "Arion Zandoná Filho e Rosemary Hoffmann Ribani",
        "dep": "DEQ",
        "horario": "8h 10h",
        "dias": [0],
        "inicio": "05/05",
        "fim": "16/08",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/04/tq202-ficha2_tq202_periodo_especial_maio_2021.pdf",
        "per": [8]
    }
]

const cycle6 = [
    {
      "codigo": "BQ005",
      "nome": "Introdução à Bioquímica",
      "prof": "Leda Satie Chubatsu",
      "dep": "DCB",
      "horario": "13h30 15h30",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "22/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/bq005_069_1_2021_revisado-ok.pdf",
      "per": [
        0,
        0,
        0,
        8,
        6,
        9,
        0
      ]
    },
    {
      "codigo": "CD044",
      "nome": "Técnicas de Representação Gráfica",
      "prof": "Drielle Sanchez Leitner",
      "dep": "DEG",
      "horario": "13h30 15h30",
      "dias": [
        1
      ],
      "inicio": "20/09",
      "fim": "03/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cd044-prof-drielle-ok.pdf",
      "per": [
        0,
        8,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "EP073",
      "nome": "Política e Planejamento da Educação Básica Brasileira",
      "prof": "Marcos Ferraz",
      "dep": "DEPLAE",
      "horario": "08h30 10h",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "23/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/ep073-sexta-ok.pdf",
      "per": [
        0,
        0,
        0,
        6,
        0,
        6,
        5
      ]
    },
    {
      "codigo": "EP073/EP124",
      "nome": "Política e Planejamento da Educação Brasileira",
      "prof": "Jussara Maria Tavares Puglielli Santos",
      "dep": "DEPLAE",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "21/09",
      "fim": "14/12",
      "obs": "Disciplina assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/ep073_ep124_jussara_t-_p-_santos_quimica-ok.pdf",
      "per": [
        7,
        0,
        8,
        6,
        0,
        6,
        5
      ]
    },
    {
      "codigo": "EP074",
      "nome": "Organização do Trabalho Pedagógico na Escola",
      "prof": "Andréa Cordeiro",
      "dep": "DEPLAE",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "21/09",
      "fim": "14/12",
      "obs": "Encontros síncronos não estão completamente definidos",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/ep074-otpe-ok.pdf",
      "per": [
        0,
        0,
        0,
        6,
        0,
        6,
        0
      ]
    },
    {
      "codigo": "EP074",
      "nome": "Organização do Trabalho Pedagógico na Escola",
      "prof": "João Paulo Pooli",
      "dep": "DEPLAE",
      "horario": "7h30 11h30",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "13/12",
      "obs": "Encontros síncronos não estão completamente definidos",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/ep074_joao_paulootpe_ok.pdf",
      "per": [
        0,
        0,
        0,
        6,
        0,
        6,
        0
      ]
    },
    {
      "codigo": "TQ178",
      "nome": "Higiene e Segurança",
      "prof": "Vania Irene Stonoga",
      "dep": "DEQ",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "22/09",
      "fim": "18/12",
      "obs": "Disciplina assíncrona com alguns seminários.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/tq_178_1.pdf",
      "per": [
        0,
        5,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "TQ178",
      "nome": "Higiene e Segurança",
      "prof": "Vania Irene Stonoga",
      "dep": "DEQ",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "23/09",
      "fim": "16/12",
      "obs": "Disciplina assíncrona com alguns seminários.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/tq_178_2.pdf",
      "per": [
        0,
        5,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "TQ176",
      "nome": "Processos Químicos Orgânicos",
      "prof": "Arion Zandoná Filho",
      "dep": "DEQ",
      "horario": "9h30 11h30",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "15/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/tq176_2021_1s.pdf",
      "per": [
        0,
        8,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "TQ202",
      "nome": "Química Analítica I",
      "prof": "Arion Zandoná Filho",
      "dep": "DEQ",
      "horario": "7h30 10h",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "13/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/tq202_1sem_2021_set_a_dez.pdf",
      "per": [
        0,
        0,
        0,
        0,
        6,
        9,
        0
      ]
    },
    {
      "codigo": "CF357",
      "nome": "Laboratório de Física Moderna",
      "prof": "Lucimara Stolz Roman",
      "dep": "DFIS",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "Totalmente assíncrona.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cf357_laboratoriofisicamoderna-ok.pdf",
      "per": [
        0,
        0,
        0,
        5,
        5,
        9,
        0
      ]
    },
    {
      "codigo": "CF110",
      "nome": "Física II",
      "prof": "Thiago de Lima Prado",
      "dep": "DFIS",
      "horario": "7h30 9h30",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "17/12",
      "obs": "Verifique a ficha pois tem aulas em horários diferentes.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/dfis_disciplinas.pdf",
      "per": [
        5,
        5,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CF110",
      "nome": "Física II",
      "prof": "Marcio Henrique Franco Bettega",
      "dep": "DFIS",
      "horario": "- -",
      "dias": [
        0,
        2
      ],
      "inicio": "20/09",
      "fim": "22/12",
      "obs": "Não encontrei os horários, e parece que é síncrono.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/dfis_disciplinas.pdf",
      "per": [
        5,
        5,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CF111",
      "nome": "Física III",
      "prof": "Alex Aparecido Ferreira",
      "dep": "DFIS",
      "horario": "- -",
      "dias": [
        1,
        3
      ],
      "inicio": "21/09",
      "fim": "23/12",
      "obs": "Não encontrei os horários, e parece que é síncrono.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/dfis_disciplinas.pdf",
      "per": [
        6,
        6,
        6,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CF112",
      "nome": "Física IV",
      "prof": "Rodrigo",
      "dep": "DFIS",
      "horario": "7h30 9h30",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "07/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/dfis_disciplinas.pdf",
      "per": [
        0,
        7,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "GC001",
      "nome": "Geologia I",
      "prof": "German Freire",
      "dep": "DGEO",
      "horario": "13h30 15h30",
      "dias": [
        1
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "Aulas poderão ocorrer nas quintas de acordo com a ficha",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/gc001-ok.pdf",
      "per": [
        0,
        0,
        0,
        7,
        3,
        7,
        0
      ]
    },
    {
      "codigo": "CM005",
      "nome": "Álgebra Linear",
      "prof": "Diversos professores",
      "dep": "DMAT",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "23/12",
      "obs": "Totalmente assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cm005-ficha-2-ok.pdf",
      "per": [
        0,
        0,
        0,
        2,
        2,
        2,
        4
      ]
    },
    {
      "codigo": "CM041",
      "nome": "Cálculo I",
      "prof": "Diversos professores",
      "dep": "DMAT",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "20/12",
      "obs": "Totalmente assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cm041-calculo1_ere4_v3-ok.pdf",
      "per": [
        0,
        0,
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "codigo": "CM043",
      "nome": "Cálculo III",
      "prof": "Diversos professores",
      "dep": "DMAT",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "20/12",
      "obs": "Totalmente assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cm043-kirilov__ficha2-ok.pdf",
      "per": [
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ]
    },
    {
      "codigo": "CM045",
      "nome": "Geometria Analítica",
      "prof": "Diversos professores",
      "dep": "DMAT",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "Totalmente assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cm045-ga-2021_1-ok.pdf",
      "per": [
        0,
        0,
        0,
        1,
        1,
        1,
        1
      ]
    },
    {
      "codigo": "CM300",
      "nome": "Introdução ao Cálculo",
      "prof": "Diversos professores",
      "dep": "DMAT",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "17/12",
      "obs": "Totalmente assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cm300-mael-ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CM302",
      "nome": "Cálculo em várias variáveis reais",
      "prof": "Liangzhong Hu",
      "dep": "DMAT",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "20/12",
      "obs": "Totalmente assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cm302-ok.pdf",
      "per": [
        3,
        3,
        3,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "ET053",
      "nome": "Psicologia da Educação",
      "prof": "Américo Agostinho Rodrigues Walger",
      "dep": "DTFE",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "24/12",
      "obs": "Totalmente assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/et053_agostinho_tarde-ok.pdf",
      "per": [
        0,
        0,
        0,
        4,
        0,
        4,
        4
      ]
    },
    {
      "codigo": "ET084",
      "nome": "Psicologia da Educação",
      "prof": "Américo Agostinho Rodrigues Walger",
      "dep": "DTFE",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "24/12",
      "obs": "Totalmente assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/et084_agostinho_noite-ok.pdf",
      "per": [
        7,
        0,
        2,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "ET170",
      "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
      "prof": "André Lucas Guerreiro Oliveira",
      "dep": "DTFE",
      "horario": "15h30 17h30",
      "dias": [
        5
      ],
      "inicio": "22/09",
      "fim": "08/12",
      "obs": "Apenas algumas aulas síncronas.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/et170-andre_tarde-1-ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "ET170",
      "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
      "prof": "Carolina dos Anjos de Borba",
      "dep": "DTFE",
      "horario": "15h30 17h30",
      "dias": [
        5
      ],
      "inicio": "22/09",
      "fim": "08/12",
      "obs": "Apenas algumas aulas síncronas.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/et170-carol_tarde-2-ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "ET170",
      "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
      "prof": "André Lucas Guerreiro Oliveira",
      "dep": "DTFE",
      "horario": "21h 23h",
      "dias": [
        5
      ],
      "inicio": "22/09",
      "fim": "08/12",
      "obs": "Apenas algumas aulas síncronas.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/et170_andre_noite.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "ET170",
      "nome": "Diversidade Étnico-Racial, Gênero e Sexualidade",
      "prof": "Carolina dos Anjos de Borba",
      "dep": "DTFE",
      "horario": "21h 23h",
      "dias": [
        5
      ],
      "inicio": "22/09",
      "fim": "08/12",
      "obs": "Apenas algumas aulas síncronas.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/et170_carol_noite.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "EM160",
      "nome": "Prática de Docência em Química I",
      "prof": "Liane Maria Vargas Barboza",
      "dep": "DTPE",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "?",
      "fim": "?",
      "obs": "Os horários ficaram no sigilo.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/em160-2021-ok.pdf",
      "per": [
        0,
        0,
        0,
        0,
        0,
        0,
        8
      ]
    },
    {
      "codigo": "EM161",
      "nome": "Prática de Docência em Química II",
      "prof": "Sonia Maria Chaves Haracemiv",
      "dep": "DTPE",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "?",
      "fim": "?",
      "obs": "Os horários ficaram no sigilo.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/em161-2021.pdf",
      "per": [
        0,
        0,
        0,
        0,
        0,
        0,
        9
      ]
    },
    {
      "codigo": "EM204",
      "nome": "Didática",
      "prof": "Dayana Brunetto",
      "dep": "DTPE",
      "horario": "13h30 17h30",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "17/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/em204-dayana_brunetto-ok.pdf",
      "per": [
        5,
        0,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "EM204",
      "nome": "Didática",
      "prof": "Marcos Oliveira",
      "dep": "DTPE",
      "horario": "19h 23h",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "01/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/em204-didatica_noite_profmarcos-ok.pdf",
      "per": [
        5,
        0,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "EM326",
      "nome": "Prática de Ensino e Estágio Supervisionado de Química I",
      "prof": "Liane Maria Vargas Barboza",
      "dep": "DTPE",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "?",
      "fim": "?",
      "obs": "Os horários ficaram no sigilo.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/em326-2021.pdf",
      "per": [
        0,
        0,
        0,
        7,
        0,
        7,
        0
      ]
    },
    {
      "codigo": "EM389",
      "nome": "Prática de Ensino e Estágio Supervisionado de Química II",
      "prof": "Sonia Maria Chaves Haracemiv",
      "dep": "DTPE",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "?",
      "fim": "?",
      "obs": "Os horários ficaram no sigilo.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/em389-2021.pdf",
      "per": [
        0,
        0,
        0,
        8,
        0,
        8,
        0
      ]
    },
    {
      "codigo": "CQ043",
      "nome": "Estágio Supervisionado",
      "prof": "Vários professores",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "-",
      "fim": "-",
      "obs": "A disciplina é do 10º para bacharel e licenciatura.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq043_lauro_cida_regina_liliana_ok.pdf",
      "per": [
        0,
        0,
        0,
        0,
        8,
        9,
        0
      ]
    },
    {
      "codigo": "LIB038",
      "nome": "Comunicação em Língua Brasileira de Sinais - Libras",
      "prof": "Paulo Henrique Pereira",
      "dep": "DLIB",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "19/11",
      "obs": "Assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/lib038-d-_paulo_2021-ok.pdf",
      "per": [
        6,
        0,
        6,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "LIB038",
      "nome": "Comunicação em Língua Brasileira de Sinais - Libras",
      "prof": "Danilo da Silva",
      "dep": "DLIB",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "19/11",
      "obs": "Assíncrona",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/lib038-danilo_silva_01-2021-ok.pdf",
      "per": [
        6,
        0,
        6,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ057",
      "nome": "Introdução à Química I (Química Nuclear)",
      "prof": "Ronny Rocha Ribeiro",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "17/12",
      "obs": "Os dias das aulas e horários não foram mencionados (pelo menos não encontrei)",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq057_optativa_quimica_nuclear_ronny_ok.pdf",
      "per": [
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ]
    },
    {
      "codigo": "CQ097",
      "nome": "Prática Pedagógica: Projetos Integrados I",
      "prof": "Joanez Aparecida Aires",
      "dep": "DQUI",
      "horario": "15h30 17h30",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "14/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq_097_projetos_integrados_joanez_ok.pdf",
      "per": [
        0,
        0,
        0,
        7,
        0,
        7,
        0
      ]
    },
    {
      "codigo": "CQ099",
      "nome": "Atividades Complementares",
      "prof": "Joanez Aparecida Aires",
      "dep": "DQUI",
      "horario": "18h 19h",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "?",
      "obs": "Encontros síncronos a combinar",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq_099_atividades_complementares_joanez_ok.pdf",
      "per": [
        0,
        0,
        0,
        8,
        0,
        9,
        0
      ]
    },
    {
      "codigo": "CQ156",
      "nome": "Pesquisa em Ensino de Química",
      "prof": "Roberto Dalmo Varallo Lima de Oliveira",
      "dep": "DQUI",
      "horario": "19h 21h",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "13/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq156_pesquisa_ensino_dalmo_notuno_ok.pdf",
      "per": [
        0,
        0,
        0,
        0,
        0,
        0,
        5
      ]
    },
    {
      "codigo": "CQ158",
      "nome": "Projetos de Pesquisa em Ensino de Química II",
      "prof": "Camila Silveira da Silva",
      "dep": "DQUI",
      "horario": "19h 23h",
      "dias": [
        3
      ],
      "inicio": "23/09",
      "fim": "23/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq158_projeto_ii_camila_noturno_ok.pdf",
      "per": [
        0,
        0,
        0,
        0,
        0,
        0,
        9
      ]
    },
    {
      "codigo": "CQ161/CQ255",
      "nome": "Química Integrada I",
      "prof": "Everton Bedin",
      "dep": "DQUI",
      "horario": "19h 21h",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "17/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq161_cq255_quimica_integrada_i_bedin_noturno_ok.pdf",
      "per": [
        9,
        0,
        9,
        0,
        0,
        0,
        9
      ]
    },
    {
      "codigo": "CQ248D",
      "nome": "Filosofia Das Ciências Para Química",
      "prof": "Roberto Dalmo Varallo Lima de Oliveira",
      "dep": "DQUI",
      "horario": "13h30 15h30",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "18/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq248-dalmo_diurno-ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ248N",
      "nome": "Filosofia Das Ciências Para Química",
      "prof": "Roberto Dalmo Varallo Lima de Oliveira",
      "dep": "DQUI",
      "horario": "19h 21h",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "05/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq248-dalmo_noturno-ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ256D",
      "nome": "Seminários de Educação em Química",
      "prof": "Roberto Dalmo Varallo Lima de Oliveira",
      "dep": "DQUI",
      "horario": "15h30 17h30",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "18/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq256-dalmo_diurno-ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ256N",
      "nome": "Seminários de Educação em Química",
      "prof": "Roberto Dalmo Varallo Lima de Oliveira",
      "dep": "DQUI",
      "horario": "19h 21h",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "08/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq256-dalmo_noturno-ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ018",
      "nome": "Química Toxicológica",
      "prof": "Rilton Alves de Freitas",
      "dep": "DQUI",
      "horario": "15h30 17h30",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "21/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq018-quimica_toxicologica-rilton-ok.pdf",
      "per": [
        0,
        0,
        0,
        7,
        7,
        9,
        0
      ]
    },
    {
      "codigo": "CQ052",
      "nome": "Físico-Química Experimental III",
      "prof": "Regina Maria Queiroz de Mello",
      "dep": "DQUI",
      "horario": "8h30 10h30",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "10/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq052-cq244-regina-ok.pdf",
      "per": [
        0,
        0,
        0,
        7,
        7,
        7,
        0
      ]
    },
    {
      "codigo": "CQ244",
      "nome": "Físico-Química Experimental IV",
      "prof": "Regina Maria Queiroz de Mello",
      "dep": "DQUI",
      "horario": "21h 23h",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "14/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq052-cq244-regina-ok.pdf",
      "per": [
        4,
        4,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ246/115/305",
      "nome": "Química Quântica",
      "prof": "Joaquim Delphino Da Motta Neto",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        0,
        3
      ],
      "inicio": "20/09",
      "fim": "23/12",
      "obs": "Período noturno em horários diferentes para os dois dias.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq115-cq246-cq305-quantica-joaquim.pdf",
      "per": [
        0,
        8,
        0,
        5,
        5,
        5,
        7
      ]
    },
    {
      "codigo": "CQ115/CQ246",
      "nome": "Química Quântica",
      "prof": "Diego Guedes-Sobrinho",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        1,
        3
      ],
      "inicio": "21/09",
      "fim": "16/12",
      "obs": "Durante a tarde em dois horários distintos nos dois dias.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq115-cq246-diurno-diego-ok.pdf",
      "per": [
        0,
        8,
        0,
        5,
        5,
        5,
        7
      ]
    },
    {
      "codigo": "CQ116",
      "nome": "Espectroscopia Óptica",
      "prof": "Harley Paiva Martins Filho",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "22/12",
      "obs": "Aulas disponibilizadas em vídeo com provas síncronas.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq116_espectroscopia_optica_prof-_harley_ok.pdf",
      "per": [
        0,
        9,
        0,
        7,
        7,
        7,
        0
      ]
    },
    {
      "codigo": "CQ118",
      "nome": "Termodinâmica e Cinética Experimental",
      "prof": "Liliana Micaroni",
      "dep": "DQUI",
      "horario": "21h 22h",
      "dias": [
        3
      ],
      "inicio": "23/09",
      "fim": "09/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq118-ok.pdf",
      "per": [
        0,
        0,
        0,
        0,
        0,
        0,
        7
      ]
    },
    {
      "codigo": "CQ170/CQ297",
      "nome": "Operações Unitárias em Química Industrial I",
      "prof": "Izabel Cristina Riegel Vidotti Miyata",
      "dep": "DQUI",
      "horario": "13h30 17h30",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "03/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq170-cq297-sexta-izabel-ok.pdf",
      "per": [
        0,
        7,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ238",
      "nome": "Físico-Química I (Diurno)",
      "prof": "Marcio Vidotti",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "30/11",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq238-fq1_cq238_diurno_vidotti-ok.pdf",
      "per": [
        3,
        3,
        3,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ238",
      "nome": "Físico-Química I (Noturno)",
      "prof": "Marcio Vidotti",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "01/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq238-noturno_-vidotti-ok.pdf",
      "per": [
        3,
        3,
        3,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ050/CQ239",
      "nome": "Físico-Química Experimental I",
      "prof": "Regina Maria Queiroz de Mello",
      "dep": "DQUI",
      "horario": "15h30 17h30",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "13/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq239-cq050-d-regina-ok.pdf",
      "per": [
        3,
        3,
        3,
        4,
        4,
        4,
        4
      ]
    },
    {
      "codigo": "CQ117/CQ239",
      "nome": "Físico-Química Experimental I",
      "prof": "Harley Paiva Martins Filho",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "08/12",
      "obs": "Encontros síncronos voltados a tira-dúvidas.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq239-cq117-n-harley-ok.pdf",
      "per": [
        3,
        3,
        3,
        4,
        4,
        4,
        4
      ]
    },
    {
      "codigo": "CQ240",
      "nome": "Físico-Química II",
      "prof": "Eduardo Lemos de Sá",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        1,
        3
      ],
      "inicio": "21/09",
      "fim": "21/12",
      "obs": "Aulas com horários diferentes no período da manhã.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq240_ok.pdf",
      "per": [
        0,
        5,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ243",
      "nome": "Físico-Química IV",
      "prof": "Diego Guedes-Sobrinho",
      "dep": "DQUI",
      "horario": "21h 23h",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "10/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq243-fq4_2021-1-diego-ok.pdf",
      "per": [
        4,
        4,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ302",
      "nome": "Termodinâmica e Eletroquímica",
      "prof": "Eduardo Lemos de Sá",
      "dep": "DQUI",
      "horario": "13h30 15h30",
      "dias": [
        1,
        3
      ],
      "inicio": "21/09",
      "fim": "21/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq302_ok.pdf",
      "per": [
        5,
        0,
        4,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ211",
      "nome": "Química Geral",
      "prof": "Shirley Nakagaki e Aldo J. G. Zarbin",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        0,
        2
      ],
      "inicio": "20/09",
      "fim": "20/12",
      "obs": "Segunda-feira 13h30 – 15h30 e quartas-feiras 07h30 as 09h30",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq211-geral-shirley_aldo_diurno-ok.pdf",
      "per": [
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "codigo": "CQ211",
      "nome": "Química Geral",
      "prof": "Flávio Massao Matsumoto",
      "dep": "DQUI",
      "horario": "21h 23h",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "21/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq211-geral_flavio_noturno-ok.pdf",
      "per": [
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "codigo": "CQ138/211",
      "nome": "Química Geral",
      "prof": "Ronny Rocha Ribeiro",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "17/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq211-geral_ronny_noturno-ok.pdf",
      "per": [
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "codigo": "CQ212",
      "nome": "Química Geral Experimental",
      "prof": "Márcio Peres de Araujo",
      "dep": "DQUI",
      "horario": "19h 23h",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "17/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq212_2021_noturno.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ212",
      "nome": "Química Geral Experimental",
      "prof": "Aldo J. G. Zarbin e Herbert Winnischofer",
      "dep": "DQUI",
      "horario": "? ?",
      "dias": [
        3
      ],
      "inicio": "23/09",
      "fim": "17/12",
      "obs": "Não encontrei os horários",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq212_geral_experimental_aldo_herbert_ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ212",
      "nome": "Química Geral Experimental",
      "prof": "Shirley Nakagaki, Flávio Matsumoto e Tatiana Renata Gomes Simões",
      "dep": "DQUI",
      "horario": "7h30 11h30",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "20/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq212_geral_experimental_shirley_flavio_tatiana_ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ212",
      "nome": "Química Geral Experimental",
      "prof": "Shirley Nakagaki, Flávio Matsumoto e Tatiana Renata Gomes Simões",
      "dep": "DQUI",
      "horario": "7h30 11h30",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "21/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq212_geral_experimental_shirley_flavio_tatiana_ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ213",
      "nome": "História da Química",
      "prof": "Patricio Peralta Zamora",
      "dep": "DQUI",
      "horario": "13h30 15h30",
      "dias": [
        3
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq213_historia_quimica_patricio_diurno_ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ213",
      "nome": "História da Química",
      "prof": "Patricio Peralta Zamora",
      "dep": "DQUI",
      "horario": "21h 23h",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq213_historia_quimica_patricio_noturno_ok.pdf",
      "per": [
        1,
        1,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ224",
      "nome": "Química Inorgânica IV",
      "prof": "Aldo Zarbin / Herbert Winnischofer",
      "dep": "DQUI",
      "horario": "? ?",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "20/12",
      "obs": "Diurno",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/224_diurno_ok.pdf",
      "per": [
        5,
        5,
        7,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ224",
      "nome": "Química Inorgânica IV",
      "prof": "Aldo Zarbin / Herbert Winnischofer",
      "dep": "DQUI",
      "horario": "? ?",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "22/12",
      "obs": "Noturno",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/224_noturno_ok.pdf",
      "per": [
        5,
        5,
        7,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ153",
      "nome": "Tópicos Especiais em Química Inorgânica: Fundamentos da Química de Organometálicos",
      "prof": "Jaísa Fernandes Soares",
      "dep": "DQUI",
      "horario": "19h 21h",
      "dias": [
        3
      ],
      "inicio": "23/09",
      "fim": "23/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq153_organometalicos_setembro2021_ok.pdf",
      "per": [
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ]
    },
    {
      "codigo": "CQ222",
      "nome": "Química Inorgânica II",
      "prof": "Fábio Souza Nunes",
      "dep": "DQUI",
      "horario": "13h30 15h30",
      "dias": [
        2
      ],
      "inicio": "22/09",
      "fim": "22/12",
      "obs": "Diurno",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq222_diurno_ficha_2_set_a_dez_2021_ok.pdf",
      "per": [
        3,
        3,
        3,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ222",
      "nome": "Química Inorgânica II",
      "prof": "Fábio Souza Nunes",
      "dep": "DQUI",
      "horario": "19h 21h",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "23/12",
      "obs": "Noturno",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq222_noturno_ficha_2_set_a_dez_2021_ok.pdf",
      "per": [
        3,
        3,
        3,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ228",
      "nome": "Química Inorgânica Experimental III",
      "prof": "Fabio Souza Nunes, Herbert Winnischofer e Tatiana Renata Gomes Simões",
      "dep": "DQUI",
      "horario": "15h30 17h30",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "22/12",
      "obs": "Diurno",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq228_ficha2_final_ok.pdf",
      "per": [
        5,
        0,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ228",
      "nome": "Química Inorgânica Experimental III",
      "prof": "Fabio Souza Nunes, Herbert Winnischofer e Tatiana Renata Gomes Simões",
      "dep": "DQUI",
      "horario": "19h 21h",
      "dias": [
        4
      ],
      "inicio": "24/09",
      "fim": "22/12",
      "obs": "Noturno",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq228_ficha2_final_ok.pdf",
      "per": [
        5,
        0,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ124",
      "nome": "Fundamentos da Química Inorgânica I",
      "prof": "Daniel da Silveira Rampon",
      "dep": "DQUI",
      "horario": "7h30 9h30",
      "dias": [
        4
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq_124_daniel_dp_diurno_sexta_ok.pdf",
      "per": [
        0,
        0,
        0,
        3,
        3,
        3,
        2
      ]
    },
    {
      "codigo": "CQ231",
      "nome": "Química Orgânica I",
      "prof": "Daniel da Silveira Rampon",
      "dep": "DQUI",
      "horario": "7h30 9h30",
      "dias": [
        4
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq_124_daniel_dp_diurno_sexta_ok.pdf",
      "per": [
        3,
        3,
        2,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ125",
      "nome": "Fundamentos de Química Orgânica II",
      "prof": "Claudiney Soares Cordeiro",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        1,
        3
      ],
      "inicio": "21/09",
      "fim": "21/12",
      "obs": "Aulas com horários diferentes no período da noite.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq125_cq232__atualizado_ok.pdf",
      "per": [
        0,
        0,
        0,
        4,
        4,
        4,
        3
      ]
    },
    {
      "codigo": "CQ232",
      "nome": "Química Orgânica II",
      "prof": "Claudiney Soares Cordeiro",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        1,
        3
      ],
      "inicio": "21/09",
      "fim": "21/12",
      "obs": "Aulas com horários diferentes no período da noite.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq125_cq232__atualizado_ok.pdf",
      "per": [
        4,
        4,
        3,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ126",
      "nome": "Fundamentos de Química Orgânica III",
      "prof": "Daniel da Silveira Rampon",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        0,
        2
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "Aulas com horários diferentes no período da noite.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq126___ficha2_daniel_2021_ajustada_ok.pdf",
      "per": [
        0,
        0,
        0,
        6,
        6,
        6,
        7
      ]
    },
    {
      "codigo": "CQ233",
      "nome": "Química Orgânica III",
      "prof": "Daniel da Silveira Rampon",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        0,
        2
      ],
      "inicio": "20/09",
      "fim": "18/12",
      "obs": "Aulas com horários diferentes no período da noite.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq126___ficha2_daniel_2021_ajustada_ok.pdf",
      "per": [
        6,
        6,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "codigo": "CQ128/ CQ235",
      "nome": "Química Orgânica Experimental I",
      "prof": "Sônia Faria Zawadzki",
      "dep": "DQUI",
      "horario": "8h30 9h30",
      "dias": [
        0
      ],
      "inicio": "22/09",
      "fim": "22/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq128__turma_quimica___atualizada_ok.pdf",
      "per": [
        5,
        5,
        6,
        5,
        5,
        5,
        8
      ]
    },
    {
      "codigo": "CQ129/CQ236",
      "nome": "Química Orgânica Experimental III",
      "prof": "Caroline Da Ros Montes D’Oca",
      "dep": "DQUI",
      "horario": "13h30 17h30",
      "dias": [
        3
      ],
      "inicio": "23/09",
      "fim": "16/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq129_carol.pdf",
      "per": [
        0,
        8,
        0,
        7,
        7,
        7,
        0
      ]
    },
    {
      "codigo": "CQ019",
      "nome": "Cromatografia",
      "prof": "Bruno da Silva",
      "dep": "DQUI",
      "horario": "9h30 11h30",
      "dias": [
        2,
        3
      ],
      "inicio": "23/09",
      "fim": "22/12",
      "obs": "Horário do Lab varia",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq019_cromatografia_bruno_ok.pdf",
      "per": [
        0,
        0,
        0,
        0,
        5,
        9,
        0
      ]
    },
    {
      "codigo": "CQ042/CQ218",
      "nome": "Química Ambiental",
      "prof": "Marco Tadeu Grassi",
      "dep": "DQUI",
      "horario": "19h 21h",
      "dias": [
        5
      ],
      "inicio": "20/09",
      "fim": "?",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq042_218_ambiental_marco_grassi_ok.pdf",
      "per": [
        9,
        8,
        6,
        0,
        0,
        0,
        7
      ]
    },
    {
      "codigo": "CQ214/CQ119",
      "nome": "Fundamentos da Química Analítica I",
      "prof": "Marco Tadeu Grassi",
      "dep": "DQUI",
      "horario": "7h30 11h30",
      "dias": [
        1
      ],
      "inicio": "20/09",
      "fim": "23/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq214_119_analitica_i_marco_diurno_ok.pdf",
      "per": [
        2,
        2,
        3,
        3,
        3,
        3,
        2
      ]
    },
    {
      "codigo": "CQ214/CQ119",
      "nome": "Fundamentos da Química Analítica I",
      "prof": "Frederico Luis Felipe Soares",
      "dep": "DQUI",
      "horario": "19h 32h",
      "dias": [
        0
      ],
      "inicio": "20/09",
      "fim": "23/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq214-cq119_analitica_i_fred_noturno_ok.pdf",
      "per": [
        2,
        2,
        3,
        3,
        3,
        3,
        2
      ]
    },
    {
      "codigo": "CQ215/CQ120",
      "nome": "Fundamentos da Química Analítica II",
      "prof": "Clarice Dias Brito do Amaral, Dênio Emanuel Pires Souto, Gilberto Abate, Noemi Nagata,\nPatricio G. Peralta-Zamora",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        0,
        3
      ],
      "inicio": "20/09",
      "fim": "23/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq215_120_analitica_ii_noturno_ok.pdf",
      "per": [
        3,
        3,
        4,
        4,
        4,
        4,
        5
      ]
    },
    {
      "codigo": "CQ215/CQ120",
      "nome": "Química Analítica II",
      "prof": "Clarice Dias Britto do Amaral, Dênio Emanuel Pires Souto, Gilberto Abate, Noemi Nagata, Patricio Peralta-Zamora.",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        3
      ],
      "inicio": "23/09",
      "fim": "23/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq215_analitica_ii_diurno_ok.pdf",
      "per": [
        3,
        3,
        4,
        4,
        4,
        4,
        5
      ]
    },
    {
      "codigo": "CQ216/121",
      "nome": "Química Analítica Instrumental I",
      "prof": "Luiz Humberto Marcolino Junior / Márcio Fernando Bergamini",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        5
      ],
      "inicio": "22/09",
      "fim": "22/12",
      "obs": "Duas turmas com horários variados. Leia a ficha.",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq216_121_instrumental_i_marcio_luiz_ok.pdf",
      "per": [
        4,
        4,
        7,
        5,
        5,
        5,
        7
      ]
    },
    {
      "codigo": "CQ280",
      "nome": "Tópicos Especiais em Química Analítica I – Fundamentos Analíticos de Espectrometria de Massas",
      "prof": "",
      "dep": "DQUI",
      "horario": "- -",
      "dias": [
        1
      ],
      "inicio": "21/09",
      "fim": "21/12",
      "obs": "",
      "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2021/08/cq280_topicos_espectrometria_massas_bruno_ok.pdf",
      "per": [
        10,
        10,
        10,
        10,
        10,
        10,
        10
      ]
    }
  ]