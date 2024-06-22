import HistoryPresentIllnessHelper from "../components/Helpers/HistoryPresentIllnessHelper";
import SocialHistoryHelper from "../components/Helpers/SocialHistoryHelper";
import HistoryPresentIllnessIntro from "../components/Intros/HistoryPresentIllnessIntro";
import SocialHistoryIntro from "../components/Intros/SocialHistoryIntro";

const CaseTwoFlow = {
  backgroundClass: 'case-2',
  file: [
    {label: 'Name', string: 'Olivia Heather'},
    {label: 'Age', string: '50'},
    {label: 'Gender', string: 'Female'},
    {label: 'Weight', string: '92 kg'},
    {label: 'Height', string: '180cm'},
    {label: 'Temp.', string: '35.2°C'},
    {label: 'BP', string: '130x85 mmHg'},
    {spacer:true},
    {label: 'Reason for admission', string: 'Patient was admitted with abdominal distension.'},
    {spacer:true},
    {label: 'Other documents', string: 'Patient doesn’t present other documents.'}
  ],
  menu: [
    {label: 'Presenting Complaint', action: 'PRESENTING_COMPLAINT'},
    {label: 'History Of Present Illness', action: 'HISTORY_PRESENT_ILLNESS'},
    {label: 'Past Medical History', action: 'PAST_MEDICAL_HISTORY'},
    {label: 'Family History', action: 'FAMILY_HISTORY'},
    {label: 'Social History', action: 'SOCIAL_HISTORY'},
    {label: 'Drug History', action: 'DRUG_HISTORY'},
  ],
  actions: {
    PRESENTING_COMPLAINT: {
      label: 'Presenting Complaint',
      hint: 'Selecione a melhor pergunta para questionar sobre a Queixa Principal:',
      options: [
        {label: 'What is the pain like?', result: false},
        {label: 'What do you do for a living?', result: false},
        {label: 'How can I help you today?', result: {
          patient: '“I have been feeling bloated and my belly feels really swollen.”',
          translation: '“Estou me sentindo inchada e minha barriga também está muito inchada.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa: "Como posso te ajudar hoje?" e faz parte do detalhamento da queixa principal.'
          }
        }}
      ]
    },
    HISTORY_PRESENT_ILLNESS: {
      label: 'History Of Present Illness',
      hint: 'Selecione o mnemônico mais adequado para detalhar a queixa de “feeling bloated and swollen belly” na História da Doença Atual:',
      options: [
        {label: 'SOCRATES', result: false},
        {label: 'ODIPARA', result: { action: 'HISTORY_PRESENT_ILLNESS_ODIPARA' }}
      ]
    },
    HISTORY_PRESENT_ILLNESS_ODIPARA: {
      label: 'History Of Present Illness',
      intro: HistoryPresentIllnessIntro,
      helpers: [{component: HistoryPresentIllnessHelper, x: 210, y: 30}], 
      options: [
        {label: 'Is there anything that makes it better?', result: {
          patient: '“I tried taking some ibuprofen yesterday which made me feel a bit better but now I feel everything again.”',
          translation: '“Eu tomei ibuprofeno ontem, o que me fez sentir um pouco melhor, mas hoje eu sinto tudo de novo.”',
          feedback: {
            heading: '(R)elieving factors',
            string: 'Esse é o sexto tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar os fatores de melhora.'
          }
        }},
        {label: 'Any chance you can score it from 1 to 10, 10 being the worse you ever felt?', result: {
          patient: '“At the moment it’s about a 6, but at times it’s been a 10 out of 10.”',
          translation: '“No momento é cerca de 6, mas as vezes é 10 de 10.”',
          feedback: {
            heading: '(I)ntensity',
            string: 'Esse é o terceiro tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar a intensidade/severidade da queixa.'
          }
        }},
        {label: 'How long have you been feeling like this?', result: {
          patient: '“I noticed it yesterday but it feels worse this morning.”',
          translation: '“Eu notei ontem, mas parece pior hoje pela manhã.”',
          feedback: {
            heading: '(O)nset.',
            string: 'Esse é o primeiro tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar o início da queixa.'
          }
        }},
        {label: 'When did it get worse?', result: {
          patient: '“Well, I started to feel a lot of pain yesterday evening after dinner. It is like a tight-squeezing pain that gets really sharp and then eases off and it’s mostly around my belly button but everywhere else is sore.”',
          translation: '“Bom, eu comecei a sentir muita dor ontem a noite após o jantar. É como se fosse uma dor forte, em aperto que fica muito aguda/afiada e depois diminui e é principalmente ao redor do meu umbigo, mas todos os outros lugares estão doloridos.”',
          feedback: {
            heading: '(P)rogression',
            string: 'Esse é o quarto tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar a progressão da queixa.'
          }
        }},
        {label: 'Do you feel like that all day or only at specific moments?', result: {
          patient: '“All day.”',
          translation: '“O dia todo.”',
          feedback: {
            heading: '(D)uration',
            string: 'Esse é o segundo tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar a duração e o padrão temporal da queixa.'
          }
        }},
        {label: 'Do you have any other symptoms?', result: {
          patient: '“I’ve vomited a couple times this morning (no blood) and it’s been three days since I last went to the toilet to defecate which is a little unusual.”',
          translation: '“Vomitei algumas vezes esta manhã (sem sangue) e fazem três dias desde a última vez que fui ao banheiro para defecar, o que é um pouco incomum.”',
          feedback: {
            heading: '(A)ssociated symptoms',
            string: 'Esse é o último tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar os sintomas associados à queixa principal.'
          }
        }},
        {label: 'Is there anything that makes it worse?', result: {
          patient: '“I tried to have some cereal this morning but it made me feel worse.”',
          translation: '“Tentei comer um pouco de cereal esta manhã, mas isso me deixou pior.”',
          feedback: {
            heading: '(A)ggravating factors',
            string: 'Esse é o quinto tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar os fatores de piora.'
          }
        }}
      ]
    },
    PAST_MEDICAL_HISTORY: {
      label: 'Past Medical History',
      hint: 'Selecione as melhores perguntas para questionar sobre História Médica Pregressa:',
      options: [
        {label: 'Are you allergic to any drugs?', result: false},
        {label: 'Have you ever had any surgery?', result: {
          patient: '“I had surgery on my belly about 30 years ago after a car accident. I’m not sure what happened exactly but I’ve got this big scar down the middle.”',
          translation: '“Eu fiz cirurgia na minha barriga há mais ou menos 30 anos atrás após um acidente de carro. Eu não tenho certeza do que aconteceu exatamente, mas eu tenho uma cicatriz grande bem no meio”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa "Você já realizou alguma cirurgia?" e faz parte do detalhamento da história médica pregressa do paciente.'
          }
        }},
        {label: 'Do you have any other medical conditions? Which?', result: {
          patient: '“I get achey knees and hips but other than that I’m fine.”',
          translation: '“Eu sinto dores nos joelhos e quadril, mas além disso estou bem”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa "Você tem alguma outra condição de saúde? Qual?" e faz parte do detalhamento da história médica pregressa do paciente.'
          }
        }}
      ]
    },
    FAMILY_HISTORY: {
      label: 'Family History',
      hint: 'Seleciona a melhor pergunta para perguntar sobre Histórico Familiar:',
      options: [
        {label: 'Do you have a partner?', result: false},
        {label: 'Are you taking any medication at the moment?', result: false},
        {label: 'Does anyone in your family have any medical conditions?', result: {
          patient: '“My mother died of a heart attack two years ago and my dad takes medication to High Blood Pressure.”',
          translation: '“Minha mãe morreu de um infarto dois anos atrás e o meu pai toma remédios para Pressão alta.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa "Alguém da sua família tem alguma condição de saúde?" e faz parte do detalhamento do histórico familiar do paciente.'
          }
        }}
      ]
    },
    SOCIAL_HISTORY: {
      label: 'Social History',
      intro: SocialHistoryIntro([
        'Who do you live with?',
        'Do you have any children?',
        'Do you still work/what did you used to do for work?',
        'Do you smoke?/Have you ever smoked?',
        'Do you drink alcohol? If yes, how many drinks would you say you have in a week?',
        '⁠Do you work out? How often?',
        'What do you eat on a daily basis?'
      ]),
      options: [
        {
          result: {
            style: { fontSize: '11px' },
            x: 200,
            patient: '“I live with my husband and I don’t have any children. I work as an independent florist. I don’t smoke but I usually share a bottle of wine with my husband on the weekends for the past seventeen years that we have been together. I go on walks very early in the mornings for one hour every day. I usually have cereal and milk for breakfast, for lunch I have chicken sandwiches with a banana or an apple, for dinner I have spaghetti or lasagne, sometimes chicken as well. But yesterday I wasn’t able to eat properly.”',
            translation: '“Eu moro com meu marido e não tenho filhos. Trabalho como florista autônoma. Não fumo, mas costumo dividir uma garrafa de vinho com meu marido nos finais de semana há 17 anos, desde quando estamos juntos. Eu faço caminhadas por uma hora bem cedo todas as manhãs. Costumo comer cereal com leite para o café da manhã, para o almoço como sanduíches de frango com uma banana ou maçã, para a janta eu como espaguete ou lasanha, alguma vezes frango também. Mas ontem não consegui comer direito.”',
            feedback: {
              helpers: [{component: SocialHistoryHelper([
                'Who do you live with?',
                'Do you have any children?',
                'Do you still work/what did you used to do for work?',
                'Do you smoke?/Have you ever smoked?',
                'Do you drink alcohol? If yes, how many drinks would you say you have in a week?',
                '⁠Do you work out? How often?',
                'What do you eat on a daily basis?'
              ]), x: 15, y: 40}]
            }
          }
        }
      ]
    },
    DRUG_HISTORY: {
      label: 'Drug History',
      hint: 'Selecione a melhor pergunta para questionar sobre História Medicamentosa:',
      options: [
        {label: 'Do you take any regular medication?', result: {
          patient: '“I take paracetamol and naproxen sometimes for my joint pains but nothing else.”',
          translation: '“Eu tomo paracetamol e naproxeno às vezes para minhas dores nas articulações, mas nada mais.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa "Você faz uso de alguma medicação regularmente?" e faz parte do detalhamento da história medicamentosa do paciente.',
          }
        }},
        {label: 'Are you allergic to any drugs?', result: {
          patient: '“I am allergic to penicillin and usually I have rash when I take it.”',
          translation: '“Sou alérgica a penicilina e geralmente tenho rash cutâneo quando tomo.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa "Você tem alergia a algum medicamento?" e faz parte do detalhamento da história medicamentosa do paciente.',
          }
        }},
        {label: 'What do you eat in a day?', result: false},
      ]
    }
  }
};

export default CaseTwoFlow;