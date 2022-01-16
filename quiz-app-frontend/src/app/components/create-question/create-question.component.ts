import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/common/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  constructor(private questionService: QuestionsService, private router: Router) { }

  question: Question = new Question();

  ngOnInit(): void {
  }


  onSubmit()
  {
    this.questionService.createQuestions(this.question).subscribe( data => {

      console.log(data);
      this.router.navigate(['create-answer'])
      localStorage.setItem('questionId', this.question.questionId.toString())
    },
    err => { console.log(err) }
  
    );
  }
}
