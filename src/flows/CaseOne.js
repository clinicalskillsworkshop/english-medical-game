import DrugHistoryOptionHelper from "../components/Helpers/DrugHistoryOptionHelper";
import HistoryChiefComplaintHelper from "../components/Helpers/HistoryChiefComplaintHelper";
import SocialHistoryHelper from "../components/Helpers/SocialHistoryHelper";
import HistoryChiefComplaintIntro from "../components/Intros/HistoryChiefComplaintIntro";
import SocialHistoryIntro from "../components/Intros/SocialHistoryIntro";

const CaseOneFlow = {
  background: '../../../public/assets/images/case/1/bg.png',
  file: [
    {label: 'Name', string: 'John Smith'},
    {label: 'Age', string: '34'},
    {label: 'Gender', string: 'Male'},
    {label: 'Weight', string: '81 kg'},
    {label: 'Height', string: '182cm'},
    {label: 'Temp.', string: '38,5°C'},
    {label: 'BP', string: '137x84 mmHg'},
    {spacer:true},
    {label: 'Reason for admission', string: 'Patient was admitted due to chest pain, cough and fever.'},
    {spacer:true},
    {label: 'Other documents', string: 'Patient doesn’t present other documents.'}
  ],
  menu: [
    {label: 'Principal/Chief Complaint', action: 'PRINCIPAL_CHIEF_COMPLAINT'},
    {label: 'History of Principal Complaint / History of Present Illness', action: 'HISTORY_CHIEF_COMPLAINT'},
    {label: 'Past Medical History', action: 'PAST_MEDICAL_HISTORY'},
    {label: 'Family History', action: 'FAMILY_HISTORY'},
    {label: 'Social History', action: 'SOCIAL_HISTORY'},
    {label: 'Drug History', action: 'DRUG_HISTORY'},
  ],
  actions: {
    PRINCIPAL_CHIEF_COMPLAINT: {
      label: 'Principal/Chief Complaint',
      hint: 'Selecione a melhor pergunta para questionar sobre a Queixa Principal:',
      options: [
        {label: 'How long have you been feeling like this?', result: false},
        {label: 'What brings you here today?', result: {
          patient: '“My chest really hurts. I’ve had this horrible cough and feel really feverish.”',
          translation: '“Meu peito dói muito. Eu tenho tido essa tosse terrível e me sinto muito febril.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa “O que o traz aqui hoje?” e faz parte do detalhamento da queixa principal.'
          }
        }},
        {label: 'Where is your pain?', result: false}
      ]
    },
    HISTORY_CHIEF_COMPLAINT: {
      label: 'History of Principal Complaint',
      hint: 'Selecione mnemônico mais adequado para detalhar a queixa de “chest pain” na História da Doença Atual:',
      options: [
        {label: 'SOCRATES', result: { action: 'HISTORY_CHIEF_COMPLAINT_SOCRATES' }},
        {label: 'ODIPARA', result: false}
      ]
    },
    HISTORY_CHIEF_COMPLAINT_SOCRATES: {
      label: 'History of Principal Complaint',
      intro: HistoryChiefComplaintIntro,
      helpers: [{component: HistoryChiefComplaintHelper, x: 210, y: 30}], 
      options: [
        {
          label: 'Can you describe the pain? Is it a dull, aching or a sharp stabbing pain? ', 
          style: { fontSize: '16px' },
          result: {
            patient: '“It’s quite a sharp pain when I cough or breathe in deeply“',
            translation: '“É uma dor em pontada que vem com a tosse ou quando eu respiro profundamente” ',
            feedback: {
              heading: '(C)haracter.',
              string: 'Esse é o terceiro tópico dentro do mnemônico SOCRATES e tem o objetivo de descrever o caráter da dor.'
            }
          }
        },
        {label: 'Can you show me where it hurts?', result: {
          patient: '“It feels like it’s at the bottom of my ribs on the left.”',
          translation: '“Eu sinto abaixo das minhas costelas à esquerda.”',
          feedback: {
            heading: '(S)ite.',
            string: 'Esse é o primeiro tópico dentro do mnemônico SOCRATES e tem o objetivo de descrever a localização da dor.'
          }
        }},
        {label: 'When did the pain first start? ', result: {
          patient: '“It started about 3 weeks ago, I thought it hurts because I’ve been coughing so much but it also hurts when I breathe in.”',
          translation: '“Começou há cerca de 3 semanas, pensei que fosse porque tenho tossido muito, mas também dói quando inspiro.”',
          feedback: {
            heading: '(O)nset.',
            string: 'Esse é o segundo tópico dentro do mnemônico SOCRATES e tem o objetivo de questionar sobre o início da dor.'
          }
        }},
        {label: 'Apart from the pain, do you feel anything else? ', result: {
          patient: '“Yes, absolutely, I’m not sleeping well, I feel very tired and I’ve started feeling really feverish in my sleep. There is also this dry cough that is present all the time.”',
          translation: '“Sim, com certeza, não estou dormindo bem, me sinto muito cansado e comecei a me sentir febril ao dormir. Também tem essa tosse seca que está presente o tempo todo.”',
          feedback: {
            heading: '(A)ssociated symptoms.',
            string: 'Esse é o quinto tópico dentro do mnemônico SOCRATES e tem o objetivo de pesquisar os sintomas associados.'
          }
        }},
        {label: 'Does the pain spread to any other areas?', result: {
          patient: '“No.”',
          translation: '“Não.”',
          feedback: {
            heading: '(R)adiation.',
            string: 'Esse é o quarto tópico dentro do mnemônico SOCRATES e tem o objetivo de identificar possíveis locais de irradiação da dor.'
          }
        }},
        {
          label: 'Can you score the intensity from 1 to 10, 10 being the worse you ever felt? ', 
          style: { fontSize: '16px' },
          result: {
            patient: '“It’s probably around a 7/10.”',
            translation: '“É provavelmente um 7/10.”',
            feedback: {
              heading: '(S)everity.',
              string: 'Esse é o último tópico dentro do mnemônico SOCRATES e tem o objetivo de estimar a intensidade da dor. '
            }
          }
        },
        {label: 'Has the pain worsened since it started?', result: {
          patient: '“I think so, it didn’t use to hurt when I breathed in but now it does.”',
          translation: '“Acho que sim, não costumava doer quando eu respirava, mas agora dói.”',
          feedback: {
            heading: '(T)iming.',
            string: 'Esse é o sexto tópico dentro do mnemônico SOCRATES e tem o objetivo de compreender o curso temporal da dor. '
          }
        }},
        {label: 'Does anything make it better or worse?', result: {
          patient: '“It doesn’t really get better, but I try to take shallow breaths to avoid it and it gets worse when I breathe deeply or cough.”',
          translation: '“Na verdade não melhora, mas tento respirar superficialmente para evitá-la e piora quando respiro profundamente ou tossir.”',
          feedback: {
            heading: '(E)xarcebating and relieving factors.',
            string: 'Esse é o sétimo tópico dentro do mnemônico SOCRATES e tem o objetivo de compreenderos fatores de melhora e piora da dor. '
          }
        }}
      ]
    },
    PAST_MEDICAL_HISTORY: {
      label: 'Past Medical History',
      hint: 'Selecione as melhores perguntas para questionar sobre História Médica Pregressa:',
      options: [
        {label: 'Do you have any other medical conditions? Which?', result: {
          patient: '“I have never been diagnosed with anything.”',
          translation: '“Eu nunca fui diagnosticado com nada.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa “Você tem alguma outra condição de saúde? Qual?” e faz parte do detalhamento da história médica pregressa do paciente'
          }
        }},
        {label: 'Are you taking any medication at the moment?', result: false},
        {label: 'Have you ever been admitted to a hospital? When and why? ', result: {
          patient: '“No, never.”',
          translation: '“Não, nunca.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa “Você já foi admitido a um hospital? Quando e por quê?” e faz parte do detalhamento da história médica pregressa do paciente. '
          }
        }},
      ]
    },
    FAMILY_HISTORY: {
      label: 'Family History',
      hint: 'Seleciona a melhor pergunta para perguntar sobre Histórico Familiar:',
      options: [
        {label: 'Are you allergic to any drugs? Which?', result: false},
        {label: 'Do you have any children?', result: false},
        {label: 'Does anyone in your family have any medical conditions?', result: {
          patient: '“Not that I know of.”',
          translation: '“Não que eu saiba.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa “Tem alguém na família com alguma condição médica?” e faz parte do detalhamento do histórico familiar do paciente.'
          }
        }}
      ]
    },
    SOCIAL_HISTORY: {
      label: 'Social History',
      intro: SocialHistoryIntro,
      options: [
        {
          result: {
            patient: '“I live on my own and work in an IT company. I think I’m up to date with my normal vaccinations but I’m not sure about TB, I don’t think I’ve had a vaccine for that. I don’t drink or smoke and I’ve never taken drugs.”',
            translation: '“Moro sozinho e trabalho em uma empresa de TI. Acho que estou com as vacinas em dia, mas não tenho certeza sobre TB, acho que não tomei vacina para isso. Não bebo nem fumo e nunca usei drogas.”',
            feedback: {
              helpers: [{component: SocialHistoryHelper, x: 35, y: 40}]
            }
          }
        }
      ]
    },
    DRUG_HISTORY: {
      label: 'Drug History',
      hint: 'Selecione a melhor pergunta para questionar sobre História Medicamentosa:',
      options: [
        {label: 'Are you allergic to any drugs? Which?', result: {
          patient: '“Not that I know of.”',
          translation: '“Não que eu saiba.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa “Você é alérgico a algum medicamento? Qual?” e faz parte do detalhamento da história medicamentosa do paciente.',
            helpers: [{component: DrugHistoryOptionHelper, x: 350, y: 50}]
          }
        }},
        {label: 'Are you taking any medications at the moment? Which? ', result: {
          patient: '“No, I’m not.”',
          translation: '“Não estou.”',
          feedback: {
            heading: 'Correct!',
            string: 'Essa pergunta significa “Você está tomando alguma medicação no momento? Qual?” e faz parte do detalhamento da história medicamentosa do paciente. '
          }
        }},
        {label: 'Do you do any other drugs?', result: false},
      ]
    }
  }
};

export default CaseOneFlow;