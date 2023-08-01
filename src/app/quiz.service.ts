import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizData: Question[] = [
    {
      id: 1,
      text: 'Politics: Who is the current President/Prime Minister of Canada?',
      choices: [
        {
          id: 1,
          text: 'Justin Trudeau',
          isAnswer: true,
        },
        {
          id: 2,
          text: 'Andrew Scheer',
          isAnswer: false,
        },
        {
          id: 3,
          text: 'Jagmeet Singh',
          isAnswer: false,
        },
        {
          id: 4,
          text: 'Erin O\'Toole',
          isAnswer: false,
        },
      ],
    },
    {
      id: 2,
      text: 'Geography: Which river is the longest in the world?',
      choices: [
        {
          id: 1,
          text: 'Amazon River',
          isAnswer: false,
        },
        {
          id: 2,
          text: 'Nile River',
          isAnswer: true,
        },
        {
          id: 3,
          text: 'Yangtze River',
          isAnswer: false,
        },
        {
          id: 4,
          text: 'Mississippi River',
          isAnswer: false,
        },
      ],
    },
    {
      id: 3,
      text: 'Literature: Who is the author of the play "Romeo and Juliet"?',
      choices: [
        {
          id: 1,
          text: 'William Shakespeare',
          isAnswer: true,
        },
        {
          id: 2,
          text: 'Jane Austen',
          isAnswer: false,
        },
        {
          id: 3,
          text: 'Charles Dickens',
          isAnswer: false,
        },
        {
          id: 4,
          text: 'Mark Twain',
          isAnswer: false,
        },
      ],
    },
    {
      id: 4,
      text: 'Sports: In which sport would you perform a slam dunk?',
      choices: [
        {
          id: 1,
          text: 'Soccer',
          isAnswer: false,
        },
        {
          id: 2,
          text: 'Basketball',
          isAnswer: true,
        },
        {
          id: 3,
          text: 'Tennis',
          isAnswer: false,
        },
        {
          id: 4,
          text: 'Golf',
          isAnswer: false,
        },
      ],
    },
    {
      id: 5,
      text: 'Entertainment: Which actor played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?',
      choices: [
        {
          id: 1,
          text: 'Chris Evans',
          isAnswer: false,
        },
        {
          id: 2,
          text: 'Chris Hemsworth',
          isAnswer: false,
        },
        {
          id: 3,
          text: 'Robert Downey Jr.',
          isAnswer: true,
        },
        {
          id: 4,
          text: 'Mark Ruffalo',
          isAnswer: false,
        },
      ],
    },
    {
      id: 6,
      text: 'Who painted this portrait painting?',
      image: '../assets/images/mona_lisa.jpg',
      choices: [
        {
          id: 1,
          text: 'Pablo Picasso',
          isAnswer: false,
        },
        {
          id: 2,
          text: 'Vincent van Gogh',
          isAnswer: false,
        },
        {
          id: 3,
          text: 'Michelangelo',
          isAnswer: false,
        },
        {
          id: 4,
          text: 'Leonardo da Vinci',
          isAnswer: true,
        },
      ],
    },
    {
      id: 7,
      text: 'Who painted this painting?',
      image: '../assets/images/starry_night.jpg',
      choices: [
        {
          id: 1,
          text: 'Pablo Picasso',
          isAnswer: false,
        },
        {
          id: 2,
          text: 'Vincent van Gogh',
          isAnswer: true,
        },
        {
          id: 3,
          text: 'Michelangelo',
          isAnswer: false,
        },
        {
          id: 4,
          text: 'Leonardo da Vinci',
          isAnswer: false,
        },
      ],
    },
    {
      id: 8,
      text: 'Science: What is the chemical symbol for water?',
      choices: [
        {
          id: 1,
          text: 'H2O',
          isAnswer: true,
        },
        {
          id: 2,
          text: 'CO2',
          isAnswer: false,
        },
        {
          id: 3,
          text: 'NaCl',
          isAnswer: false,
        },
        {
          id: 4,
          text: 'CH4',
          isAnswer: false,
        },
      ],
    },
    {
      id: 9,
      text: 'History: Who was the first President of the United States of America?',
      choices: [
        {
          id: 1,
          text: 'George Washington',
          isAnswer: true,
        },
        {
          id: 2,
          text: 'Thomas Jefferson',
          isAnswer: false,
        },
        {
          id: 3,
          text: 'Abraham Lincoln',
          isAnswer: false,
        },
        {
          id: 4,
          text: 'John Adams',
          isAnswer: false,
        },
      ],
    },
    {
      id: 10,
      text: 'Technology: Which company developed the iPhone?',
      choices: [
        {
          id: 1,
          text: 'Samsung',
          isAnswer: false,
        },
        {
          id: 2,
          text: 'Microsoft',
          isAnswer: false,
        },
        {
          id: 3,
          text: 'Apple',
          isAnswer: true,
        },
        {
          id: 4,
          text: 'Google',
          isAnswer: false,
        },
      ],
    },
  ];

  constructor() { };

  getQuizData() {
    return this.quizData;
  };

}
