// src/data/mecanica.js
// Missões NOVAS para o módulo "Mecânica Básica" (id: 5).
// Import no App.jsx: modules[4].missions.push(...missoesMecanicaExtra)

export const missoesMecanicaExtra = [
  {
    id: 502,
    title: 'Checagem Antes de Viagens Longas',
    duration: '5 min',
    content: {
      summary: [
        'Antes de uma viagem longa, é recomendável verificar: nível de óleo, água do radiador, calibragem dos pneus e freios.',
        'Pneus calibrados incorretamente (muito cheios ou muito vazios) causam maior desgaste, pior frenagem e maior consumo de combustível.',
        'O freio de mão (freio de estacionamento) serve para manter o veículo parado quando estacionado, especialmente em rampas — não substitui o freio principal durante a condução.',
        'Ao perceber que o motor está superaquecendo (luz de temperatura acesa), a conduta correta é parar em local seguro e desligar o motor, SEM abrir o radiador ainda quente.',
        'Abrir um radiador quente pode causar queimaduras graves pela liberação repentina de vapor e líquido pressurizado.',
      ],
      hack: 'Óleo, água, pneu e freio — os 4 itens que evitam a maioria das panes evitáveis numa viagem.',
      realLife:
        'Antes de uma viagem para o litoral, você confere a calibragem dos pneus and o nível de óleo. No meio do caminho, a luz de temperatura acende — você para em local seguro, desliga o motor e espera esfriar antes de qualquer verificação, em vez de abrir o radiador na hora.',
      curiosity:
        'A maior parte das panes em rodovia durante viagens longas é evitável com uma checagem simples de menos de 10 minutos antes de sair de casa.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question: 'Antes de uma viagem longa, é recomendável verificar:',
        options: [
          'Nível de óleo, água do radiador, calibragem dos pneus e freios',
          'Apenas o nível de combustível no tanque',
          'Apenas a cor da lataria do veículo',
          'Apenas o volume do rádio',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Uma checagem básica cobre os itens que mais causam panes evitáveis: fluidos, pneus e freios.',
        whyOthersAreWrong:
          'Combustível sozinho não previne panes mecânicas; cor da lataria e volume do rádio não têm relação com segurança mecânica.',
        hack: '4 itens, poucos minutos: óleo, água, pneu, freio.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Pneus calibrados incorretamente (muito cheios ou muito vazios) podem causar:',
        options: [
          'Maior desgaste, pior frenagem e maior consumo de combustível',
          'Nenhum efeito perceptível na condução',
          'Redução do consumo de combustível em qualquer situação',
          'Melhoria da dirigibilidade em qualquer caso',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A calibragem incorreta afeta diretamente aderência, frenagem, desgaste e consumo.',
        whyOthersAreWrong:
          'Calibragem errada nunca melhora a dirigibilidade nem reduz consumo — o efeito é sempre negativo, para mais ou para menos pressão.',
        hack: 'Pneu errado calibrado = carro gastando mais e freando pior.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Ao perceber que o motor está superaquecendo (luz de temperatura acesa), a conduta correta é:',
        options: [
          'Parar in local seguro e desligar o motor, sem abrir o radiador ainda quente',
          'Continuar dirigindo normalmente até chegar ao destino',
          'Abrir o radiador imediatamente para verificar o nível de água',
          "Acelerar o veículo para tentar 'resfriar' o motor com o vento",
        ],
        correctAnswerIndex: 0,
        explanation:
          'Abrir um radiador quente pode causar queimaduras graves — o correto é parar, desligar e esperar esfriar antes de qualquer verificação.',
        whyOthersAreWrong:
          'Continuar dirigindo agrava o dano ao motor; acelerar não resfria nada; abrir o radiador quente é fisicamente perigoso.',
        hack: 'Radiador quente: nunca abre na hora. Espera esfriar primeiro.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'O freio de mão (freio de estacionamento) tem como função principal:',
        options: [
          'Manter o veículo parado quando estacionado, especialmente em rampas',
          'Substituir o freio principal em qualquer situação de condução',
          'Reduzir a velocidade do veículo em alta velocidade',
          'Ajudar a ligar o motor do veículo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'É um freio auxiliar, pensado para manter o veículo imóvel quando estacionado.',
        whyOthersAreWrong:
          'Não deve ser usado como freio principal durante a condução, nem tem qualquer função relacionada a ligar o motor.',
        hack: "Freio de mão é para 'ficar parado', não para 'parar de andar'.",
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Em caso de pane na rodovia, o triângulo de sinalização deve ser posicionado:',
        options: [
          'A uma distância segura atrás do veículo, para alertar outros condutores com antecedência',
          'Em cima do capô do veículo',
          'Dentro do veículo, sem ser exposto',
          'Não é necessário utilizá-lo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O triângulo deve ficar a uma distância que dê tempo de reação para quem vem atrás.',
        whyOthersAreWrong:
          'Colocado sobre o capô ou guardado dentro do carro, ele perde completamente sua função de alerta antecipado.',
        hack: 'Triângulo longe do carro, não perto — o objetivo é avisar com antecedência.',
      },
    ],
  },

  {
    id: 503,
    title: 'Panes: Seca, Mecânica e Elétrica',
    duration: '5 min',
    content: {
      summary: [
        "'Pane seca' é o termo específico para quando o veículo fica sem combustível.",
        "'Pane mecânica' se refere a problemas em peças físicas do veículo (motor, câmbio, suspensão).",
        "'Pane elétrica' está relacionada a bateria, alternador ou fiação do veículo.",
        'A luz de advertência da bateria acesa no painel geralmente indica problema no sistema de carga elétrica (alternador), não necessariamente na bateria em si.',
        'Reconhecer o tipo de pane ajuda a explicar melhor o problema para quem for prestar socorro mecânico, agilizando o atendimento.',
      ],
      hack: 'Seca = faltou combustível. Mecânica = quebrou peça. Elétrica = bateria, alternador ou fiação.',
      realLife:
        'Seu carro apaga de repente na estrada e as luzes do painel piscam antes de desligar de vez — é um sinal clássico de pane elétrica, provavelmente ligada ao alternador ou à bateria, e não de falta de combustível.',
      curiosity:
        'Nem sempre a luz de bateria acesa significa bateria fraca — na maioria das vezes, o problema real está no alternador, que é quem recarrega a bateria enquanto o carro roda.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Média',
        question: "Uma 'pane seca' se refere a:",
        options: [
          'Falta de combustível no veículo',
          'Um problema exclusivamente no sistema elétrico',
          'Um pneu furado',
          'Superaquecimento do motor',
        ],
        correctAnswerIndex: 0,
        explanation:
          "'Pane seca' é o termo usado especificamente para quando o veículo fica sem combustível.",
        whyOthersAreWrong:
          "Problema elétrico é 'pane elétrica'; pneu furado e superaquecimento são situações distintas, com nomes próprios.",
        hack: 'Seca = tanque seco, sem combustível.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          "Uma 'pane elétrica' está relacionada, principalmente, a problemas em:",
        options: [
          'Bateria, alternador ou fiação do veículo',
          'Apenas nos pneus do veículo',
          'Apenas no nível de combustível',
          'Apenas no sistema de câmbio',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pane elétrica é o termo guarda-chuva para falhas no sistema elétrico: bateria, alternador ou fiação.',
        whyOthersAreWrong:
          'Pneus, combustível e câmbio pertencem a outros sistemas do veículo, sem relação direta com o sistema elétrico.',
        hack: 'Elétrica = tudo que depende de fio e carga: bateria e alternador.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'A luz de advertência da bateria, acesa no painel, geralmente indica:',
        options: [
          'Problema no sistema de carga elétrica do veículo',
          'Necessidade imediata de troca de pneu',
          'Excesso de combustível no tanque',
          'Problema no sistema de ar-condicionado',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Essa luz costuma indicar falha no alternador ou no sistema de carga, não necessariamente na bateria em si.',
        whyOthersAreWrong:
          'Pneu, combustível e ar-condicionado têm luzes ou indicadores próprios, sem relação com o símbolo de bateria.',
        hack: 'Luz de bateria acesa: suspeite primeiro do alternador, não só da bateria.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          "Um problema classificado como 'pane mecânica' está relacionado a:",
        options: [
          'Peças físicas do veículo, como motor, câmbio ou suspensão',
          'Exclusivamente à falta de combustível',
          'Exclusivamente ao sistema elétrico',
          'Apenas ao estado dos bancos do veículo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pane mecânica envolve componentes físicos do funcionamento do veículo, diferente das panes seca (combustível) e elétrica (sistema elétrico).',
        whyOthersAreWrong:
          'Combustível é pane seca; sistema elétrico é pane elétrica; bancos não têm relação com o funcionamento mecânico do veículo.',
        hack: 'Mecânica = peça física quebrou ou falhou.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Reconhecer corretamente o tipo de pane (seca, mecânica ou elétrica) é útil, principalmente, para:',
        options: [
          'Explicar melhor o problema a quem for prestar socorro mecânico, agilizando o atendimento',
          'Evitar totalmente qualquer necessidade de socorro',
          'Reduzir o valor de eventuais multas de trânsito',
          'Substituir a necessidade de manutenção preventiva',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Saber descrever o tipo de pane ajuda o socorro mecânico a chegar já preparado para o problema certo.',
        whyOthersAreWrong:
          'Identificar o tipo de pane não elimina a necessidade de socorro, não tem relação com multas e não substitui a manutenção preventiva regular.',
        hack: 'Saber o nome certo da pane = socorro mais rápido e preparado.',
      },
    ],
  },

  {
    id: 504,
    title: 'Painel do Veículo e Luzes de Advertência',
    duration: '5 min',
    content: {
      summary: [
        'As luzes do painel avisam o motorista sobre as condições de funcionamento do veículo.',
        'As luzes vermelhas indicam emergência ou falha grave: o motorista deve parar o veículo imediatamente em local seguro.',
        'As luzes amarelas ou alaranjadas indicam advertência ou defeito moderado: permitem rodar até a oficina mais próxima.',
        'A luz do óleo (parecida com uma lâmpada mágica) indica falta de pressão de lubrificação, o que pode fundir o motor rapidamente.',
        'A luz do termômetro aponta o superaquecimento do motor, exigindo parada imediata antes que as peças derretam.',
      ],
      hack: 'Luz Vermelha = Pare agora! Luz Amarela = Atenção, procure uma oficina em breve.',
      realLife:
        'Você está dirigindo e uma luz vermelha em formato de chaleira acende no painel. É a pressão do óleo! Você imediatamente liga a seta, encosta em local seguro e desliga o motor, evitando a destruição total dele.',
      curiosity:
        'As montadoras usam um padrão mundial de cores de trânsito para o painel: verde/azul são informativas (faróis), amarelas são alertas e vermelhas são perigos graves.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Quando uma luz de advertência de cor VERMELHA acende no painel com o veículo em movimento, o condutor deve:',
        options: [
          'Parar o veículo imediatamente em local seguro e desligar o motor',
          'Ignorar a luz e continuar a viagem até o destino final',
          'Acelerar mais para apagar a luz através da velocidade',
          'Procurar um posto de combustível apenas quando o tanque esvaziar',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Luzes vermelhas indicam anomalias graves que podem causar acidentes ou quebra total do motor, exigindo parada imediata.',
        whyOthersAreWrong:
          'Continuar dirigindo pode destruir o motor. Acelerar aumenta o dano. Postos de combustível não resolvem falhas elétricas ou mecânicas graves de imediato se o motor fundir no caminho.',
        hack: 'Vermelho no painel é igual ao semáforo vermelho: Pare!',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'As luzes de advertência de cor AMARELA ou alaranjada no painel do veículo servem para indicar:',
        options: [
          'Uma situação de advertência ou falha moderada, permitindo que o condutor rode até uma oficina',
          'Que o motor explodirá nos próximos segundos',
          'Que o combustível acabou completamente',
          'A ativação obrigatória dos faróis altos',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A cor amarela avisa sobre falhas que necessitam de atenção em breve, mas que não exigem a parada imediata na via.',
        whyOthersAreWrong:
          'Não indica explosão iminente. Pane seca tem indicador próprio. Faróis altos usam a cor azul.',
        hack: 'Amarelo é aviso: não precisa de pânico, mas não deixe para resolver depois.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          "A luz indicadora que possui o formato de uma 'lâmpada de Aladim' ou chaleira gotejando representa:",
        options: [
          'A pressão do óleo lubrificante do motor',
          'A temperatura da água do radiador',
          'O nível do fluido do limpador de para-brisa',
          'O acionamento do desembaçador traseiro',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Esse símbolo universal representa o óleo do motor. Se acender em movimento, indica que a pressão do lubrificante caiu perigosamente.',
        whyOthersAreWrong:
          'Temperatura usa um termômetro. Limpador usa um desenho de para-brisa com jatos de água. Desembaçador usa um retângulo com setas onduladas.',
        hack: 'Lâmpada do Aladim = Óleo do motor.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Se a luz com o desenho de um termômetro acender na cor vermelha, significa que o motor está:',
        options: [
          'Superaquecido, necessitando de parada imediata',
          'Com a temperatura ideal de funcionamento',
          'Congelado pelo uso excessivo do ar-condicionado',
          'Sem combustível no reservatório de partida a frio',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O termômetro indica a temperatura do motor. Vermelho significa que o sistema de arrefecimento falhou e o motor está fervendo.',
        whyOthersAreWrong:
          'Temperatura ideal não ativa luz vermelha. O ar-condicionado não congela o motor. Não tem relação com o combustível de partida a frio.',
        hack: 'Termômetro vermelho = Motor fervendo = Pare imediatamente.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'A luz da injeção eletrônica (geralmente com o desenho de um motorzinho amarelo) acesa indica:',
        options: [
          'Falha no sistema de gerenciamento do motor ou na queima de combustível',
          'Que as portas do veículo estão abertas',
          'Que o óleo do motor precisa ser inspecionado na hora',
          'O acionamento correto do freio de estacionamento',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A luz da injeção avisa que a central eletrônica detectou algum problema nos sensores, na queima de combustível ou nas emissões.',
        whyOthersAreWrong:
          'Portas abertas e freio de estacionamento têm luzes vermelhas específicas. O óleo usa o símbolo da chaleira.',
        hack: 'Motorzinho amarelo = Injeção eletrônica com defeito.',
      },
    ],
  },

  {
    id: 505,
    title: 'O Óleo do Motor: O Sangue do Carro',
    duration: '5 min',
    content: {
      summary: [
        'O óleo lubrificante reduz o atrito entre as peças móveis do motor, evitando o desgaste prematuro.',
        'Além de lubrificar, o óleo ajuda a limpar o motor e a dissipar parte do calor gerado pela queima.',
        'Para verificar o nível do óleo, o carro deve estar em piso plano e com o motor frio (desligado há algum tempo).',
        'A vareta de medição possui duas marcações: o nível correto deve estar sempre entre o Mínimo e o Máximo.',
        "Rodar com o óleo vencido faz com que ele perca a viscosidade e forme uma graxa preta destrutiva chamada 'borra'.",
      ],
      hack: "O óleo é o sangue do motor. Sem ele ou vencido, o motor sofre um 'infarto' e funde.",
      realLife:
        'Antes de sair de casa pela manhã, você abre o capô, puxa a vareta metálica, limpa com um papel, coloca de volta até o fim e puxa de novo. Você nota que a mancha de óleo está bem no meio das marcas. Perfeito, motor protegido!',
      curiosity:
        'Ao contrário do que muitos pensam, o óleo não dura para sempre mesmo se o carro ficar parado na garagem: ele vence por tempo (geralmente 6 meses ou 1 ano) devido à oxidação natural.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'A função principal do óleo lubrificante no motor do veículo é:',
        options: [
          'Reduzir o atrito e o desgaste entre as peças móveis internas',
          'Aumentar a velocidade máxima do veículo nas rodovias',
          'Substituir o uso de água no sistema de arrefecimento',
          'Melhorar a aderência dos pneus com o asfalto',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O óleo cria uma película protetora que impede que as peças de metal do motor batam e raspem diretamente umas nas outras.',
        whyOthersAreWrong:
          'O óleo não aumenta velocidade, não substitui a água do radiador e não interage com os pneus.',
        hack: 'Óleo = Lubrificação = Menos atrito.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Qual é a condição correta para verificar o nível do óleo do motor através da vareta?',
        options: [
          'Com o veículo em local plano e com o motor desligado e frio',
          'Com o veículo inclinado em uma subida e com o motor funcionando',
          'Logo após acelerar o carro em alta velocidade por vários minutos',
          'Com o motor superaquecido para o óleo expandir',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O carro precisa estar reto para o óleo assentar uniformemente no fundo (cárter), e o motor frio garante que todo o óleo desceu das partes altas do motor.',
        whyOthersAreWrong:
          'Inclinar o carro ou medir com o motor funcionando gera leituras falsas e perigosas.',
        hack: 'Nível do óleo se mede com o carro reto e o motor descansado.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'O nível do óleo do motor verificado na vareta de medição deve estar:',
        options: [
          'Entre as marcas indicadoras de Mínimo e Máximo',
          'Totalmente acima da marca de Máximo para garantir sobra',
          'Abaixo da marca de Mínimo para o motor trabalhar leve',
          'A vareta não possui marcas, devendo vir totalmente seca',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Faltar óleo quebra o motor por atrito; óleo em excesso aumenta a pressão interna e causa vazamentos graves. O ideal é o meio termo.',
        whyOthersAreWrong:
          'Acima do máximo quebra retentores. Abaixo do mínimo funde o motor. A vareta possui sim marcas claras.',
        hack: 'Nem muito, nem pouco: sempre entre o mínimo e o máximo.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'O que acontece se o condutor ignorar os prazos de troca e rodar com o óleo do motor muito vencido?',
        options: [
          "O óleo perde a capacidade de lubrificar e pode formar 'borra', fundindo o motor",
          'O motor consome menos combustível espontaneamente',
          'O escapamento começa a soltar fumaça perfumada',
          'Nenhum problema ocorre, pois o óleo de fábrica dura toda a vida do carro',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O óleo velho queima e engrossa, perdendo suas propriedades químicas e virando uma pasta que entope o motor.',
        whyOthersAreWrong:
          'Aumenta o consumo de combustível por gerar mais atrito. Não solta fumaça perfumada. O óleo jamais dura a vida toda do veículo.',
        hack: 'Óleo vencido vira graxa e destrói o bolso do motorista.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'A troca do óleo e do filtro de óleo do motor deve ser feita com base em:',
        options: [
          'Quilometragem rodada ou tempo de uso recomendados pelo fabricante',
          'Apenas quando o motor começar a fazer barulho de peças quebrando',
          'Sempre a cada 30 dias, independentemente do uso',
          'Apenas quando o carro for reprovado em uma vistoria de trânsito',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A manutenção preventiva exige seguir o manual do veículo, trocando por quilometragem (ex: 10.000 km) ou tempo (ex: 1 ano), o que vencer primeiro.',
        whyOthersAreWrong:
          'Esperar fazer barulho significa que o motor já quebrou. 30 dias é um intervalo curto demais desnecessário. Vistorias não medem a validade interna do óleo.',
        hack: 'Siga sempre o manual: troque por km ou por tempo.',
      },
    ],
  },

  {
    id: 506,
    title: 'Sistema de Arrefecimento: O Ar-Condicionado do Motor',
    duration: '5 min',
    content: {
      summary: [
        'O motor gera muito calor ao queimar combustível. O sistema de arrefecimento controla essa temperatura.',
        'Um líquido composto por água desmineralizada e aditivo específico circula pelo motor absorvendo o calor excessivo.',
        'O radiador é uma peça que fica na frente do carro e usa o vento para esfriar o líquido quente que veio do motor.',
        'A ventoinha (uma espécie de ventilador) liga automaticamente quando o veículo está parado ou em trânsito lento.',
        'Abrir a tampa do reservatório de água com o motor quente libera vapor pressurizado que pode causar queimaduras gravíssimas.',
      ],
      hack: 'Aditivo protege contra ferrugem e fervura. Radiador quente é uma panela de pressão: nunca abra!',
      realLife:
        'Você está parado em um engarrafamento em um dia quente. A luz do termômetro acende. Você encosta o carro na hora e desliga. Você espera mais de 30 minutos até o motor esfriar completamente antes de checar se há vazamentos de água.',
      curiosity:
        'Antigamente, alguns carros famosos (como o Fusca e a Brasília) não usavam água: o arrefecimento deles era feito diretamente pelo ar que passava pelas aletas do motor.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'A finalidade principal do sistema de arrefecimento do motor é:',
        options: [
          'Manter o motor funcionando em uma temperatura ideal, controlando o calor excessivo',
          'Esfriar o interior do veículo para o conforto dos passageiros',
          'Aquecer o combustível antes da queima para economizar energia',
          'Aumentar a potência do veículo através de jatos de vapor',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O arrefecimento evita que o motor derreta ou trave por excesso de calor, mantendo-o na temperatura ideal de trabalho.',
        whyOthersAreWrong:
          'O conforto dos passageiros é função do ar-condicionado da cabine. Não aquece combustível nem gera potência por vapor.',
        hack: 'Arrefecer = Controlar o calor do motor.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'O líquido que circula por dentro do sistema de arrefecimento deve ser composto por:',
        options: [
          'Água desmineralizada misturada com aditivo protetor específico',
          'Água pura da torneira ou de poço artesiano',
          'Óleo diesel combinado com detergente neutro',
          'Fluido de freio misturado com álcool em gel',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A água pura da torneira contém cloro e sais minerais que geram ferrugem e entopem o motor. O aditivo evita a corrosão e eleva o ponto de fervura da água.',
        whyOthersAreWrong:
          'Água de torneira estraga o motor. Óleo diesel e fluido de freio pertencem a outros sistemas totalmente diferentes.',
        hack: 'Água certa + Aditivo = Radiador feliz e sem ferrugem.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Por que é altamente perigoso abrir a tampa do reservatório de expansão (radiador) com o motor quente ou superaquecido?',
        options: [
          'Porque o líquido está sob alta pressão e fervendo, podendo espirrar e causar queimaduras graves',
          'Porque o motor pode ligar sozinho e sugar as mãos do motorista',
          'Porque o ar externo destrói as propriedades do combustível',
          'Não há perigo algum, sendo o procedimento padrão recomendado',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O sistema funciona como uma panela de pressão. Abrir a tampa com o sistema quente libera um jato violento de vapor d'água fervendo.",
        whyOthersAreWrong:
          'O motor não liga sozinho. Não afeta as propriedades do combustível. É extremamente perigoso, nunca recomendado.',
        hack: 'Motor quente = Radiador trancado. Só mexa quando esfriar.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Qual componente do sistema de arrefecimento utiliza o vento para resfriar o líquido que circula pelo motor?',
        options: ['O radiador', 'O alternador', 'O carburador', 'A bateria'],
        correctAnswerIndex: 0,
        explanation:
          'O radiador possui pequenas colmeias de metal por onde o líquido passa. O vento que bate na frente do carro esfria essas colmeias e o líquido.',
        whyOthersAreWrong:
          'Alternador e bateria são do sistema elétrico. Carburador é um sistema antigo de alimentação de combustível.',
        hack: 'Radiador fica na frente do carro exatamente para pegar o vento e esfriar o motor.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Quando o veículo está parado no trânsito e o vento natural não sobra, qual componente liga para puxar ar e resfriar o radiador?',
        options: [
          'A ventoinha (eletroventilador)',
          'O motor de arranque',
          'O pedal do acelerador',
          'O compressor do ar-condicionado',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A ventoinha é um ventilador elétrico que sobra ar diretamente no radiador quando o carro está parado e a temperatura sobe.',
        whyOthersAreWrong:
          'Motor de arranque serve apenas para ligar o carro. Acelerador injeta combustível. O compressor serve para resfriar a cabine.',
        hack: 'Carro parado esquenta = Ventoinha entra em ação.',
      },
    ],
  },

  {
    id: 507,
    title: 'Sistema Elétrico: A Pilha Gigante do Carro',
    duration: '5 min',
    content: {
      summary: [
        'A bateria funciona como uma pilha gigante que armazena energia elétrica para dar a partida no carro.',
        'Quando o motor está desligado, a bateria alimenta faróis, rádio, alarme e painel.',
        'Após o motor começar a funcionar, quem assume a geração de energia do veículo é o alternador.',
        'O alternador é uma mini usina que gera eletricidade para os sistemas e recarrega a bateria enquanto você dirige.',
        "Esquecer faróis ou luzes internas acesas com o motor desligado 'suga' toda a energia acumulada da bateria.",
      ],
      hack: 'Bateria dá o empurrão inicial. Alternador sustenta o carro andando e recarrega a bateria.',
      realLife:
        "Você desliga o carro na garagem e esquece a luz interna acesa. No dia seguinte, ao girar a chave, o painel pisca fraco e o carro faz apenas um barulho de 'clique-clique', recusando-se a dar partida. A bateria descarregou.",
      curiosity:
        "A maioria das baterias modernas é 'selada' e livre de manutenção, mas antigamente era preciso abrir tampinhas e completar o nível interno com água destilada periodicamente.",
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question: 'A principal função da bateria no veículo automotor é:',
        options: [
          'Armazenar e fornecer energia elétrica para dar a partida no motor e ligar os sistemas elétricos com o carro desligado',
          'Gerar combustível extra por meio de reações químicas elétricas',
          'Transformar a água do radiador em energia mecânica',
          'Manter os pneus inflados eletronicamente',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A bateria acumula energia química que se transforma em eletricidade para girar o motor de arranque no momento da partida.',
        whyOthersAreWrong:
          'Não gera combustível, não mexe com água do radiador e não calibra pneus.',
        hack: 'Bateria = Pilha de estoque de energia.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Com o motor em funcionamento, qual é o componente responsável por gerar energia e manter a bateria recarregada?',
        options: [
          'O alternador',
          'O carburador',
          'O amortecedor',
          'O distribuidor',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O alternador é girado por uma correia ligada ao motor, transformando força mecânica em energia elétrica contínua.',
        whyOthersAreWrong:
          'Carburador alimenta combustível. Amortecedor é da suspensão. Distribuidor gerenciava faíscas antigamente.',
        hack: 'Alternador = Gerador que recarrega a bateria com o carro andando.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Se o condutor deixar os faróis acesos por muitas horas com o motor desligado, ocorrerá:',
        options: [
          'A descarga completa da bateria, impedindo a próxima partida do veículo',
          'O aumento automático do nível de óleo do motor',
          'O travamento mecânico imediato das rodas traseiras',
          'A queima instantânea de todos os fusíveis do carro',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Sem o motor rodando, o alternador não gera energia. Os faróis vão drenar todo o estoque da bateria até esvaziá-la.',
        whyOthersAreWrong:
          'Não altera óleo, não trava rodas e não queima fusíveis pelo simples uso da carga.',
        hack: 'Motor desligado = bateria gastando sem repor.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'O componente que recebe a energia da bateria e faz o motor do carro dar os primeiros giros para começar a funcionar chama-se:',
        options: [
          'Motor de partida (ou de arranque)',
          'Radiador elétrico',
          'Bomba injetora de vácuo',
          'Diferencial traseiro',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O motor de arranque é um motor elétrico forte que gasta muita energia da bateria por alguns segundos apenas para 'acordar' o motor principal do carro.",
        whyOthersAreWrong:
          'Radiador esfria água. Bomba injetora lida com combustível. Diferencial divide a força nas rodas.',
        hack: 'Girar a chave e fazer o motor pegar = Motor de arranque trabalhando.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Para proteger os circuitos elétricos contra sobrecargas e curtos-circuitos, os veículos são equipados com:',
        options: [
          'Fusíveis',
          'Velas de ignição',
          'Pastilhas de freio',
          'Pistões de liga leve',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Os fusíveis contêm um filamento que se rompe (queima) propositalmente se houver um pico de energia, protegendo os módulos caros do carro.',
        whyOthersAreWrong:
          'Velas geram faísca de queima. Pastilhas freiam o carro. Pistões movimentam o motor.',
        hack: 'Fusível = Guarda-costas do sistema elétrico.',
      },
    ],
  },

  {
    id: 508,
    title: 'Sistema de Transmissão: Câmbio e Embreagem',
    duration: '5 min',
    content: {
      summary: [
        'A força do motor precisa chegar até as rodas para o carro se mover; essa é a função da transmissão.',
        'O câmbio (marchas) funciona como as marchas de uma bicicleta: marchas baixas dão força; marchas altas dão velocidade.',
        'A 1ª marcha é a mais forte, ideal para tirar o carro do lugar e subir ladeiras íngremes.',
        'A embreagem desliga temporariamente a força do motor do sistema de marchas para que você mude de marcha sem quebrar as peças.',
        'Descansar o pé apoiado no pedal da embreagem enquanto dirige causa um desgaste severo e desnecessário na peça.',
      ],
      hack: 'Embreagem desconecta o motor do câmbio. Use-a apenas para trocar marchas ou parar o veículo.',
      realLife:
        'Você está parando em um semáforo vermelho. Para o carro não morrer, você pisa no freio e também na embreagem até o fundo, colocando a alavanca no ponto neutro (ponto morto). Depois, solta os pedais com segurança.',
      curiosity:
        'Nos carros automáticos não existe o pedal da embreagem porque um sistema hidráulico interno (conversor de torque) ou dupla embreagem automatizada faz todo o trabalho sozinho.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'A função principal do sistema de embreagem nos veículos manuais é:',
        options: [
          'Interromper ou conectar a transmissão de força do motor para o câmbio, permitindo a troca de marchas',
          'Aumentar a pressão do óleo lubrificante nas rodas dianteiras',
          'Substituir o pedal do freio em descidas acentuadas',
          'Controlar a velocidade de acionamento dos limpadores de para-brisa',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Ao pisar na embreagem, você afasta o disco do motor do sistema de transmissão, deixando o câmbio livre para engatar a próxima marcha sem arranhar.',
        whyOthersAreWrong:
          'Não interfere no óleo, não substitui o freio e não mexe com os limpadores.',
        hack: 'Pisar na embreagem = Cortar a força do motor para mexer no câmbio.',
      },
      {
        id: 2,
        category: 'Fácil',
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Qual marcha do veículo deve ser utilizada para iniciar o movimento ou subir ladeiras muito íngremes devido à sua maior força?',
        options: [
          '1ª marcha',
          '5ª marcha',
          'Ponto morto (neutro)',
          'Marcha de ré',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A primeira marcha possui a maior relação de torque (força), sacrificando a velocidade em troca da capacidade de vencer a inércia e subidas.',
        whyOthersAreWrong:
          '5ª marcha é para velocidade em retas planas. Ponto morto não transmite força. Ré serve para andar para trás.',
        hack: 'Para subir morro ou sair do lugar: força total da 1ª marcha.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Um hábito inadequado do condutor que reduz drasticamente a vida útil do sistema de embreagem é:',
        options: [
          'Dirigir mantendo o pé esquerdo continuamente apoiado no pedal da embreagem',
          'Soltar o pedal da embreagem de forma suave ao sair',
          'Utilizar o ponto neutro quando o veículo estiver totalmente estacionado',
          'Pisar até o fundo do pedal somente ao trocar de marcha',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Apoiar o pé provoca um leve afastamento do disco, gerando atrito constante e superaquecimento da peça (embreagem patinando).',
        whyOthersAreWrong:
          'Soltar de forma suave é o correto. Ponto morto estacionado é normal. Pisar até o fundo é a forma correta.',
        hack: 'Pé na embreagem só para mudar de marcha, depois tire o pé dali!',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'O conjunto de engrenagens que permite ao motorista adaptar a força ou a velocidade do motor às condições da via chama-se:',
        options: [
          'Caixa de câmbio (ou de marchas)',
          'Sistema de suspensão a ar',
          'Carburador eletrônico',
          'Velas de ignição rápida',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A caixa de câmbio seleciona diferentes tamanhos de engrenagens para multiplicar a força ou a velocidade do veículo.',
        whyOthersAreWrong:
          'Suspensão lida com impactos. Carburador alimenta combustível. Velas geram centelha.',
        hack: 'Câmbio = Escolha entre força e velocidade.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          "A posição da alavanca de câmbio conhecida como 'ponto morto' significa que:",
        options: [
          'Nenhuma marcha está engatada e a força do motor não chega às rodas',
          'O motor do veículo foi danificado e não funcionará mais',
          'Os freios traseiros foram travados automaticamente por segurança',
          'O veículo está consumindo o dobro de combustível por minuto',
        ],
        correctAnswerIndex: 0,
        explanation:
          'No ponto morto ou neutro, as engrenagens estão desconectadas. O motor funciona, mas o carro não anda mesmo se você acelerar.',
        whyOthersAreWrong:
          'O motor não está quebrado, não aciona freios e gasta o mínimo de combustível possível (marcha lenta).',
        hack: 'Ponto morto = Motor solto, rodas livres.',
      },
    ],
  },

  {
    id: 509,
    title: 'Pneus e Rodas: O Sapato do Carro',
    duration: '5 min',
    content: {
      summary: [
        'Os pneus são o único elo de ligação entre o carro e o asfalto, sendo vitais para a segurança.',
        'A calibragem deve ser verificada semanalmente com os pneus frios (antes de rodar mais de 3 km).',
        'Pneus murchos aumentam o consumo de combustível e desgastam as laterais da borracha.',
        'O indicador TWI são pequenas saliências de borracha dentro dos sulcos do pneu.',
        'Quando a borracha externa atinge a altura do TWI, o pneu atingiu o limite legal (1,6 mm) e está careca.',
      ],
      hack: 'TWI nivelou com o pneu = Pneu careca = Risco extremo de aquaplanagem e multa grave.',
      realLife:
        "Você vai ao posto calibrar os pneus. Olha na portinha do carro a etiqueta que diz '30 PSI'. Você digita 30 na máquina do posto e calibra os 4 pneus frios, além de colocar 34 PSI no estepe, garantindo que ele tenha pressão caso precise.",
      curiosity:
        'A profundidade mínima de 1,6 mm dos sulcos existe para escoar a água da chuva. Sem esses sulcos, o pneu flutua sobre a lâmina de água (aquaplanagem) e o motorista perde o controle total do volante.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Para garantir a durabilidade e a segurança, a calibragem dos pneus deve ser feita idealmente:',
        options: [
          'Semanalmente, com os pneus frios',
          'Apenas uma vez por ano, antes de fazer a vistoria',
          'Somente quando o pneu estiver totalmente murcho no chão',
          'Com os pneus muito quentes após uma longa viagem de rodovia',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pneus quentes sofrem expansão interna do ar, gerando uma leitura falsa de pressão no calibrador. Meça sempre com eles frios.',
        whyOthersAreWrong:
          'Anualmente é perigoso. Esperar ficar totalmente murcho estraga a roda. Quentes altera a pressão correta.',
        hack: 'Calibrar pneus: toda semana e sempre frios.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'De acordo com a legislação de trânsito brasileira, a profundidade mínima permitida dos sulcos de um pneu é de:',
        options: [
          '1,6 milímetro',
          '5,0 milímetros',
          '0,5 milímetro',
          '10 centímetros',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O limite de 1,6 mm é determinado por lei para garantir a segurança contra derrapagens e aquaplanagens.',
        whyOthersAreWrong:
          'Abaixo de 1,6 mm o pneu é considerado careca por lei (infração grave). 5,0 mm é pneu novo. 10 cm é absurdo.',
        hack: 'Guarde esse número para a prova: 1,6 mm é o limite.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'O que representam as pequenas marcas em relevo chamadas TWI localizadas nos sulcos dos pneus?',
        options: [
          'Os indicadores de desgaste limite da banda de rodagem do pneu',
          'O local exato onde se deve colocar o bico do calibrador',
          'O brasão da marca fabricante da roda de liga leve',
          'A velocidade máxima que o pneu pode suportar no gelo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'TWI (Tread Wear Indicator) serve para o motorista checar visualmente se o pneu chegou ao nível de descarte obrigatório.',
        whyOthersAreWrong:
          'Não tem relação com bico de calibrador, brasões de marca ou uso exclusivo no gelo.',
        hack: 'TWI = Testemunha do desgaste do pneu.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'O fenômeno da aquaplanagem, que é a perda de contato do pneu com o solo devido a uma camada de água, é provocado principalmente por:',
        options: [
          'Alta velocidade combinada com pneus carecas (sulcos rasos)',
          'Uso excessivo do fluido de freio do tipo correto',
          'Rodar em asfalto perfeitamente seco em dias quentes',
          'Calibrar os pneus exatamente com a pressão indicada no manual',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Pneus carecas não conseguem expulsar a água acumulada na pista, fazendo o carro flutuar sobre a água em velocidades mais altas.',
        whyOthersAreWrong:
          'Fluido de freio não causa isso. Não ocorre em asfalto seco. Calibragem correta previne, não causa o problema.',
        hack: 'Água na pista + pneu careca = perigo de flutuar sem controle.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Ao calibrar os pneus do veículo, qual cuidado especial o condutor deve ter com o pneu de reserva (estepe)?',
        options: [
          'Deve ser calibrado regularmente, preferencialmente com uma pressão um pouco maior que os pneus de uso diário',
          'Nunca deve ser calibrado, pois perde a garantia de fábrica se receber ar externo',
          'Só deve receber ar no momento exato em que for utilizado na rua',
          'Deve ser preenchido com água para equilibrar o peso traseiro do veículo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Como o estepe fica guardado por muito tempo, ele perde pressão naturalmente. Colocar de 2 a 4 libras a mais garante que ele estará utilizável na emergência.',
        whyOthersAreWrong:
          'Borracha perde ar parada, se não calibrar estará murcho na emergência. Nunca coloque água dentro do pneu.',
        hack: 'Estepe guardado também esvazia. Calibre com um pouquinho a mais.',
      },
    ],
  },

  {
    id: 510,
    title: 'Sistema de Frenagem: Como Parar com Segurança',
    duration: '5 min',
    content: {
      summary: [
        'Os freios utilizam a força hidráulica e o atrito para parar o movimento das rodas.',
        'Ao pisar no pedal, as pastilhas de freio apertam um disco de metal que gira junto com a roda.',
        'O sistema depende do fluido de freio para transmitir a pressão do pedal até as rodas.',
        'O sistema ABS impede eletronicamente o travamento total das rodas em frenagens de emergência.',
        'Evitando o travamento das rodas, o ABS permite que o motorista continue controlando a direção para desviar de obstáculos.',
      ],
      hack: 'Freio normal trava a roda e faz o carro arrastar. ABS evita o travamento e deixa você desviar do perigo.',
      realLife:
        'Um motorista cruza na sua frente de repente. Você afunda o pé no freio com toda força. O pedal começa a vibrar intensamente e fazer barulho. Você não solta o pé! Graças ao ABS, você gira o volante para o lado e desvia do carro com total controle.',
      curiosity:
        'O sistema ABS (Anti-lock Braking System) é obrigatório em 100% dos carros fabricados no Brasil desde 2014 por reduzir drasticamente a distância de parada na chuva.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Qual é a principal função do sistema de freios antibloqueio (ABS) nos veículos?',
        options: [
          'Evitar o travamento das rodas in frenagens bruscas, mantendo o controle da direção',
          'Aumentar o desgaste das pastilhas para limpar os discos de freio',
          'Travar as quatro rodas instantaneamente para o carro capotar de lado',
          'Substituir o freio de mão de forma mecânica automática',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Sem o ABS, as rodas travam e o carro vira um trenó arrastando no asfalto, ignorando os comandos do volante. O ABS evita isso.',
        whyOthersAreWrong:
          'O ABS preserva as pastilhas e pneus, evita acidentes e não substitui o freio de estacionamento.',
        hack: 'ABS = Anti-Bloqueio = Roda não trava, volante funciona.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Ao efetuar uma frenagem de emergência em um carro equipado com freio ABS, o condutor sente uma trepidação no pedal do freio. Essa condição indica:',
        options: [
          'O funcionamento normal do sistema ABS atuando no alívio e pressão hidráulica',
          'Que o freio quebrou completamente e deve ser solto na hora',
          'Que o óleo do motor vazou para dentro das rodas dianteiras',
          'Defeito grave na caixa de direção hidráulica do veículo',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O ABS 'pisa e solta' o freio milhares de vezes por minuto eletronicamente. Isso gera uma pulsação/trepidação no pedal, que é perfeitamente normal.",
        whyOthersAreWrong:
          'Nunca solte o pedal ao sentir trepar. Não tem relação com o óleo do motor nem com defeito de direção.',
        hack: 'Pedal tremeu com ABS? Continue pisando com força total, está funcionando!',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'O componente do freio que sofre desgaste natural pelo atrito contra o disco de metal e exige substituição periódica chama-se:',
        options: [
          'Pastilha de freio',
          'Radiador de pinça',
          'Cilindro de ignição',
          'Mola helicoidal de retorno',
        ],
        correctAnswerIndex: 0,
        explanation:
          'As pastilhas são feitas de um material composto macio projetado para se desgastar no lugar do disco, gerando o atrito necessário para parar o carro.',
        whyOthersAreWrong:
          'Radiador de pinça não existe. Cilindro de ignição liga o carro. Mola helicoidal pertence à suspensão.',
        hack: 'Pastilha gasta = barulho de ferro com ferro ao frear. Troque logo!',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          "Se o pedal de freio apresentar uma sensação de estar 'borrachudo' ou afundar até o chão sem frear o carro direito, o problema provável é:",
        options: [
          'Vazamento ou presença de ar no sistema do fluido de freio',
          'Excesso de calibragem nos pneus dianteiros do carro',
          'Uso de combustível adulterado no tanque de reserva',
          'Ar-condicionado regulado em temperatura muito baixa',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O ar é compressível, enquanto o fluido de freio líquido não é. Se houver ar ou vazamento de fluido, o pedal perde a pressão hidráulica e afunda.',
        whyOthersAreWrong:
          'Calibragem, combustível e ar-condicionado não alteram a rigidez física do pedal de freio.',
        hack: 'Pedal afundando = Perigo! Falta de pressão ou fluido no freio.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'O freio de estacionamento (freio de mão) atua geralmente em quais rodas do veículo?',
        options: [
          'Nas duas rodas traseiras',
          'Apenas na roda dianteira esquerda',
          'Nas quatro rodas simultaneamente com a mesma força',
          'Apenas na roda sobressalente (estepe)',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O freio de mão mecânico puxa cabos de aço que travam especificamente as rodas traseiras para manter o veículo imóvel quando estacionado.',
        whyOthersAreWrong:
          'Não atua na dianteira isolada, nem no estepe, e raramente nas quatro rodas na mecânica básica padrão de carros comuns.',
        hack: 'Freio de mão trava a traseira do carro.',
      },
    ],
  },

  {
    id: 511,
    title: 'Direção e Suspensão: Conforto e Controle',
    duration: '5 min',
    content: {
      summary: [
        'A suspensão (composta por molas e amortecedores) absorve os impactos das irregularidades da pista.',
        'Os amortecedores controlam as oscilações das molas, mantendo os pneus colados no chão garantindo estabilidade.',
        'O sistema de direção transmite os comandos do volante para as rodas dianteiras mudarem de rumo.',
        "O alinhamento evita que o veículo 'puxe' para um dos lados em retas, poupando os pneus.",
        'O balanceamento elimina vibrações e trepidações no volante ao rodar em velocidades maiores (acima de 70 km/h).',
      ],
      hack: 'Volante puxando para o lado = Falta Alinhamento. Volante tremendo na velocidade = Falta Balanceamento.',
      realLife:
        'Você passa por um buraco profundo na rua. Logo depois, percebe que se soltar o volante por um segundo em linha reta, o carro vira sozinho para a direita. O impacto desregulou a geometria: você precisa levar para alinhar a direção.',
      curiosity:
        'Se um carro não tivesse amortecedores (apenas as molas), ele passaria por um buraquinho e continuaria pulando e balançando como um pula-pula por centenas de metros.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'A função principal do amortecedor no sistema de suspensão é:',
        options: [
          'Controlar o balanço excessivo das molas, mantendo o pneu em contato firme com o solo',
          'Aumentar a maciez dos bancos de couro do veículo',
          'Auxiliar o motor de arranque a girar o câmbio manual',
          'Impedir que pedras entrem no radiador de água',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A mola absorve o impacto do buraco e o amortecedor freia o movimento da mola para o carro parar de balançar rapidamente.',
        whyOthersAreWrong:
          'Não altera o conforto do banco, não ajuda o motor de arranque e não protege o radiador contra pedras.',
        hack: 'Mola pula, amortecedor segura o pulo.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          "Quando o motorista percebe que o veículo está 'puxando' para o lado direito ou esquerdo ao soltar levemente o volante em uma reta, deve providenciar:",
        options: [
          'O alinhamento da direção',
          'A troca imediata da bateria elétrica',
          'A substituição do fluido do radiador',
          'A regulagem dos cabos da embreagem',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O desalinhamento das rodas faz com que elas apontem para direções ligeiramente tortas, forçando o carro a desviar do curso em linha reta.',
        whyOthersAreWrong:
          'Bateria, radiador e embreagem não influenciam a direção geométrica das rodas dianteiras.',
        hack: 'Carro puxando igual carrinho de supermercado torto = Precisa alinhar.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Trepidações e vibrações sentidas no volante de direção ao atingir velocidades mais altas na rodovia indicam a necessidade de:',
        options: [
          'Balanceamento das rodas/pneus',
          'Troca do óleo lubrificante do motor',
          'Troca das lâmpadas das setas dianteiras',
          'Limpeza do reservatório de partida flex',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O desbalanceamento significa que um lado da roda está mais pesado que o outro por miligramas. Em alta velocidade, essa diferença gera uma força centrífuga que faz a roda e o volante tremerem.',
        whyOthersAreWrong:
          'Óleo do motor, lâmpadas e partida flex não produzem trepidação física localizada no volante ligada à velocidade de rodagem.',
        hack: 'Volante com tremorzinho em alta velocidade = Falta Balancear as rodas.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Rodar com os amortecedores estourados ou severamente desgastados pode causar:',
        options: [
          'Perda de estabilidade em curvas, maior distância de frenagem e desgaste irregular dos pneus',
          'Aumento instantâneo da potência do motor em baixas rotações',
          'Impossibilidade total de ligar os faróis altos do veículo',
          'Melhoria no consumo de etanol do sistema de injeção',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Sem os amortecedores atuando, a roda quica no chão. Um pneu que está quicando no ar não consegue frear nem segurar o carro em curvas.',
        whyOthersAreWrong:
          'Não aumenta potência, não afeta os faróis elétricos e não melhora o consumo de combustível.',
        hack: 'Amortecedor ruim = Carro bobo na curva e freando mal.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'A direção assistida (hidráulica ou elétrica) serve principalmente para:',
        options: [
          'Reduzir o esforço físico do motorista ao girar o volante, tornando as manobras mais leves',
          'Girar as rodas traseiras no sentido inverso nas curvas fechadas',
          'Bloquear o volante caso o condutor ultrapasse a velocidade permitida',
          'Fazer o carro andar sozinho sem a necessidade de motorista',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Sistemas de assistência utilizam uma bomba hidráulica ou um motor elétrico para multiplicar a força aplicada pelo motorista no volante, facilitando manobras como balizas.',
        whyOthersAreWrong:
          'Não esterça rodas traseiras em carros comuns, não bloqueia por velocidade e não transforma o veículo em autônomo na mecânica básica padrão.',
        hack: 'Direção hidráulica/elétrica = Volante levinho com o carro ligado.',
      },
    ],
  },

  {
    id: 512,
    title: 'Sistema de Iluminação e Visibilidade',
    duration: '5 min',
    content: {
      summary: [
        'O sistema de iluminação garante que o motorista enxergue o caminho e seja visto pelos outros condutores.',
        'As setas servem para indicar com antecedência a intenção de mudar de faixa ou virar em uma rua.',
        'As luzes traseiras de freio acendem na cor vermelha intensa sempre que o pedal de freio é acionado.',
        'A luz de ré acende obrigatoriamente na cor BRANCA, iluminando a traseira e alertando sobre a manobra em marcha ré.',
        'Palhetas do limpador de para-brisa ressecadas borram o vidro e prejudicam gravemente a visibilidade na chuva.',
      ],
      hack: 'Luz de Ré = Branca. Luz de Freio = Vermelha. Seta = Amarela/Âmbar. Conferir lâmpadas evita colisões traseiras e multas.',
      realLife:
        'Antes de sair para viajar à noite, você liga o carro e pede para alguém ficar atrás olhando. Você pisa no freio (acende vermelho), engata a ré (acende branco) e liga as setas. Tudo funcionando! Viagem segura garantida.',
      curiosity:
        'A luz de ré é branca exatamente por dois motivos: diferenciar visualmente de todas as outras luzes traseiras (que são vermelhas ou amarelas) e iluminar obstáculos no escuro ao dar marcha ré.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Qual é a cor obrigatória das luzes de ré instaladas na parte traseira dos veículos automotores?',
        options: ['Branca', 'Vermelha', 'Verde bandeira', 'Azul neon'],
        correctAnswerIndex: 0,
        explanation:
          'A resolução do CONTRAN determina a cor branca para a luz de ré para indicar a intenção de deslocamento em marcha atrás.',
        whyOthersAreWrong:
          'Vermelha é para lanterna de posição e freio. Verde e azul não são permitidas por lei na sinalização padrão externa.',
        hack: 'Luz de ré = Única luz branca na traseira do carro.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'As luzes de freio de um veículo, localizadas na traseira, devem acender na cor vermelha sempre que:',
        options: [
          'O condutor acionar o pedal do freio',
          'O veículo atingir a velocidade de 100 km/h',
          'O nível de combustível chegar na reserva',
          'O motorista acionar a buzina do carro',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A ativação automática pelo pedal serve para avisar instantaneamente quem vem atrás para reduzir a velocidade também.',
        whyOthersAreWrong:
          'Não depende de velocidade, combustível ou uso da buzina.',
        hack: 'Pisou no freio = Luz vermelha forte acende atrás.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Transitar sob chuva forte com as palhetas do limpador de para-brisa defeituosas ou ressecadas acarreta:',
        options: [
          'Perda grave de visibilidade, risco de acidente e infração de trânsito',
          'Melhoria na aerodinâmica do para-brisa dianteiro',
          'Economia de energia da bateria do alternador',
          'Nenhuma consequência legal ou de segurança',
        ],
        correctAnswerIndex: 0,
        explanation:
          "Palhetas ruins arranham o vidro e não removem a lâmina d'água de forma eficaz, gerando um borrão perigoso. É considerado falta de equipamento obrigatório em bom estado.",
        whyOthersAreWrong:
          'Não melhora aerodinâmica, não poupa bateria de forma útil e gera multa de trânsito.',
        hack: 'Limpador rasgando ou borrando = Troque as borrachas imediatamente.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'O dispositivo de segurança do painel usado para piscar simultaneamente todas as luzes de seta do carro em caso de emergência ou parada obrigatória chama-se:',
        options: [
          'Pisca-alerta',
          'Farol de neblina traseiro',
          'Luz de rodagem diurna (DRL)',
          'Comutador de farol alto',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O pisca-alerta aciona as quatro setas ao mesmo tempo para sinalizar que o veículo está parado em situação de pane ou emergência temporária na via.',
        whyOthersAreWrong:
          'Farol de neblina clareia a pista. DRL serve para o dia. Farol alto ilumina caminhos longos sem ninguém na frente.',
        hack: 'Carro quebrado na pista = Ligue o Pisca-alerta imediatamente.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Quando uma das lâmpadas indicadoras de direção (seta) queima, o que costuma acontecer com a luz indicadora no painel ao acionar a alavanca?',
        options: [
          'Ela pisca de forma muito mais rápida que o ritmo normal',
          'Ela permanece apagada e o motor morre na hora',
          'Ela muda automaticamente para a cor azul brilhante',
          'Começa a tocar um alarme de ré sonoro contínuo',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O sistema elétrico perde resistência quando uma lâmpada queima. Isso altera a frequência do relé, fazendo a seta piscar aceleradamente no painel, avisando o condutor sobre o defeito.',
        whyOthersAreWrong:
          'O motor não morre, a luz não muda de cor e não toca alarme de ré.',
        hack: 'Seta piscando rápido demais = Tem lâmpada queimada do lado de fora.',
      },
    ],
  },

  {
    id: 513,
    title: 'Manutenção Preventiva e Economia de Combustível',
    duration: '5 min',
    content: {
      summary: [
        'A manutenção preventiva serve para revisar e trocar peças no prazo certo antes que elas quebrem na rua.',
        'Filtros de ar sujos impedem a entrada correta de oxigênio no motor, sufocando-o e aumentando o gasto de combustível.',
        'Velas de ignição gastas geram faíscas fracas, desperdiçando combustível não queimado pelo escapamento.',
        'Evitar acelerações bruscas e freadas violentas estende a vida útil das peças e economiza dinheiro no posto.',
        'Equipamentos obrigatórios como triângulo, macaco e chave de roda devem ser guardados em local acessível e em perfeito estado.',
      ],
      hack: 'Preventiva = Gasta pouco planejando. Corretiva = Gasta uma fortuna de surpresa com o guincho.',
      realLife:
        'Você troca as velas e o filtro de ar a cada 10.000 km como manda o manual. Seu carro faz 14 km por litro na estrada. Seu vizinho nunca faz revisão; o carro dele falha, gasta o dobro de combustível e quebra à noite na rodovia.',
      curiosity:
        'O extintor de incêndio deixou de ser obrigatório em carros de passeio comuns no Brasil em 2015, tornando-se opcional, mas continua obrigatório para veículos comerciais, caminhões e ônibus.',
    },
    questions: [
      {
        id: 1,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          "A manutenção do veículo classificada como 'preventiva' tem o objetivo principal de:",
        options: [
          'Inspecionar e substituir componentes antes que apresentem falhas, evitando quebras e acidentes',
          'Consertar o motor apenas depois que ele explodir ou parar no meio de um cruzamento',
          'Alterar as características originais de fábrica para o carro correr mais',
          'Reduzir o valor dos impostos anuais cobrados pelo DETRAN',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Prevenir significa agir antes. A troca preventiva de correias, óleos e filtros evita danos catastróficos muito mais caros.',
        whyOthersAreWrong:
          'Agir após quebrar é manutenção corretiva. Não altera características de fábrica e não dá desconto em impostos.',
        hack: 'Manutenção Preventiva = Prevenir a quebra.',
      },
      {
        id: 2,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Qual componente do motor, se estiver excessivamente sujo ou entupido, bloqueia a passagem do oxigênio provocando aumento severo no consumo de combustível?',
        options: [
          'O filtro de ar do motor',
          'O reservatório do fluido de freio',
          'O cabo de aço do freio de estacionamento',
          'O sensor de temperatura do banco traseiro',
        ],
        correctAnswerIndex: 0,
        explanation:
          "O motor precisa de ar purificado para misturar com o combustível. Se o filtro estiver sujo, o motor faz mais esforço para 'respirar' e consome mais.",
        whyOthersAreWrong:
          'Fluido de freio, cabo de freio de mão e sensores de bancos não têm qualquer participação na queima interna de combustível do motor.',
        hack: 'Filtro de ar sujo = Motor sufocado gastando mais combustível.',
      },
      {
        id: 3,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Em relação ao extintor de incêndio nos automóveis de passeio comuns e utilitários leves atuais no Brasil, a lei determina que seu uso é:',
        options: [
          'Opcional (facultativo) para os proprietários',
          'Obrigatório sob pena de apreensão imediata do veículo',
          'Proibido terminantemente em qualquer hipótese',
          'Obrigatório apenas para motoristas recém-habilitados na PPD',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Desde 2015, o Conselho Nacional de Trânsito tornou o extintor opcional para carros de passeio comuns porque os carros modernos têm sistemas que diminuem muito o risco de fogo.',
        whyOthersAreWrong:
          'Não é obrigatório para carros comuns (apenas para caminhões, ônibus e transporte escolar). Não é proibido, você pode usar se quiser.',
        hack: 'Carro comum de passeio = Extintor é opcional.',
      },
      {
        id: 4,
        category: 'Mecânica',
        difficulty: 'Média',
        question:
          'Para realizar a troca de um pneu furado na via pública com segurança, quais equipamentos obrigatórios do veículo devem ser utilizados?',
        options: [
          'Macaco, chave de roda e triângulo de sinalização',
          'Extintor de incêndio, calibrador portátil e rádio AM',
          'Cinto de segurança reserva, martelo e alicates de pressão',
          'O pneu reserva não necessita de nenhuma ferramenta para ser trocado',
        ],
        correctAnswerIndex: 0,
        explanation:
          'O triângulo avisa quem vem atrás. O macaco ergue o carro. A chave de roda solta os parafusos. Juntos formam o kit básico de troca de pneu.',
        whyOthersAreWrong:
          'Extintor, rádio, alicates ou cinto reserva não servem para erguer o carro ou soltar parafusos de roda.',
        hack: 'Trio da emergência do pneu: Macaco, Chave de roda e Triângulo.',
      },
      {
        id: 5,
        category: 'Mecânica',
        difficulty: 'Fácil',
        question:
          'Uma conduta de direção defensiva que também contribui diretamente para a economia de combustível e conservação dos freios é:',
        options: [
          'Dirigir de forma suave, prevendo o fluxo do trânsito e evitando acelerações e frenagens bruscas',
          'Acelerar o motor até o limite máximo de giros em cada marcha curta',
          'Transitar sempre colado na traseira de caminhões grandes para cortar o vento',
          'Desligar o motor do veículo em descidas de serras (andar na banguela)',
        ],
        correctAnswerIndex: 0,
        explanation:
          'Dirigir com suavidade evita desperdício de energia mecânica. Andar na banguela (motor desligado ou ponto morto descendo morro) é infração média e extremamente perigoso pois desativa a assistência dos freios.',
        whyOthersAreWrong:
          'Esgoelar as marchas gasta muito. Colar na traseira causa acidentes graves. Desligar na descida tira o controle do freio motor e da direção assistida.',
        hack: 'Condução suave = Bolso cheio e trânsito seguro.',
      },
    ],
  },
]
