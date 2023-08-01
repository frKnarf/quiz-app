import { Component, inject } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Choice, Question } from '../question';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  quizService: QuizService = inject(QuizService);

  questions: Question[];
  currentQuestionIndex = 0;
  isSwitch = false;

  constructor() {
    this.questions = this.quizService.getQuizDataNoImage();
  }

  getCorrectChoices() {
    return this.questions[this.currentQuestionIndex].choices.filter(choice => choice.isAnswer);
  }

  onClickNext() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  onClickPrevious() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  clickEQ() {
    return this.isSwitch = true;
  }

  clickQL() {
    return this.isSwitch = false;
  }
}
