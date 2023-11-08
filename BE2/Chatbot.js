const readline = require('readline');

const questions = [
  'What is KFUPM?',
  'When was KFUPM founded?',
  'What is KFUPM known for?',
  'Is KFUPM a coeducational university?',
  'Where is KFUPM located?',
  'What is the primary language of instruction at KFUPM?',
  'Is KFUPM a research-focused university?',
  'What majors and programs are offered at KFUPM?',
  'What are some notable alumni from KFUPM?',
  'Is KFUPM open to international students?',
  'What is the role of KFUPM in supporting Saudi Arabia\'s petroleum and minerals industry?',
  'Is KFUPM a government-funded university?'
];

const answers = [
  'KFUPM stands for King Fahd University of Petroleum and Minerals, a public research university in Dhahran, Saudi Arabia.',
  'KFUPM was founded in 1963.',
  'KFUPM is known for its strong programs in engineering, science, and management.',
  'Yes, KFUPM is a coeducational university, admitting both male and female students.',
  'KFUPM is located in Dhahran, in the Eastern Province of Saudi Arabia.',
  'The primary language of instruction at KFUPM is English.',
  'Yes, KFUPM places a strong emphasis on research and innovation.',
  'KFUPM offers various undergraduate and graduate programs, including engineering, business, computer science, and more.',
  'Notable alumni from KFUPM include individuals who have made significant contributions in the fields of science, engineering, and business.',
  'Yes, KFUPM accepts international students for its various programs and provides scholarships to eligible candidates.',
  'KFUPM plays a crucial role in educating and training professionals for the country\'s petroleum and minerals sector and conducting research in related areas.',
  'Yes, KFUPM is a government-funded university in Saudi Arabia.'
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let exitCommand = 'exit';

rl.on('line', (line) => {
  if (line === exitCommand) {
    console.log('Thank you for interacting with the KFUPM chatbot.');
    rl.close();
    return;
  }

  const questionIndex = questions.indexOf(line);
  if (questionIndex !== -1) {
    console.log(answers[questionIndex]);
  } else {
    console.log('Sorry, I didn\'t understand your question.');
  }
});

rl.on('close', () => {
  console.log('Chatbot session closed.');
});
