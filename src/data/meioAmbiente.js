// src/data/meioAmbiente.js
// Missões NOVAS para o módulo "Cidadania e Meio Ambiente" (id: 4).
// Import no App.jsx: modules[3].missions.push(...missoesAmbienteExtra)

export const missoesAmbienteExtra = [
  {
    id: 402,
    title: 'Descarte Correto e Impacto Ambiental',
    duration: '5 min',
    content: {
      summary: [
        'A manutenção regular do veículo (troca de óleo, revisão do motor) reduz a emissão de poluentes — motor bem regulado queima combustível de forma mais eficiente.',
        'O óleo lubrificante usado deve ser descartado apenas em postos de coleta apropriados — nunca no solo, no ralo ou junto do lixo comum.',
        'Pneus descartados de forma irregular acumulam água parada, um dos principais criadouros do mosquito da dengue, além de liberar substâncias poluentes no solo.',
        'O uso excessivo e desnecessário da buzina em áreas urbanas é restringido pelo CTB em determinados locais, como proximidade de hospitais.',
        'Escapamentos em bom estado e uso consciente da buzina são as medidas mais diretas ao alcance do condutor para reduzir a poluição sonora.',
      ],
      hack: 'Óleo e pneu: sempre em ponto de coleta, nunca na natureza ou no lixo comum.',
      realLife:
        'Você troca o óleo do seu carro em casa. Em vez de jogar o óleo usado no ralo, você leva até o posto mais próximo, que tem coleta específica para isso — evitando contaminar o solo e a água.',
      curiosity:
        'Um único litro de óleo automotivo descartado incorretamente pode contaminar milhares de litros de água — por isso a lei trata esse descarte com tanto rigor.',
    },
    questions: [
      {
        id: 1,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'A manutenção regular do veículo (troca de óleo, revisão do motor) contribui para:',
        options: [
          'Reduzir a emissão de poluentes do veículo',
          'Aumentar a poluição sonora do trânsito',
          'Elevar o consumo de combustível sem qualquer benefício',
          'Nada relacionado ao meio ambiente',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Um motor bem regulado queima combustível de forma mais eficiente, emitindo menos poluentes.',
        whyOthersAreWrong:
          'A manutenção tende a reduzir, não aumentar, tanto consumo quanto ruído em excesso causado por peças desgastadas.',
        hack: 'Carro bem cuidado polui menos — manutenção é também questão ambiental.',
      },
      {
        id: 2,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'O descarte do óleo lubrificante usado do veículo deve ser feito:',
        options: [
          'Em postos de coleta apropriados, nunca diretamente no solo ou na rede de esgoto',
          'Direto no ralo da garagem',
          'Junto com o lixo doméstico comum',
          'Enterrado no quintal de casa',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O óleo usado é altamente poluente para solo e água — a lei exige descarte em pontos de coleta específicos.',
        whyOthersAreWrong:
          'Qualquer descarte direto no ambiente (ralo, lixo comum, solo) contamina recursos naturais e é proibido.',
        hack: 'Óleo usado tem destino certo: ponto de coleta, sempre.',
      },
      {
        id: 3,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'O uso excessivo e desnecessário da buzina em áreas urbanas, além de ser evitado por educação, também é:',
        options: [
          'Restringido pelo CTB em determinadas situações e locais, como proximidades de hospitais',
          'Totalmente livre, sem qualquer tipo de restrição legal',
          'Obrigatório em todos os cruzamentos',
          'Recomendado como forma de cortesia constante no trânsito',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A buzina deve ser usada apenas em caso de necessidade real, e o CTB restringe seu uso em locais sensíveis, como proximidade de hospitais.',
        whyOthersAreWrong:
          "Não é uma prática 'livre' nem obrigatória em cruzamentos — o uso indevido pode inclusive gerar infração.",
        hack: "Buzina é para alertar risco, não para 'cumprimentar' ou reclamar.",
      },
      {
        id: 4,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'O descarte irregular de pneus na natureza pode causar, principalmente:',
        options: [
          'Contaminação do solo e proliferação de doenças (pneus acumulam água parada, propícia à dengue)',
          'Nenhum impacto ambiental relevante',
          'Melhoria da qualidade do solo',
          'Redução da poluição sonora da região',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pneus descartados irregularmente acumulam água parada — um dos principais criadouros do mosquito da dengue — além de poluir o solo.',
        whyOthersAreWrong:
          'O descarte irregular nunca melhora o solo nem reduz poluição — os efeitos são sempre negativos.',
        hack: 'Pneu jogado fora = água parada = risco de dengue, além da poluição.',
      },
      {
        id: 5,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'A poluição sonora causada pelo trânsito pode ser reduzida por meio de:',
        options: [
          'Uso comedido da buzina e manutenção adequada do sistema de escapamento',
          'Aceleração constante em vias residenciais',
          'Uso contínuo do alarme sonoro do veículo',
          'Nenhuma medida prática é realmente eficaz',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Escapamentos em bom estado e uso consciente da buzina são as medidas mais diretas ao alcance do condutor.',
        whyOthersAreWrong:
          'Acelerar constantemente e usar alarmes sem necessidade aumentam, e não reduzem, a poluição sonora.',
        hack: 'Escapamento bom + buzina só quando necessário = trânsito mais silencioso.',
      },
    ],
  },
  {
    id: 403,
    title: 'Cidadania e Convívio no Trânsito',
    duration: '5 min',
    content: {
      summary: [
        'Cidadania no trânsito significa, principalmente, respeito mútuo entre motoristas, ciclistas e pedestres — todos compartilham o mesmo espaço.',
        'Respeitar a faixa de pedestres mesmo sem fiscalização por perto é um exemplo direto disso: cidadania é o que se faz certo mesmo sem ninguém vendo.',
        'Vagas de estacionamento reservadas para idosos ou pessoas com deficiência garantem acessibilidade e mobilidade a quem mais precisa.',
        "Essa área da prova costuma parecer 'fácil' e por isso é subestimada — mas ainda assim cai, e vale a mesma nota que qualquer outra questão.",
        'Boa parte das questões dessa área é resolvida com bom senso, desde que o candidato realmente tenha estudado os pontos específicos (como as vagas reservadas).',
      ],
      hack: 'Cidadania é fazer certo mesmo sem fiscalização por perto — vale ponto igual às outras matérias, não pule essa parte.',
      realLife:
        'Você chega a uma faixa de pedestres vazia, sem ninguém fiscalizando, e mesmo assim reduz e olha antes de passar — porque um pedestre pode aparecer a qualquer momento, e essa é a atitude correta, fiscalizada ou não.',
      curiosity:
        "Pesquisas sobre a prova mostram que candidatos costumam perder pontos justamente em Meio Ambiente e Cidadania por acharem a matéria 'óbvia demais' para estudar — e acabam errando detalhes específicos.",
    },
    questions: [
      {
        id: 1,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question: 'Cidadania no trânsito significa, principalmente:',
        options: [
          'Respeito mútuo entre motoristas, ciclistas e pedestres',
          'Dirigir apenas na velocidade máxima permitida',
          'Ter o veículo mais moderno possível',
          'Evitar oferecer carona a outras pessoas',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O convívio social no trânsito é sobre reconhecer que todos compartilham o mesmo espaço, com direitos e deveres recíprocos.',
        whyOthersAreWrong:
          'Velocidade máxima, modelo de carro ou caronas não têm relação direta com o conceito de cidadania no trânsito.',
        hack: 'Cidadania = dividir bem o espaço com quem também está ali.',
      },
      {
        id: 2,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'Vagas de estacionamento reservadas para idosos ou pessoas com deficiência existem para:',
        options: [
          'Garantir acessibilidade e mobilidade a quem mais precisa',
          'Reduzir artificialmente o número total de vagas disponíveis',
          'Uso exclusivo de veículos oficiais do governo',
          'Substituir a necessidade de rampas de acesso',
        ],
        correctAnswerIndex: 0,
        explanation:
          'É uma medida de inclusão: reserva espaço próximo e de fácil acesso para quem tem mobilidade reduzida.',
        whyOthersAreWrong:
          'Não têm relação com veículos oficiais nem substituem outras adaptações de acessibilidade, como rampas.',
        hack: "Vaga reservada não é 'sobra' — é inclusão de propósito.",
      },
      {
        id: 3,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'Respeitar a faixa de pedestres mesmo quando não há fiscalização por perto é um exemplo de:',
        options: [
          'Cidadania e convívio social no trânsito',
          'Excesso de zelo desnecessário',
          'Uma obrigação válida apenas em dias de chuva',
          'Regra exclusiva para motoristas profissionais',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Cidadania no trânsito é, por definição, aquilo que se faz certo mesmo sem ninguém fiscalizando.',
        whyOthersAreWrong:
          'Não é exagero nem regra sazonal ou restrita a profissionais — vale para todo condutor, o tempo todo.',
        hack: 'Ninguém vendo? A atitude certa continua sendo a mesma.',
      },
      {
        id: 4,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Sobre a matéria de Meio Ambiente e Cidadania na prova teórica, é correto dizer que:',
        options: [
          'Apesar de parecer simples, ela ainda cai na prova e vale o mesmo ponto que qualquer outra matéria',
          'Ela nunca é cobrada na prova teórica',
          'Só é cobrada em provas de recategorização',
          'Vale menos pontos do que as demais matérias',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Candidatos costumam subestimar essa área por parecer 'óbvia', mas ela cai normalmente e cada questão vale o mesmo que qualquer outra.",
        whyOthersAreWrong:
          'A matéria é cobrada na prova padrão de primeira habilitação, não apenas em recategorização, e não tem peso reduzido.',
        hack: "'Parece fácil' não é motivo pra pular — ainda vale ponto igual.",
      },
      {
        id: 5,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'O comportamento mais alinhado com o convívio social no trânsito é:',
        options: [
          'Ceder passagem a pedestres e ciclistas mesmo quando isso exige um pequeno atraso',
          'Priorizar sempre o carro, já que é o veículo mais rápido',
          'Buzinar para pedestres apressarem a travessia',
          "Ignorar ciclistas por ocuparem 'espaço demais' na via",
        ],
        correctAnswerIndex: 0,
        explanation:
          'O convívio social reconhece que pedestres e ciclistas são tão parte do trânsito quanto os veículos motorizados.',
        whyOthersAreWrong:
          'Priorizar o carro por ser mais rápido, apressar pedestres com buzina ou desconsiderar ciclistas são condutas que vão contra o espírito de convívio esperado.',
        hack: 'Trânsito não é hierarquia — é espaço compartilhado, com paciência de todos.',
      },
    ],
  },
  {
    id: 404,
    title: 'Poluição do Ar e Controle de Gases',
    duration: '6 min',
    content: {
      summary: [
        'Os veículos automotores são um dos maiores causadores da poluição do ar nas grandes cidades devido à queima de combustíveis fósseis.',
        'O Catalisador é uma peça obrigatória no escapamento que transforma gases muito tóxicos do motor em gases menos nocivos antes de saírem na atmosfera.',
        "Retirar o catalisador do veículo para 'ganhar potência' é infração grave e prejudica muito o meio ambiente.",
        'Veículos desregulados costumam soltar fumaça preta ou azulada, indicando queima irregular de combustível ou óleo.',
        'O PROCONVE (Programa de Controle de Poluição do Ar por Veículos Automotores) é o programa brasileiro que estipula limites de emissão para as montadoras.',
      ],
      hack: 'Fumaça preta = motor queimando combustível mal. Fumaça azul = queimando óleo. Ambas geram multa e poluição.',
      realLife:
        'Sabe aquele carro velho na subida soltando uma nuvem preta e com cheiro forte? Ele está com o motor desregulado, consumindo mais combustível do que deveria e poluindo o ar que todos respiram.',
      curiosity:
        "O catalisador contém metais nobres (como platina e paládio) em seu interior, que causam a reação química responsável por 'limpar' o gás do escapamento.",
    },
    questions: [
      {
        id: 1,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'Qual é a função do catalisador no sistema de escapamento dos veículos?',
        options: [
          'Reduzir a emissão de gases poluentes, transformando-os em substâncias menos tóxicas',
          'Aumentar a potência do motor em subidas íngremes',
          'Abafar o som do motor, diminuindo a poluição sonora',
          'Filtrar o óleo lubrificante antes que ele chegue ao motor',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O catalisador atua por reações químicas para transformar gases nocivos (como monóxido de carbono) em gases menos prejudiciais (como vapor d'água e gás carbônico).",
        whyOthersAreWrong:
          'Quem abafa o som é o silenciador. Potência e óleo não têm relação com a função principal do catalisador.',
        hack: 'Catalisador = Química = Transforma gás ruim em menos ruim.',
      },
      {
        id: 2,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'Transitar com o veículo produzindo fumaça, gases ou partículas em níveis superiores aos fixados pelo CONTRAN é uma infração de trânsito que:',
        options: [
          'Prejudica o meio ambiente e gera multa e retenção do veículo para regularização',
          'É permitida apenas para veículos com mais de 20 anos de uso',
          'Só é punida se o veículo estiver transitando em rodovias federais',
          'Não gera infração, sendo apenas um aviso de manutenção ao motorista',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Emitir poluentes acima do permitido é infração grave, com multa e retenção até resolver o problema, pois prejudica a saúde pública.',
        whyOthersAreWrong:
          'Não há isenção para veículos antigos ou apenas para rodovias. É infração em qualquer via.',
        hack: 'Fumaça demais = Infração grave + Carro retido.',
      },
      {
        id: 3,
        category: 'Meio Ambiente',
        difficulty: 'Difícil',
        question:
          'O Programa que estabelece os limites máximos de emissão de poluentes para os veículos novos fabricados no Brasil chama-se:',
        options: ['PROCONVE', 'CONAMA', 'RENAVAM', 'DETRAN'],
        correctAnswerIndex: 0,
        explanation:
          'O PROCONVE (Programa de Controle da Poluição do Ar por Veículos Automotores) foi criado para reduzir e controlar as emissões pelas montadoras.',
        whyOthersAreWrong:
          'CONAMA é o Conselho de Meio Ambiente. RENAVAM é o registro do veículo. DETRAN é o departamento de trânsito.',
        hack: 'Programa + Veículos = PROCONVE.',
      },
      {
        id: 4,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'A emissão excessiva de monóxido de carbono (gás invisível e sem cheiro) pelos veículos é perigosa porque:',
        options: [
          'É altamente tóxico e pode causar asfixia e morte se inalado em ambientes fechados',
          'Causa a ferrugem imediata da lataria dos outros veículos',
          'Eleva o desgaste dos pneus em dias de chuva',
          'Gera um barulho excessivo no motor',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O monóxido de carbono liga-se ao sangue, impedindo a oxigenação, sendo letal em locais sem ventilação (como ligar o carro em garagem fechada).',
        whyOthersAreWrong:
          'Ele é um gás, não afeta a lataria, pneus ou o som do veículo diretamente.',
        hack: 'Monóxido de carbono: inimigo invisível, causa asfixia.',
      },
      {
        id: 5,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'Uma atitude do condutor que ajuda a reduzir a poluição do ar é:',
        options: [
          'Fazer a manutenção preventiva, trocando velas e filtros de ar no prazo certo',
          'Acelerar o veículo sempre com o freio de mão puxado',
          'Usar gasolina misturada com água',
          'Ligar o ar-condicionado com as janelas abertas',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Peças como velas e filtro de ar em bom estado garantem a queima perfeita do combustível, emitindo o mínimo de poluição possível.',
        whyOthersAreWrong:
          'As outras atitudes forçam o motor, aumentam o consumo e, por consequência, geram mais poluentes.',
        hack: 'Manutenção em dia = Motor respira bem = Menos poluição.',
      },
    ],
  },
  {
    id: 405,
    title: 'Poluição Sonora e Seus Limites',
    duration: '5 min',
    content: {
      summary: [
        'O trânsito é a principal fonte de poluição sonora nos grandes centros urbanos.',
        'O uso da buzina é proibido entre as 22h e as 6h. Fora desse horário, só deve ser usada em toques breves para advertências que evitem acidentes.',
        'Acelerar o veículo parado, com som muito alto, ou transitar com o escapamento defeituoso (furado ou sem o silenciador) são infrações graves.',
        'Sons em alto volume no carro, que possam ser ouvidos do lado de fora perturbando o sossego público, geram multa grave, independentemente do volume em decibéis.',
        'A poluição sonora constante causa estresse, problemas de audição, irritabilidade e até aumento da pressão arterial nas pessoas.',
      ],
      hack: 'Buzina proibida: das 22h às 06h. Silenciador furado: infração grave.',
      realLife:
        'Você colocou uma caixa de som super potente no porta-malas e parou no posto de gasolina de madrugada com o som alto. A fiscalização chega: o carro pode ser retido e você leva uma multa por perturbação do sossego, pois o som vaza para a via pública.',
      curiosity:
        'Antigamente, era preciso usar um aparelho chamado decibelímetro para aplicar multa por som alto. Hoje, pela lei, se o som é audível do lado de fora e perturba o sossego, o agente de trânsito já pode autuar sem o aparelho.',
    },
    questions: [
      {
        id: 1,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'De acordo com as normas de trânsito, o uso da buzina é proibido no horário compreendido entre:',
        options: ['22h e 6h', '20h e 8h', '00h e 5h', '18h e 6h'],
        correctAnswerIndex: 0,
        explanation:
          'O CTB proíbe buzinar entre as 22 horas e as 6 horas da manhã para garantir o descanso noturno.',
        whyOthersAreWrong:
          'Os outros horários não são os definidos pelo Código de Trânsito Brasileiro.',
        hack: 'Buzina dorme às 22h e acorda às 6h.',
      },
      {
        id: 2,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'Para o condutor que utiliza o aparelho de som do veículo em volume que não seja autorizado pelo CONTRAN (som alto audível pelo lado externo), a infração é classificada como:',
        options: [
          'Grave, com penalidade de multa e retenção do veículo',
          'Leve, apenas com advertência verbal',
          'Média, sem remoção do veículo',
          'Crime de trânsito, com prisão imediata',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Transitar com som alto que perturbe o sossego é infração grave e o veículo é retido até a regularização (baixar o volume).',
        whyOthersAreWrong:
          'Não é advertência nem média. Embora incomode, não configura prisão imediata (crime de trânsito) pelo CTB apenas pelo som, salvo em outras leis ambientais mais complexas, mas para a prova, é infração grave.',
        hack: 'Som alto para fora do carro = Infração Grave.',
      },
      {
        id: 3,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'A peça do sistema de escapamento responsável por reduzir o barulho das explosões do motor é o:',
        options: ['Silenciador', 'Catalisador', 'Filtro de ar', 'Radiador'],
        correctAnswerIndex: 0,
        explanation:
          'O silenciador amortece as ondas sonoras que vêm do motor, reduzindo a poluição sonora.',
        whyOthersAreWrong:
          'Catalisador trata os gases (química). Filtro limpa o ar. Radiador resfria a água do motor.',
        hack: 'Silenciador = Silêncio. É ele quem corta o barulho.',
      },
      {
        id: 4,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question: 'O uso contínuo ou prolongado da buzina é:',
        options: [
          'Proibido, devendo ser usada apenas com toques breves para evitar acidentes',
          'Permitido em casos de congestionamento intenso',
          'Aconselhável para cumprimentar conhecidos na calçada',
          'Obrigatório em cruzamentos sem semáforo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A buzina é um item de segurança para alertas urgentes, não para reclamar de trânsito ou saudar amigos.',
        whyOthersAreWrong:
          'Congestionamentos ou saudações não justificam a buzina e causam estresse coletivo.',
        hack: 'Buzina é alerta, não abraço. Toque sempre breve!',
      },
      {
        id: 5,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'Dirigir um veículo com o escapamento aberto ou com o silenciador defeituoso resulta em:',
        options: [
          'Aumento significativo da poluição sonora, configurando infração de trânsito grave',
          'Melhora no rendimento do motor sem consequências ambientais',
          'Diminuição da emissão de gases tóxicos na atmosfera',
          'Redução da temperatura interna do veículo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Um escapamento furado ou aberto libera todo o barulho das explosões do motor sem filtro, configurando infração grave.',
        whyOthersAreWrong:
          'Não melhora rendimento e muito menos ajuda na emissão de gases; apenas causa ensurdecimento.',
        hack: 'Escapamento furado = muito barulho = infração grave.',
      },
    ],
  },
  {
    id: 406,
    title: 'Lixo na Via e Preservação de Rodovias',
    duration: '4 min',
    content: {
      summary: [
        'Atirar lixo ou objetos pela janela do veículo é uma infração média que gera multa.',
        'Além da questão da multa, lixo na via pode tapar bueiros nas cidades (causando enchentes) ou causar acidentes em rodovias (ao bater no para-brisa de outro carro).',
        'Jogar pontas de cigarro nas rodovias, especialmente em épocas secas, é a principal causa de incêndios nas margens.',
        'Incêndios na beira de rodovias geram fumaça densa que prejudica a visibilidade, sendo causa de graves engavetamentos.',
        'Leve sempre uma lixeirinha ou sacola plástica dentro do carro para guardar os resíduos até encontrar uma lixeira.',
      ],
      hack: 'Jogar lixo pela janela = Infração Média. Ponta de cigarro na rodovia = Risco de incêndio e acidente.',
      realLife:
        'Você está viajando de ônibus ou de carro, come um salgadinho e joga o pacote pela janela. Esse pacote pode voar no rosto de um motociclista que vem atrás, assustá-lo e causar uma tragédia.',
      curiosity:
        'Cerca de 60% dos incêndios em vegetação às margens das rodovias brasileiras são causados por pontas de cigarro acesas atiradas pelos motoristas.',
    },
    questions: [
      {
        id: 1,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Atirar do veículo ou abandonar na via objetos ou substâncias (como lixo ou garrafas) é uma infração:',
        options: [
          'Média, punida com multa',
          'Leve, punida apenas com advertência',
          'Gravíssima, com cassação da CNH',
          'Não é considerado infração, apenas falta de educação',
        ],
        correctAnswerIndex: 0,
        explanation:
          'De acordo com o Art. 171 do CTB, atirar objetos pela janela é infração de natureza Média.',
        whyOthersAreWrong:
          'É infração sim. Não é leve nem gravíssima, é definida especificamente como média.',
        hack: 'Lixo pela janela = Infração Média.',
      },
      {
        id: 2,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'Lançar pontas de cigarro acesas pela janela do veículo enquanto transita por rodovias é extremamente perigoso porque:',
        options: [
          'Pode iniciar incêndios na vegetação das margens, cuja fumaça reduz a visibilidade e causa engavetamentos',
          'O asfalto pode derreter com o calor da brasa',
          'Aumenta imediatamente o nível do mar na região litorânea',
          'Causa furos nos pneus dos veículos que vêm logo atrás',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A vegetação seca pega fogo facilmente com bitucas, gerando grandes incêndios que cobrem a pista com fumaça e causam acidentes graves.',
        whyOthersAreWrong:
          'Uma bituca não derrete asfalto nem fura pneu, mas o fogo causado por ela é devastador.',
        hack: 'Cigarro na pista = Fogo = Fumaça = Engavetamento.',
      },
      {
        id: 3,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Qual deve ser a atitude do cidadão consciente em relação ao lixo gerado dentro do veículo?',
        options: [
          'Guardá-lo no interior do veículo, como em uma sacola lixeira, e descartá-lo no local apropriado ao chegar no destino',
          'Arremessá-lo no acostamento para que o vento leve',
          'Jogá-lo pela janela apenas se for lixo orgânico, como restos de frutas',
          'Escondê-lo embaixo do tapete para que os passageiros não vejam',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A lixeirinha de câmbio é essencial. Guarde e descarte no destino.',
        whyOthersAreWrong:
          'Lixo orgânico também atrai animais para a pista (que podem ser atropelados). Esconder ou jogar fora é sempre errado.',
        hack: 'O lixo viaja com você até encontrar uma lixeira de verdade.',
      },
      {
        id: 4,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'Um dos grandes problemas do descarte de lixo nas vias urbanas durante períodos de chuva é:',
        options: [
          'O entupimento dos bueiros e galerias de água, contribuindo diretamente para enchentes',
          'O aumento da derrapagem dos pneus por excesso de papel na pista',
          'O choque térmico do lixo quente com a chuva fria',
          'A melhora na absorção de água pelo solo urbano',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Embolsos plásticos, latas e papéis bloqueiam a passagem de água, causando o alagamento rápido das ruas.',
        whyOthersAreWrong:
          'Lixo não ajuda na absorção, e a preocupação primária é o alagamento por obstrução de galerias.',
        hack: 'Lixo na rua = Bueiro entupido = Enchente no seu bairro.',
      },
      {
        id: 5,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'Se um objeto atirado pela janela do veículo atingir outro condutor ou motociclista e causar um acidente, quem o atirou:',
        options: [
          'Será responsabilizado pela infração de trânsito e pelas consequências cíveis e criminais do acidente',
          'Receberá apenas uma advertência verbal',
          'Não pode ser punido, pois foi considerado um acidente inevitável',
          'É isento de culpa se estiver em uma rodovia pedagiada',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O responsável responderá pela multa (CTB) e também pode ser processado criminalmente e civilmente pelos danos.',
        whyOthersAreWrong:
          'Ninguém fica impune ao causar um acidente por imprudência grave como essa.',
        hack: 'Atirou lixo e causou acidente? Você responde por tudo.',
      },
    ],
  },
  {
    id: 407,
    title: 'O Convívio com Ciclistas',
    duration: '5 min',
    content: {
      summary: [
        'A bicicleta, pelo CTB, é um veículo. Portanto, ela tem direito de transitar nas ruas, no mesmo sentido dos carros, quando não houver ciclovia.',
        'O condutor de veículo motorizado DEVE guardar a distância lateral mínima de 1,5m (um metro e meio) ao passar ou ultrapassar uma bicicleta.',
        'Não reduzir a velocidade de forma compatível à segurança ao ultrapassar um ciclista é infração gravíssima.',
        'O trânsito brasileiro possui uma regra de proteção: os veículos maiores devem proteger os menores, os motorizados devem proteger os não motorizados, e todos, juntos, devem proteger os pedestres.',
        "Buzinar de forma insistente ou agressiva para 'apressar' um ciclista é perigoso, pois pode assustá-lo e causar quedas e acidentes graves.",
      ],
      hack: 'Distância lateral da bicicleta: 1,5m. Não reduzir a velocidade: infração gravíssima.',
      realLife:
        "Você está em uma via sem acostamento e encontra um ciclista. Em vez de 'tirar um fino' e assustá-lo, você aguarda o momento em que a pista contrária esteja livre, reduz a velocidade e ultrapassa deixando o espaço de um metro e meio.",
      curiosity:
        "Muitos acidentes fatais com ciclistas acontecem por causa do deslocamento de ar (o 'vácuo') gerado por veículos grandes que passam em alta velocidade colados neles.",
    },
    questions: [
      {
        id: 1,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Ao ultrapassar uma bicicleta, o condutor de um veículo motorizado deve guardar a distância lateral mínima de:',
        options: [
          '1,50 m (um metro e meio)',
          '0,50 m (meio metro)',
          '1,00 m (um metro)',
          '2,00 m (dois metros)',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A distância segura e exigida pelo Código de Trânsito Brasileiro para ultrapassar ciclistas é de 1,5 metro.',
        whyOthersAreWrong:
          'Qualquer distância menor coloca a vida do ciclista em risco. A lei fixa exatamente 1,5m.',
        hack: 'Bicicleta = Um metro e meio (1,5m).',
      },
      {
        id: 2,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'Segundo a regra básica de convivência e proteção no trânsito brasileiro:',
        options: [
          'Os veículos de maior porte são responsáveis pela segurança dos menores, e os motorizados pelos não motorizados',
          'Os pedestres devem sempre dar passagem a qualquer veículo motorizado',
          'Os ciclistas são responsáveis pela segurança dos caminhões',
          'Todos têm a mesma responsabilidade física, sem distinção de tamanho',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A regra de ouro do trânsito diz que o maior protege o menor, e todos protegem o pedestre, pois ele é a parte mais vulnerável.',
        whyOthersAreWrong:
          'O pedestre tem a preferência. O menor nunca será o responsável pela segurança do maior.',
        hack: 'Maior protege o menor. Motorizado protege não motorizado.',
      },
      {
        id: 3,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'Onde as bicicletas têm o direito de circular quando não houver ciclovia, ciclofaixa ou acostamento?',
        options: [
          'Nos bordos da pista de rolamento, no mesmo sentido de circulação regulamentado para a via',
          'No meio da faixa principal, disputando espaço com os carros',
          'No sentido contrário ao dos carros, para verem o perigo de frente',
          'Em cima das calçadas, no meio dos pedestres',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pela lei, ciclistas andam no bordo (canto) da via, sempre no mesmo sentido dos veículos.',
        whyOthersAreWrong:
          'Andar na contramão é mito e muito perigoso. Calçada é só para pedestres (salvo se sinalizada para bikes).',
        hack: 'Bike anda no canto (bordo) e no mesmo sentido dos carros.',
      },
      {
        id: 4,
        category: 'Cidadania',
        difficulty: 'Difícil',
        question:
          'O motorista que deixa de reduzir a velocidade do veículo de forma compatível com a segurança do trânsito ao ultrapassar um ciclista comete uma infração:',
        options: ['Gravíssima', 'Grave', 'Média', 'Leve'],
        correctAnswerIndex: 0,
        explanation:
          'Não reduzir a velocidade ao passar por um ciclista coloca a vida dele em risco extremo, sendo punido rigorosamente como infração gravíssima.',
        whyOthersAreWrong:
          'Pelo alto risco de morte, a infração não tem nível baixo.',
        hack: 'Não tirou o pé do acelerador perto de bike? Infração Gravíssima.',
      },
      {
        id: 5,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Utilizar a buzina de forma excessiva e insistente para tentar apressar um ciclista à sua frente é:',
        options: [
          'Uma atitude perigosa e desrespeitosa, que pode assustar o ciclista e causar acidentes',
          'Recomendado, pois o ciclista precisa saber que está atrapalhando o fluxo',
          'A atitude padrão ensinada nas autoescolas',
          'Obrigatório para indicar ultrapassagem',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O susto de uma buzina alta pode fazer o ciclista perder o equilíbrio e cair debaixo das rodas do veículo.',
        whyOthersAreWrong:
          "Ciclista no bordo da via não está 'atrapalhando', ele está exercendo seu direito de circular.",
        hack: 'Nunca buzine para apressar ciclista. Paciência evita mortes.',
      },
    ],
  },
  {
    id: 408,
    title: 'Direção Sustentável e Economia de Combustível',
    duration: '5 min',
    content: {
      summary: [
        'Direção sustentável é dirigir de forma a economizar combustível e causar o menor desgaste possível ao veículo, o que diretamente reduz a poluição.',
        'Acelerar e frear de forma brusca a todo momento consome muito mais combustível e aumenta a emissão de poluentes.',
        'Rodar com os pneus murchos (pressão abaixo do recomendado) faz o motor fazer mais força, consumindo mais combustível e reduzindo a vida útil do pneu.',
        'Levar peso desnecessário no porta-malas ou instalar bagageiros no teto (que prejudicam a aerodinâmica) aumenta o gasto de gasolina.',
        "Dirigir na 'banguela' (ponto morto) não economiza combustível nos carros modernos com injeção eletrônica e ainda diminui a capacidade de frenagem.",
      ],
      hack: 'Pé leve, pneu calibrado e menos peso = mais economia e menos poluição.',
      realLife:
        "Na estrada, você vê alguém descendo a serra em ponto morto ('banguela') achando que está economizando combustível. Na verdade, além de gastar a mesma coisa ou mais, a pessoa está superaquecendo os freios porque perdeu o freio motor, correndo risco de um acidente grave.",
      curiosity:
        'Carros com injeção eletrônica conseguem cortar totalmente o envio de combustível para o motor em descidas quando estão engrenados (com a marcha engatada) e sem acelerar. Na banguela, o motor precisa injetar combustível para não apagar.',
    },
    questions: [
      {
        id: 1,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'Uma atitude do condutor que prejudica tanto o meio ambiente (aumenta a emissão de gases) quanto o seu próprio bolso é:',
        options: [
          'Fazer acelerações e freadas bruscas de forma constante',
          'Manter a calibragem dos pneus em dia',
          'Fazer as revisões do motor nos prazos recomendados',
          'Trocar de marcha na rotação correta do motor',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Dirigir de forma agressiva queima muito mais combustível, gerando mais poluição e maiores gastos no posto de gasolina.',
        whyOthersAreWrong:
          'As outras alternativas são exemplos de boas práticas de condução econômica e preventiva.',
        hack: 'Arrancada brusca = Dinheiro e meio ambiente jogados fora.',
      },
      {
        id: 2,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'Transitar com a pressão dos pneus abaixo do recomendado pelo fabricante (pneus murchos) tem como consequência:',
        options: [
          'O aumento do consumo de combustível e o desgaste prematuro dos pneus',
          "A economia de combustível, pois o carro fica mais 'leve'",
          'A redução do ruído do motor, diminuindo a poluição sonora',
          'O aumento da eficiência dos amortecedores',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O pneu murcho cria mais atrito com o chão. O motor precisa fazer mais força para mover o carro, bebendo mais combustível.',
        whyOthersAreWrong:
          'Pneu murcho não economiza combustível, não reduz ruído do motor e piora a eficiência geral do carro.',
        hack: "Pneu murcho 'arrasta' no chão e faz o motor sofrer mais.",
      },
      {
        id: 3,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'Descer declives (serras) com o veículo desengrenado (no ponto morto / banguela) é uma prática:',
        options: [
          'Perigosa, não economiza combustível nos veículos modernos e sobrecarrega o sistema de freios',
          'Recomendada para economizar até 50% de combustível',
          'Obrigatória em dias de chuva para evitar derrapagens',
          'Ecológica, pois reduz a emissão de poluentes a zero durante a descida',
        ],
        correctAnswerIndex: 0,
        explanation:
          "A banguela é perigosa porque retira o 'freio motor', forçando os freios da roda a fazerem todo o trabalho, podendo superaquecer e falhar.",
        whyOthersAreWrong:
          'Além do risco, não economiza combustível nos carros modernos e não evita derrapagens.',
        hack: 'Descer serra é sempre com marcha engatada.',
      },
      {
        id: 4,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'Sobre o impacto aerodinâmico e o peso no veículo, é correto afirmar que:',
        options: [
          'Carregar peso desnecessário e usar bagageiros de teto aumentam o esforço do motor e o consumo de combustível',
          'Bagageiros de teto melhoram o fluxo de ar, ajudando a economizar combustível',
          'O peso transportado no porta-malas não afeta em nada o motor do carro',
          'Deixar as janelas totalmente abertas a 120km/h na estrada reduz o consumo de combustível',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tudo o que forja a aerodinâmica ou adiciona peso faz o motor gastar mais energia para manter a velocidade.',
        whyOthersAreWrong:
          "Janelas abertas em alta velocidade causam 'arrasto', funcionando como um paraquedas, aumentando o consumo.",
        hack: 'Mais peso ou aerodinâmica ruim = maior consumo.',
      },
      {
        id: 5,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'A direção sustentável baseia-se em planejar o trajeto, evitar o uso do carro para distâncias muito curtas e dirigir com suavidade. Essa prática contribui para:',
        options: [
          'A preservação do meio ambiente e melhoria do convívio no trânsito',
          'Apenas o aumento dos congestionamentos nas grandes cidades',
          'O desgaste excessivo do sistema de embreagem',
          'Aumentar o estresse mental dos condutores',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Usar o veículo de forma inteligente e racional ajuda a despoluir a cidade e desafogar o trânsito.',
        whyOthersAreWrong:
          'A direção racional, na verdade, diminui congestionamentos, desgaste mecânico e estresse.',
        hack: 'Dirigir suave e com inteligência faz bem para o planeta e para o motorista.',
      },
    ],
  },
  {
    id: 409,
    title: 'Respeito a Pedestres e Pessoas com Deficiência',
    duration: '5 min',
    content: {
      summary: [
        'O pedestre é a parte mais frágil do trânsito. Em qualquer situação de risco, os veículos devem parar e proteger a vida do pedestre.',
        'A preferência na faixa de pedestres sem semáforo é sempre do pedestre que iniciou a travessia.',
        'Se o semáforo abrir para o veículo e ainda houver um pedestre concluindo a travessia, o condutor DEVE aguardar a passagem completa dele.',
        'Estacionar o veículo sobre calçadas, faixas de pedestres ou rampas de acessibilidade para cadeirantes é infração grave e demonstra total falta de cidadania.',
        'Pessoas com cão-guia ou que usam bengala branca têm direito de prioridade e necessitam de paciência e atenção redobrada dos motoristas.',
      ],
      hack: 'Sinal abriu e o pedestre ainda está na rua? Espere. A pressa do carro não vale a vida da pessoa.',
      realLife:
        'Você está atrasado e para no semáforo. Quando ele fica verde, um idoso com mobilidade reduzida ainda está no meio da faixa. Em vez de buzinar ou avançar o carro devagarinho, você espera com paciência ele terminar de atravessar e chegar à calçada com segurança.',
      curiosity:
        "Jogar água em pedestres ao passar em alta velocidade sobre uma poça d'água não é apenas falta de educação, é uma infração de trânsito média prevista no CTB!",
    },
    questions: [
      {
        id: 1,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'A preferência de passagem na faixa de pedestres onde não existe semáforo é:',
        options: [
          'Absoluta do pedestre',
          'Do veículo, caso ele esteja em velocidade superior a 40km/h',
          'Dos veículos de transporte coletivo',
          'Do pedestre, apenas se for idoso ou criança',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Na ausência de sinalização eletrônica (semáforo), o pedestre tem preferência absoluta sobre a faixa.',
        whyOthersAreWrong:
          'A preferência é de todos os pedestres, independente da velocidade do carro ou do tipo de veículo.',
        hack: "Faixa sem semáforo = Pedestre é o 'rei'.",
      },
      {
        id: 2,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'Quando o semáforo abrir para o seu veículo, mas ainda houver pedestres concluindo a travessia na via, a atitude correta e legal é:',
        options: [
          'Aguardar que concluam a travessia com segurança antes de movimentar o veículo',
          'Buzinar repetidamente para que andem mais rápido',
          'Avançar lentamente o veículo para forçar os pedestres a se afastarem',
          'Desviar pela contramão para não precisar esperar',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A segurança do pedestre vem em primeiro lugar. Quem já iniciou a travessia tem o direito de terminá-la.',
        whyOthersAreWrong:
          'Buzinar, avançar o carro ou invadir a contramão coloca as pessoas em risco e configura infração.',
        hack: 'Sinal abriu, mas tem gente na via? O carro espera.',
      },
      {
        id: 3,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Estacionar o veículo sobre a faixa de pedestres, ciclovia ou rebaixamentos de calçadas destinados a cadeirantes é considerado:',
        options: [
          'Infração de trânsito que gera multa e remoção do veículo (guincho), além de grande falta de respeito',
          'Uma atitude tolerada se o pisca-alerta estiver ligado',
          'Permitido apenas por no máximo 15 minutos',
          'Infração leve, sem remoção do veículo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Obrigar um cadeirante ou pedestre a ir para a rua porque o carro está na rampa ou faixa é uma atitude gravíssima para a acessibilidade e passível de guincho.',
        whyOthersAreWrong:
          "Não existe 'só um minutinho' ou uso de pisca-alerta para justificar parar em local proibido de acessibilidade.",
        hack: 'Pisca-alerta não é passe mágico. Rampa e calçada são intocáveis.',
      },
      {
        id: 4,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          "Passar com o veículo sobre uma poça d'água de forma a molhar os pedestres que estão na calçada é:",
        options: [
          'Uma infração de trânsito punível com multa, além de desrespeitoso',
          'Apenas falta de educação, mas a lei de trânsito não pode multar isso',
          'Uma situação inevitável em dias de chuva que o pedestre deve aceitar',
          'Considerado direção perigosa passível de prisão imediata',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O Art. 171 do CTB diz que usar o veículo para arremessar água ou detritos sobre pedestres é infração média.',
        whyOthersAreWrong:
          'É sim punível pelo código, mas não configura crime de prisão imediata por si só.',
        hack: 'Molhou o pedestre com água da poça? Multa média a caminho.',
      },
      {
        id: 5,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Ao visualizar uma pessoa utilizando uma bengala branca e vermelha ou acompanhada de um cão-guia tentando atravessar a via, o condutor deve:',
        options: [
          'Parar imediatamente o veículo e conceder a preferência de travessia',
          'Buzinar para avisar que está se aproximando',
          'Acelerar para passar logo antes que a pessoa inicie a travessia',
          'Gritar para a pessoa aguardar o carro passar',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pessoas cegas ou com baixa visão (bengala ou cão-guia) necessitam de prioridade e ambiente silencioso para se concentrarem no som do trânsito. Você deve simplesmente parar.',
        whyOthersAreWrong:
          'Buzinar ou gritar assusta o cão e confunde a pessoa com deficiência visual.',
        hack: 'Cão-guia ou bengala na calçada: pare silenciosamente e espere.',
      },
    ],
  },
  {
    id: 410,
    title: 'Baterias e Resíduos Tóxicos Automotivos',
    duration: '4 min',
    content: {
      summary: [
        'A bateria automotiva contém chumbo e ácido sulfúrico em seu interior, produtos altamente tóxicos e perigosos para a saúde humana e para o solo.',
        'Ao comprar uma bateria nova, a legislação obriga que a bateria velha seja devolvida à loja (logística reversa) para ser enviada à reciclagem.',
        'O gás antigamente utilizado nos sistemas de ar-condicionado dos carros (CFC) destrói a camada de ozônio. Em manutenções, esse gás não pode ser liberado no ar.',
        'Lavar o veículo na rua ou calçada desperdiça centenas de litros de água potável e leva sabão e sujeira direto para os bueiros, contaminando os rios.',
        'Pastilhas de freio muito antigas podiam conter amianto, um material cancerígeno (já proibido na fabricação de peças novas no Brasil).',
      ],
      hack: 'Bateria velha não vai pro lixo, volta pra loja.',
      realLife:
        'A bateria do seu carro arriou. Você compra uma nova e quer deixar a velha encostada na garagem. Além do risco de vazar ácido no seu chão, é crime ambiental. A loja que vendeu a nova é obrigada a recolher a velha.',
      curiosity:
        'Cerca de 99% das baterias de chumbo-ácido no Brasil são recicladas. O chumbo é derretido e usado para fazer baterias novas, sendo um dos maiores exemplos de reciclagem no país.',
    },
    questions: [
      {
        id: 1,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'Ao realizar a substituição da bateria do veículo, qual deve ser o destino da bateria velha?',
        options: [
          'Deve ser devolvida ao estabelecimento comercial onde a nova foi comprada, para que seja encaminhada à reciclagem',
          'Pode ser jogada no lixo comum, desde que ensacada em plástico preto',
          'Deve ser enterrada em local afastado de rios',
          'Pode ser deixada na calçada para o caminhão de lixo recolher',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A política de logística reversa obriga fabricantes e comerciantes a recolherem e reciclarem as baterias devido aos metais pesados.',
        whyOthersAreWrong:
          'Qualquer tipo de descarte em lixo comum, solo ou rua causa contaminação por chumbo e ácido, sendo crime ambiental.',
        hack: 'Bateria velha tem devolução obrigatória na loja.',
      },
      {
        id: 2,
        category: 'Meio Ambiente',
        difficulty: 'Média',
        question:
          'O interior das baterias automotivas possui substâncias altamente nocivas ao meio ambiente e à saúde pública. As principais são:',
        options: [
          'Chumbo e ácido sulfúrico',
          'Álcool e gasolina',
          'Ferro e água destilada',
          'Plástico e carvão',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O chumbo é um metal pesado altamente tóxico que se acumula no organismo, e o ácido sulfúrico é altamente corrosivo.',
        whyOthersAreWrong:
          'Combustíveis, ferro ou plástico não são os componentes químicos perigosos que dão nome às baterias automotivas tradicionais (chumbo-ácido).',
        hack: 'Bateria automotiva = Chumbo e Ácido.',
      },
      {
        id: 3,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'Durante a manutenção do ar-condicionado de veículos (especialmente os mais antigos), o mecânico não deve liberar o gás refrigerante diretamente na atmosfera porque:',
        options: [
          'Muitos desses gases destroem a camada de ozônio e contribuem fortemente para o efeito estufa',
          'Eles causam chuva ácida imediata na região da oficina',
          'O cheiro atrai insetos transmissores de doenças',
          'O gás corrói a pintura dos veículos ao redor',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Os gases refrigerantes (como o antigo CFC) são grandes vilões da camada de ozônio. Eles devem ser recolhidos com equipamentos adequados.',
        whyOthersAreWrong:
          'A questão central é a camada de ozônio e o aquecimento global, não chuva ácida ou atração de insetos.',
        hack: 'Gás do ar condicionado = Problema para a Camada de Ozônio.',
      },
      {
        id: 4,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'Lavar o carro frequentemente com mangueira na calçada da rua é uma prática que:',
        options: [
          'Causa desperdício de água potável e carrega produtos químicos e óleos direto para as galerias pluviais',
          'É recomendada pelas prefeituras para manter a umidade do asfalto',
          'Não causa qualquer impacto ambiental, pois o sabão neutro limpa a via pública',
          'Substitui a necessidade de limpeza dos bueiros pela prefeitura',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A lavagem com mangueira desperdiça muita água limpa. Além disso, a água da rua (galeria pluvial) não recebe tratamento e vai direto para os rios, levando os resíduos do carro.',
        whyOthersAreWrong:
          'Não limpa a rua, apenas suja os rios e desperdiça uma água que poderia ser economizada com lavagem a seco ou balde.',
        hack: 'Mangueira aberta na calçada = desperdício e rio poluído.',
      },
      {
        id: 5,
        category: 'Meio Ambiente',
        difficulty: 'Difícil',
        question:
          'Em peças mais antigas do sistema de freio (lonas e pastilhas), utilizava-se um material altamente nocivo que soltava um pó perigoso na atmosfera ao ser desgastado. Esse material, hoje proibido, é o:',
        options: ['Amianto (ou asbesto)', 'Silicone', 'Alumínio', 'Cobre'],
        correctAnswerIndex: 0,
        explanation:
          'O amianto foi muito usado por resistir ao calor, mas seu pó, quando inalado, causa graves doenças pulmonares e câncer.',
        whyOthersAreWrong:
          'Silicone, alumínio e cobre não são os materiais nocivos alvo dessa restrição específica nas pastilhas.',
        hack: 'Freio antigo que causava câncer de pulmão = Amianto.',
      },
    ],
  },
  {
    id: 411,
    title: 'Poluição Visual e Direção Segura',
    duration: '4 min',
    content: {
      summary: [
        'A poluição visual é o excesso de placas, outdoors, faixas e anúncios espalhados pelas vias urbanas e rodovias.',
        'O grande perigo da poluição visual no trânsito é que ela desvia a atenção e a concentração do motorista e dos pedestres.',
        "Além de distrair, anúncios muito iluminados ou mal posicionados podem esconder as placas de sinalização de trânsito verdadeiras, como uma placa de 'Pare'.",
        'Atividades como distribuir panfletos em semáforos, além de sujar a rua, podem tirar o foco do motorista no momento de arrancar.',
        "O CTB não pune o motorista por 'olhar' para um outdoor, mas pune prefeituras e empresas que colocam propagandas que atrapalhem a sinalização.",
      ],
      hack: 'Poluição visual atrapalha a leitura da via. Muita placa de loja esconde a placa de trânsito.',
      realLife:
        'Você está dirigindo à noite e passa por um painel de LED gigante de propaganda tão brilhante que chega a ofuscar sua visão. Isso faz você não perceber um pedestre começando a atravessar a rua logo abaixo do painel.',
      curiosity:
        "Algumas cidades do Brasil adotaram a política de 'Cidade Limpa', proibindo totalmente os grandes outdoors nas ruas para reduzir a poluição visual e os acidentes causados por distração.",
    },
    questions: [
      {
        id: 1,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'A poluição visual nas vias públicas é causada principalmente por:',
        options: [
          'Excesso de placas publicitárias, outdoors, painéis luminosos e faixas',
          'Grande quantidade de fumaça preta saindo dos escapamentos',
          'Acúmulo de lixo doméstico nas calçadas',
          'Veículos pintados com cores muito fortes e vibrantes',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A poluição visual refere-se à sobrecarga de estímulos visuais comerciais que invadem o espaço público.',
        whyOthersAreWrong:
          'Fumaça é poluição do ar. Lixo é poluição do solo/estética. Cores dos carros não configuram poluição visual.',
        hack: 'Muito outdoor e propaganda = Poluição Visual.',
      },
      {
        id: 2,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'Qual é o principal risco que a poluição visual traz para a segurança no trânsito?',
        options: [
          'Desvia a atenção do condutor e pode ocultar ou ofuscar as placas de sinalização de trânsito',
          'Aumenta a emissão de calor na atmosfera urbana',
          'Causa o desgaste mais rápido da pintura dos veículos',
          'Interfere no sinal de GPS e no rádio dos carros',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O cérebro tem limite de processamento. Muitas informações desviam a atenção do que importa: a pista, a sinalização e os pedestres.',
        whyOthersAreWrong:
          'O risco é inteiramente relacionado à distração visual, não a desgaste físico ou interferência de sinal.',
        hack: 'Poluição visual tira a concentração do motorista.',
      },
      {
        id: 3,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'A legislação de trânsito proíbe a afixação de publicidade ou qualquer tipo de propaganda:',
        options: [
          'Ao longo das rodovias ou na cidade, quando isso cobrir, interferir ou prejudicar a visibilidade da sinalização de trânsito',
          'Apenas durante a noite, por causa das luzes artificiais',
          'Apenas em bairros residenciais de alto padrão',
          'Dentro dos jornais vendidos nos semáforos',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A sinalização de trânsito é soberana para garantir a segurança. Nenhuma propaganda pode atrapalhar a visão do motorista sobre as regras da via.',
        whyOthersAreWrong:
          'Não é restrito à noite ou bairros. A restrição é sobre não interferir na segurança viária.',
        hack: 'Propaganda nunca pode esconder a placa de trânsito.',
      },
      {
        id: 4,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'A distribuição de panfletos informativos aos motoristas nos semáforos pode resultar em um problema de dupla natureza ambiental e viária, que é:',
        options: [
          'A distração momentânea do condutor e o acúmulo de papel atirado na via, entupindo bueiros',
          'O aumento da poluição sonora devido ao barulho do papel e a redução de fumaça',
          'A melhora na educação no trânsito, compensando a sujeira deixada',
          'O bloqueio do campo magnético da pista',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pegar o panfleto distrai quem está dirigindo, e frequentemente o motorista atira o papel pela janela logo à frente, sujando a via.',
        whyOthersAreWrong:
          'A sujeira não compensa e o papel não tem relação sonora ou magnética.',
        hack: 'Panfleto na rua = Distração na hora e enchente depois.',
      },
      {
        id: 5,
        category: 'Meio Ambiente',
        difficulty: 'Fácil',
        question:
          'A utilização de películas de controle solar (insulfilm) muito escuras e fora dos padrões estabelecidos pelo CONTRAN contribui negativamente para o trânsito porque:',
        options: [
          'Reduz perigosamente a visibilidade do motorista, especialmente à noite e em dias de chuva',
          'Absorve a fumaça preta dos ônibus, sujando o vidro',
          'Esquenta excessivamente o interior do veículo',
          'Reflete a luz do sol apenas nos olhos dos pedestres',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Um vidro muito escuro prejudica o próprio condutor de enxergar ciclistas, pedestres e sinalizações quando há pouca luz no ambiente externo.',
        whyOthersAreWrong:
          'Películas costumam diminuir o calor, não esquentar. Mas o principal problema legal é a perda de visibilidade para quem dirige.',
        hack: 'Insulfilm muito escuro = Você não enxerga os pedestres à noite.',
      },
    ],
  },
  {
    id: 412,
    title: 'Comportamento Ético e Solidariedade no Trânsito',
    duration: '5 min',
    content: {
      summary: [
        'A cidadania no trânsito é testada nos momentos de estresse. É fundamental não revidar provocações ou fechadas.',
        'Se outro motorista for agressivo, a atitude correta do cidadão pacífico é evitar contato visual, não buzinar de volta e permitir que ele siga em frente.',
        'Solidariedade significa ajudar a manter a fluidez e segurança. Avisar gentilmente outro motorista de que um pneu está murcho ou a porta está mal fechada é um dever cívico.',
        'O uso da luz alta de farol em vias iluminadas ou cruzar com outro veículo cega o motorista que vem no sentido oposto, demonstrando falta de respeito à vida alheia.',
        'Dar passagem a ambulâncias e viaturas em serviço de urgência com sirene ligada não é um favor, é um dever ético e obrigação legal de todo condutor.',
      ],
      hack: 'Não seja o vingador do trânsito. Erraram com você? Freie, respire e deixe o apressado ir embora.',
      realLife:
        "Alguém te 'dá uma fechada' perigosa no trânsito por falta de atenção. Você se assusta. Em vez de acelerar para ir tirar satisfação no próximo semáforo, você simplesmente reduz a velocidade e segue sua vida com segurança. Você escolheu ser inteligente e preservar sua paz.",
      curiosity:
        "Estudos indicam que o 'efeito manada' do estresse acontece no trânsito: uma simples buzinada agressiva pode causar uma reação em cadeia de irritação em outros cinco motoristas ao redor que nem estavam envolvidos no problema.",
    },
    questions: [
      {
        id: 1,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          "Ao ser alvo de uma manobra agressiva (como uma 'fechada') ou provocações de outro condutor no trânsito, a atitude correta e segura é:",
        options: [
          'Manter a calma, evitar contato visual e não revidar, permitindo que o outro veículo siga em frente',
          'Acelerar e tentar ultrapassar o veículo para dar uma lição no motorista',
          'Buzinar repetidamente até o próximo semáforo',
          'Emparelhar os carros para discutir as regras de trânsito',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Entrar em atrito no trânsito pode gerar acidentes graves ou violência física. A direção defensiva e cidadã manda ignorar provocações.',
        whyOthersAreWrong:
          'Revidar, buzinar de raiva ou discutir transforma você em parte do problema e aumenta o risco de tragédia.',
        hack: 'Motorista estressado? Deixe ele ir embora. Paz é prioridade.',
      },
      {
        id: 2,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Um comportamento que demonstra solidariedade e cidadania nas vias públicas é:',
        options: [
          'Sinalizar ou avisar educadamente outro motorista caso perceba algum problema no veículo dele (pneu murcho, luz queimada, porta mal fechada)',
          'Acelerar para não deixar que outros veículos mudem para a sua faixa em um congestionamento',
          "Buzinar quando o condutor da frente deixar o carro 'morrer' no momento que o sinal abre",
          'Estacionar ocupando duas vagas para evitar que amassem seu carro',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ser solidário é colaborar para que todos trafeguem com segurança. Avisar de um risco beneficia a pessoa e todo o trânsito ao redor.',
        whyOthersAreWrong:
          'As outras alternativas são exemplos claros de egoísmo (bloquear passagem, buzinar por erro alheio, egoísmo na vaga).',
        hack: 'Cidadania é cooperar, e não competir com os outros motoristas.',
      },
      {
        id: 3,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'Qual das atitudes abaixo é ao mesmo tempo uma demonstração de falta de respeito à vida alheia (falta de cidadania) e uma infração grave nas estradas?',
        options: [
          'Manter os faróis na luz alta ao cruzar ou seguir outro veículo, ofuscando a visão dos demais condutores',
          'Dar um toque rápido na buzina para alertar sobre uma curva perigosa',
          'Fazer uso das setas (pisca) sempre que for mudar de faixa',
          'Descartar corretamente o lixo do interior do veículo na lixeira do posto de combustíveis',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A luz alta direta nos olhos pode cegar momentaneamente o outro condutor, causando colisões frontais fatais.',
        whyOthersAreWrong:
          'As outras opções são boas práticas exigidas pelo código e pelo bom senso.',
        hack: 'Luz alta na cara do outro = Risco de cegueira momentânea e acidente.',
      },
      {
        id: 4,
        category: 'Cidadania',
        difficulty: 'Fácil',
        question:
          'Ao ouvir a sirene de uma ambulância, carro de bombeiro ou polícia em situação de emergência, o motorista solidário e consciente deve:',
        options: [
          'Deixar livre a passagem pela faixa da esquerda, deslocando-se para a direita e parando, se necessário',
          'Acelerar o veículo e andar na frente da ambulância para não atrapalhar',
          'Ignorar o som se estiver no limite de velocidade da via',
          'Frear bruscamente no meio da faixa para a ambulância desviar',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A lei determina que em casos de urgência com giroflex e sirene, todos os condutores devem abrir caminho na faixa da esquerda.',
        whyOthersAreWrong:
          'Usar o vácuo da ambulância, frear do nada ou ignorá-la atrapalha o salvamento de uma vida.',
        hack: 'Ouviu sirene? Vai para a direita e deixa passar.',
      },
      {
        id: 5,
        category: 'Cidadania',
        difficulty: 'Média',
        question:
          'A direção defensiva se relaciona diretamente com a cidadania porque:',
        options: [
          'Ambas exigem que o condutor abra mão dos seus direitos em prol da segurança e da vida em sociedade',
          'Ambas ensinam que o condutor mais rápido sempre tem preferência',
          'Nenhuma das duas leva em consideração as falhas e erros dos outros pedestres ou motoristas',
          'Apenas cobram do Estado estradas perfeitas, sem cobrar nada do motorista',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Tanto a direção defensiva (evitar acidentes prevendo erros dos outros) quanto a cidadania (respeito social) muitas vezes exigem que você ceda sua vez, pare, ou espere para que acidentes e conflitos sejam evitados.',
        whyOthersAreWrong:
          "Elas consideram os erros dos outros sim, e exigem postura pacífica, não cobrança pura ou ser 'mais rápido'.",
        hack: 'Abrir mão do próprio direito para evitar acidente é ser cidadão e defensivo.',
      },
    ],
  },
]
