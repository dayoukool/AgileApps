export interface Quiz {
  id: number;
  slideTypes: SlideType[];
  questions: Question[];
}

export interface Question {
  id: number;
  slideType: SlideType;
  text: string;
  video: string,
  answers: Answer[];
}

export interface Answer {
  text: string;
  Index: number;
}

export interface Answering {
  questionId: number;
  answerIndex: number;
}

export interface SlideType {
  slideTypeId: number;
  text: string,
  backgroundImage: string;
  backgroundColor: string;
}
