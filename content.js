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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
        "codigo": "CQ132/CQ221",
        "nome": "Fundamentos de Química Inorgânica I",
        "prof": " Herbert Winnischofer, Márcio Peres de Araujo, Shirley Nakagaki",
        "dep": "DQUI",
        "horario": "20h 22h",
        "dias": [0],
        "inicio": "09/11",
        "fim": "08/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq132-e-221-fundamentos-de-quimica-inorganica_herbert_marcio-peres_shirley.pdf"
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
        "codigo": "CQ047",
        "nome": "Físico-Química II",
        "prof": "Elisa Souza Orth",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [1,3],
        "inicio": "19/01",
        "fim": "18/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq047_elisa.pdf"
    },{
        "codigo": "CQ048/CQ243",
        "nome": "Físico-Química III - Cinética Química",
        "prof": "Diego Guedes-Sobrinho",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [0,2],
        "inicio": "03/02",
        "fim": "26/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq048_cq243_diego.pdf"
    },{
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
    },{
        "codigo": "CQ069/CQ264",
        "nome": "Quimiometria",
        "prof": "Frederico Luis Felipe Soares",
        "dep": "DQUI",
        "horario": "13h30 15h30",
        "dias": [1,3],
        "inicio": "03/11",
        "fim": "15/12",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq069_quimiometria-frederico.pdf"
    },{
        "codigo": "CQ115/CQ246",
        "nome": "Química Quântica",
        "prof": "Diego Guedes Sobrinho, Thiago N M Cervantes",
        "dep": "DQUI",
        "horario": "15h30 17h30",
        "dias": [0,2],
        "inicio": "09/11",
        "fim": "10/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq115_cq246_diego_thiago.pdf"
    },{
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
    },{
        "codigo": "CQ138/211",
        "nome": "Química Geral",
        "prof": "Ronny Rocha Ribeiro",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [0,2,4],
        "inicio": "04/11",
        "fim": "08/02",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq138_cq211_ronny.pdf"
    },{
        "codigo": "CQ211",
        "nome": "Química Geral",
        "prof": "Shirley Nakagaki, Aldo J. G. Zarbin",
        "dep": "DQUI",
        "horario": "9h30 12h",
        "dias": [2,3],
        "inicio": "04/11",
        "fim": "03/03",
        "obs": "",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq211_shirley_aldo.pdf"
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
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
    },{
        "codigo": "CQ238",
        "nome": "Físico-Química I",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "19h 21h",
        "dias": [1],
        "inicio": "12/01",
        "fim": "16/03",
        "obs": "Aulas assíncronas com períodos síncronos para resolução de exercícios e dúvidas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq238_fq1-vidotti.pdf"
    },{
        "codigo": "CQ240",
        "nome": "Físico-Química II",
        "prof": "Marcio Vidotti",
        "dep": "DQUI",
        "horario": "14h 17h",
        "dias": [3],
        "inicio": "14/01",
        "fim": "18/03",
        "obs": "Aulas assíncronas com períodos síncronos para resolução de exercícios e dúvidas.",
        "link": "http://www.quimica.ufpr.br/paginas/graduacao/wp-content/uploads/sites/16/2020/09/cq240_-fq2-vidotti.pdf"
    },{
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
    }
]