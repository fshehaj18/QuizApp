import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Answer } from 'src/app/common/answer';
import { AnswersService } from 'src/app/services/answers.service';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {

  constructor(private answerService: AnswersService, private router: Router) { }

  answer: Answer = new Answer();
  faCheck = faCheck;

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(localStorage.getItem('questionId'))
    this.answer.questionId = Number(localStorage.getItem('questionId'));
    console.log(this.answer);
    
    this.answerService.createAnswers(this.answer).subscribe(
      (data)=>{console.log(data)
      this.router.navigate(['admin/questions'])}
    )
  }

}
