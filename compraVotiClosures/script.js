'use strict';

const poll = {
  question: 'Che voto prenderà giada domani?',
  options: ['1: 20', '2: 25', '3: 30 🔥', '0: 30+🏆'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //domanda
    const domanda = Number(
      prompt(
        this.question +
          '\n' +
          this.options.join('\n') +
          '\n' +
          '(se sei giada scrivi il voto)'
      )
    );
    console.log(domanda);
    //RISPOSTA
    typeof domanda === 'number' &&
      domanda < this.answers.length &&
      this.answers[domanda]++;
    console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log('I risultati di Poll sono ' + this.answers.join(', '));
    }
  },
};
const buy = {
  question: 'Che voto vuoi comprare?',
  options: [
    '1: 28 --> 10€ ',
    '2: 29--> 15€ ',
    '3: 30 --> 100€',
    '0: 30+--> 1000€🏆',
  ],
  registraDomandaAcquisto() {
    const domanda = Number(
      prompt(
        this.question +
          '\n' +
          this.options.join('\n') +
          '\n' +
          '(se sei giada scrivi il voto)'
      )
    );
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
document
  .querySelector('.buy')
  .addEventListener('click', buy.registraDomandaAcquisto.bind(buy));
