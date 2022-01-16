import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Answer } from 'src/app/common/answer';
import { Question } from 'src/app/common/question';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  questions: Question[] = [];
  panelOpenState: boolean = false;
  answers: Answer[] = [];
  answersMap:Map<number, any> = new Map()
  faPlus = faPlus;

  constructor(private questionService: QuestionsService, private answerSerivce: AnswersService,
    private router: Router) { }

  ngOnInit(): void {
    this.listQuestions();
   this.listAnswers()
   
   
    
  }

  listQuestions(){
    this.questionService.getQuestions().subscribe(
      (data) =>{
        this.questions = data;
      });
  }

  tempAnswer!: Answer;

  getAnswerById(id: number): Answer{
     this.answerSerivce.getAnswerById(id).subscribe(data =>
      {this.tempAnswer = data;})
    return this.tempAnswer;
  }

  listAnswers(){
    this.answerSerivce.getAnswers().subscribe(
      (data) =>{
        this.answersMap = data;
       
        
      }
    )
    
  }

  onSubmit()
  {
    this.router.navigate(['admin/questions/add-question'])
  }

  
    
}
