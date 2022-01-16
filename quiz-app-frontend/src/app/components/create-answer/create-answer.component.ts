import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/common/answer';
import { AnswersService } from 'src/app/services/answers.service';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {

  constructor(private answerService: AnswersService) { }

  answer: Answer = new Answer();

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.answerService.createAnswers(this.answer)
  }

}
