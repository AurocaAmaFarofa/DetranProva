// src/data/direcaoDefensiva.js
// Missões NOVAS para o módulo "Direção Defensiva" (id: 2).
// Import no App.jsx: modules[1].missions.push(...missoesDefensivaExtra)

export const missoesDefensivaExtra = [
  {
    id: 203,
    title: 'Os 5 Elementos da Direção Defensiva',
    duration: '6 min',
    content: {
      summary: [
        'Direção defensiva é a capacidade de prevenir acidentes por meio de atenção, previsão e conduta segura — mesmo diante de erros de outros condutores.',
        'Os 5 elementos clássicos são: Conhecimento (das leis e do veículo), Atenção (ao ambiente), Previsão (do que pode acontecer), Habilidade (técnica para reagir) e Ação (agir a tempo).',
        "'Prever' significa antecipar o que pedestres, ciclistas e outros motoristas podem fazer, antes que aconteça — não é adivinhação, é leitura de padrões de risco.",
        'Manter distância de segurança do veículo à frente é a aplicação mais prática desse conceito: dá tempo e espaço de reação.',
        "A 'regra dos 2 segundos' ajuda a calcular essa distância: escolha um ponto fixo na pista; quando o carro da frente passar por ele, conte — você deve levar pelo menos 2 segundos para passar pelo mesmo ponto, em pista seca.",
      ],
      hack: 'Conhecimento, Atenção, Previsão, Habilidade, Ação — nessa ordem, é o caminho que evita o acidente antes dele começar.',
      realLife:
        'Você vê uma bola rolando na rua à sua frente, mesmo sem ver nenhuma criança ainda. Prever que uma criança pode correr atrás da bola — e já reduzir a velocidade — é direção defensiva na prática.',
      curiosity:
        "A direção defensiva não é sobre 'quem tem razão' num incidente — é sobre evitar que o incidente aconteça, mesmo que o erro seja do outro motorista.",
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'A direção defensiva tem como objetivo principal:',
        options: [
          'Prevenir acidentes por meio de atenção, previsão e conduta segura, mesmo diante de erros de terceiros',
          'Vencer o trânsito no menor tempo possível',
          'Provar quem está certo em uma discussão de trânsito',
          'Reduzir apenas o consumo de combustível',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O núcleo da direção defensiva é antecipar riscos — inclusive os causados por erro alheio — e agir a tempo de evitar o acidente.',
        whyOthersAreWrong:
          'Rapidez, discussão de culpa e economia de combustível não são o foco central do conceito, mesmo que possam ser consequências indiretas de uma boa direção.',
        hack: 'Defensiva não é sobre culpa — é sobre evitar o problema antes dele acontecer.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Os elementos clássicos da direção defensiva incluem conhecimento, atenção, previsão, habilidade e:',
        options: ['Ação', 'Velocidade', 'Buzina', 'Ultrapassagem'],
        correctAnswerIndex: 0,
        explanation:
          'Os cinco elementos formam uma sequência lógica: conhecer as regras, prestar atenção, prever o risco, ter habilidade técnica e, por fim, agir a tempo.',
        whyOthersAreWrong:
          'Velocidade, buzina e ultrapassagem são situações práticas de trânsito, não elementos conceituais da direção defensiva.',
        hack: 'C-A-P-H-A: Conhecimento, Atenção, Previsão, Habilidade, Ação.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question: "A 'regra dos 2 segundos' é usada para calcular:",
        options: [
          'A distância de segurança em relação ao veículo da frente, em pista seca',
          'O tempo ideal de reação em curvas fechadas',
          'O tempo médio de troca de marcha',
          'A distância mínima para estacionar',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Escolha um ponto fixo na pista; quando o carro da frente passar por ele, comece a contar — você deve levar pelo menos 2 segundos para passar pelo mesmo ponto.',
        whyOthersAreWrong:
          'Não se relaciona a troca de marcha nem a estacionamento — é especificamente sobre distância de seguimento entre veículos em movimento.',
        hack: 'Ponto fixo + contagem = a forma mais simples de medir distância de segurança sem instrumento nenhum.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Manter distância segura do veículo à frente serve, principalmente, para:',
        options: [
          'Garantir tempo e espaço de reação em caso de frenagem brusca',
          'Economizar combustível durante o trajeto',
          'Facilitar ultrapassagens a qualquer momento',
          'Evitar multas por excesso de velocidade',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O propósito central é dar tempo de reagir — frear ou desviar — caso o veículo à frente pare de repente.',
        whyOthersAreWrong:
          'Economia de combustível e facilidade de ultrapassagem podem ser efeitos colaterais, mas não são o motivo pelo qual a distância existe como regra de segurança.',
        hack: 'Distância = tempo de reagir. Sem ela, você só tem reflexo — e reflexo nem sempre é rápido o bastante.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Antecipar as possíveis ações de pedestres, ciclistas e outros motoristas, antes que aconteçam, é o elemento de:',
        options: ['Previsão', 'Habilidade', 'Ação', 'Conhecimento'],
        correctAnswerIndex: 0,
        explanation:
          "Essa antecipação é exatamente o elemento 'previsão' da direção defensiva.",
        whyOthersAreWrong:
          "'Habilidade' é a capacidade técnica de reagir; 'ação' é agir de fato; 'conhecimento' é saber as regras — todos vêm antes ou depois da previsão em si.",
        hack: 'Previsão é pensar um passo à frente do que os outros podem fazer.',
      },
    ],
  },

  {
    id: 204,
    title: 'Condições Adversas: Chuva, Neblina e Noite',
    duration: '6 min',
    content: {
      summary: [
        'Condições adversas são situações que reduzem aderência, visibilidade ou tempo de reação: chuva, neblina, pista molhada e pouca luz.',
        'Em pista molhada, a distância de segurança deve AUMENTAR — a regra dos 2 segundos sobe para 3 segundos ou mais, porque a frenagem fica menos eficiente.',
        'Na neblina, o correto é usar farol BAIXO, não alto — o farol alto reflete na própria neblina e piora a visibilidade.',
        'À noite, em rodovia, sem veículos próximos à frente ou vindo em sentido contrário, o farol alto amplia bastante o alcance de visão — mas deve ser reduzido para baixo ao cruzar com outro veículo.',
        'Em qualquer condição adversa, a resposta correta é sempre a mesma combinação: reduzir a velocidade e aumentar a distância do veículo à frente.',
      ],
      hack: 'Neblina = farol baixo (o alto reflete e cega você mesmo). Chuva = mais distância, nunca menos.',
      realLife:
        'Você está numa rodovia à noite, sozinho na pista, sem carro à frente nem vindo no sentido contrário — é seguro usar o farol alto para enxergar mais longe. Assim que aparecer outro veículo, você reduz para baixo.',
      curiosity:
        "Muita gente pensa que farol alto ajuda na neblina porque 'ilumina mais' — na prática, ele faz o efeito contrário: a luz reflete de volta nas gotículas de água no ar e cria um 'muro branco' que reduz ainda mais a visibilidade.",
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Difícil',
        question:
          'Em pista molhada, a distância de segurança em relação ao veículo à frente deve ser:',
        options: [
          'Aumentada, geralmente para o equivalente a 3 segundos ou mais',
          'Reduzida, para compensar a menor velocidade praticada',
          'Igual à distância usada em pista seca',
          'Irrelevante, já que o ABS resolve sozinho',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pista molhada reduz a aderência dos pneus e aumenta a distância de frenagem — a regra dos segundos deve subir de 2 para 3 ou mais.',
        whyOthersAreWrong:
          'Reduzir a distância vai contra a lógica de segurança; o ABS ajuda a controlar a frenagem, mas não elimina a necessidade de mais espaço.',
        hack: 'Pista seca = 2 segundos. Pista molhada = 3 segundos ou mais.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Em condições de neblina, a atitude mais segura do condutor é:',
        options: [
          'Reduzir a velocidade e aumentar a distância do veículo à frente, usando farol baixo',
          'Acender o farol alto para tentar enxergar mais longe',
          'Manter a mesma velocidade, seguindo de perto o carro da frente como guia',
          'Desligar os faróis para não ofuscar outros motoristas',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O farol alto, na neblina, reflete de volta na própria neblina e piora a visibilidade — o correto é farol baixo, velocidade reduzida e mais distância.',
        whyOthersAreWrong:
          'Seguir de perto o carro da frente elimina justamente o tempo de reação que se busca preservar; desligar os faróis reduz sua própria visibilidade para os outros.',
        hack: 'Neblina pede farol baixo, não alto — o alto vira contra você.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          "Qual das situações abaixo é um exemplo de 'condição adversa' que exige redução de velocidade?",
        options: [
          'Chuva forte, neblina ou pista molhada',
          'Via seca e bem sinalizada em pleno dia',
          'Trânsito livre em rodovia duplicada e seca',
          'Estacionamento vazio em horário de baixo movimento',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Condições adversas são justamente aquelas que reduzem aderência, visibilidade ou tempo de reação.',
        whyOthersAreWrong:
          'As demais alternativas descrevem cenários favoráveis de condução, sem os fatores de risco que caracterizam uma condição adversa.',
        hack: 'Se reduz aderência ou visibilidade, é adversa — e pede mais cautela.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'À noite, em rodovia, na ausência de veículos próximos à frente ou em sentido contrário, o uso recomendado dos faróis é:',
        options: [
          'Farol alto, reduzindo para baixo ao cruzar com outro veículo',
          'Farol baixo o tempo todo, mesmo sem veículos por perto',
          'Pisca-alerta ligado continuamente durante o trajeto',
          'Faróis desligados, para economizar bateria',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O farol alto amplia bastante o alcance de visão em trechos livres — mas deve ser reduzido assim que houver risco de ofuscar outro condutor.',
        whyOthersAreWrong:
          'Pisca-alerta contínuo em movimento normal é indevido (confunde os demais); dirigir sem faróis à noite é extremamente perigoso e proibido.',
        hack: 'Sozinho na pista à noite: alto. Apareceu alguém: baixo.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'A resposta correta diante de qualquer condição adversa (chuva, neblina, pista molhada) é, de forma geral:',
        options: [
          'Reduzir a velocidade e aumentar a distância do veículo à frente',
          'Manter a mesma velocidade, já que os freios modernos compensam',
          'Aumentar a velocidade para sair rápido da área de risco',
          'Seguir o comportamento do veículo da frente, sem ajuste próprio',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Independentemente do tipo específico de condição adversa, a combinação de resposta é sempre a mesma: mais devagar e mais distância.',
        whyOthersAreWrong:
          'Manter ou aumentar a velocidade em condição de risco vai na direção contrária da segurança; copiar o comportamento de outro motorista não substitui a avaliação própria da situação.',
        hack: 'Chuva, neblina, pista molhada: a resposta é sempre a mesma — reduz e afasta.',
      },
    ],
  },

  {
    id: 205,
    title: 'Pontos Cegos e Espelhos Retrovisores',
    duration: '5 min',
    content: {
      summary: [
        'Ponto cego é a área ao redor do veículo que não aparece nos retrovisores — geralmente nas laterais traseiras.',
        'Antes de mudar de faixa ou converter, além de olhar o retrovisor, é preciso virar rapidamente a cabeça para checar o ponto cego.',
        'Motociclistas são especialmente vulneráveis a acidentes por ponto cego, já que ocupam menos espaço visual do que um carro.',
        'Ajustar corretamente os retrovisores (externos e interno) antes de dirigir reduz — mas não elimina — a área de ponto cego.',
        'Confiar apenas no retrovisor, sem checar o ponto cego, é um dos erros mais comuns em mudanças de faixa.',
      ],
      hack: 'Retrovisor mostra quase tudo, mas não tudo — o ponto cego só some quando você vira a cabeça.',
      realLife:
        'Você olha o retrovisor e não vê nenhum carro, mas antes de mudar de faixa vira rapidamente a cabeça e percebe uma moto exatamente na área que o espelho não alcançava.',
      curiosity:
        'Mesmo os retrovisores bem ajustados não eliminam 100% do ponto cego — por isso o giro rápido de cabeça continua sendo recomendado em qualquer veículo.',
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Ponto cego é:',
        options: [
          'A área ao redor do veículo que não aparece nos retrovisores',
          'O local onde o motorista não pode acender o farol',
          'Uma falha exclusiva de veículos antigos',
          'A parte da pista sem sinalização',
        ],
        correctAnswerIndex: 0,
        explanation:
          'É a área, geralmente nas laterais traseiras, que fica fora do campo de visão dos espelhos retrovisores.',
        whyOthersAreWrong:
          'Não tem relação com faróis, não é exclusivo de carros antigos, nem se refere à sinalização da pista.',
        hack: 'Ponto cego é sobre visão do motorista, não sobre a pista em si.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question: 'Antes de mudar de faixa, além do retrovisor, o correto é:',
        options: [
          'Virar rapidamente a cabeça para checar o ponto cego',
          'Confiar apenas no retrovisor central',
          'Buzinar antes de qualquer manobra',
          'Acelerar para reduzir o tempo de exposição ao risco',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O retrovisor sozinho não cobre toda a área lateral traseira — o giro de cabeça complementa essa checagem.',
        whyOthersAreWrong:
          'Confiar só no espelho central deixa o ponto cego descoberto; buzinar ou acelerar não substituem a verificação visual.',
        hack: 'Espelho + giro de cabeça = checagem completa.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Motociclistas são especialmente vulneráveis a acidentes de ponto cego porque:',
        options: [
          'Ocupam menos espaço visual e são mais fáceis de passar despercebidos',
          'Sempre andam mais devagar que os carros',
          'Não têm direito de usar as mesmas faixas dos carros',
          'São obrigados a andar apenas no acostamento',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O tamanho reduzido de uma moto faz com que ela 'desapareça' mais facilmente na área não coberta pelos espelhos.",
        whyOthersAreWrong:
          'Motos não andam necessariamente mais devagar, têm direito às mesmas faixas dos carros e não são restritas ao acostamento.',
        hack: 'Moto é pequena para o espelho, mas gigante em risco se ignorada.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Ajustar corretamente os retrovisores antes de dirigir:',
        options: [
          'Reduz, mas não elimina totalmente, a área de ponto cego',
          'Elimina completamente qualquer ponto cego',
          'É opcional e não influencia a segurança',
          'Só é necessário em rodovias',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mesmo um bom ajuste reduz a área não visível, mas não a elimina por completo — por isso o giro de cabeça continua necessário.',
        whyOthersAreWrong:
          'Nenhum ajuste elimina 100% do ponto cego, e essa prática é relevante em qualquer tipo de via, não só rodovias.',
        hack: 'Ajuste bom reduz o problema, não apaga ele.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Confiar apenas no retrovisor, sem checar o ponto cego, é:',
        options: [
          'Um dos erros mais comuns em mudanças de faixa',
          'Uma prática totalmente segura para motoristas experientes',
          'Recomendado em vias de trânsito rápido',
          'Irrelevante para a segurança da manobra',
        ],
        correctAnswerIndex: 0,
        explanation:
          'É um erro frequente mesmo entre motoristas experientes, e uma das causas mais comuns de colisões laterais evitáveis.',
        whyOthersAreWrong:
          'Experiência não torna essa prática segura, e o risco existe em qualquer tipo de via.',
        hack: "'Sou experiente' não substitui o giro de cabeça.",
      },
    ],
  },

  {
    id: 206,
    title: 'Fadiga e Sono ao Volante',
    duration: '5 min',
    content: {
      summary: [
        'A fadiga reduz o tempo de reação do condutor de forma parecida com o efeito do álcool, mesmo sem o motorista perceber claramente.',
        'Sinais de fadiga incluem: bocejos frequentes, dificuldade de manter os olhos abertos, pensamento disperso e dificuldade de lembrar os últimos quilômetros percorridos.',
        'Em viagens longas, recomenda-se fazer pausas periódicas para descanso, evitando dirigir por muitas horas seguidas sem parar.',
        "Não existe 'truque' eficaz para vencer o sono ao volante (como música alta ou abrir o vidro) — a única solução real é parar e descansar.",
        'Dirigir sonolento é uma das causas mais subestimadas de acidentes graves, especialmente em rodovias à noite.',
      ],
      hack: 'Sentiu sono de verdade? Não tem truque — só parar resolve.',
      realLife:
        "No meio de uma viagem longa à noite, você percebe que já não lembra dos últimos quilômetros percorridos. Esse é um sinal claro de fadiga — a atitude correta é parar em local seguro para descansar, não tentar 'aguentar mais um pouco'.",
      curiosity:
        'Estudos de trânsito mostram que dirigir com fadiga extrema pode reduzir o tempo de reação de forma comparável ao efeito de álcool no organismo — mesmo sem o motorista ter bebido nada.',
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'A fadiga ao volante pode reduzir o tempo de reação do condutor de forma comparável a:',
        options: [
          'O efeito do álcool no organismo',
          'Nenhum outro fator de risco relevante',
          'Apenas o uso do celular',
          'O clima frio',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Estudos de trânsito comparam o efeito da fadiga extrema ao efeito do álcool sobre o tempo de reação do condutor.',
        whyOthersAreWrong:
          'Celular e clima frio são fatores de risco distintos, sem essa comparação direta de efeito fisiológico.',
        hack: "Sono também 'embriaga' a reação do motorista.",
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'São sinais de fadiga ao volante:',
        options: [
          'Bocejos frequentes e dificuldade de lembrar os últimos quilômetros percorridos',
          'Aumento da atenção aos detalhes da via',
          'Reflexos mais rápidos que o normal',
          'Melhora na percepção de distância',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Esses são sinais clássicos de que o corpo já está no limite de atenção sustentada.',
        whyOthersAreWrong:
          'Fadiga não melhora atenção, reflexos ou percepção — pelo contrário, prejudica todos esses aspectos.',
        hack: 'Não lembra do trecho que acabou de passar? Isso é sono, não distração.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Em viagens longas, a recomendação principal para evitar a fadiga é:',
        options: [
          'Fazer pausas periódicas para descanso',
          'Aumentar a velocidade para chegar mais rápido',
          'Abrir todos os vidros do carro',
          'Ouvir música no volume máximo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pausas regulares são a medida mais eficaz e recomendada para prevenir a fadiga em trajetos longos.',
        whyOthersAreWrong:
          'Velocidade maior aumenta o risco, e truques como vidro aberto ou música alta não substituem o descanso real.',
        hack: 'Cansou? Para. Não existe atalho de verdade.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          "Sobre 'truques' populares para vencer o sono ao volante (música alta, abrir o vidro):",
        options: [
          'Não são soluções eficazes — a única solução real é parar e descansar',
          'São completamente eficazes e substituem o descanso',
          'Funcionam apenas durante o dia',
          'São recomendados pelo CTB como alternativa ao descanso',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Esses truques podem dar uma sensação momentânea de alerta, mas não resolvem a fadiga real — apenas o descanso faz isso.',
        whyOthersAreWrong:
          'Não há previsão do CTB recomendando esses truques, e eles não substituem, de fato, o descanso.',
        hack: 'Música alta desperta por segundos, não resolve a causa.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Dirigir sonolento é considerado, entre especialistas em trânsito, como:',
        options: [
          'Uma causa subestimada de acidentes graves, especialmente à noite em rodovias',
          'Um risco irrelevante comparado a outros fatores',
          'Um problema exclusivo de motoristas profissionais',
          'Algo que só afeta viagens acima de 500 km',
        ],
        correctAnswerIndex: 0,
        explanation:
          'É um risco frequentemente subestimado, mas com impacto real em acidentes graves, principalmente em rodovias noturnas.',
        whyOthersAreWrong:
          'Não é exclusivo de profissionais nem depende de uma distância mínima de viagem para representar risco.',
        hack: "Sono é traiçoeiro justamente por parecer 'menos perigoso' do que realmente é.",
      },
    ],
  },

  {
    id: 207,
    title: 'Direção Defensiva em Curvas',
    duration: '5 min',
    content: {
      summary: [
        'A velocidade deve ser reduzida ANTES de entrar na curva, nunca durante — frear em plena curva pode desestabilizar o veículo.',
        'Em curvas fechadas, a trajetória mais segura é entrar mais aberto, buscar o ponto mais interno no meio da curva e sair mais aberto novamente.',
        'Pista molhada em curvas exige redução adicional de velocidade, já que a aderência dos pneus fica comprometida justamente no momento de maior force lateral.',
        "Placas de advertência antes de curvas (como a de 'curva acentuada') servem exatamente para avisar a necessidade de redução antecipada.",
        'Curvas sem visibilidade da pista contrária são um dos locais mais perigosos para tentar ultrapassagem.',
      ],
      hack: 'Reduz antes, não durante — a curva não é hora de pisar no freio.',
      realLife:
        'Você vê uma placa de advertência de curva acentuada. O momento certo de reduzir a velocidade é assim que você vê a placa, não quando já está no meio da curva.',
      curiosity:
        'Frear bruscamente durante uma curva pode transferir o peso do veículo de forma desigual entre os pneus, aumentando o risco de perda de aderência — por isso a orientação técnica é sempre reduzir antes.',
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question: 'A velocidade em uma curva deve ser reduzida:',
        options: [
          'Antes de entrar na curva, nunca durante',
          'Sempre durante a curva, com o pé no freio',
          'Apenas na saída da curva',
          'Não há necessidade de redução em curvas suaves',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Frear durante a curva pode desestabilizar o veículo pela transferência desigual de peso entre os pneus.',
        whyOthersAreWrong:
          'Frear na saída não previne o risco durante a curva; mesmo curvas suaves exigem alguma atenção à velocidade.',
        hack: 'Reduz antes de entrar, mantém estável durante.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Difícil',
        question: 'Em curvas fechadas, a trajetória mais segura recomendada é:',
        options: [
          'Entrar mais aberto, buscar o ponto mais interno no meio e sair mais aberto novamente',
          'Entrar o mais fechado possível desde o início',
          'Manter-se sempre no centro exato da faixa',
          'Acelerar progressivamente durante toda a curva',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Essa trajetória suaviza o ângulo da curva percorrida pelo veículo, reduzindo a força lateral necessária.',
        whyOthersAreWrong:
          'Entrar fechado desde o início ou manter-se sempre no centro pode aumentar o ângulo efetivo da curva, exigindo mais dos pneus.',
        hack: 'Aberto-fechado-aberto: a trajetória clássica de curva segura.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Em pista molhada, ao entrar em uma curva, o condutor deve:',
        options: [
          'Reduzir ainda mais a velocidade, já que a aderência dos pneus fica comprometida',
          'Manter a mesma velocidade de pista seca',
          'Acelerar para atravessar a curva mais rápido',
          'Ignorar a diferença, pois pouco importa',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A força lateral necessária em curvas exige mais aderência dos pneus, que já está reduzida pela água na pista.',
        whyOthersAreWrong:
          'Manter a mesma velocidade ou acelerar em pista molhada numa curva aumenta significativamente o risco de derrapagem.',
        hack: 'Curva + chuva = redução dupla de velocidade, não simples.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Placas de advertência antes de curvas servem para:',
        options: [
          'Avisar a necessidade de redução antecipada de velocidade',
          'Indicar que a via está fechada',
          'Informar sobre postos de gasolina próximos',
          'Substituir a necessidade de qualquer atenção do motorista',
        ],
        correctAnswerIndex: 0,
        explanation:
          'É justamente o papel das placas amarelas de advertência: alertar com antecedência sobre o que vem à frente.',
        whyOthersAreWrong:
          'Não indicam via fechada nem postos de gasolina, e não substituem a atenção — apenas complementam.',
        hack: 'Placa de curva é o aviso pra você já ir reduzindo antes de chegar lá.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Curvas sem visibilidade da pista contrária são consideradas:',
        options: [
          'Um dos locais mais perigosos para tentar ultrapassagem',
          'Locais seguros para ultrapassagem rápida',
          'Irrelevantes para a decisão de ultrapassar',
          'Permitidos para ultrapassagem apenas por motos',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A falta de visibilidade impede saber se há veículo vindo em sentido contrário, tornando a ultrapassagem extremamente arriscada.',
        whyOthersAreWrong:
          'Não são seguros nem irrelevantes para essa decisão, e não existe exceção específica para motos nesse contexto.',
        hack: 'Não vê o que vem depois da curva? Não ultrapassa.',
      },
    ],
  },

  {
    id: 208,
    title: 'Comportamento Seguro em Rodovias',
    duration: '5 min',
    content: {
      summary: [
        'O acostamento deve ser usado apenas em emergências reais — parar ali sem necessidade é perigoso e, em regra, proibido.',
        'Em rodovias com múltiplas faixas, a faixa da direita é destinada ao fluxo normal; a(s) faixa(s) da esquerda são para ultrapassagem, não para permanência constante.',
        'Em pista dupla, a distância de segurança em relação ao veículo à frente deve ser mantida mesmo em velocidades mais altas — quanto maior a velocidade, maior o espaço necessário.',
        'Antes de qualquer entrada ou saída de rodovia, a sinalização deve ser feita com bastante antecedência, dado o fluxo mais rápido dos demais veículos.',
        'Trafegar devagar demais na faixa da esquerda, atrapalhando quem quer ultrapassar, também é uma conduta de risco.',
      ],
      hack: "Direita é para andar, esquerda é para ultrapassar e voltar — não para 'morar' nela.",
      realLife:
        'Numa rodovia de pista dupla, você está numa velocidade tranquila na faixa da direita. Ao perceber um carro mais lento à frente, você sinaliza com antecedência, ultrapassa pela esquerda e retorna à direita — sem permanecer na faixa de ultrapassagem além do necessário.',
      curiosity:
        'Em muitos países, permanecer na faixa da esquerda sem estar ultrapassando é, por si só, motivo de multa — no Brasil, essa conduta também é desencorajada por gerar lentidão e risco de manobras arriscadas de quem tenta contornar.',
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'O acostamento de uma rodovia deve ser usado:',
        options: [
          'Apenas em emergências reais',
          'Como faixa extra em horário de pico',
          'Livremente, a qualquer momento',
          'Apenas por motociclistas',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O acostamento existe para situações de emergência — pane, mal súbito, necessidade real de parada.',
        whyOthersAreWrong:
          'Usá-lo como faixa extra ou livremente aumenta o risco tanto para quem para ali quanto para quem trafega normalmente.',
        hack: "Acostamento é para emergência, não para 'ganhar tempo'.",
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Em rodovias com múltiplas faixas, a faixa da esquerda é destinada, principalmente, a:',
        options: [
          'Ultrapassagem, não permanência constante',
          'Uso exclusivo de caminhões',
          'Estacionamento em emergências',
          'Tráfego lento contínuo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A faixa da esquerda é pensada para manobras de ultrapassagem — o fluxo normal deve ocorrer pela direita.',
        whyOthersAreWrong:
          'Não é de uso exclusivo de caminhões, e nem é destinada a estacionamento ou tráfego lento contínuo.',
        hack: 'Esquerda é passagem, não moradia.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Em pista dupla, a distância de segurança em relação ao veículo à frente:',
        options: [
          'Deve aumentar conforme a velocidade aumenta',
          'Pode ser reduzida em velocidades mais altas',
          'É irrelevante em rodovias',
          'Só importa em vias urbanas',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Quanto maior a velocidade, maior a distância de frenagem necessária — por isso o espaço de segurança deve acompanhar esse aumento.',
        whyOthersAreWrong:
          'Reduzir a distância em alta velocidade vai contra a lógica de segurança; rodovias são justamente onde esse cuidado mais importa.',
        hack: 'Mais rápido = mais distância, sempre na mesma direção.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Antes de entrar ou sair de uma rodovia, a sinalização deve ser feita:',
        options: [
          'Com bastante antecedência, dado o fluxo mais rápido dos demais veículos',
          'No último segundo, para surpreender menos os outros motoristas',
          'Apenas se houver outro veículo visível por perto',
          'De forma opcional, dependendo do humor do condutor',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A velocidade elevada da rodovia exige mais tempo de reação dos demais condutores — por isso a antecedência é essencial.',
        whyOthersAreWrong:
          'Sinalizar no último segundo ou de forma opcional vai contra a lógica de segurança em vias rápidas.',
        hack: 'Rodovia é rápida — a sinalização precisa ser ainda mais antecipada que na cidade.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Trafegar devagar demais na faixa da esquerda, atrapalhando quem quer ultrapassar, é considerado:',
        options: [
          "Uma conduta de risco, apesar de o motorista estar 'dentro do limite' de velocidade",
          'Sempre seguro, desde que dentro do limite de velocidade',
          'Recomendado para quem prefere dirigir com calma',
          'Irrelevante para a segurança dos demais',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mesmo dentro do limite, ocupar a faixa de ultrapassagem sem necessidade gera risco, ao forçar manobras arriscadas de quem está atrás.',
        whyOthersAreWrong:
          'Estar dentro do limite de velocidade não torna a conduta segura nesse contexto específico — o problema é o uso incorreto da faixa.',
        hack: 'Ir devagar na faixa errada também é risco, não só ir rápido demais.',
      },
    ],
  },

  {
    id: 209,
    title: 'Convívio Seguro com Motociclistas',
    duration: '5 min',
    content: {
      summary: [
        'Motociclistas são considerados usuários vulneráveis do trânsito — em uma colisão, eles têm muito menos proteção física que os ocupantes de um carro.',
        'Ao converter ou cruzar uma via, é fundamental checar duas vezes a presença de motos, que costumam ser mais difíceis de notar pelo tamanho reduzido.',
        'Ao ultrapassar uma moto, o condutor deve manter distância lateral maior do que a usada para outros carros, dada a maior instabilidade do veículo de duas rodas.',
        'Abrir a porta do veículo sem checar antes se há uma moto se aproximando é uma causa comum de acidentes em vias urbanas.',
        "Motos têm o mesmo direito de uso da via que qualquer outro veículo — não são 'obstáculos' a serem ultrapassados a qualquer custo.",
      ],
      hack: 'Moto é pequena pro olho, mas grande em risco se ignorada — sempre olhe duas vezes.',
      realLife:
        'Antes de abrir a porta do carro estacionado na rua, você olha pelo retrovisor e percebe uma moto se aproximando — esperar alguns segundos evita um acidente sério.',
      curiosity:
        "Boa parte dos acidentes entre carros e motos em cruzamentos acontece porque o motorista do carro 'olhou, mas não viu' a moto — o cérebro tende a procurar por objetos do tamanho de um carro, e a moto, sendo menor, passa despercebida mesmo estando no campo de visão.",
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Motociclistas são considerados, no trânsito, usuários:',
        options: [
          'Vulneráveis, com muito menos proteção física em uma colisão',
          'Tão protegidos quanto os ocupantes de um carro',
          'Sem qualquer direito especial de atenção',
          'Obrigados a andar apenas no acostamento',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A ausência de estrutura de proteção ao redor do corpo torna o motociclista muito mais vulnerável em qualquer colisão.',
        whyOthersAreWrong:
          'Não têm a mesma proteção de um carro, e não são restritos ao acostamento — têm direito às vias normalmente.',
        hack: "Moto não tem 'carroceria' — o corpo do motociclista é a primeira linha de exposição.",
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Ao converter ou cruzar uma via, é recomendado, em relação a motos:',
        options: [
          'Checar duas vezes a presença de motos, mais difíceis de notar pelo tamanho reduzido',
          'Confiar que uma checagem rápida já é suficiente',
          'Ignorá-las, já que têm menos prioridade',
          'Presumir que elas sempre param antes do cruzamento',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O tamanho reduzido da moto a torna mais fácil de passar despercebida numa checagem rápida — daí a recomendação de checar duas vezes.',
        whyOthersAreWrong:
          'Motos não têm menos prioridade legal, e presumir que sempre vão parar é uma suposição arriscada.',
        hack: 'Uma olhada rápida pode não captar uma moto — vale a segunda olhada.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Ao ultrapassar uma moto, a distância lateral recomendada é:',
        options: [
          'Maior do que a usada para ultrapassar outro carro',
          'A mesma usada para qualquer outro veículo',
          'Menor, já que a moto ocupa menos espaço',
          'Irrelevante, desde que não haja contato físico',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A maior instabilidade da moto (sensível a ventos, buracos e vibração) exige mais espaço lateral de segurança.',
        whyOthersAreWrong:
          'Usar a mesma distância de um carro, ou uma distância menor, ignora essa maior instabilidade do veículo de duas rodas.',
        hack: 'Moto balança mais fácil — dá mais espaço na ultrapassagem.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Abrir a porta do veículo estacionado sem checar antes se há moto se aproximando é:',
        options: [
          'Uma causa comum de acidentes em vias urbanas',
          'Uma prática sem qualquer risco relevante',
          'Permitida sempre que o carro estiver totalmente parado',
          'Um problema exclusivo de motoristas de aplicativo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'É um tipo de acidente frequente, conhecido justamente por atingir motociclistas que passam próximos a carros estacionados.',
        whyOthersAreWrong:
          'O carro estar parado não elimina o risco para quem se aproxima em movimento; não é um problema restrito a nenhuma categoria específica de motorista.',
        hack: 'Antes de abrir a porta: olha pelo retrovisor, sempre.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Em relação ao uso da via, as motocicletas:',
        options: [
          'Têm o mesmo direito de uso da via que qualquer outro veículo',
          "São consideradas 'obstáculos' que os carros devem ultrapassar a qualquer custo",
          'Só podem circular em vias exclusivas para motos',
          'Têm prioridade automática sobre todos os outros veículos',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Motos compartilham a via nas mesmas condições legais dos demais veículos, sem restrição especial nem prioridade automática.',
        whyOthersAreWrong:
          'Não existem vias exclusivas obrigatórias para motos no uso comum, nem prioridade automática sobre os demais veículos.',
        hack: 'Moto é veículo como qualquer outro — com os mesmos direitos de via.',
      },
    ],
  },

  {
    id: 210,
    title: 'Convívio Defensivo com Pedestres e Ciclistas',
    duration: '5 min',
    content: {
      summary: [
        'Pedestres e ciclistas costumam atravessar ou se movimentar fora dos pontos esperados — a direção defensiva pressupõe antecipar isso, mesmo sem placa ou faixa indicando.',
        'Perto de escolas, pontos de ônibus e áreas comerciais, a atenção a pedestres deve ser redobrada, mesmo em vias sem faixa de pedestres marcada.',
        'Ao ultrapassar um ciclista, o condutor deve manter distância lateral segura, considerando que uma pequena oscilação da bicicleta pode gerar risco de colisão.',
        'Crianças, em especial, têm comportamento mais imprevisível perto de vias — podem correr atrás de uma bola ou atravessar sem aviso.',
        'Reduzir a velocidade em áreas de grande circulação de pedestres é uma medida preventiva, não uma reação a um perigo já visível.',
      ],
      hack: "Pedestre nem sempre atravessa 'no lugar certo' — a direção defensiva já espera por isso.",
      realLife:
        'Você passa perto de uma escola no horário de saída dos alunos. Mesmo sem ver nenhuma criança na pista naquele instante, você já reduz a velocidade, prevendo que alguma pode aparecer de repente.',
      curiosity:
        'A maior parte dos atropelamentos em áreas urbanas acontece fora da faixa de pedestres — reforçando que a atenção do motorista não pode se limitar apenas aos pontos sinalizados.',
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Sobre o comportamento de pedestres e ciclistas no trânsito, a direção defensiva pressupõe:',
        options: [
          'Antecipar que eles podem se movimentar fora dos pontos esperados',
          'Presumir que sempre seguirão exatamente a faixa de pedestres',
          'Ignorar movimentos fora da faixa, já que são proibidos',
          'Considerar que só crianças agem de forma imprevisível',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A direção defensiva parte do princípio de que erros e imprevistos de terceiros podem acontecer, inclusive de pedestres e ciclistas.',
        whyOthersAreWrong:
          "Presumir comportamento sempre 'correto' vai contra o princípio de antecipação; adultos também têm comportamento imprevisível às vezes.",
        hack: 'Prever o inesperado é justamente o núcleo da direção defensiva.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Perto de escolas e pontos de ônibus, mesmo sem faixa de pedestres marcada, a atenção deve ser:',
        options: [
          'Redobrada',
          'Reduzida, já que não há sinalização formal',
          'Igual à de qualquer outro trecho da via',
          'Desnecessária fora do horário de aula',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Esses locais concentram maior movimento de pedestres, especialmente crianças, independentemente de haver faixa marcada.',
        whyOthersAreWrong:
          'A ausência de faixa formal não reduz o risco real; o movimento pode ocorrer também fora do horário estritamente escolar.',
        hack: 'Escola e ponto de ônibus pedem atenção redobrada, com ou sem faixa marcada.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Ao ultrapassar um ciclista, a distância lateral recomendada deve considerar que:',
        options: [
          'Uma pequena oscilação da bicicleta pode gerar risco de colisão',
          'Bicicletas são sempre perfeitamente estáveis, sem risco de oscilação',
          'Não há necessidade de distância extra em relação a um carro',
          'Ciclistas devem sempre andar na contramão para maior visibilidade',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Bicicletas estão sujeitas a oscilações por buracos, ventos ou desequilíbrio momentâneo — a distância extra compensa esse risco.',
        whyOthersAreWrong:
          'Bicicletas não são perfeitamente estáveis, e andar na contramão não é uma prática seguraou recomendada.',
        hack: 'Bike balança fácil — dá mais espaço na ultrapassagem, igual à moto.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Sobre o comportamento de crianças perto de vias, a direção defensiva considera que:',
        options: [
          'Têm comportamento mais imprevisível, podendo atravessar sem aviso',
          'São sempre supervisionadas e nunca representam risco extra',
          'Só oferecem risco em vias sem calçada',
          'Agem de forma idêntica a um adulto no trânsito',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Crianças podem correr atrás de bolas ou atravessar de repente, sem o mesmo julgamento de risco de um adulto.',
        whyOthersAreWrong:
          'Nem sempre há supervisão constante, e o risco existe mesmo em vias com calçada.',
        hack: 'Criança perto da rua é sinal de reduzir e prestar atenção redobrada.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Reduzir a velocidade em áreas de grande circulação de pedestres deve ser:',
        options: [
          'Uma medida preventiva, tomada antes de qualquer perigo visível',
          'Uma reação, tomada apenas quando um pedestre já está na pista',
          'Desnecessária se o motorista tiver boa visão',
          'Aplicável apenas durante o dia',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A direção defensiva funciona melhor como prevenção — agir antes do risco aparecer, não depois.',
        whyOthersAreWrong:
          'Esperar o perigo aparecer reduz o tempo de reação disponível; a necessidade não depende só da qualidade da visão do motorista nem do período do dia.',
        hack: 'Prevenir é agir antes de ver o perigo, não depois.',
      },
    ],
  },

  {
    id: 211,
    title: 'Celular e Distrações ao Volante',
    duration: '5 min',
    content: {
      summary: [
        'Usar o celular ao dirigir divide a atenção do condutor entre a tela e a via, aumentando drasticamente o tempo de reação a um imprevisto.',
        "Mesmo poucos segundos de distração, em velocidade, correspondem a uma distância considerável percorrida 'às cegas'.",
        'Outras distrações comuns incluem comer, ajustar o rádio, conversar de forma intensa com passageiros ou cuidar de crianças no banco de trás.',
        'O uso de fones de ouvido em ambos os ouvidos, durante a condução, também reduz a percepção de sons importantes do trânsito (buzinas, sirenes).',
        'A recomendação de direção defensiva é sempre a mesma: se precisar mexer no celular, pare o veículo em local seguro antes.',
      ],
      hack: '2 segundos de distração a 60 km/h já são quase 35 metros dirigidos sem realmente olhar pra frente.',
      realLife:
        'Uma notificação chega no celular durante a condução. Em vez de olhar na hora, o condutor espera chegar a um local seguro para parar e só então checar a mensagem.',
      curiosity:
        "Pesquisas de segurança viária mostram que o tempo médio gasto olhando para o celular ao volante costuma ser maior do que o motorista imagina — o cérebro subestima o quanto ficou 'de olhos fora da pista'.",
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Usar o celular ao dirigir tem como principal risco:',
        options: [
          'Dividir a atenção do condutor, aumentando o tempo de reação a imprevistos',
          'Nenhum risco relevante, se o motorista for experiente',
          'Apenas o risco de multa, sem impacto na segurança real',
          'Ser perigoso somente em rodovias',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A distração reduz a capacidade de reagir a tempo a qualquer situação inesperada na via.',
        whyOthersAreWrong:
          'Experiência não elimina o risco da distração; o perigo existe em qualquer tipo de via, não só rodovias.',
        hack: 'Atenção dividida = reação atrasada, ponto final.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Poucos segundos de distração, em velocidade, correspondem a:',
        options: [
          'Uma distância considerável percorrida sem o motorista realmente olhar para a via',
          'Um risco insignificante, já que o tempo é muito curto',
          'Um problema apenas em velocidades muito altas',
          'Algo relevante apenas à noite',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Mesmo poucos segundos, multiplicados pela velocidade do veículo, resultam em vários metros percorridos sem atenção real à via.',
        whyOthersAreWrong:
          'Não é insignificante mesmo em velocidades moderadas, e o risco não se limita ao período noturno.',
        hack: 'Poucos segundos parecem pouco, mas em metros percorridos é bastante.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Além do celular, são consideradas distrações comuns ao volante:',
        options: [
          'Comer, ajustar o rádio ou cuidar de crianças no banco de trás',
          'Apenas olhar para os retrovisores',
          'Verificar o velocímetro rapidamente',
          'Sinalizar uma conversão com a seta',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Qualquer atividade que tire o foco da via por tempo prolongado é considerada uma distração de risco.',
        whyOthersAreWrong:
          'Olhar retrovisores, checar o velocímetro rapidamente e sinalizar são partes normais e necessárias da condução, não distrações de risco.',
        hack: 'Se tira o olho da pista por tempo considerável, é distração.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'O uso de fones de ouvido em ambos os ouvidos, durante a condução:',
        options: [
          'Reduz a percepção de sons importantes do trânsito, como buzinas e sirenes',
          'Não interfere em nada na condução',
          'Melhora a atenção do motorista',
          'É recomendado para reduzir o estresse ao volante',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Bloquear a audição de ambos os ouvidos reduz a capacidade de perceber alertas sonoros importantes do ambiente.',
        whyOthersAreWrong:
          'Não melhora a atenção — pelo contrário, reduz um canal sensorial relevante para a segurança.',
        hack: 'Ouvido tampado = um sentido a menos disponível para reagir a risco.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'A recomendação de direção defensiva para quem precisa mexer no celular durante um trajeto é:',
        options: [
          'Parar o veículo em local seguro antes de usar o aparelho',
          'Usar rapidamente, aproveitando um sinal vermelho',
          'Segurar o celular com uma mão e dirigir com a outra',
          'Pedir para o passageiro segurar o celular na frente do motorista',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A única forma realmente segura de usar o celular durante um trajeto é parando o veículo antes.',
        whyOthersAreWrong:
          'Usar no sinal vermelho ou com uma mão ainda mantém o motorista distraído em movimento ou prestes a se mover; ter o celular exibido pelo passageiro também desvia a atenção do motorista.',
        hack: 'Precisa mexer no celular? Primeiro para o carro, depois mexe.',
      },
    ],
  },

  {
    id: 212,
    title: 'Manobras de Emergência: Frear e Desviar',
    duration: '5 min',
    content: {
      summary: [
        "Em veículos com freio ABS, a orientação é manter o pedal pressionado firmemente durante uma frenagem de emergência, sem 'bombear' o freio — o sistema já controla isso automaticamente.",
        'Em veículos sem ABS, bombear o freio (pressionar e soltar rapidamente) pode ajudar a evitar o travamento das rodas.',
        'Desviar pode ser uma alternativa à frenagem quando não há espaço suficiente para parar a tempo — mas exige controle e avaliação rápida do espaço ao redor.',
        'Uma frenagem de emergência mal executada pode travar as rodas e fazer o veículo perder a capacidade de ser guiado (perda de direção).',
        'Manter as mãos firmes no volante, em posição adequada, ajuda o condutor a reagir com mais controle em qualquer manobra de emergência.',
      ],
      hack: 'Tem ABS? Pisa firme e segura. Não tem ABS? Bombeia o freio.',
      realLife:
        'Um objeto cai de outro veículo à frente, de repente. Se não há espaço para frear a tempo, desviar com controle — verificando rapidamente se há espaço seguro ao lado — pode ser mais eficaz do que uma frenagem tardia.',
      curiosity:
        "O sistema ABS existe justamente para simular, de forma automática e muito mais rápida, o efeito de 'bombear o freio' manualmente — por isso, em carros com ABS, o motorista não precisa (e não deve) fazer esse movimento com o pé.",
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Em um veículo com freio ABS, durante uma frenagem de emergência, o correto é:',
        options: [
          'Manter o pedal pressionado firmemente, sem bombear',
          'Bombear o pedal repetidamente, como em carros antigos',
          'Soltar o freio periodicamente por conta própria',
          'Usar apenas o freio de mão',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O sistema ABS já controla o travamento das rodas automaticamente — bombear manualmente atrapalha esse controle.',
        whyOthersAreWrong:
          'Bombear manualmente é a técnica para carros SEM ABS; o freio de mão sozinho não é indicado para frenagem de emergência em movimento.',
        hack: "ABS: pé firme e constante, sem 'ajudar' bombeando.",
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Em um veículo sem ABS, durante uma frenagem de emergência, a técnica recomendada é:',
        options: [
          'Bombear o freio (pressionar e soltar rapidamente) para evitar o travamento das rodas',
          'Pressionar o pedal com toda a força de uma vez, sem soltar',
          'Usar apenas a embreagem',
          'Desligar o motor antes de frear',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Sem ABS, bombear o freio ajuda a evitar que as rodas travem completamente, mantendo alguma capacidade de direção.',
        whyOthersAreWrong:
          'Pressionar sem soltar tende a travar as rodas; embreagem e desligar o motor não substituem a ação correta do freio.',
        hack: 'Sem ABS, o motorista faz manualmente o que o ABS faria sozinho.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Desviar, como alternativa à frenagem em uma emergência, é indicado quando:',
        options: [
          'Não há espaço suficiente para parar a tempo com segurança',
          'É sempre a primeira opção, antes de considerar frear',
          'O motorista prefere evitar o desgaste dos freios',
          'Há qualquer obstáculo à frente, mesmo com espaço de frenagem suficiente',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O desvio é uma alternativa quando a frenagem sozinha não seria suficiente para evitar a colisão a tempo.',
        whyOthersAreWrong:
          'Não é a primeira opção padrão, nem uma questão de economia de freio, e não é indicado quando frear já resolveria o problema.',
        hack: 'Desvio é plano B, quando frear não seria suficiente.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Uma frenagem de emergência mal executada, com travamento das rodas, pode causar:',
        options: [
          'Perda da capacidade de guiar o veículo (perda de direção)',
          'Aumento da capacidade de curva do veículo',
          'Melhora no desempenho dos freios',
          'Nenhum efeito relevante, além de parar mais rápido',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Rodas travadas perdem aderência lateral, dificultando qualquer tentativa de manobra ou desvio durante a frenagem.',
        whyOthersAreWrong:
          'O travamento não melhora curva nem desempenho — pelo contrário, compromete o controle do veículo.',
        hack: 'Roda travada não vira — só desliza reto (ou pior, de lado).',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Manter as mãos firmes no volante, em posição adequada, contribui para:',
        options: [
          'Reagir com mais controle em qualquer manobra de emergência',
          'Nenhuma diferença real na condução',
          'Aumentar o cansaço do motorista sem benefício',
          'Apenas o conforto visual do painel',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A posição correta das mãos permite reações mais rápidas e controladas em situações inesperadas.',
        whyOthersAreWrong:
          'Não é uma questão estética, e a posição correta na verdade reduz o esforço desnecessário, não aumenta o cansaço.',
        hack: 'Mão bem posicionada = resposta mais rápida quando o imprevisto acontece.',
      },
    ],
  },

  {
    id: 213,
    title: 'Direção Defensiva em Áreas de Risco',
    duration: '5 min',
    content: {
      summary: [
        'Áreas como proximidades de escolas, hospitais, feiras livres e terminais de ônibus concentram maior movimento de pedestres e exigem redução de velocidade e atenção redobrada.',
        'Mesmo sem sinalização específica de redução, o bom senso de direção defensiva orienta reduzir a velocidade nessas áreas.',
        'Perto de hospitais, o uso da buzina deve ser evitado ao máximo, já que muitos locais restringem esse tipo de ruído por lei municipal.',
        'Em feiras livres e comércios de rua, a presença de vendedores, carrinhos e movimentação inesperada de pedestres exige atenção redobrada, mesmo em vias normalmente calmas.',
        'Zonas escolares costumam ter horários de pico de movimento (entrada e saída de aula) em que o risco é significativamente maior.',
      ],
      hack: 'Escola, hospital, feira: são as três áreas clássicas que pedem redução de velocidade, mesmo sem placa avisando.',
      realLife:
        'Você passa por uma rua com uma feira livre montada na calçada. Mesmo sem placa de redução de velocidade, a movimentação de pessoas e carrinhos exige que você reduza e fique mais atento do que em uma rua vazia.',
      curiosity:
        'Muitas cidades restringem o uso de buzina próximo a hospitais por lei municipal, complementando a orientação geral do CTB sobre uso comedido do som do veículo.',
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Próximo a escolas, hospitais e feiras livres, a conduta recomendada é:',
        options: [
          'Redução de velocidade e atenção redobrada',
          'Manter a velocidade normal, já que são áreas como qualquer outra',
          'Aumentar a velocidade para atravessar rápido a área de risco',
          'Usar a buzina continuamente para alertar pedestres',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Essas áreas concentram maior movimento de pedestres, exigindo cautela extra do condutor.',
        whyOthersAreWrong:
          'Aumentar a velocidade ou tratá-las como qualquer via comum ignora o risco elevado; buzina contínua não é a resposta adequada.',
        hack: 'Escola, hospital, feira: sempre reduz, mesmo sem placa.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Sobre a necessidade de reduzir a velocidade nessas áreas de risco:',
        options: [
          'Aplica-se mesmo sem sinalização específica de redução, por bom senso de direção defensiva',
          'Só se aplica se houver placa expressa determinando isso',
          'Aplica-se apenas durante a noite',
          'Não é uma prática recomendada, apenas uma escolha pessoal do motorista',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A direção defensiva vai além da sinalização obrigatória — envolve antecipar riscos mesmo sem uma placa expressa.',
        whyOthersAreWrong:
          'O risco não se limita ao período noturno, e não se trata de uma escolha arbitrária, mas de uma prática recomendada de segurança.',
        hack: 'Nem toda área de risco tem placa — o bom senso preenche essa lacuna.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Próximo a hospitais, o uso da buzina deve ser:',
        options: [
          'Evitado ao máximo, já que muitos locais restringem esse ruído por lei municipal',
          'Usado com frequência, para alertar sobre a presença do veículo',
          'Obrigatório em todo cruzamento próximo',
          'Irrelevante, já que hospitais não têm restrição sonora',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A restrição de ruído em áreas hospitalares é comum em legislações municipais, complementando a orientação geral do CTB sobre uso comedido da buzina.',
        whyOthersAreWrong:
          'Buzinar com frequência ali é contraproducente e vai contra a orientação de reduzir ruído em áreas sensíveis.',
        hack: 'Hospital pede silêncio, não buzina.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Em feiras livres e comércios de rua, o risco aumentado se deve principalmente a:',
        options: [
          'Presença de vendedores, carrinhos e movimentação inesperada de pedestres',
          'Maior velocidade permitida nesses trechos',
          'Ausência total de veículos na via',
          'Sinalização mais rigorosa do que em outras áreas',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A movimentação intensa e imprevisível de pessoas e objetos nesses locais exige atenção redobrada do condutor.',
        whyOthersAreWrong:
          'Não há maior velocidade permitida nesses trechos, nem ausência de veículos, e a sinalização não é necessariamente mais rigorosa.',
        hack: 'Feira tem gente e carrinho pra todo lado — atenção total.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'Zonas escolares costumam ter maior risco especialmente:',
        options: [
          'Nos horários de entrada e saída de aula',
          'Durante toda a madrugada',
          'Apenas aos finais de semana',
          'Somente em dias chuvosos',
        ],
        correctAnswerIndex: 0,
        explanation:
          'É quando há maior concentração de crianças, pais e responsáveis se movimentando perto da via.',
        whyOthersAreWrong:
          'Madrugada, finais de semana e dias chuvosos não correspondem aos horários de maior movimento escolar.',
        hack: 'Entrada e saída de aula são os picos de risco perto de escola.',
      },
    ],
  },

  {
    id: 214,
    title: 'Ultrapassagem: A Técnica Defensiva',
    duration: '6 min',
    content: {
      summary: [
        'Antes de ultrapassar, é preciso avaliar o espaço total necessário: distância até o veículo à frente, velocidade do veículo em sentido contrário (se houver) e espaço para retornar à faixa com segurança.',
        "Nunca ultrapassar 'em bloco', tentando passar vários veículos de uma vez sem ter certeza total do espaço disponível.",
        'Após concluir a ultrapassagem, o retorno à faixa original só deve ocorrer quando o veículo ultrapassado for visível inteiro pelo retrovisor.',
        'Ultrapassar em subidas ou trechos com pouca visibilidade aumenta o risco, mesmo quando tecnicamente permitido pela sinalização.',
        'A pressa é apontada como um dos fatores emocionais que mais levam a ultrapassagens malfeitas — a direção defensiva prioriza segurança sobre ganho de poucos segundos.',
      ],
      hack: 'Só ultrapassa se vir o carro inteiro de volta no retrovisor — essa é a régua de quando pode voltar pra faixa.',
      realLife:
        'Você está atrás de um caminhão lento numa estrada. Antes de ultrapassar, você calcula: tem visibilidade suficiente à frente? Não há veículo vindo em sentido contrário perto demais? Há espaço pra voltar com folga? Só então você faz a manobra.',
      curiosity:
        'Muitos acidentes graves em rodovias de pista simples acontecem em ultrapassagens onde o motorista superestimou o próprio tempo de reação e subestimou a velocidade do veículo que vinha no sentido contrário.',
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Antes de ultrapassar, o condutor deve avaliar, principalmente:',
        options: [
          'O espaço total necessário, incluindo velocidade de veículos em sentido contrário e espaço para retornar à faixa',
          'Apenas se o veículo à frente está muito lento',
          'Apenas a própria pressa em chegar ao destino',
          'Se há outros motoristas tentando fazer a mesma manobra ao mesmo tempo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A ultrapassagem segura depende de uma avaliação completa do espaço e do tempo disponíveis, não apenas da lentidão do veículo à frente.',
        whyOthersAreWrong:
          'A pressa não deve ser o critério de decisão, e a intenção de outros motoristas não substitui a própria avaliação de segurança.',
        hack: 'Ultrapassar é matemática de espaço e tempo, não impulso.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          "Ultrapassar 'em bloco', tentando passar vários veículos de uma vez sem certeza total do espaço, é:",
        options: [
          'Uma conduta de alto risco, a ser evitada',
          'Uma técnica recomendada para economizar tempo',
          'Segura, desde que o motorista tenha reflexos rápidos',
          'Permitida apenas em rodovias de pista dupla',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ultrapassar vários veículos de uma vez aumenta muito o tempo de exposição ao risco e a chance de erro de cálculo do espaço.',
        whyOthersAreWrong:
          'Reflexos rápidos não compensam um erro de cálculo de espaço; e mesmo em pista dupla, o cuidado com o espaço continua necessário.',
        hack: 'Quanto mais carros de uma vez, maior o risco acumulado da manobra.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'O retorno seguro à faixa original, após uma ultrapassagem, deve ocorrer quando:',
        options: [
          'O veículo ultrapassado for visível inteiro pelo retrovisor',
          'Assim que a frente do veículo ultrapassado desaparecer da visão lateral',
          'Depois de contar até três',
          "Sempre que o motorista sentir que 'já deu tempo'",
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ver o veículo ultrapassado inteiro no retrovisor é o sinal mais confiável de que há espaço seguro para retornar.',
        whyOthersAreWrong:
          'Contar até três ou confiar apenas na sensação são critérios pouco confiáveis, sem base objetiva.',
        hack: 'Carro inteiro no retrovisor = sinal verde pra voltar de faixa.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Ultrapassar em trechos de subida ou pouca visibilidade, mesmo quando tecnicamente permitido pela sinalização:',
        options: [
          'Aumenta o risco da manobra e exige cautela extra',
          'É sempre completamente seguro, já que a sinalização permite',
          'Elimina qualquer necessidade de avaliação adicional',
          'É recomendado justamente por esses trechos serem mais rápidos',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A sinalização informa o que é permitido, mas não elimina o risco real de visibilidade reduzida em subidas — a avaliação do condutor continua sendo essencial.',
        whyOthersAreWrong:
          'Permissão pela sinalização não é sinônimo de segurança garantida, e subidas não são recomendadas para ultrapassagem justamente pela visibilidade reduzida.',
        hack: 'Placa permite, mas o bom senso também precisa concordar.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'A pressa é apontada como:',
        options: [
          'Um dos fatores emocionais que mais levam a ultrapassagens malfeitas',
          'Um fator irrelevante para a segurança da ultrapassagem',
          'Algo que só afeta motoristas iniciantes',
          'Um problema exclusivo de vias urbanas',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A pressa tende a fazer o condutor subestimar riscos e superestimar sua própria capacidade de reação.',
        whyOthersAreWrong:
          'Afeta motoristas de qualquer nível de experiência, e o risco existe tanto em vias urbanas quanto em rodovias.',
        hack: 'Poucos segundos ganhos não valem o risco de uma ultrapassagem apressada.',
      },
    ],
  },

  {
    id: 215,
    title: 'Direção Emocional: Controlando a Agressividade',
    duration: '5 min',
    content: {
      summary: [
        'Direção agressiva inclui condutas como buzinar excessivamente, perseguir outro veículo após uma discordância, ou acelerar bruscamente por raiva.',
        'Reagir a provocações de outros motoristas tende a aumentar o risco para todos os envolvidos, não apenas para quem provocou.',
        'O estado emocional do condutor (raiva, pressa, estresse) influencia diretamente a qualidade das decisões tomadas ao volante.',
        'A direção defensiva pressupõe manter o foco na segurança, mesmo diante de condutas incorretas de terceiros.',
        "Respirar fundo, reduzir a velocidade e manter distância de um motorista agressivo são atitudes mais seguras do que tentar 'revidar' no trânsito.",
      ],
      hack: "Ninguém nunca 'venceu' uma discussão de trânsito com mais risco de acidente — só perdeu segurança.",
      realLife:
        "Outro motorista fecha seu carro de forma perigosa. Em vez de acelerar para 'dar o troco', você reduz a velocidade, aumenta a distância e segue seu trajeto com segurança.",
      curiosity:
        'Estudos de comportamento no trânsito mostram que decisões tomadas sob forte emoção (raiva, especialmente) tendem a ser mais impulsivas e menos calculadas — exatamente o oposto do que a direção defensiva exige.',
    },
    questions: [
      {
        id: 1,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question: 'São exemplos de direção agressiva:',
        options: [
          'Buzinar excessivamente, perseguir outro veículo ou acelerar bruscamente por raiva',
          'Manter distância de segurança do veículo à frente',
          'Sinalizar manobras com antecedência',
          'Reduzir a velocidade em áreas de risco',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Essas condutas são movidas por reação emocional, não por avaliação técnica de segurança.',
        whyOthersAreWrong:
          'As demais opções descrevem, na verdade, boas práticas de direção defensiva, não condutas agressivas.',
        hack: 'Se a ação vem da raiva, não da segurança, é direção agressiva.',
      },
      {
        id: 2,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question:
          'Reagir a provocações de outros motoristas no trânsito tende a:',
        options: [
          'Aumentar o risco para todos os envolvidos',
          "Reduzir o risco, ao 'ensinar uma lição' ao outro motorista",
          'Não ter qualquer efeito sobre a segurança da via',
          'Ser recomendado como forma de autodefesa no trânsito',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A reação emocional tende a piorar a situação, aumentando o risco de acidente para ambos os motoristas e para terceiros.',
        whyOthersAreWrong:
          "'Ensinar uma lição' não reduz risco — pelo contrário, o eleva; não é uma forma reconhecida ou segura de autodefesa no trânsito.",
        hack: 'Reagir no trânsito raramente resolve — só aumenta o risco pra todo mundo ali.',
      },
      {
        id: 3,
        category: 'Direção Defensiva',
        difficulty: 'Média',
        question: 'O estado emocional do condutor (raiva, pressa, estresse):',
        options: [
          'Influencia diretamente a qualidade das decisões tomadas ao volante',
          'Não tem qualquer relação com a segurança da condução',
          'Só é relevante para motoristas profissionais',
          'Afeta apenas a velocidade, não outras decisões',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Emoções intensas tendem a reduzir a qualidade do julgamento e aumentar a impulsividade nas decisões de trânsito.',
        whyOthersAreWrong:
          'Afeta qualquer condutor, não só profissionais, e influencia diversas decisões, não apenas a velocidade.',
        hack: 'Motorista estressado toma decisão pior — vale parar e respirar antes de seguir.',
      },
      {
        id: 4,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Diante de uma conduta incorreta de outro motorista, a direção defensiva recomenda:',
        options: [
          'Manter o foco na própria segurança, mesmo diante do erro alheio',
          'Corrigir o outro motorista com uma manobra de resposta',
          'Buzinar até ele perceber o erro',
          'Seguir o outro veículo até um local seguro para discutir',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O foco da direção defensiva é sempre a própria segurança e a dos demais, independentemente do comportamento de terceiros.',
        whyOthersAreWrong:
          'Manobras de resposta, buzinar insistentemente ou perseguir o outro veículo são condutas de risco, não de segurança.',
        hack: 'O erro é do outro, mas a responsabilidade pela sua reação continua sendo sua.',
      },
      {
        id: 5,
        category: 'Direção Defensiva',
        difficulty: 'Fácil',
        question:
          'Diante de um motorista agressivo por perto, a atitude mais segura é:',
        options: [
          'Reduzir a velocidade e aumentar a distância dele',
          'Acelerar para se afastar rapidamente, ultrapassando em qualquer condição',
          'Buzinar continuamente até ele se afastar',
          'Fechá-lo de volta, como forma de resposta',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Reduzir e aumentar distância tira o condutor da zona de risco imediato, sem entrar em uma disputa perigosa.',
        whyOthersAreWrong:
          'Acelerar em qualquer condição, buzinar continuamente ou revidar aumentam o risco em vez de reduzi-lo.',
        hack: 'Distância resolve mais do que confronto, sempre.',
      },
    ],
  },
]
