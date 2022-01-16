import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';
import { Answer } from 'src/app/common/answer';
import { Question } from 'src/app/common/question';
import { SubmittedAnswers } from 'src/app/common/submitted-answers';
import { AnswersService } from 'src/app/services/answers.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions!: Question[];
  answer!: any[];
  faClock = faClock;
  answersMap:Map<number, any> = new Map()
  timer = 180;
  mapKeys = Object.keys;
  math=Math;
  totalPoints = 0;
  submittedAnswers: string[] = new Array();

  myform = new FormGroup({
    sport: new FormControl('', Validators.required)
  });

  get f(){
    return this.myform.controls;
  }

  randomNumber = Math.floor(Math.random() * 4);
  
  



  constructor(private questionService: QuestionsService, private answerSerivce: AnswersService,
    private router: Router) { }

  ngOnInit(): void {
    this.listQuestions()
    this.listAnswers()

    this.processCountDown()


  }

  doCountDown()
  {

    setTimeout(()=>{
      this.timer -= 1;
      this.processCountDown()
    }, 1000)
  }

  processCountDown()
  {
      if(this.timer==0)
      this.router.navigate(['user']);
      else
      this.doCountDown();
  }

  listQuestions()
  {
    this.questionService.assignQuestions(Number(localStorage.getItem('categoryId'))).subscribe(
      (data) =>{
        this.questions = data;
        console.log(this.questions);
        
      }
    )
  }

  listAnswers()
  {
      this.answerSerivce.assignAnswers(Number(localStorage.getItem('categoryId'))).subscribe(
        (data) =>{
          this.answer = data;
          this.answersMap = data;
          console.log(this.answersMap);
          
        }
      )
  }

  select()
  {
    console.log("hello");
    
  }

  onSubmit()
  {
    
    let arr = (Array.from(this.answersMap));

    for(let i=0; i<arr.length;i++){
    console.log(Object.entries(arr[i])[0][1].correct);
    console.log(this.submittedAnswers[i])
    if(this.submittedAnswers[i]===Object.entries(arr[i])[0][1].correct)
      this.totalPoints += 1

      
    }
  
    window.alert("You received " + this.totalPoints + " points")

 /* for(let i=0;i<alternativat.length;i++){
    for (let key of alternativat[i]){
      console.log(key);
    }
    
  }

    window.alert("You received "+ this.totalPoints)*/
  }

  isCorrect(selected: string, correct: string)
  {
    if(selected===correct)
    this.totalPoints += 1

    
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }
 
}
