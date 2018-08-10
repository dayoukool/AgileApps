import { Quiz,SlideType } from 'app/models/quiz.model';

export const slideTypes: SlideType[] = [
  {slideTypeId: 0, text: 'homePage',      backgroundColor: 'pink',  backgroundImage: 'burgerquizz.png'},
  {slideTypeId: 1, text: 'section',       backgroundColor: 'black', backgroundImage: 'burgerquizz_seloupoivre.png'},
  {slideTypeId: 2, text: 'videoSection',  backgroundColor: 'black',  backgroundImage:  ''},
  {slideTypeId: 3, text: 'homePage',      backgroundColor: 'grey',  backgroundImage: 'burgerquizz.png'},
];

export const data: Quiz = {
      id: 0,
      slideTypes: slideTypes,
      questions: [
        {
          id: 0,
          text: '',
          slideType: slideTypes[2],
          video: 'assets/burgerQuizz-startJingle.mp4',
          answers: [
            {
              Index: 0,
              text: 'Continuer'
            }
          ]
        },
        {
          id: 1,
          text: 'Quis sit dolor tempor fugiat fugiat culpa qui?', 
          slideType: slideTypes[1],
          video: '',
          answers: [
            {
              Index: 0,
              text: 'Correct'
            },
            {
              Index: 1,
              text: 'Incorrect'
            },
            {
              Index: 2,
              text: 'Incorrect'
            },
            {
              Index: 3,
              text: 'Incorrect'
            }
          ]
        },
        {
          id: 2,
          text: 'Culpa ad Lorem nostrud labore officia irure ea aute?',
          slideType: slideTypes[0],
          video: '',
          answers: [
            {
              Index: 0,
              text: 'Correct'
            },
            {
              Index: 1,
              text: 'Incorrect'
            },
            {
              Index: 2,
              text: 'Incorrect'
            },
            {
              Index: 3,
              text: 'Incorrect'
            }
          ]
        },
        {
          id: 3,
          text: 'Aliquip elit in nostrud cupidatat?',
          slideType: slideTypes[2],
          video: '',
          answers: [
            {
              Index: 0,
              text: 'Correct'
            },
            {
              Index: 1,
              text: 'Incorrect'
            },
            {
              Index: 2,
              text: 'Incorrect'
            },
            {
              Index: 3,
              text: 'Incorrect'
            }
          ]
        },
        {
          id: 4,
          text: 'Sint reprehenderit aute aliquip excepteur?',
          slideType: slideTypes[0],
          video: '',
          answers: [
            {
              Index: 0,
              text: 'Correct'
            },
            {
              Index: 1,
              text: 'Incorrect'
            },
            {
              Index: 2,
              text: 'Incorrect'
            },
            {
              Index: 3,
              text: 'Incorrect'
            }
          ]
        } 
      ]
    };
