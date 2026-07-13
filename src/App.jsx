import React, { useState, useEffect } from 'react'
import {
  Play,
  Calendar,
  CheckCircle2,
  Clock,
  Map,
  ShieldAlert,
  HeartPulse,
  Wrench,
  ArrowLeft,
  Lock,
  Star,
  Sparkles,
  Lightbulb,
  Compass,
  Zap,
  Check,
  X,
  Award,
  AlertCircle,
  Users,
  Info,
  Flame,
  User,
  Target,
  Trophy,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Flag,
} from 'lucide-react'

// --- Missões adicionais (conteúdo extra por módulo, extraído para arquivos separados) ---
import { missoesLegislacaoExtra } from './data/legislacao'
import { missoesDefensivaExtra } from './data/direcaoDefensiva'
import { missoesSocorrosExtra } from './data/primeirosSocorros'
import { missoesAmbienteExtra } from './data/meioAmbiente'
import { missoesMecanicaExtra } from './data/mecanica'

// --- BANCO DE DADOS OFICIAL E COMPLETO DO CURSO TEÓRICO DO DETRAN-PR (CTB & CONTRAN) ---
const DETRAN_COURSE_DATABASE = {
  modules: [
    {
      id: 1,
      title: 'Legislação de Trânsito',
      description:
        'As leis, direitos e deveres para dirigir com segurança nas vias públicas.',
      estimatedTime: '50 min',
      icon: <Map className="w-5 h-5 text-emerald-600" />,
      colorClass: 'bg-emerald-50 text-emerald-600',
      accentBg: 'bg-emerald-500',
      missions: [
        {
          id: 101,
          title: 'Preferências de Passagem',
          duration: '5 min',
          content: {
            youtubeId: 'vD2G7Zit0Y0',
            videoTitle: 'Cruzamento Sem Sinalização: Quem passa primeiro?',
            videoDuration: '3 min',
            summary: [
              "Em cruzamentos sinalizados com placas de 'PARE' ou semáforos, obedeça rigorosamente a sinalização.",
              'Em cruzamentos não sinalizados, a preferência é do veículo que se aproxima pela DIREITA.',
              'Quem trafega por rodovias tem preferência sobre quem vai entrar na pista.',
              'Nas rotatórias, a preferência de passagem é de quem já iniciou a circulação dentro dela.',
              'Veículos que andam sobre trilhos (trens) têm preferência absoluta de passagem sobre todos os outros.',
            ],
            hack: 'Se não houver placa na esquina, estique o braço direito: se o carro vier da direção que sua mão aponta, ele passa primeiro!',
            realLife:
              'Você está dirigindo em uma rua residencial calmo no bairro Portão, em Curitiba. Em um cruzamento sem nenhuma sinalização, outro veículo surge à sua direita. Você para e dá passagem, protegendo o lado dele.',
            curiosity:
              'Baterias de sirenes e luzes (giroflex) de ambulâncias e bombeiros não dão direito de passagem automático se eles não estiverem em efetivo serviço de urgência ou emergência real!',
          },
          questions: [
            {
              id: 1,
              category: 'Legislação',
              difficulty: 'Fácil',
              question:
                'Ao aproximar-se de um cruzamento não sinalizado, você nota que um veículo se aproxima pela via à sua direita. Segundo o CTB, qual deve ser a sua atitude?',
              options: [
                'Acelerar para passar antes do outro veículo.',
                'Reduzir a velocidade, mas manter a marcha, pois você está na via mais larga.',
                'Parar o veículo e dar a preferência de passagem ao outro condutor.',
                'Buzinar brevemente para avisar que você vai passar primeiro.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'O Artigo 29 do CTB estabelece que, em cruzamentos não sinalizados, a preferência de passagem é de quem se aproxima pela direita do condutor.',
              whyOthersAreWrong:
                'A largura da via, tamanho do veículo ou quem buzinou primeiro não alteram as regras de trânsito.',
              hack: 'Direita livre, pode seguir. Carro na direita, pare e seja gentil!',
            },
            {
              id: 2,
              category: 'Legislação',
              difficulty: 'Média',
              question:
                'Você está aguardando para entrar em uma rotatória que não possui placas de sinalização. Um veículo já está circulando dentro dela. De quem é a preferência de passagem?',
              options: [
                'Sua, desde que você acesse a rotatória de forma rápida.',
                'Do veículo que já está circulando dentro da rotatória.',
                'Do veículo que estiver desenvolvendo maior velocidade.',
                'Do veículo de maior porte.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'De acordo com o CTB, a preferência na rotatória pertence sempre àquele veículo que já iniciou e está realizando a circulação por ela.',
              whyOthersAreWrong:
                'A velocidade e o tamanho do veículo nunca definem a preferência nas rotatórias e entrar correndo é infração e causa acidentes.',
              hack: 'Rotatória é igual fila de banco: quem já entrou na área circular tem a preferência sobre quem quer entrar!',
            },
            {
              id: 3,
              category: 'Legislação',
              difficulty: 'Fácil',
              question:
                'Em uma via onde há cruzamento com linha férrea (passagem de nível) sem cancela, de quem é a preferência de passagem?',
              options: [
                'Do veículo que chegar primeiro no cruzamento.',
                'Sempre do veículo que se desloca sobre trilhos (trem).',
                'Do veículo que estiver subindo a ladeira.',
                'Sempre do veículo que trafega pela direita.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Os veículos que se deslocam sobre trilhos têm preferência de passagem absoluta sobre todos os demais, devido à grande distância que precisam para frear por completo.',
              whyOthersAreWrong:
                'Nenhum carro de passeio ou caminhão tem preferência sobre um trem, independente do lado ou da ladeira.',
              hack: 'Trem não freia rápido! Pare, olhe e escute antes de cruzar qualquer linha férrea.',
            },
            {
              id: 4,
              category: 'Legislação',
              difficulty: 'Fácil',
              question:
                'De acordo com o CTB, os veículos destinados a socorro de incêndio e salvamento, as ambulâncias e viaturas de polícia gozam de preferência de trânsito quando:',
              options: [
                'Estiverem trafegando por vias expressas.',
                'Identificados por dispositivos regulamentares de alarme sonoro e iluminação intermitente vermelha ativa em serviço de urgência.',
                'Trafegando no sentido de descida da serra.',
                'Estiverem acima do limite de velocidade máximo da via.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Estes veículos especiais apenas têm prioridade de passagem e trânsito quando estiverem com os dispositivos sonoros (sirene) e luminosos (giroflex) ligados, indicando urgência real.',
              whyOthersAreWrong:
                'Não basta ser uma ambulância; se ela estiver vazia e desligada voltando para a garagem, ela obedece aos sinais normais de trânsito.',
              hack: 'Giroflex ligado + barulho da sirene = Abra caminho e dê passagem imediatamente!',
            },
            {
              id: 5,
              category: 'Legislação',
              difficulty: 'Média',
              question:
                'Você está transitando por uma avenida e quer entrar em uma rodovia federal. Quem possui a preferência de tráfego nesse ponto de encontro?',
              options: [
                'Você, pois quem vem da avenida urbana sempre tem preferência.',
                'O condutor do veículo que já estiver circulando pela rodovia.',
                'O veículo que estiver desenvolvendo menor velocidade no momento do acesso.',
                'A preferência deve ser decidida por meio do uso breve da buzina.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'O CTB determina que os condutores que circulam pelas rodovias principais têm prioridade absoluta sobre aqueles que pretendem ingressar nela vindos de vias secundárias.',
              whyOthersAreWrong:
                'Vias urbanas secundárias ou marginais devem sempre aguardar a passagem dos veículos que já estão embalados na velocidade constante da rodovia.',
              hack: 'Rodovia é via de alta velocidade. Deixe quem já está nela passar primeiro antes de se integrar à pista!',
            },
          ],
        },
        {
          id: 102,
          title: 'Infrações e Carteira Provisória',
          duration: '6 min',
          content: {
            youtubeId: '',
            videoTitle: 'A Regra de Ouro para Não Perder a PPD',
            videoDuration: '3 min',
            summary: [
              'A Permissão para Dirigir (PPD) é válida por exatamente um ano.',
              'O condutor com PPD perde o direito à CNH definitiva se cometer qualquer infração GRAVE ou GRAVÍSSIMA.',
              'A CNH Provisória também é cancelada se o condutor for REINCIDENTE em infrações de natureza MÉDIA.',
              'Se perder a PPD, o aluno deve reiniciar todo o processo de autoescola (CFC) do zero.',
              'Luzes do painel acesas ou documentação atrasada geram infrações que pesam na provisória.',
            ],
            hack: 'No primeiro ano com a CNH provisória, dirija com atenção redobrada! Cometer uma grave, gravíssima ou duas médias anula sua carteira inteira.',
            realLife:
              'Durante seu primeiro ano de habilitação provisória em Curitiba, você evita emprestar seu carro para pessoas que possam cometer multas de radar, pois a pontuação de velocidade vai para o seu prontuário.',
            curiosity:
              'Muitos motoristas pensam que infrações leves cancelam a provisória, mas você pode cometer quantas multas leves (3 pontos) quiser sem perder a PPD, embora deva evitá-las!',
          },
          questions: [
            {
              id: 1,
              category: 'Legislação',
              difficulty: 'Média',
              question:
                'Durante o período de 1 ano de validade da Permissão para Dirigir (PPD), o condutor não poderá obter a CNH definitiva caso cometa:',
              options: [
                'Uma infração de trânsito leve.',
                'Uma infração grave, gravíssima ou reincidir em infração média.',
                'Apenas infrações de natureza média.',
                'Qualquer infração que gere multa leve no sistema.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'O Artigo 148 do CTB impõe que o candidato só receberá a carteira definitiva se não cometer infrações de natureza grave, gravíssima, ou for reincidente em infrações de nível médio.',
              whyOthersAreWrong:
                'Infrações leves ou uma única infração média não impedem a retirada da CNH definitiva.',
              hack: 'Regra do primeiro ano de direção: Errou feio (Grave/Gravíssima) ou errou médio duas vezes? Volta para a autoescola do zero!',
            },
            {
              id: 2,
              category: 'Legislação',
              difficulty: 'Média',
              question:
                'Dirigir o veículo automotor com a validade da Carteira Nacional de Habilitação (CNH) vencida há mais de 30 dias é considerado:',
              options: [
                'Uma infração leve com retenção do documento.',
                'Uma infração gravíssima, gerando multa e recolhimento da habilitação.',
                'Apenas uma infração média sem pontos na carteira.',
                'Permitido por lei se estiver em rodovia federal.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Trafegar com a CNH vencida por mais de 30 dias é infração gravíssima (7 pontos), punida com multa e recolhimento da habilitação vencida pelo agente.',
              whyOthersAreWrong:
                'Não há tolerância após 30 dias. Não é uma mera infração leve ou média e a lei vale igualmente para qualquer via pública.',
              hack: 'Até 30 dias de vencimento é tolerado por lei. No dia 31 vira gravíssima (7 pontos)!',
            },
            {
              id: 3,
              category: 'Legislação',
              difficulty: 'Fácil',
              question:
                'Qual das opções abaixo representa o valor de pontuação adicionado à CNH do condutor ao cometer uma infração de trânsito de natureza Grave?',
              options: ['7 pontos.', '5 pontos.', '4 pontos.', '3 pontos.'],
              correctAnswerIndex: 1,
              explanation:
                'As infrações de trânsito somam pontos de acordo com a gravidade: Gravíssima = 7; Grave = 5; Média = 4; Leve = 3.',
              whyOthersAreWrong:
                '7 pontos é para gravíssimas. 4 pontos para médias e 3 pontos para leves.',
              hack: 'Grave lembra GRITO de cinco letras: G-R-A-V-E = 5 pontos!',
            },
            {
              id: 4,
              category: 'Legislação',
              difficulty: 'Média',
              question:
                'Toda infração de trânsito gera uma punição, porém as medidas administrativas diferenciam-se das penalidades. Qual das opções é uma Medida Administrativa?',
              options: [
                'A aplicação da multa em dinheiro.',
                'O recolhimento do documento de habilitação.',
                'A suspensão do direito de dirigir por 12 meses.',
                'A cassação da CNH do condutor.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'As medidas administrativas servem para sanar problemas na hora da fiscalização de forma imediata e quase todas começam com as letras R ou T (Retenção, Remoção, Recolhimento, Transbordo).',
              whyOthersAreWrong:
                'Multa, Suspensão e Cassação são penalidades formais aplicadas por processo administrativo, nunca aplicadas de imediato na via pelo policial.',
              hack: "Lembre-se do macete do 'R' e 'T': se começa com R ou T, é MEDIDA ADMINISTRATIVA! (Retenção, Remoção, Recolhimento).",
            },
            {
              id: 5,
              category: 'Legislação',
              difficulty: 'Difícil',
              question:
                'O condutor que for flagrado dirigindo sob a influência de álcool ou se recusar a realizar o teste do bafômetro cometerá qual tipo de infração de trânsito?',
              options: [
                'Infração grave com multa administrativa simples.',
                'Infração gravíssima com fator multiplicador de 10 vezes no valor da multa e suspensão do direito de dirigir por 12 meses.',
                'Infração média com advertência verbal do policial.',
                'Apenas recolhimento do veículo, sem autuação em prontuário.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Dirigir sob efeito de álcool ou recusar o bafômetro são infrações gravíssimas (7 pontos), com multa multiplicada por 10 e suspensão compulsória da carteira por 12 meses.',
              whyOthersAreWrong:
                'Não é infração grave ou média e a recusa ao teste do bafômetro acarreta exatamente as mesmas penalidades graves do teste positivo.',
              hack: 'Se beber, chame um carro por aplicativo. Preserve vidas e poupe 10 vezes o valor de uma multa!',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Direção Defensiva',
      description:
        'Como prever perigos e evitar acidentes mesmo diante de erros alheios.',
      estimatedTime: '30 min',
      icon: <ShieldAlert className="w-5 h-5 text-indigo-600" />,
      colorClass: 'bg-indigo-50 text-indigo-600',
      accentBg: 'bg-indigo-500',
      missions: [
        {
          id: 201,
          title: 'Aquaplanagem e Pneus',
          duration: '5 min',
          content: {
            youtubeId: 'f9DAsmS7YvQ',
            videoTitle: 'O Perigo Oculto da Aquaplanagem',
            videoDuration: '3 min',
            summary: [
              'Aquaplanagem é a perda total de contato dos pneus com o solo devido a uma fina película de água na pista.',
              'As causas principais são: velocidade excessiva, pneus carecas e muita água acumulada no asfalto.',
              'Para prevenir o perigo: reduza a velocidade em dias de chuva e mantenha os pneus em ótimo estado.',
              'Se o carro flutuar: nunca pise no freio e não faça movimentos bruscos no volante.',
              'Procedimento correto: tire suavemente o pé do acelerador e mantenha o volante alinhado reto.',
            ],
            hack: 'Tirou o pé, o carro desce e recupera a tração; se pisar no freio de repente, o carro rodopia na pista como sabonete!',
            realLife:
              'Durante uma forte pancada de chuva na BR-277 sentido litoral do Paraná, você sente o carro flutuar e a direção ficar extremamente leve. Você mantém a calma, solta o acelerador e segura firme o volante reto até sentir o pneu tocar o asfalto novamente.',
            curiosity:
              'Os sulcos do pneu servem exclusivamente para canalizar e expulsar a água. Se o pneu tiver sulcos menores que 1,6 mm de profundidade (limite legal do indicador TWI), ele perderá aderência facilmente!',
          },
          questions: [
            {
              id: 1,
              category: 'Direção Defensiva',
              difficulty: 'Difícil',
              question:
                'Qual deve ser a atitude imediata do condutor ao perceber que o veículo está sofrendo o fenômeno da aquaplanagem?',
              options: [
                'Pisar no freio com força para travar as rodas.',
                'Virar o volante rapidamente de um lado para o outro.',
                'Tirar o pé do acelerador e manter o volante alinhado sem movimentos bruscos.',
                'Acelerar para aumentar a tração das rodas dianteiras.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Sem contato com o chão, qualquer manobra brusca causa perda de controle assim que o pneu tocar o asfalto novamente. A desaceleração gradual é a única forma segura.',
              whyOthersAreWrong:
                'Frear trava os pneus e faz o carro girar no asfalto molhado. Virar o volante bruscamente causa capotamento instantâneo quando o atrito retorna.',
              hack: 'Na água: pé fora do acelerador, braços firmes e volante reto!',
            },
            {
              id: 2,
              category: 'Direção Defensiva',
              difficulty: 'Fácil',
              question:
                'Para evitar acidentes em condições de pista molhada, o condutor deve saber que a profundidade mínima aceitável dos sulcos de um pneu, por lei (TWI), é de:',
              options: [
                '0,5 milímetros.',
                '1,6 milímetros.',
                '3,0 milímetros.',
                '5,0 milímetros.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Por determinação das resoluções do CONTRAN, os pneus não podem rodar com sulcos inferiores a 1,6 mm, medidos pelo marcador TWI do próprio pneu.',
              whyOthersAreWrong:
                'Abaixo de 1,6 mm o pneu é considerado careca e gera multa grave. Valores de 3,0 mm ou mais são saudáveis, mas o mínimo legal é 1,6 mm.',
              hack: 'Pneu abaixo de 1,6 mm é patins de gelo na estrada de chuva. Mantenha os pneus saudáveis!',
            },
            {
              id: 3,
              category: 'Direção Defensiva',
              difficulty: 'Média',
              question:
                'Qual a melhor postura em termos de direção defensiva para evitar o início de uma aquaplanagem ao se deparar com água acumulada na pista?',
              options: [
                'Aumentar a velocidade do veículo para passar rápido pela poça.',
                'Desligar os faróis para não refletir na água.',
                'Reduzir preventivamente a velocidade antes de passar pelo trecho alagado.',
                'Trafegar bem próximo ao acostamento utilizando o pisca-alerta ligado.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'A redução de velocidade antes da área alagada diminui a força de sustentação da água sobre os pneus, impedindo que o carro comece a planar.',
              whyOthersAreWrong:
                'Correr sobre a água facilita a flutuação. Ligar pisca-alerta em movimento confunde outros motoristas e é infração.',
              hack: 'Água na pista? Pé leve antes de entrar na poça de chuva!',
            },
            {
              id: 4,
              category: 'Direção Defensiva',
              difficulty: 'Média',
              question:
                'As condições adversas de tempo (clima), como neblina, chuva e vento forte, interferem na direção. Sob neblina espessa, qual luz dos faróis deve ser utilizada?',
              options: [
                'Luz alta, para clarear as nuvens de névoa.',
                'Luz baixa dos faróis ou farol de neblina específico.',
                'Manter apenas o pisca-alerta ligado.',
                'Desligar totalmente os faróis para enxergar a linha lateral.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'A luz baixa (ou de neblina) ilumina o asfalto por baixo das gotículas de água. A luz alta reflete na neblina espessa como um espelho e ofusca o próprio condutor.',
              whyOthersAreWrong:
                'Luz alta piora a visibilidade em caso de névoa. Pisca-alerta com o carro andando é infração e assusta motoristas atrás.',
              hack: 'Névoa ou chuva = Use luz baixa! Luz alta cria uma barreira de luz branca na sua frente.',
            },
            {
              id: 5,
              category: 'Direção Defensiva',
              difficulty: 'Difícil',
              question:
                'Durante a chuva, a visibilidade e o atrito dos pneus são drasticamente afetados. O atrito do pneu com o asfalto é menor em qual momento da chuva?',
              options: [
                'Após horas de chuva ininterrupta.',
                'No início da chuva, quando a água se mistura à poeira e ao óleo acumulados na pista.',
                'Quando a água começa a evaporar do asfalto quente.',
                'A aderência é igual em todos os momentos de chuva.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Logo que começam a cair os primeiros pingos, a água do céu cria uma pasta escorregadia ao se misturar com o óleo e a poeira antiga da via. Depois de muito tempo chovendo, essa sujeira é lavada.',
              whyOthersAreWrong:
                'A água limpa oferece mais aderência que a lama formada no início de uma garoa inicial.',
              hack: 'Primeiros pingos de chuva? Reduza o pé! A pista vira uma manteiga antes de lavar de vez!',
            },
          ],
        },
        {
          id: 202,
          title: 'Distâncias e Frenagem',
          duration: '6 min',
          content: {
            youtubeId: '',
            videoTitle: 'Calculando a Distância Ideal de Seguimento',
            videoDuration: '3 min',
            summary: [
              'Distância de seguimento: espaço seguro mantido à frente para evitar colisão traseira se o carro frear do nada.',
              'Regra dos 2 segundos: o tempo padrão de referência recomendado para pistas secas.',
              'Distância de parada total: a soma da distância de reação (ver e agir) mais a distância de frenagem (frear até parar).',
              'A distância de seguimento deve ser dobrada (4 segundos) sob chuva, neblina, noite ou ao seguir veículos pesados.',
              'Colisões traseiras ocorrem quase sempre por falta de atenção ou proximidade excessiva.',
            ],
            hack: "Encontre um ponto fixo, conte: 'um mil e um, um mil e dois'. Se passar pelo ponto antes de terminar de falar, afaste-se!",
            realLife:
              'Ao dirigir pela Linha Verde debaixo de garoa fina típica curitibana, você expande voluntariamente sua distância do carro da frente, garantindo espaço de escape seguro.',
            curiosity:
              'Em altas velocidades, a distância de frenagem aumenta exponencialmente. Se você dobrar a velocidade do seu carro, a distância que ele precisa para parar por completo após pisar no freio aumenta em quatro vezes!',
          },
          questions: [
            {
              id: 1,
              category: 'Direção Defensiva',
              difficulty: 'Média',
              question:
                'A distância necessária para o condutor perceber o perigo, reagir e acionar o freio até que o veículo pare totalmente é chamada de:',
              options: [
                'Distância de reação.',
                'Distância de frenagem.',
                'Distância de seguimento.',
                'Distância de parada.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'A distância de parada é a soma total de todas as etapas: desde o momento em que se vê o perigo (reação) até a imobilização completa após acionar o freio (frenagem).',
              whyOthersAreWrong:
                'Reação é só o início. Frenagem é do pedal até a parada. Seguimento é o espaço que você mantém andando constantemente.',
              hack: 'Soma tudo = Parada total! Reação + Frenagem = Parada.',
            },
            {
              id: 2,
              category: 'Direção Defensiva',
              difficulty: 'Média',
              question:
                'O tempo que se passa entre o momento em que o motorista percebe o perigo à frente e o instante em que pisa de fato no pedal do freio é chamado de:',
              options: [
                'Tempo de parada.',
                'Tempo de frenagem.',
                'Tempo de reação.',
                'Tempo de seguimento.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'O tempo de reação médio de um motorista saudável é de aproximadamente 1 segundo. É o período de processamento do cérebro entre ver o obstáculo e mover o pé até o pedal.',
              whyOthersAreWrong:
                'Frenagem se refere apenas ao tempo de atuação mecânica do freio, após o pedal já ter sido acionado.',
              hack: 'Vi o perigo e levei o pé ao freio: esse é o tempo de REAÇÃO (você agiu à imagem).',
            },
            {
              id: 3,
              category: 'Direção Defensiva',
              difficulty: 'Fácil',
              question:
                'A regra dos 2 segundos é recomendada na Direção Defensiva para manter uma distância segura de:',
              options: [
                'Frenagem lateral.',
                'Seguimento ou segurança do carro à frente.',
                'Ultrapassagem em cruzamentos.',
                'Parada nos semáforos.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'A contagem prática de 2 segundos serve para dar espaço suficiente de escape e reação em relação ao carro que trafega na nossa frente.',
              whyOthersAreWrong:
                'A contagem não se aplica a manobras laterais ou de ultrapassagem em cruzamento urbano.',
              hack: 'Dois segundos para o carro da frente é o padrão do DETRAN para pistas secas!',
            },
            {
              id: 4,
              category: 'Direção Defensiva',
              difficulty: 'Difícil',
              question:
                'Condições físicas do próprio condutor afetam diretamente a sua condução. Se o motorista estiver cansado ou sob efeito de cansaço extremo, o que ocorre?',
              options: [
                'Seu tempo de reação diminui e seus reflexos ficam mais rápidos.',
                'O tempo de reação aumenta, tornando suas respostas ao perigo mais lentas.',
                'A distância de reação se mantém a mesma por memória mecânica.',
                'A força no pedal de freio triplica automaticamente por espasmo muscular.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'O cansaço, álcool ou sono retardam o processamento do cérebro. Com isso, o motorista leva mais tempo para decidir pisar no freio (tempo de reação aumenta).',
              whyOthersAreWrong:
                'Falar que o tempo diminui significa que você ficou mais veloz, o que é o oposto do que ocorre com cansaço.',
              hack: 'Cérebro devagar = Tempo de reação MAIOR. Você demora mais segundos para frear!',
            },
            {
              id: 5,
              category: 'Direção Defensiva',
              difficulty: 'Média',
              question:
                'Você está transitando atrás de um caminhão grande em velocidade constante. De acordo com os preceitos de Direção Defensiva, sua postura em relação à distância de seguimento deve ser:',
              options: [
                'Diminuir a distância para evitar o vento frontal e reduzir o consumo de combustível.',
                'Aumentar a distância de segurança para garantir visibilidade e espaço de manobra caso ele pare.',
                'Manter-se no ponto cego do veículo longo para não incomodar o motorista.',
                'Andar exatamente colado para ler as placas informativas traseiras.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Caminhões bloqueiam totalmente a visão de obstáculos à frente. Afastar-se dele permite que você enxergue buracos antes de passar por eles, além de dar tempo de frenagem se ele parar bruscamente.',
              whyOthersAreWrong:
                'Colar atrás de um caminhão te esconde totalmente dos retrovisores dele (ponto cego) e elimina seu espaço de visão frontal.',
              hack: 'Se você não enxerga os espelhos laterais do caminhoneiro, ele também não sabe que você está ali!',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Primeiros Socorros',
      description:
        'Noções básicas para estabilizar uma situação de acidente antes do resgate.',
      estimatedTime: '15 min',
      icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
      colorClass: 'bg-rose-50 text-rose-600',
      accentBg: 'bg-rose-500',
      missions: [
        {
          id: 301,
          title: 'Sinalização e Emergência',
          duration: '4 min',
          status: 'current',
          content: {
            youtubeId: '',
            videoTitle: 'Passos Importantes de Sinalização',
            videoDuration: '3 min',
            summary: [
              'Ao presenciar um acidente, a prioridade absoluta número 1 é sinalizar o local antes de fazer qualquer outra coisa.',
              'Use o triângulo de sinalização, galhos de árvores e acione o pisca-alerta do seu carro no acostamento.',
              'A distância do triângulo é calculada em passos largos de acordo com o limite de velocidade da pista.',
              'Em dias de chuva, neblina ou à noite, a distância de sinalização deve ser sempre dobrada.',
              'Se encontrar uma curva na contagem de passos, passe a curva, zere a contagem e reinicie a contagem do início.',
            ],
            hack: 'Regra básica do DETRAN: se o limite é 60 km/h, use 60 passos de dia e seco. Se estiver chovendo ou for à noite, multiplique por 2 e faça 120 passos!',
            realLife:
              'Você vê uma colisão na rodovia BR-277 rumo a Paranaguá debaixo de neblina espessa na serra. Você para no acostamento de forma segura, liga seu pisca-alerta e caminha com cuidado para montar a sinalização bem antes da curva.',
            curiosity:
              'Prestar socorro em caso de acidentes é uma obrigação legal. A omissão de socorro é crime capitulado no Código de Trânsito Brasileiro e gera punições severas, mesmo para quem não causou a colisão!',
          },
          questions: [
            {
              id: 1,
              category: 'Primeiros Socorros',
              difficulty: 'Média',
              question:
                'Ao presenciar um acidente de trânsito em uma rodovia com velocidade máxima de 100 km/h, durante uma noite escura e chuvosa, qual a distância correta para iniciar a sinalização?',
              options: [
                'Ligar apenas o pisca-alerta do seu próprio veículo.',
                'Posicionar o triângulo a 100 passos largos do acidente.',
                'Posicionar o triângulo a 200 passos largos do acidente.',
                'Apenas ligar para o resgate sem descer do carro.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Com pista seca e de dia, seriam 100 passos. Como as condições são desfavoráveis (chuva e escuridão noturna), a distância deve ser multiplicada por 2, resultando em 200 passos.',
              whyOthersAreWrong:
                '100 passos é o limite para tempo seco. Ligar apenas o pisca-alerta não avisa motoristas distantes que andam a 100 km/h.',
              hack: 'Tempo ruim ou de noite? Dobre a contagem! Velocidade 100 vira 200 passos largos.',
            },
            {
              id: 2,
              category: 'Primeiros Socorros',
              difficulty: 'Fácil',
              question:
                'Ao prestar socorro a uma vítima consciente de queda de moto que reclama de fortes dores no pescoço, qual deve ser a sua atitude em relação ao capacete dela?',
              options: [
                'Retirar o capacete imediatamente para facilitar sua ventilação de ar.',
                'Não retirar o capacete e aguardar a chegada do socorro médico especializado (Siate/Samu).',
                'Retirar apenas se a vítima estiver desmaiada ou com frio.',
                'Pedir para a própria vítima retirar o equipamento para ver se dói.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'A retirada do capacete por pessoas sem o treinamento técnico adequado pode causar lesões irreparáveis na coluna cervical (pescoço), levando à tetraplegia ou óbito.',
              whyOthersAreWrong:
                'Todas as alternativas que sugerem a remoção do capacete de forma amadora trazem riscos severos à integridade física da vítima.',
              hack: 'Capacete de motociclista acidentado não se move! Só quem tira são os paramédicos treinados.',
            },
            {
              id: 3,
              category: 'Primeiros Socorros',
              difficulty: 'Fácil',
              question:
                'Uma vítima de acidente de trânsito está muito nervosa e reclama de intensa sede no local. Qual conduta deve ser adotada em termos de primeiros socorros?',
              options: [
                'Oferecer bastante água com açúcar para acalmá-la.',
                'Oferecer pequenas doses de refrigerante gelado.',
                'Não dar nenhum tipo de líquido ou alimento para a vítima sob hipótese alguma.',
                'Forçá-la a comer algum doce para elevar sua glicose no sangue.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'A vítima pode precisar passar por cirurgia imediata de urgência no hospital (o estômago deve estar vazio para a anestesia geral). Além disso, ela pode engasgar e asfixiar.',
              whyOthersAreWrong:
                'Oferecer comida, refrigerante ou água com açúcar pode causar infecções e comprometer procedimentos de cirurgia médica futuros.',
              hack: 'Regra número um dos acidentados: Não alimente nem dê água de beber! Apenas molhe suavemente os lábios dela com gaze se estiverem muito secos.',
            },
            {
              id: 4,
              category: 'Primeiros Socorros',
              difficulty: 'Média',
              question:
                'Você está contando os passos largos para colocar o triângulo na pista após um acidente. No meio da contagem, você se depara com uma curva acentuada. O que deve ser feito de acordo com as normas?',
              options: [
                'Ignorar a curva e terminar a contagem no mesmo lugar.',
                'Colocar o triângulo exatamente no início da curva.',
                'Caminhar até passar o trecho de curva, zerar a contagem e iniciar os passos novamente a partir dali.',
                'Desistir da sinalização e retornar para perto do veículo batido.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'A sinalização serve para avisar quem vem embalado na via rápida. Se o triângulo ficar dentro da curva ou logo após dela, quem vem na estrada não verá a tempo. Zerar após a curva garante que o aviso fique visível no trecho reto.',
              whyOthersAreWrong:
                'Colocar o triângulo dentro da curva de visibilidade ruim não dá tempo de frenagem aos carros que vêm atrás.',
              hack: 'Encontrou curva no caminho? Passe por ela, zere a conta e comece a contar de novo!',
            },
            {
              id: 5,
              category: 'Primeiros Socorros',
              difficulty: 'Média',
              question:
                'Qual o telefone oficial de contato de emergência para acionar o Serviço de Atendimento Móvel de Urgência (SAMU) e o Corpo de Bombeiros (SIATE no Paraná), respectivamente?',
              options: ['190 e 191.', '192 e 193.', '193 e 192.', '197 e 194.'],
              correctAnswerIndex: 1,
              explanation:
                'O SAMU atende pelo telefone 192, focado em emergências médicas clínicas. O Corpo de Bombeiros (Siate) atende pelo telefone 193, focado em resgates com traumas físicos de colisões.',
              whyOthersAreWrong:
                '190 é Polícia Militar e 191 é Polícia Rodoviária Federal. 197 é Polícia Civil.',
              hack: 'Dois de SAMU (192) e Três de Bombeiros (193). Memorize essa sequência clássica de socorro!',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Cidadania e Meio Ambiente',
      description:
        'Relações sociais no trânsito e controle da poluição veicular.',
      estimatedTime: '15 min',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      colorClass: 'bg-blue-50 text-blue-600',
      accentBg: 'bg-blue-500',
      missions: [
        {
          id: 401,
          title: 'Poluição e Cidadania',
          duration: '4 min',
          status: 'current',
          content: {
            youtubeId: '',
            videoTitle: 'Meio Ambiente e o Papel do Condutor',
            videoDuration: '2 min',
            summary: [
              'O trânsito urbano é um dos maiores emissores de poluentes atmosféricos e de ruídos nas cidades.',
              'Os gases tóxicos emitidos pelos motores incluem o perigoso Monóxido de Carbono (CO), gás letal e inodoro.',
              'O catalisador instalado no escapamento filtra e reduz drasticamente a toxicidade dos gases do motor.',
              'Modificar ilegalmente o silencioso do escapamento ou buzinar sem motivo gera poluição sonora.',
              'Despejar lixo para fora das janelas do carro polui a via e é infração média punida com multa.',
            ],
            hack: 'O catalisador é o filtro inteligente do carro: ele purifica os gases nocivos antes de serem dispersados no ar público!',
            realLife:
              'Ao fazer a revisão mecânica do carro em uma oficina credenciada de Curitiba, você garante que as emissões e filtros estão de acordo com as leis do Proconve, demonstrando respeito à saúde pública.',
            curiosity:
              'Buzinar em áreas próximas a hospitais ou de forma prolongada e estridente fora das situações permitidas é infração leve e gera multas!',
          },
          questions: [
            {
              id: 1,
              category: 'Meio Ambiente',
              difficulty: 'Fácil',
              question:
                'Qual o componente mecânico acoplado ao escapamento cuja função é converter gases altamente tóxicos em substâncias menos poluentes antes de saírem do cano de descarga?',
              options: [
                'O Silenciador Traseiro.',
                'O Conversor Catalítico (Catalisador).',
                'O Distribuidor de Ar.',
                'O Radiador de Filtro.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'O catalisador promove uma reação química que purifica e transforma substâncias tóxicas da fumaça em gases inertes e inofensivos à saúde humana.',
              whyOthersAreWrong:
                'Silenciador serve para abafar ruídos acústicos. Radiador esfria a água do motor. Distribuidor de ar não atua sobre a fumaça de saída.',
              hack: "Catalisador realiza 'catálise' (química) para purificar os poluentes da combustão!",
            },
            {
              id: 2,
              category: 'Meio Ambiente',
              difficulty: 'Média',
              question:
                'Dentre os gases poluentes emitidos pelos automóveis na queima de combustíveis fósseis, qual deles é inodoro, incolor e altamente tóxico, podendo ser fatal se inalado em locais fechados?',
              options: [
                'O Monóxido de Carbono (CO).',
                'O Oxigênio Puro (O2).',
                'O Dióxido de Enxofre.',
                'O Nitrogênio do escapamento.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'O Monóxido de Carbono (CO) impede o transporte de oxigênio no sangue humano, podendo asfixiar e matar rapidamente se acumulado em locais confinados como garagens sem ventilação.',
              whyOthersAreWrong:
                'Oxigênio é o ar saudável de respirar. Dióxido de enxofre tem cheiro forte e característico.',
              hack: 'Monóxido de Carbono é o veneno invisível e silencioso que sai dos motores ligados!',
            },
            {
              id: 3,
              category: 'Meio Ambiente',
              difficulty: 'Fácil',
              question:
                'A utilização da buzina em áreas urbanas de forma prolongada, estridente ou entre as 22 horas e as 6 horas da manhã é caracterizada como infração de trânsito de natureza:',
              options: [
                'Grave, punida com suspensão imediata.',
                'Leve, punida com multa e perda de 3 pontos na carteira.',
                'Média, gerando apreensão automática da buzina.',
                'Permitida por lei caso queira saudar pedestres conhecidos.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'O uso irregular da buzina perturba o silêncio urbano e o descanso coletivo, sendo classificada como infração leve (3 pontos) no prontuário do condutor.',
              whyOthersAreWrong:
                'Buzina ilegal não gera perda de habilitação nem é infração grave. Também não é permitido usá-la como saudação constante.',
              hack: 'Buzina à noite ou em excesso gera perturbação coletiva e multa leve (3 pontos)!',
            },
            {
              id: 4,
              category: 'Meio Ambiente',
              difficulty: 'Fácil',
              question:
                'Arremessar ou abandonar na via pública objetos ou substâncias retirados de dentro do veículo em movimento constitui qual tipo de atitude perante o CTB?',
              options: [
                'Apenas infração leve de trânsito.',
                'Falta de cidadania com o meio ambiente e infração de trânsito de natureza média, com perda de 4 pontos na habilitação.',
                'Atitude permitida se o lixo for orgânico (como cascas de frutas).',
                'Infração gravíssima com recolhimento imediato do automóvel.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Lançar lixo ou objetos de dentro do carro polui a cidade e pode atingir motociclistas ou pedestres, sendo infração média (4 pontos).',
              whyOthersAreWrong:
                'Casca de fruta também polui as vias e é infração. Não gera apreensão do veículo nem é infração leve simples.',
              hack: 'Lixo no chão do trânsito gera multa de 4 pontos. Guarde uma sacolinha plástica no carro!',
            },
            {
              id: 5,
              category: 'Meio Ambiente',
              difficulty: 'Média',
              question:
                'O trânsito de veículos com vazamento contínuo de óleo do motor, combustível ou fluido de freio nas vias públicas contribui diretamente para a poluição do meio ambiente e é considerado:',
              options: [
                'Apenas um descuido estético sem punições.',
                'Uma infração grave de trânsito, com retenção do veículo para regularização e multa.',
                'Permitido por lei em dias chuvosos por diluir a sujeira.',
                'Infração leve sem atribuição de pontuação.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Rodar derramando substâncias químicas nas vias degrada o asfalto, prejudica os rios urbanos e põe em risco a segurança de motos que podem escorregar, sendo infração grave.',
              whyOthersAreWrong:
                'Vazar fluidos na rua não é meramente um problema estético e acarreta riscos físicos e mecânicos graves.',
              hack: 'Fluido derramado na via = Perigo na pista e infração GRAVE de 5 pontos!',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Mecânica Básica',
      description:
        'Conceitos básicos de funcionamento e manutenção preventiva do automóvel.',
      estimatedTime: '15 min',
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      colorClass: 'bg-amber-50 text-amber-600',
      accentBg: 'bg-amber-500',
      missions: [
        {
          id: 501,
          title: 'Painel de Alertas',
          duration: '4 min',
          status: 'current',
          content: {
            youtubeId: 'AdfM4vBv4-E',
            videoTitle: 'O Significado das Cores das Luzes do Painel',
            videoDuration: '3 min',
            summary: [
              'O painel de instrumentos utiliza cores intuitivas para informar a gravidade dos problemas mecânicos.',
              'Luzes Verdes ou Azuis: indicam que algum equipamento útil está ligado e funcionando bem (faróis, desembaçador).',
              'Luzes Amarelas ou Laranjas: indicam alerta ou falha mecânica leve. Você pode rodar até a oficina mais próxima.',
              'Luzes Vermelhas: indicam emergência gravíssima no motor ou freios. Pare o veículo e desligue a chave imediatamente.',
              'Os alertas vermelhos mais críticos são: pressão do óleo do motor e superaquecimento da água do radiador.',
            ],
            hack: 'Vermelho é sangue: pare na hora! Amarelo é gema de ovo: atenção e agende oficina. Verde é floresta livre: está tudo ótimo!',
            realLife:
              'Você está dirigindo pela Linha Verde em Curitiba quando a luz vermelha de óleo (formato de almotolia) acende. Você encosta imediatamente no acostamento e desliga o carro, salvando o motor de quebrar por completo.',
            curiosity:
              'Muitos carros modernos possuem um modo de proteção que desliga ou limita eletronicamente a potência do motor se a temperatura subir demais ou a pressão do óleo cair para evitar um prejuízo enorme!',
          },
          questions: [
            {
              id: 1,
              category: 'Mecânica',
              difficulty: 'Fácil',
              question:
                'Durante a condução do veículo, o condutor observa que uma luz indicadora vermelha, com o símbolo de uma almotolia (recipiente de bico longo que goteja), acendeu no painel. O que isso indica?',
              options: [
                'O nível de combustível entrou na reserva crítica de rodagem.',
                'Problema ou ausência de pressão no sistema de óleo lubrificante do motor.',
                'Falta de água no sistema de arrefecimento do radiador.',
                'O freio de mão está acionado de forma contínua.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'O símbolo da almotolia representa o óleo do motor. A luz vermelha indica que a pressão do óleo caiu bruscamente, o que impede a lubrificação e queima as peças móveis do motor por atrito extremo.',
              whyOthersAreWrong:
                'Combustível tem ícone de bomba de postos. Água do radiador tem um termômetro com ondas embaixo. Freio de mão possui uma exclamação dentro de um círculo.',
              hack: 'Luz de óleo é a lâmpada do gênio: se acendeu em vermelho, seu motor está prestes a derreter. Pare o carro!',
            },
            {
              id: 2,
              category: 'Mecânica',
              difficulty: 'Média',
              question:
                'Uma luz de painel vermelha em formato de termômetro boiando sobre ondas de água acende acompanhada de aviso sonoro. O que o motorista deve prever?',
              options: [
                'Que a temperatura externa da via está muito fria.',
                'Superaquecimento crítico no motor (falha de arrefecimento). O veículo deve ser desligado imediatamente.',
                'Que o reservatório do limpador de para-brisas secou.',
                'Apenas que a água do radiador completou o nível máximo.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Este ícone indica que o sistema de arrefecimento não está conseguindo manter o motor na temperatura ideal, fervendo a água. Insistir em andar derreterá os pistões e o motor.',
              whyOthersAreWrong:
                'O termômetro não mede o clima externo do carro, nem se refere ao reservatório de esguicho de vidro.',
              hack: 'Chaleira fervendo no painel? Pare no acostamento, espere a fumaça passar e nunca abra a tampa do reservatório quente para evitar queimaduras graves!',
            },
            {
              id: 3,
              category: 'Mecânica',
              difficulty: 'Fácil',
              question:
                'Dentre os fluidos essenciais para o funcionamento seguro do carro, qual atua diretamente sobre o sistema que imobiliza as rodas do automóvel?',
              options: [
                'O óleo lubrificante do motor.',
                'A água destilada do radiador.',
                'O fluido hidráulico de freios.',
                'O aditivo de ar condicionado.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'O fluido de freio é um líquido incompressível que transmite a força mecânica gerada no pedal até as pastilhas que prendem os discos de freio das rodas.',
              whyOthersAreWrong:
                'Óleo do motor protege as engrenagens internas. Água controla o calor das peças móveis.',
              hack: 'Pisou no freio e sentiu o pedal descer macio até o fundo? Pode ser falta ou vazamento de fluido de freio!',
            },
            {
              id: 4,
              category: 'Mecânica',
              difficulty: 'Média',
              question:
                'Qual o tipo de manutenção veicular realizada preventivamente pelo condutor para identificar desgastes comuns antes que gerem panes graves na via?',
              options: [
                'Manutenção corretiva pós-quebra.',
                'Manutenção preventiva baseada em revisões e trocas de filtros, velas e óleos por tempo ou quilometragem.',
                'Reparo de emergência com fita adesiva.',
                'Apenas lavagem estética da carroceria.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'A manutenção preventiva busca trocar as peças e fluidos recomendados pelo manual antes que apresentem falha definitiva na pista.',
              whyOthersAreWrong:
                'Corretiva é quando a peça já quebrou e você ficou parado esperando guincho. Limpeza estética não conserta problemas mecânicos.',
              hack: 'Prevenir com revisões programadas custa até 4 vezes menos do que consertar o motor quebrado na estrada!',
            },
            {
              id: 5,
              category: 'Mecânica',
              difficulty: 'Difícil',
              question:
                'Qual o dispositivo do sistema de alimentação que realiza a dosagem ideal de combustível e ar nos veículos modernos por controle eletrônico?',
              options: [
                'O carburador mecânico.',
                'O sistema de injeção eletrônica.',
                'A bomba de direção.',
                'O motor de partida elétrica.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'A injeção eletrônica usa sensores para monitorar a quantidade de ar admitida no motor e calcula a quantidade exata de combustível a ser injetada para queimar de forma ideal e econômica.',
              whyOthersAreWrong:
                'O carburador realizava essa mistura em carros muito antigos de forma analógica. Bomba de direção serve apenas para deixar o volante leve.',
              hack: "Injeção eletrônica: a luz amarela em formato de 'motorzinho' acende se houver algum erro de queima no sistema de alimentação!",
            },
          ],
        },
      ],
    },
  ],
}

// --- Integração das missões extras aos módulos existentes (não altera UI) ---
DETRAN_COURSE_DATABASE.modules[0].missions.push(...missoesLegislacaoExtra) // Legislação de Trânsito
DETRAN_COURSE_DATABASE.modules[1].missions.push(...missoesDefensivaExtra) // Direção Defensiva
DETRAN_COURSE_DATABASE.modules[2].missions.push(...missoesSocorrosExtra) // Primeiros Socorros
DETRAN_COURSE_DATABASE.modules[3].missions.push(...missoesAmbienteExtra) // Cidadania e Meio Ambiente
DETRAN_COURSE_DATABASE.modules[4].missions.push(...missoesMecanicaExtra) // Mecânica Básica

// --- SERVIÇO DE ARMAZENAMENTO E PERSISTÊNCIA (LOCALSTORAGE) ---
const StorageService = {
  storageKey: 'detran_estudos_profile_v2',

  getInitialProfile() {
    const todayStr = new Date().toISOString().split('T')[0]
    return {
      userName: 'Amor',
      creationDate: new Date().toISOString(),
      daysUntilExam: 42,
      examDate: '2026-08-30',
      globalProgress: 0,
      xp: 0,
      streak: 1,
      lastAccessDate: todayStr,
      completedMissions: [],
      stats: {
        answered: 0,
        correct: 0,
        wrong: 0,
      },
    }
  },

  loadProfile() {
    try {
      const data = localStorage.getItem(this.storageKey)
      if (!data) {
        const newProfile = this.getInitialProfile()
        this.saveProfile(newProfile)
        return newProfile
      }

      let profile = JSON.parse(data)
      profile = this.validateAndSyncStreak(profile)
      return profile
    } catch (e) {
      console.error('Erro ao carregar do localStorage', e)
      return this.getInitialProfile()
    }
  },

  saveProfile(profile) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(profile))
    } catch (e) {
      console.error('Erro ao salvar no localStorage', e)
    }
  },

  validateAndSyncStreak(profile) {
    const todayStr = new Date().toISOString().split('T')[0]
    const lastAccess = profile.lastAccessDate

    if (lastAccess === todayStr) {
      return profile
    }

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split('T')[0]

    let updatedProfile = { ...profile, lastAccessDate: todayStr }

    if (lastAccess === yesterdayStr) {
      updatedProfile.streak += 1
    } else {
      updatedProfile.streak = 1
    }

    this.saveProfile(updatedProfile)
    return updatedProfile
  },

  completeMission(profile, missionId, xpGained) {
    if (profile.completedMissions.includes(missionId)) {
      return profile
    }

    const updatedMissions = [...profile.completedMissions, missionId]

    const totalMissionsInCourse = DETRAN_COURSE_DATABASE.modules.reduce(
      (sum, m) => sum + m.missions.length,
      0
    )
    const newGlobalProgress = Math.round(
      (updatedMissions.length / totalMissionsInCourse) * 100
    )

    const updatedProfile = {
      ...profile,
      completedMissions: updatedMissions,
      xp: profile.xp + xpGained,
      globalProgress: newGlobalProgress,
    }

    this.saveProfile(updatedProfile)
    return updatedProfile
  },

  registerQuizStats(profile, answeredCount, correctCount, wrongCount) {
    const updatedProfile = {
      ...profile,
      stats: {
        answered: profile.stats.answered + answeredCount,
        correct: profile.stats.correct + correctCount,
        wrong: profile.stats.wrong + wrongCount,
      },
    }
    this.saveProfile(updatedProfile)
    return updatedProfile
  },
}

// --- SERVIÇO DE ARMAZENAMENTO DO SIMULADO OFICIAL (independente do StorageService existente) ---
const SimuladoStorage = {
  storageKey: 'detran_simulados_historico_v1',

  loadHistory() {
    try {
      const raw = localStorage.getItem(this.storageKey)
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      console.error('Erro ao carregar histórico de simulados', e)
      return []
    }
  },

  saveResult(result) {
    try {
      const history = this.loadHistory()
      history.unshift(result)
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(history.slice(0, 30))
      )
    } catch (e) {
      console.error('Erro ao salvar resultado do simulado', e)
    }
  },
}

// Junta as questões de TODOS os módulos e TODAS as missões em uma única lista,
// com uma chave global única (mission.id-question.id) para nunca repetir na mesma prova.
function getTodasAsQuestoesParaSimulado() {
  const todas = []
  DETRAN_COURSE_DATABASE.modules.forEach((module) => {
    module.missions.forEach((mission) => {
      ;(mission.questions || []).forEach((q) => {
        todas.push({
          ...q,
          simuladoKey: `${mission.id}-${q.id}`,
          moduleTitle: module.title,
          missionTitle: mission.title,
        })
      })
    })
  })
  return todas
}

function embaralhar(lista) {
  const copia = [...lista]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

function formatarTempoSimulado(totalSegundos) {
  const seguro = Math.max(0, totalSegundos)
  const min = Math.floor(seguro / 60)
    .toString()
    .padStart(2, '0')
  const seg = Math.floor(seguro % 60)
    .toString()
    .padStart(2, '0')
  return `${min}:${seg}`
}

const SIMULADO_TOTAL_QUESTOES = 30
const SIMULADO_TEMPO_SEGUNDOS = 60 * 60 // 60 minutos, igual à prova oficial do Detran-PR
const SIMULADO_MINIMO_ACERTOS = 20 // nota de corte oficial atual do Detran-PR (30 questões, 20 acertos)

export default function App() {
  const [profile, setProfile] = useState(() => StorageService.loadProfile())

  const [currentView, setCurrentView] = useState('home') // 'home' | 'module' | 'mission' | 'quiz' | 'success'
  const [selectedModule, setSelectedModule] = useState(null)
  const [selectedMission, setSelectedMission] = useState(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // --- Estados do Quiz ---
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)

  // --- Estados do Simulado Oficial (novo, isolado do quiz de missão) ---
  const [simuladoQuestions, setSimuladoQuestions] = useState([])
  const [simuladoIndex, setSimuladoIndex] = useState(0)
  const [simuladoAnswers, setSimuladoAnswers] = useState({}) // { [simuladoKey]: optionIndex }
  const [simuladoSecondsLeft, setSimuladoSecondsLeft] = useState(
    SIMULADO_TEMPO_SEGUNDOS
  )
  const [simuladoResult, setSimuladoResult] = useState(null)

  // Calcula dias restantes dinamicamente até a prova (baseado na data atual de 12 de Julho de 2026)
  const calculateDaysLeft = () => {
    const today = new Date('2026-07-12')
    const exam = new Date(profile.examDate)
    const diffTime = exam - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  const daysLeft = calculateDaysLeft()

  const getMappedMissionsOfModule = (module) => {
    let metCurrent = false
    return module.missions.map((mission) => {
      const isCompleted = profile.completedMissions.includes(mission.id)
      let status = 'locked'

      if (isCompleted) {
        status = 'completed'
      } else if (!metCurrent) {
        status = 'current'
        metCurrent = true
      }

      return {
        ...mission,
        status,
      }
    })
  }

  const getModuleProgress = (module) => {
    const completedCountInModule = module.missions.filter((m) =>
      profile.completedMissions.includes(m.id)
    ).length
    return Math.round((completedCountInModule / module.missions.length) * 100)
  }

  const handleModuleClick = (module) => {
    const enrichedModule = {
      ...module,
      progress: getModuleProgress(module),
      missions: getMappedMissionsOfModule(module),
    }
    setSelectedModule(enrichedModule)
    setCurrentView('module')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedModule(null)
  }

  const handleBackToModule = () => {
    if (selectedModule) {
      const freshModule = DETRAN_COURSE_DATABASE.modules.find(
        (m) => m.id === selectedModule.id
      )
      handleModuleClick(freshModule)
    } else {
      setCurrentView('home')
    }
    setSelectedMission(null)
    setIsVideoPlaying(false)
  }

  const handleMissionClick = (mission) => {
    if (mission.status === 'locked') return
    setSelectedMission(mission)
    setCurrentView('mission')
  }

  const handleContinueStudying = () => {
    const incompleteModule =
      DETRAN_COURSE_DATABASE.modules.find((m) => getModuleProgress(m) < 100) ||
      DETRAN_COURSE_DATABASE.modules[0]
    handleModuleClick(incompleteModule)
  }

  const handleStartQuiz = () => {
    const questionsPool = selectedMission.questions || []
    selectedMission.activeQuestions = questionsPool

    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setCorrectAnswersCount(0)
    setCurrentView('quiz')
  }

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return

    const currentQuestion =
      selectedMission.activeQuestions[currentQuestionIndex]
    const isCorrect = selectedOption === currentQuestion.correctAnswerIndex

    if (isCorrect) {
      setCorrectAnswersCount((prev) => prev + 1)
    }

    setIsAnswered(true)
  }

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1
    if (nextIndex < selectedMission.activeQuestions.length) {
      setCurrentQuestionIndex(nextIndex)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      const totalQuestions = selectedMission.activeQuestions.length
      const wrongs = totalQuestions - correctAnswersCount

      let updatedProfile = StorageService.registerQuizStats(
        profile,
        totalQuestions,
        correctAnswersCount,
        wrongs
      )

      updatedProfile = StorageService.completeMission(
        updatedProfile,
        selectedMission.id,
        50
      )

      setProfile(updatedProfile)
      setCurrentView('success')
    }
  }

  // --- Handlers do Simulado Oficial (100% novos, não tocam no quiz de missão acima) ---

  const handleStartSimulado = () => {
    const pool = getTodasAsQuestoesParaSimulado()
    const embaralhadas = embaralhar(pool).slice(
      0,
      Math.min(SIMULADO_TOTAL_QUESTOES, pool.length)
    )

    setSimuladoQuestions(embaralhadas)
    setSimuladoIndex(0)
    setSimuladoAnswers({})
    setSimuladoSecondsLeft(SIMULADO_TEMPO_SEGUNDOS)
    setSimuladoResult(null)
    setCurrentView('simuladoQuiz')
  }

  const handleSimuladoSelectOption = (optionIndex) => {
    const perguntaAtual = simuladoQuestions[simuladoIndex]
    if (!perguntaAtual) return
    setSimuladoAnswers((prev) => ({
      ...prev,
      [perguntaAtual.simuladoKey]: optionIndex,
    }))
  }

  const handleSimuladoNext = () => {
    if (simuladoIndex < simuladoQuestions.length - 1) {
      setSimuladoIndex((i) => i + 1)
    }
  }

  const handleSimuladoPrev = () => {
    if (simuladoIndex > 0) {
      setSimuladoIndex((i) => i - 1)
    }
  }

  const handleFinishSimulado = () => {
    const total = simuladoQuestions.length
    let acertos = 0
    simuladoQuestions.forEach((q) => {
      const respostaDada = simuladoAnswers[q.simuladoKey]
      if (respostaDada !== undefined && respostaDada === q.correctAnswerIndex) {
        acertos += 1
      }
    })
    const erros = total - acertos
    const porcentagem = total > 0 ? Math.round((acertos / total) * 100) : 0
    const aprovado = acertos >= SIMULADO_MINIMO_ACERTOS
    const tempoGastoSegundos = SIMULADO_TEMPO_SEGUNDOS - simuladoSecondsLeft

    const resultado = {
      data: new Date().toISOString(),
      total,
      acertos,
      erros,
      porcentagem,
      nota: acertos,
      aprovado,
      tempoGastoSegundos,
    }

    setSimuladoResult(resultado)
    SimuladoStorage.saveResult(resultado)
    setCurrentView('simuladoResult')
  }

  const handleSimuladoFinalizarAntecipado = () => {
    const respondidas = Object.keys(simuladoAnswers).length
    const confirmar = window.confirm(
      respondidas < simuladoQuestions.length
        ? `Você respondeu ${respondidas} de ${simuladoQuestions.length} questões. Deseja finalizar o simulado agora mesmo assim?`
        : 'Deseja finalizar o simulado agora?'
    )
    if (confirmar) {
      handleFinishSimulado()
    }
  }

  const handleVoltarParaSimuladoInicio = () => {
    setCurrentView('simulado')
  }

  // Cronômetro regressivo de 60 minutos, ativo apenas durante a prova do simulado.
  useEffect(() => {
    if (currentView !== 'simuladoQuiz') return undefined
    const intervalo = setInterval(() => {
      setSimuladoSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(intervalo)
  }, [currentView])

  // Quando o tempo acaba, finaliza automaticamente o simulado.
  useEffect(() => {
    if (currentView === 'simuladoQuiz' && simuladoSecondsLeft === 0) {
      handleFinishSimulado()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simuladoSecondsLeft, currentView])

  return (
    <div className="min-h-screen bg-[#EFEFF4] font-sans text-[#1C1C1E] selection:bg-blue-200 flex items-center justify-center p-0 sm:p-6 transition-all duration-500">
      {/* Injeção de CSS personalizado para animações e estilos premium */}
      <style>{`
        @keyframes gentle-fade-up {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes ring-pulse {
          0% {
            transform: scale(0.9) translate(-50%, -50%);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.3) translate(-50%, -50%);
            opacity: 0;
          }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        .animate-premium-fade {
          animation: gentle-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-ring-pulse {
          animation: ring-pulse 2s infinite cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite ease-in-out;
        }

        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .premium-btn-shadow {
          box-shadow: 
            0 4px 12px rgba(37, 99, 235, 0.2),
            inset 0 -4px 0px rgba(29, 78, 216, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.3);
        }
        .premium-btn-shadow:active {
          box-shadow: 
            0 2px 4px rgba(37, 99, 235, 0.1),
            inset 0 -1px 0px rgba(29, 78, 216, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }

        .btn-blue-shadow {
          box-shadow: 0 4px 0px #1d4ed8, 0 8px 16px rgba(37, 99, 235, 0.15);
        }
        .btn-blue-shadow:active {
          transform: translateY(2px);
          box-shadow: 0 2px 0px #1d4ed8;
        }

        .mission-btn-completed {
          box-shadow: 0 6px 0px #10b981, 0 12px 24px rgba(16, 185, 129, 0.2);
        }
        .mission-btn-completed:active {
          transform: translateY(4px);
          box-shadow: 0 2px 0px #10b981, 0 4px 12px rgba(16, 185, 129, 0.1);
        }

        .mission-btn-current {
          box-shadow: 0 6px 0px #2563eb, 0 12px 24px rgba(37, 99, 235, 0.3);
        }
        .mission-btn-current:active {
          transform: translateY(4px);
          box-shadow: 0 2px 0px #2563eb, 0 4px 12px rgba(37, 99, 235, 0.15);
        }

        .mission-btn-locked {
          box-shadow: 0 6px 0px #d1d5db;
        }
      `}</style>

      {/* Frame do Celular */}
      <div className="w-full max-w-md h-screen sm:h-[880px] bg-[#F2F2F7] sm:rounded-[48px] sm:shadow-[0_24px_60px_rgba(0,0,0,0.12)] border-0 sm:border-[10px] border-white/90 relative flex flex-col overflow-hidden transition-all duration-500">
        {/* Detalhe do Alto-falante/Câmera mock-up no topo */}
        <div className="hidden sm:block absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-white/40 rounded-full z-50 backdrop-blur-md border border-white/10" />

        {/* --- VIEW: HOME (COM PAINEL DE PERFIL E ESTATÍSTICAS) --- */}
        {currentView === 'home' && (
          <div className="flex-1 overflow-y-auto px-7 pt-12 pb-16 no-scrollbar animate-premium-fade">
            {/* Top Bar de Perfil Premium (Duolingo Style) */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-white shadow-sm">
                  <User size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">
                    SEU PERFIL
                  </span>
                  <span className="text-sm font-black text-gray-800">
                    {profile.userName}
                  </span>
                </div>
              </div>

              {/* Badges de Conquistas */}
              <div className="flex gap-2">
                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/50 px-3 py-1 rounded-full text-xs font-black text-amber-700 shadow-sm animate-pulse">
                  <Flame size={14} fill="currentColor" />
                  {profile.streak} d
                </div>
                <div className="flex items-center gap-1 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-xs font-black text-blue-700 shadow-sm">
                  <Sparkles size={13} fill="currentColor" />
                  {profile.xp} XP
                </div>
              </div>
            </div>

            {/* 1. Header Minimalista */}
            <header className="mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight mb-3 text-[#1C1C1E] flex items-center gap-1.5">
                Olá, pronto para focar? 🎯
              </h1>

              <div className="inline-flex items-center bg-[#FDF0EB] text-[#BF5E3B] px-4 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-sm shadow-[#BF5E3B]/5">
                <Calendar size={13} className="mr-1.5" strokeWidth={2.5} />
                FALTAM {daysLeft} DIAS PARA A SUA VITÓRIA
              </div>
            </header>

            {/* 2. Card de Ação Principal (Hero Premium) */}
            <section className="mb-10 animate-premium-fade animate-delay-100">
              <div className="bg-white p-7 rounded-[36px] shadow-[0_16px_36px_rgba(0,0,0,0.025)] border border-[#E5E5EA]/40">
                <div className="flex justify-between items-baseline mb-4">
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Sua CNH • Progresso Geral
                    </p>
                    <p className="text-3xl font-black text-[#1C1C1E] tracking-tight">
                      {profile.globalProgress}%
                      <span className="text-sm font-semibold text-gray-400 ml-1.5 tracking-normal">
                        concluídos
                      </span>
                    </p>
                  </div>

                  <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full">
                    Gabaritar! 🚀
                  </span>
                </div>

                {/* Barra de Progresso Suave */}
                <div className="w-full bg-[#E5E5EA] rounded-full h-3.5 mb-7 overflow-hidden p-[2px]">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${profile.globalProgress}%` }}
                  />
                </div>

                <button
                  onClick={handleContinueStudying}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4.5 font-bold tracking-wide premium-btn-shadow active:scale-[0.97] hover:scale-[1.01] active:translate-y-[2px] transition-all duration-200 flex justify-center items-center gap-3 text-[17px] cursor-pointer"
                >
                  <Play fill="currentColor" size={16} className="ml-1" />
                  Continuar de onde parou
                </button>
              </div>
            </section>

            {/* Card de Entrada do Simulado Oficial (novo, não altera os demais cards) */}
            <section className="mb-8 animate-premium-fade animate-delay-125">
              <div
                onClick={() => setCurrentView('simulado')}
                className="bg-gradient-to-br from-[#1C1C1E] to-[#2C2C2E] p-6 rounded-[32px] shadow-[0_16px_36px_rgba(0,0,0,0.15)] flex items-center gap-4 cursor-pointer active:scale-[0.98] hover:scale-[1.01] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0">
                  <Target size={26} className="text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-0.5">
                    Simulado Oficial
                  </span>
                  <h3 className="text-white font-extrabold text-[16px] leading-snug">
                    30 questões · 60 minutos · Nota real do Detran-PR
                  </h3>
                </div>
                <ChevronRight size={20} className="text-white/40 shrink-0" />
              </div>
            </section>

            {/* Painel de Estatísticas de Respostas */}
            {profile.stats.answered > 0 && (
              <section className="mb-8 animate-premium-fade animate-delay-150">
                <div className="bg-white p-5 rounded-[28px] border border-[#E5E5EA]/40 shadow-[0_4px_16px_rgba(0,0,0,0.015)] flex justify-around text-center">
                  <div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">
                      RESOLVIDAS
                    </span>
                    <span className="text-lg font-black text-gray-800">
                      {profile.stats.answered}
                    </span>
                  </div>
                  <div className="h-8 w-px bg-gray-100" />
                  <div>
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest block">
                      ACERTOS
                    </span>
                    <span className="text-lg font-black text-emerald-600">
                      {profile.stats.correct}
                    </span>
                  </div>
                  <div className="h-8 w-px bg-gray-100" />
                  <div>
                    <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest block">
                      ERROS
                    </span>
                    <span className="text-lg font-black text-rose-600">
                      {profile.stats.wrong}
                    </span>
                  </div>
                </div>
              </section>
            )}

            {/* 3. Módulos de Estudo */}
            <section className="animate-premium-fade animate-delay-200">
              <div className="flex justify-between items-center mb-5 px-1">
                <h2 className="text-[19px] font-extrabold text-[#1C1C1E] tracking-tight">
                  Módulos de Estudo
                </h2>
                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                  {DETRAN_COURSE_DATABASE.modules.length} Áreas
                </span>
              </div>

              <div className="space-y-4">
                {DETRAN_COURSE_DATABASE.modules.map((module) => {
                  const moduleProgress = getModuleProgress(module)
                  const isCompleted = moduleProgress === 100
                  const completedMissionsInModule = module.missions.filter(
                    (m) => profile.completedMissions.includes(m.id)
                  ).length

                  return (
                    <div
                      key={module.id}
                      onClick={() => handleModuleClick(module)}
                      className="bg-white p-5 rounded-[28px] shadow-[0_8px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.035)] border border-[#E5E5EA]/40 flex flex-col gap-4 active:scale-[0.97] hover:scale-[1.01] transition-all duration-300 cursor-pointer relative group overflow-hidden"
                    >
                      {isCompleted && (
                        <div className="absolute right-0 top-0 h-full w-2 bg-emerald-500" />
                      )}

                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300 ${module.colorClass}`}
                        >
                          {module.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-extrabold text-[#1C1C1E] text-[16px] leading-snug mb-1 truncate group-hover:text-blue-600 transition-colors duration-200">
                            {module.title}
                          </h3>
                          <p className="text-xs text-gray-400 line-clamp-1 mb-1.5 font-medium">
                            {module.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-gray-400">
                            <span className="flex items-center gap-1">
                              <CheckCircle2
                                size={13}
                                className={
                                  isCompleted
                                    ? 'text-emerald-500'
                                    : 'text-gray-300'
                                }
                              />
                              {completedMissionsInModule}/
                              {module.missions.length} missões
                            </span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-1">
                              <Clock size={12} className="text-gray-300" />
                              {module.estimatedTime}
                            </span>
                          </div>
                        </div>
                      </div>

                      {!isCompleted && (
                        <div className="w-full bg-[#E5E5EA] rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${module.accentBg}`}
                            style={{ width: `${moduleProgress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        )}

        {/* --- VIEW: MODULE (DUOLINGO-STYLE PATH) --- */}
        {currentView === 'module' && selectedModule && (
          <div className="flex-1 flex flex-col h-full bg-[#F2F2F7] animate-premium-fade">
            {/* Top Bar Fixa e Premium */}
            <header className="sticky top-0 bg-[#F2F2F7]/95 backdrop-blur-md px-6 py-5 border-b border-[#E5E5EA]/40 z-30 flex items-center gap-4">
              <button
                onClick={handleBackToHome}
                className="w-10 h-10 bg-white hover:bg-gray-50 active:scale-95 rounded-full flex items-center justify-center shadow-sm border border-gray-100 transition-all cursor-pointer text-gray-700"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-0.5">
                  MÓDULO SELECIONADO
                </span>
                <h2 className="text-md font-extrabold text-[#1C1C1E] truncate">
                  {selectedModule.title}
                </h2>
              </div>

              {/* Mini barra de progresso do módulo no topo */}
              <div className="w-20 bg-gray-200 h-2.5 rounded-full overflow-hidden p-[1px]">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-700"
                  style={{ width: `${getModuleProgress(selectedModule)}%` }}
                />
              </div>
            </header>

            {/* Trilha de Missões (Duolingo Layout) */}
            <div className="flex-1 overflow-y-auto px-6 py-10 no-scrollbar relative">
              {/* Linha de conexão do fundo */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-[#E5E5EA]" />

              <div className="relative flex flex-col gap-12 items-center">
                {selectedModule.missions?.map((mission, index) => {
                  const alignmentPositions = [
                    '-translate-x-8 sm:-translate-x-12', // Esquerda
                    'translate-x-0', // Centro
                    'translate-x-8 sm:translate-x-12', // Direita
                  ]
                  const positionClass = alignmentPositions[index % 3]

                  const isCompleted = mission.status === 'completed'
                  const isCurrent = mission.status === 'current'
                  const isLocked = mission.status === 'locked'

                  return (
                    <div
                      key={mission.id}
                      className={`flex flex-col items-center justify-center transition-all duration-500 ${positionClass}`}
                    >
                      {/* Botão de Missão (Grande e Arredondado) */}
                      <div className="relative z-10">
                        {/* Auréola de pulsação para a missão ativa */}
                        {isCurrent && (
                          <>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/20 rounded-full animate-ring-pulse z-0 pointer-events-none" />
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-white p-1 rounded-md shadow-md animate-bounce z-20">
                              <Star size={10} fill="currentColor" />
                            </div>
                          </>
                        )}

                        <button
                          disabled={isLocked}
                          onClick={() => handleMissionClick(mission)}
                          className={`
                            relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer text-white z-10
                            ${isCompleted ? 'bg-emerald-500 hover:bg-emerald-400 mission-btn-completed' : ''}
                            ${isCurrent ? 'bg-blue-600 hover:bg-blue-500 mission-btn-current' : ''}
                            ${isLocked ? 'bg-gray-300 text-gray-500 cursor-not-allowed mission-btn-locked' : ''}
                          `}
                        >
                          {isCompleted && (
                            <CheckCircle2
                              size={24}
                              fill="white"
                              className="text-emerald-500"
                              strokeWidth={2.5}
                            />
                          )}
                          {isCurrent && (
                            <Play
                              size={20}
                              fill="white"
                              className="ml-1 text-white"
                            />
                          )}
                          {isLocked && (
                            <Lock size={18} className="text-gray-400" />
                          )}
                        </button>
                      </div>

                      {/* Tooltip flutuante de informações integrado à trilha */}
                      <div
                        onClick={() => !isLocked && handleMissionClick(mission)}
                        className={`
                          mt-4 p-3.5 rounded-2xl border text-center transition-all duration-300 max-w-[200px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] cursor-pointer
                          ${isCompleted ? 'bg-white border-[#E5E5EA] text-[#1C1C1E]' : ''}
                          ${isCurrent ? 'bg-white border-blue-200 ring-2 ring-blue-500/10 text-[#1C1C1E]' : ''}
                          ${isLocked ? 'bg-white/50 border-[#E5E5EA]/40 text-gray-400 cursor-not-allowed' : ''}
                        `}
                      >
                        <span
                          className={`text-[9px] font-black tracking-widest uppercase block mb-1 ${isCurrent ? 'text-blue-600' : 'text-gray-400'}`}
                        >
                          MISSÃO {index + 1}
                        </span>
                        <h4 className="font-extrabold text-xs leading-tight mb-1 line-clamp-2">
                          {mission.title}
                        </h4>
                        <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-gray-400">
                          <Clock size={10} />
                          {mission.duration}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* --- VIEW: MISSION CONTENT --- */}
        {currentView === 'mission' && selectedMission && (
          <div className="flex-1 flex flex-col h-full bg-[#F2F2F7] animate-premium-fade">
            {/* Header Fixo e Transparente */}
            <header className="sticky top-0 bg-[#F2F2F7]/90 backdrop-blur-md px-6 py-4 border-b border-[#E5E5EA]/40 z-30 flex items-center justify-between">
              <button
                onClick={handleBackToModule}
                className="w-10 h-10 bg-white hover:bg-gray-50 active:scale-95 rounded-full flex items-center justify-center shadow-sm border border-gray-100 transition-all cursor-pointer text-gray-700"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>

              <div className="flex-1 text-center px-4">
                <span className="text-[9px] font-bold tracking-widest text-blue-600 uppercase block">
                  {selectedModule?.title || 'Estudo'}
                </span>
                <span className="text-xs font-bold text-gray-400">
                  Leitura Rápida • {selectedMission.duration}
                </span>
              </div>

              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                +50XP
              </div>
            </header>

            {/* Conteúdo Dinâmico com Scroll */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7 no-scrollbar pb-24">
              {/* Título da Missão */}
              <div>
                <h1 className="text-2xl font-black text-[#1C1C1E] tracking-tight leading-tight">
                  {selectedMission.title}
                </h1>
              </div>

              {/* 1. VÍDEO INCORPORADO DO YOUTUBE / PLACEHOLDER ELEGANTE */}
              <div className="animate-premium-fade animate-delay-100">
                {selectedMission.content?.youtubeId ? (
                  /* YouTube Embed Real */
                  <div className="w-full aspect-video rounded-[24px] overflow-hidden shadow-lg border border-white/40 bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedMission.content.youtubeId}?autoplay=0&rel=0`}
                      title={selectedMission.content.videoTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  /* Placeholder Ilustrativo e Interativo do Vídeo */
                  <div
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="group relative w-full aspect-video rounded-[24px] bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-900 border border-white/10 shadow-lg overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent)] pointer-events-none" />

                    {!isVideoPlaying ? (
                      <>
                        <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white tracking-wider flex items-center gap-1.5 border border-white/5">
                          <Clock size={11} />
                          {selectedMission.content?.videoDuration || '2 min'} DE
                          DURAÇÃO
                        </div>

                        <div className="w-14 h-14 rounded-full bg-white text-blue-600 shadow-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 relative z-10 active:scale-95">
                          <Play
                            size={24}
                            fill="currentColor"
                            className="ml-1 text-blue-600"
                          />
                        </div>

                        <div className="mt-3 text-center px-4 relative z-10">
                          <p className="text-xs font-bold text-white/90">
                            {selectedMission.content?.videoTitle ||
                              'Vídeo Ilustrativo'}
                          </p>
                          <p className="text-[10px] text-white/50 mt-1 font-semibold">
                            Toque para carregar simulação didática 🎬
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full animate-pulse">
                            SIMULAÇÃO ATIVA...
                          </span>
                          <span className="text-xs text-white/80 font-bold bg-black/40 px-2 py-0.5 rounded">
                            0:45 /{' '}
                            {selectedMission.content?.videoDuration || '2 min'}
                          </span>
                        </div>

                        <div className="flex items-end justify-center gap-1.5 h-12 mb-3">
                          <div
                            className="w-1.5 bg-blue-500 rounded-full h-8 animate-bounce"
                            style={{
                              animationDelay: '0ms',
                              animationDuration: '0.6s',
                            }}
                          />
                          <div
                            className="w-1.5 bg-indigo-500 rounded-full h-12 animate-bounce"
                            style={{
                              animationDelay: '150ms',
                              animationDuration: '0.8s',
                            }}
                          />
                          <div
                            className="w-1.5 bg-blue-400 rounded-full h-6 animate-bounce"
                            style={{
                              animationDelay: '300ms',
                              animationDuration: '0.5s',
                            }}
                          />
                          <div
                            className="w-1.5 bg-white rounded-full h-10 animate-bounce"
                            style={{
                              animationDelay: '450ms',
                              animationDuration: '0.7s',
                            }}
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="h-1 bg-white/30 rounded-full flex-1 overflow-hidden">
                            <div className="h-full bg-blue-500 w-[35%] rounded-full animate-pulse" />
                          </div>
                          <span className="text-[10px] text-white/60 font-bold">
                            Pausar
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* 2. RESUMO EM ATÉ 5 TÓPICOS */}
              <div className="space-y-3 animate-premium-fade animate-delay-100">
                <div className="flex items-center gap-2 mb-1 px-1">
                  <div className="w-1.5 h-4 bg-blue-600 rounded-full" />
                  <h3 className="text-[13px] font-bold text-gray-400 tracking-wider uppercase">
                    O que importa saber:
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {(selectedMission.content?.summary || []).map(
                    (item, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-extrabold text-[10px] mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-xs font-bold leading-relaxed text-[#1C1C1E]">
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* 3. MACETE DA PROVA */}
              <div className="animate-premium-fade animate-delay-200">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/50 p-5 rounded-[28px] relative overflow-hidden shadow-sm">
                  <div className="absolute right-0 top-0 text-amber-300/30 rotate-12 -translate-y-2 translate-x-2">
                    <Sparkles size={80} fill="currentColor" />
                  </div>

                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                      <Lightbulb
                        size={16}
                        className="animate-pulse"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-[11px] font-black tracking-widest text-amber-700 uppercase">
                      MACETE DA PROVA DETRAN
                    </span>
                  </div>

                  <p className="text-xs font-black text-amber-900 leading-relaxed relative z-10">
                    "
                    {selectedMission.content?.hack ||
                      'Preste muita atenção nos enunciados para não cair em pegadinhas comuns.'}
                    "
                  </p>
                </div>
              </div>

              {/* 4. CURIOSIDADE COMPLEMENTAR */}
              {selectedMission.content?.curiosity && (
                <div className="animate-premium-fade animate-delay-250">
                  <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-[28px] flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Info size={16} strokeWidth={2.5} />
                      </div>
                      <span className="text-[11px] font-black tracking-widest text-emerald-700 uppercase">
                        VOCÊ SABIA?
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-emerald-900 leading-relaxed">
                      {selectedMission.content.curiosity}
                    </p>
                  </div>
                </div>
              )}

              {/* 5. SITUAÇÃO DO COTIDIANO */}
              <div className="animate-premium-fade animate-delay-300">
                <div className="bg-white p-5 rounded-[28px] border border-blue-100 shadow-sm flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Compass size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] font-black tracking-widest text-blue-600 uppercase">
                      NA VIDA REAL...
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-gray-600 leading-relaxed">
                    {selectedMission.content?.realLife ||
                      'Imagine essa aplicação em qualquer trajeto prático que você fará no dia a dia.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Rodapé Fixo de Ação */}
            <footer className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md px-6 py-4.5 border-t border-[#E5E5EA]/40 z-30 flex items-center justify-center">
              <button
                onClick={handleStartQuiz}
                className="w-full bg-emerald-500 text-white rounded-2xl py-4 font-bold tracking-wide shadow-[0_4px_12px_rgba(16,185,129,0.2),inset_0_-4px_0px_rgba(4,120,87,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:bg-emerald-400 active:scale-[0.97] hover:scale-[1.01] active:translate-y-[2px] transition-all duration-200 flex justify-center items-center gap-2.5 text-md cursor-pointer animate-bounce-gentle"
              >
                <Zap size={16} fill="currentColor" />
                Iniciar desafio
              </button>
            </footer>
          </div>
        )}

        {/* --- VIEW: QUIZ CHALLENGE (DESAFIO DE QUESTÕES COMENTADAS) --- */}
        {currentView === 'quiz' &&
          selectedMission &&
          selectedMission.activeQuestions && (
            <div className="flex-1 flex flex-col h-full bg-[#F2F2F7] justify-between relative overflow-hidden animate-premium-fade">
              {/* Header com Barra de Progresso do Quiz */}
              <header className="px-6 pt-6 pb-3 bg-[#F2F2F7] border-b border-[#E5E5EA]/30">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={handleBackToModule}
                    className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    Sair do Quiz
                  </button>
                  <span className="text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    XP ACUMULADO: +{correctAnswersCount * 10}XP
                  </span>
                </div>

                {/* Barra de Progresso estilo Duolingo Segmentada */}
                <div className="flex gap-1.5 w-full">
                  {selectedMission.activeQuestions.map((_, index) => {
                    let barClass =
                      'h-2 flex-1 rounded-full transition-all duration-500 '
                    if (index < currentQuestionIndex) {
                      barClass += 'bg-emerald-500' // Respondida
                    } else if (index === currentQuestionIndex) {
                      barClass += 'bg-blue-600 animate-pulse' // Em andamento
                    } else {
                      barClass += 'bg-gray-200' // Não alcançada
                    }
                    return <div key={index} className={barClass} />
                  })}
                </div>
              </header>

              {/* Corpo da Pergunta */}
              <div className="flex-1 overflow-y-auto px-6 py-6 no-scrollbar pb-32">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                      QUESTÃO {currentQuestionIndex + 1} DE{' '}
                      {selectedMission.activeQuestions.length}
                    </span>
                    {selectedMission.activeQuestions[currentQuestionIndex]
                      .category && (
                      <span className="text-[9px] font-bold tracking-widest text-white uppercase bg-indigo-500 px-1.5 py-0.5 rounded shadow-sm">
                        {
                          selectedMission.activeQuestions[currentQuestionIndex]
                            .category
                        }
                      </span>
                    )}
                    {selectedMission.activeQuestions[currentQuestionIndex]
                      .difficulty && (
                      <span
                        className={`text-[9px] font-bold tracking-widest text-white uppercase px-1.5 py-0.5 rounded shadow-sm ${
                          selectedMission.activeQuestions[currentQuestionIndex]
                            .difficulty === 'Fácil'
                            ? 'bg-emerald-500'
                            : selectedMission.activeQuestions[
                                  currentQuestionIndex
                                ].difficulty === 'Média'
                              ? 'bg-amber-500'
                              : 'bg-rose-500'
                        }`}
                      >
                        {
                          selectedMission.activeQuestions[currentQuestionIndex]
                            .difficulty
                        }
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-black leading-snug text-[#1C1C1E] mb-6">
                    {
                      selectedMission.activeQuestions[currentQuestionIndex]
                        .question
                    }
                  </h2>
                </div>

                {/* Alternativas */}
                <div className="space-y-3.5 animate-premium-fade animate-delay-100">
                  {selectedMission.activeQuestions[
                    currentQuestionIndex
                  ].options.map((option, index) => {
                    const isCurrentCorrect =
                      index ===
                      selectedMission.activeQuestions[currentQuestionIndex]
                        .correctAnswerIndex
                    const isSelected = selectedOption === index

                    let cardClass =
                      'w-full text-left p-4.5 rounded-[22px] border-2 transition-all duration-200 cursor-pointer flex items-start gap-3.5 font-bold text-xs leading-relaxed select-none '

                    if (!isAnswered) {
                      if (isSelected) {
                        cardClass +=
                          'bg-blue-50/50 border-blue-500 text-blue-800 shadow-[0_4px_12px_rgba(37,99,235,0.08)] scale-[1.01]'
                      } else {
                        cardClass +=
                          'bg-white border-white hover:border-gray-300 text-gray-700 shadow-[0_4px_12px_rgba(0,0,0,0.015)] active:scale-[0.99]'
                      }
                    } else {
                      if (isCurrentCorrect) {
                        cardClass +=
                          'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-[0_4px_12px_rgba(16,185,129,0.1)]'
                      } else if (isSelected) {
                        cardClass +=
                          'bg-rose-50 border-rose-500 text-rose-800 shadow-[0_4px_12px_rgba(244,63,94,0.1)]'
                      } else {
                        cardClass +=
                          'bg-white/40 border-[#E5E5EA]/40 text-gray-400 opacity-60'
                      }
                    }

                    return (
                      <button
                        key={index}
                        disabled={isAnswered}
                        onClick={() => setSelectedOption(index)}
                        className={cardClass}
                      >
                        <div
                          className={`
                        w-6 h-6 rounded-lg font-extrabold text-[10px] flex items-center justify-center shrink-0 transition-colors
                        ${!isAnswered && isSelected ? 'bg-blue-600 text-white' : ''}
                        ${!isAnswered && !isSelected ? 'bg-gray-100 text-gray-500' : ''}
                        ${isAnswered && isCurrentCorrect ? 'bg-emerald-500 text-white' : ''}
                        ${isAnswered && isSelected && !isCurrentCorrect ? 'bg-rose-500 text-white' : ''}
                        ${isAnswered && !isSelected && !isCurrentCorrect ? 'bg-gray-200/50 text-gray-400' : ''}
                      `}
                        >
                          {String.fromCharCode(65 + index)}
                        </div>

                        <span className="flex-1 mt-0.5">{option}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Painel Inferior de Confirmação & Explicação (Slide Up Premium) */}
              <div
                className={`
              absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E5EA]/50 px-6 py-5 z-40 transition-all duration-500 ease-out
              ${isAnswered ? 'rounded-t-[32px] shadow-[0_-12px_36px_rgba(0,0,0,0.06)]' : 'bg-white/95 backdrop-blur-md'}
            `}
              >
                {!isAnswered ? (
                  <button
                    disabled={selectedOption === null}
                    onClick={handleConfirmAnswer}
                    className={`
                    w-full rounded-2xl py-4 font-bold tracking-wide transition-all duration-200 flex justify-center items-center gap-2 text-md cursor-pointer
                    ${
                      selectedOption !== null
                        ? 'bg-blue-600 text-white btn-blue-shadow hover:bg-blue-500'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }
                  `}
                  >
                    <Check size={18} strokeWidth={3} />
                    Verificar resposta
                  </button>
                ) : (
                  <div className="space-y-4 max-h-[360px] overflow-y-auto no-scrollbar animate-premium-fade">
                    {/* Status Banner */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                          selectedOption ===
                          selectedMission.activeQuestions[currentQuestionIndex]
                            .correctAnswerIndex
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-rose-100 text-rose-600'
                        }`}
                      >
                        {selectedOption ===
                        selectedMission.activeQuestions[currentQuestionIndex]
                          .correctAnswerIndex ? (
                          <CheckCircle2 size={18} strokeWidth={2.5} />
                        ) : (
                          <X size={18} strokeWidth={2.5} />
                        )}
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-black ${
                            selectedOption ===
                            selectedMission.activeQuestions[
                              currentQuestionIndex
                            ].correctAnswerIndex
                              ? 'text-emerald-800'
                              : 'text-rose-800'
                          }`}
                        >
                          {selectedOption ===
                          selectedMission.activeQuestions[currentQuestionIndex]
                            .correctAnswerIndex
                            ? 'Excelente! Você acertou 🎉'
                            : 'Ops! Alternativa incorreta 😢'}
                        </h4>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          LEIA A EXPLICAÇÃO ABAIXO:
                        </p>
                      </div>
                    </div>

                    {/* 1. Explicação Didática */}
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-1">
                      <span className="text-[9px] font-black tracking-widest text-blue-600 uppercase block">
                        POR QUE ESSA É A CERTA?
                      </span>
                      <p className="text-xs font-semibold text-gray-600 leading-relaxed">
                        {
                          selectedMission.activeQuestions[currentQuestionIndex]
                            .explanation
                        }
                      </p>
                    </div>

                    {/* 2. Por que as outras estão incorretas */}
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-1">
                      <span className="text-[9px] font-black tracking-widest text-rose-500 uppercase block">
                        POR QUE AS OUTRAS ESTÃO ERRADAS?
                      </span>
                      <p className="text-xs font-semibold text-gray-500 leading-relaxed">
                        {
                          selectedMission.activeQuestions[currentQuestionIndex]
                            .whyOthersAreWrong
                        }
                      </p>
                    </div>

                    {/* 3. Macete da Questão */}
                    <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/40 flex gap-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                        <Lightbulb size={14} strokeWidth={2.5} />
                      </div>
                      <div>
                        <span className="text-[9px] font-black tracking-widest text-amber-700 uppercase block mb-0.5">
                          TRUQUE DE MEMORIZAÇÃO
                        </span>
                        <p className="text-xs font-black text-amber-900 leading-relaxed">
                          "
                          {
                            selectedMission.activeQuestions[
                              currentQuestionIndex
                            ].hack
                          }
                          "
                        </p>
                      </div>
                    </div>

                    {/* Botão para Próxima Questão */}
                    <button
                      onClick={handleNextQuestion}
                      className="w-full bg-[#1C1C1E] text-white rounded-2xl py-4 font-bold tracking-wide active:scale-[0.98] transition-all flex justify-center items-center gap-2 text-md cursor-pointer"
                    >
                      {currentQuestionIndex + 1 <
                      selectedMission.activeQuestions.length
                        ? 'Próxima pergunta'
                        : 'Ver resultado do desafio'}
                      <ArrowLeft
                        size={16}
                        className="rotate-180"
                        strokeWidth={2.5}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        {/* --- VIEW: SUCCESS/CONGRATULATIONS (MISSÃO CUMPRIDA) --- */}
        {currentView === 'success' && selectedMission && (
          <div className="flex-1 flex flex-col h-full bg-gradient-to-b from-blue-600 to-indigo-700 p-7 justify-between text-white relative overflow-hidden animate-premium-fade">
            {/* Brilhos e Confetes digitais no fundo */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none z-0" />

            <header className="pt-6 text-center relative z-10">
              <span className="text-xs font-black tracking-[0.15em] text-blue-200 uppercase block mb-1">
                EXCELENTE DESEMPENHO
              </span>
              <span className="text-2xl font-black block">
                {selectedModule?.title || 'Módulo'}
              </span>
            </header>

            {/* Troféu Principal */}
            <div className="flex flex-col items-center justify-center text-center py-8 relative z-10">
              <div className="w-24 h-24 rounded-[36px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 animate-bounce-gentle relative">
                <div className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-[#1C1C1E] p-1 rounded-lg">
                  <Sparkles size={14} fill="currentColor" />
                </div>
                <Award size={48} className="text-yellow-400" />
              </div>

              <h2 className="text-3xl font-black tracking-tight leading-tight mb-3">
                Desafio Concluído!
              </h2>

              <p className="text-sm font-semibold text-blue-100 max-w-xs leading-relaxed">
                Você completou com sucesso a missão{' '}
                <strong>"{selectedMission.title}"</strong> e acumulou mais +50
                XP!
              </p>

              {/* Box de XP acumulado */}
              <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4.5 flex gap-4 items-center justify-between min-w-[200px]">
                <div className="text-left">
                  <span className="text-[9px] font-black text-blue-200 uppercase block">
                    DESAFIOS ACERTADOS
                  </span>
                  <span className="text-xl font-black">
                    {correctAnswersCount} de{' '}
                    {selectedMission.activeQuestions?.length || 1} corretas
                  </span>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-right">
                  <span className="text-[9px] font-black text-blue-200 uppercase block">
                    XP GANHO
                  </span>
                  <span className="text-xl font-black text-yellow-300">
                    +50 XP
                  </span>
                </div>
              </div>
            </div>

            {/* Rodapé de Encerramento */}
            <footer className="pb-4 relative z-10">
              <button
                onClick={handleBackToHome}
                className="w-full bg-white text-blue-600 rounded-2xl py-4 font-black tracking-wide shadow-xl active:scale-[0.98] transition-all flex justify-center items-center gap-2 text-md cursor-pointer"
              >
                Voltar para o Início
              </button>
            </footer>
          </div>
        )}

        {/* --- VIEW: SIMULADO OFICIAL — TELA INICIAL (novo, isolado) --- */}
        {currentView === 'simulado' && (
          <div className="flex-1 overflow-y-auto px-7 pt-10 pb-10 no-scrollbar animate-premium-fade">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-1.5 text-gray-400 font-bold text-xs mb-6 active:scale-95 transition-transform cursor-pointer"
            >
              <ArrowLeft size={16} /> Voltar
            </button>

            <div className="w-16 h-16 rounded-2xl bg-[#1C1C1E] flex items-center justify-center mb-5">
              <Target size={28} className="text-amber-400" />
            </div>

            <h1 className="text-2xl font-black tracking-tight text-[#1C1C1E] mb-2">
              Simulado Oficial
            </h1>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-7">
              Uma prova nas mesmas condições da prova real do Detran-PR: 30
              questões aleatórias, sorteadas entre todo o conteúdo já
              cadastrado, com cronômetro de 60 minutos.
            </p>

            <div className="bg-white rounded-[28px] border border-[#E5E5EA]/60 shadow-[0_8px_24px_rgba(0,0,0,0.02)] p-6 mb-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  30 questões, sem repetição
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  60 minutos de prova, igual à prova real
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Trophy size={18} />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  Mínimo de {SIMULADO_MINIMO_ACERTOS} acertos para aprovação
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-50 text-gray-500 flex items-center justify-center shrink-0">
                  <Flag size={18} />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  Pode finalizar antes do tempo quando quiser
                </p>
              </div>
            </div>

            {(() => {
              const historico = SimuladoStorage.loadHistory()
              const ultimo = historico[0]
              if (!ultimo) return null
              return (
                <div className="bg-[#F8F8FA] rounded-2xl p-4 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">
                      Último resultado
                    </span>
                    <span
                      className={`text-sm font-black ${ultimo.aprovado ? 'text-emerald-600' : 'text-rose-600'}`}
                    >
                      {ultimo.acertos}/{ultimo.total} acertos ·{' '}
                      {ultimo.aprovado ? 'Aprovado' : 'Reprovado'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-400">
                    {ultimo.porcentagem}%
                  </span>
                </div>
              )
            })()}

            <button
              onClick={handleStartSimulado}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4.5 font-bold tracking-wide premium-btn-shadow active:scale-[0.97] hover:scale-[1.01] transition-all duration-200 flex justify-center items-center gap-3 text-[17px] cursor-pointer"
            >
              <Play fill="currentColor" size={16} className="ml-1" />
              Iniciar Simulado
            </button>
          </div>
        )}

        {/* --- VIEW: SIMULADO OFICIAL — PROVA (uma questão por vez) --- */}
        {currentView === 'simuladoQuiz' &&
          simuladoQuestions.length > 0 &&
          (() => {
            const pergunta = simuladoQuestions[simuladoIndex]
            const respostaSelecionada = simuladoAnswers[pergunta.simuladoKey]
            const ehUltima = simuladoIndex === simuladoQuestions.length - 1
            const progresso = Math.round(
              ((simuladoIndex + 1) / simuladoQuestions.length) * 100
            )
            const tempoUrgente = simuladoSecondsLeft <= 300 // últimos 5 minutos

            return (
              <div className="flex-1 flex flex-col h-full animate-premium-fade">
                <div className="px-6 pt-8 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handleSimuladoFinalizarAntecipado}
                      className="flex items-center gap-1.5 text-gray-400 font-bold text-xs active:scale-95 transition-transform cursor-pointer"
                    >
                      <ArrowLeft size={16} /> Sair
                    </button>

                    <div
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black tabular-nums ${tempoUrgente ? 'bg-rose-50 text-rose-600 animate-pulse' : 'bg-gray-100 text-gray-600'}`}
                    >
                      <Clock size={13} />
                      {formatarTempoSimulado(simuladoSecondsLeft)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                      Questão {simuladoIndex + 1} de {simuladoQuestions.length}
                    </span>
                    <span className="text-[11px] font-black text-blue-600">
                      {progresso}%
                    </span>
                  </div>
                  <div className="w-full bg-[#E5E5EA] rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progresso}%` }}
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 pb-4 no-scrollbar">
                  <div className="bg-white rounded-[28px] border border-[#E5E5EA]/60 shadow-[0_8px_24px_rgba(0,0,0,0.02)] p-6 mb-4">
                    {pergunta.category && (
                      <span className="inline-block text-[10px] font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-widest mb-3">
                        {pergunta.category}
                      </span>
                    )}
                    <h2 className="text-[17px] font-extrabold text-[#1C1C1E] leading-snug">
                      {pergunta.question}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {pergunta.options.map((opcao, idx) => {
                      const selecionada = respostaSelecionada === idx
                      return (
                        <button
                          key={idx}
                          onClick={() => handleSimuladoSelectOption(idx)}
                          className={`w-full text-left p-4 rounded-2xl border-2 font-bold text-sm transition-all duration-150 flex items-center gap-3 cursor-pointer active:scale-[0.98] ${
                            selecionada
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-[#E5E5EA] bg-white text-gray-700 hover:border-blue-200'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${selecionada ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          {opcao}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <footer className="px-6 pb-8 pt-2 flex gap-3">
                  <button
                    onClick={handleSimuladoPrev}
                    disabled={simuladoIndex === 0}
                    className="flex-1 bg-gray-100 disabled:opacity-40 text-gray-600 rounded-2xl py-4 font-bold flex justify-center items-center gap-1.5 active:scale-[0.97] transition-all cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={18} /> Voltar
                  </button>
                  {ehUltima ? (
                    <button
                      onClick={handleSimuladoFinalizarAntecipado}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl py-4 font-bold flex justify-center items-center gap-1.5 active:scale-[0.97] transition-all cursor-pointer"
                    >
                      Finalizar <Flag size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSimuladoNext}
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4 font-bold flex justify-center items-center gap-1.5 active:scale-[0.97] transition-all cursor-pointer"
                    >
                      Avançar <ChevronRight size={18} />
                    </button>
                  )}
                </footer>
              </div>
            )
          })()}

        {/* --- VIEW: SIMULADO OFICIAL — RESULTADO --- */}
        {currentView === 'simuladoResult' && simuladoResult && (
          <div
            className={`flex-1 flex flex-col h-full p-7 justify-between text-white relative overflow-hidden animate-premium-fade ${simuladoResult.aprovado ? 'bg-gradient-to-b from-emerald-600 to-emerald-800' : 'bg-gradient-to-b from-rose-600 to-rose-800'}`}
          >
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none z-0" />

            <header className="pt-6 text-center relative z-10">
              <span className="text-xs font-black tracking-[0.15em] text-white/70 uppercase block mb-1">
                Simulado Oficial finalizado
              </span>
              <span className="text-2xl font-black block">
                {simuladoResult.aprovado ? 'Aprovado! 🎉' : 'Reprovado'}
              </span>
            </header>

            <div className="flex flex-col items-center justify-center text-center py-6 relative z-10">
              <div className="w-24 h-24 rounded-[36px] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                <Trophy size={44} className="text-yellow-300" />
              </div>

              <h2 className="text-5xl font-black tracking-tight leading-tight mb-1">
                {simuladoResult.nota}/{simuladoResult.total}
              </h2>
              <p className="text-sm font-semibold text-white/80 mb-8">
                {simuladoResult.porcentagem}% de aproveitamento · mínimo para
                aprovar: {SIMULADO_MINIMO_ACERTOS}
              </p>

              <div className="w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4.5 grid grid-cols-3 gap-2 items-center text-center">
                <div>
                  <span className="text-[9px] font-black text-white/60 uppercase block">
                    Acertos
                  </span>
                  <span className="text-xl font-black">
                    {simuladoResult.acertos}
                  </span>
                </div>
                <div className="border-x border-white/20">
                  <span className="text-[9px] font-black text-white/60 uppercase block">
                    Erros
                  </span>
                  <span className="text-xl font-black">
                    {simuladoResult.erros}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-black text-white/60 uppercase block">
                    Tempo
                  </span>
                  <span className="text-xl font-black">
                    {formatarTempoSimulado(simuladoResult.tempoGastoSegundos)}
                  </span>
                </div>
              </div>
            </div>

            <footer className="pb-4 relative z-10 space-y-3">
              <button
                onClick={() => setCurrentView('simuladoReview')}
                className="w-full bg-white text-[#1C1C1E] rounded-2xl py-4 font-black tracking-wide shadow-xl active:scale-[0.98] transition-all flex justify-center items-center gap-2 text-md cursor-pointer"
              >
                Revisar Simulado
              </button>
              <div className="flex gap-3">
                <button
                  onClick={handleStartSimulado}
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl py-3.5 font-bold active:scale-[0.98] transition-all flex justify-center items-center gap-2 text-sm cursor-pointer"
                >
                  <RotateCcw size={15} /> Refazer
                </button>
                <button
                  onClick={handleBackToHome}
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl py-3.5 font-bold active:scale-[0.98] transition-all flex justify-center items-center gap-2 text-sm cursor-pointer"
                >
                  Início
                </button>
              </div>
            </footer>
          </div>
        )}

        {/* --- VIEW: SIMULADO OFICIAL — REVISÃO COMPLETA --- */}
        {currentView === 'simuladoReview' && simuladoResult && (
          <div className="flex-1 overflow-y-auto px-6 pt-8 pb-12 no-scrollbar animate-premium-fade">
            <button
              onClick={() => setCurrentView('simuladoResult')}
              className="flex items-center gap-1.5 text-gray-400 font-bold text-xs mb-5 active:scale-95 transition-transform cursor-pointer"
            >
              <ArrowLeft size={16} /> Voltar ao resultado
            </button>

            <h1 className="text-xl font-black tracking-tight text-[#1C1C1E] mb-1">
              Revisão do Simulado
            </h1>
            <p className="text-xs text-gray-400 font-bold mb-6">
              {simuladoResult.acertos} acertos · {simuladoResult.erros} erros ·{' '}
              {simuladoQuestions.length} questões
            </p>

            <div className="space-y-5">
              {simuladoQuestions.map((pergunta, idx) => {
                const respostaDada = simuladoAnswers[pergunta.simuladoKey]
                const acertou = respostaDada === pergunta.correctAnswerIndex
                const semResposta = respostaDada === undefined

                return (
                  <div
                    key={pergunta.simuladoKey}
                    className="bg-white rounded-[24px] border border-[#E5E5EA]/60 shadow-[0_6px_18px_rgba(0,0,0,0.02)] p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        Questão {idx + 1}{' '}
                        {pergunta.category ? `· ${pergunta.category}` : ''}
                      </span>
                      <span
                        className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase ${
                          semResposta
                            ? 'bg-gray-100 text-gray-500'
                            : acertou
                              ? 'bg-emerald-50 text-emerald-600'
                              : 'bg-rose-50 text-rose-600'
                        }`}
                      >
                        {semResposta
                          ? 'Em branco'
                          : acertou
                            ? 'Acertou'
                            : 'Errou'}
                      </span>
                    </div>

                    <p className="text-sm font-extrabold text-[#1C1C1E] leading-snug mb-4">
                      {pergunta.question}
                    </p>

                    <div className="space-y-2 mb-4">
                      {pergunta.options.map((opcao, optIdx) => {
                        const ehCorreta = optIdx === pergunta.correctAnswerIndex
                        const ehEscolhida = optIdx === respostaDada
                        let estilo = 'border-[#E5E5EA] text-gray-500'
                        if (ehCorreta)
                          estilo =
                            'border-emerald-500 bg-emerald-50 text-emerald-700'
                        else if (ehEscolhida && !ehCorreta)
                          estilo = 'border-rose-500 bg-rose-50 text-rose-700'

                        return (
                          <div
                            key={optIdx}
                            className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-bold ${estilo}`}
                          >
                            {ehCorreta ? (
                              <Check size={14} className="shrink-0" />
                            ) : ehEscolhida ? (
                              <X size={14} className="shrink-0" />
                            ) : (
                              <span className="w-3.5 shrink-0" />
                            )}
                            {opcao}
                          </div>
                        )
                      })}
                    </div>

                    <div className="bg-blue-50 rounded-xl p-3.5 mb-2">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-1">
                        Explicação
                      </span>
                      <p className="text-xs font-semibold text-blue-900 leading-relaxed">
                        {pergunta.explanation}
                      </p>
                    </div>

                    {pergunta.hack && (
                      <div className="bg-amber-50 rounded-xl p-3.5">
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block mb-1">
                          Macete
                        </span>
                        <p className="text-xs font-semibold text-amber-900 leading-relaxed">
                          {pergunta.hack}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <button
              onClick={handleBackToHome}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl py-4 font-bold tracking-wide active:scale-[0.97] transition-all cursor-pointer"
            >
              Voltar para o Início
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
