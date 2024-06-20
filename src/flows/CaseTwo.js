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
      hint: '',
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
      hint: '',
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
        {label: 'How long have you been feeling like this?', result: {
          patient: '“I noticed it five days ago but it feels worse this morning.”',
          translation: '“Eu percebi há cinco dias atrás, mas parece pior essa manhã.”',
          feedback: {
            heading: '(O)nset.',
            string: 'Esse é o primeiro tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar o início da queixa.'
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
        {label: 'Any chance you can score it from 1 to 10, 10 being the worse you ever felt?', result: {
          patient: '“At the moment it’s about a 6, but at times it’s been a 10 out of 10.”',
          translation: '“No momento é cerca de 6, mas as vezes é 10 de 10.”',
          feedback: {
            heading: '(I)ntensity',
            string: 'Esse é o terceiro tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar a intensidade/severidade da queixa.'
          }
        }},
        {label: 'When did it get worse?', result: {
          patient: '“I started getting twangs of pain yesterday evening after dinner.”',
          translation: '“Comecei a sentir pontadas de dor ontem à noite, após o jantar.”',
          feedback: {
            heading: '(P)rogression',
            string: 'Esse é o quarto tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar a progressão da queixa.'
          }
        }},
        {label: 'Is there anything that makes it worse?', result: {
          patient: '“I tried to have some cereal this morning but it made me feel worse.”',
          translation: '“Tentei comer um pouco de cereal esta manhã, mas isso me deixou pior.”',
          feedback: {
            heading: '(A)ggravating factors',
            string: 'Esse é o quinto tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar os fatores de piora.'
          }
        }},
        {label: 'Is there anything that makes it better?', result: {
          patient: '“Nothing that I can remember at the moment.”',
          translation: '“Nada que eu consiga me lembrar no momento.”',
          feedback: {
            heading: '(R)elieving factors',
            string: 'Esse é o sexto tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar os fatores de melhora.'
          }
        }},
        {label: 'Do you have any other symptoms?', result: {
          patient: '“I’ve vomited a couple times this morning and it’s been three days since I last went to the toilet to defecate which is a little unusual.”',
          translation: '“Vomitei algumas vezes esta manhã e fazem três dias desde a última vez que fui ao banheiro para defecar, o que é um pouco incomum.”',
          feedback: {
            heading: '(A)ssociated symptoms',
            string: 'Esse é o último tópico dentro do mnemônico ODIPARA e tem o objetivo de avaliar os sintomas associados à queixa principal.'
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
          patient: '“My mother had a heart attack two years ago and she also has high blood pressure”',
          translation: '“Minha mãe teve um ataque cardíaco dois anos atrás e ela também tem pressão alta.”',
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
        'Do you live with anyone?',
        'Do you still work/what did you used to do for work?',
        'How do you manage at home?',
        'Do you smoke?',
        'Have you ever smoked?',
        'Do you drink alcohol? If yes, how many drinks would you say you have in a week?'
      ]),
      options: [
        {
          result: {
            patient: '“I live with my husband. I’m normally independent and work as a florist but I’m thinking about retiring. I don’t smoke but I do share a bottle of wine with my husband at the weekend.”',
            translation: '“Eu moro com meu marido. Sou autônoma e trabalho como florista, mas estou pensando em me aposentar. Não fumo, mas eu costumo dividir uma garrafa de vinho com meu marido no fim de semana.”',
            feedback: {
              helpers: [{component: SocialHistoryHelper([
                'Do you live with anyone?',
                'Do you still work/what did you used to do for work?',
                'How do you manage at home?',
                'Do you smoke?',
                'Have you ever smoked?',
                'Do you drink alcohol? If yes, how many drinks would you say you have in a week?'
              ]), x: 35, y: 40}]
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
          patient: '“No.”',
          translation: '“Não.”',
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