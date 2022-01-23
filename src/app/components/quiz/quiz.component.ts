import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCheck, faClock, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';
import { Answer } from 'src/app/common/answer';
import { Category } from 'src/app/common/category';
import { Question } from 'src/app/common/question';
import { SubmittedAnswers } from 'src/app/common/submitted-answers';
import { AnswersService } from 'src/app/services/answers.service';
import { CategoryService } from 'src/app/services/category.service';
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
  faCheck = faCheck;
  faTimes = faTimes;
  toggle: boolean = false;
  category!: string;

 

  randomNumber: Number[] = [];
  
  



  constructor(private questionService: QuestionsService, private answerSerivce: AnswersService,
    private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {

  this.category=localStorage.getItem('categoryName') as string;


    this.listQuestions();

    this.listAnswers()
    
    this.processCountDown()

    

  }

  

  generateRandom(){
    for(let i=0;i<this.questions.length;i++)
     this.randomNumber.push(Math.floor(Math.random() * 4));
     
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
        
        
      },
      (err)=> {console.log(err);},
      
      ()=>this.generateRandom()
      
    )
  }

  listAnswers()
  {
      this.answerSerivce.assignAnswers(Number(localStorage.getItem('categoryId'))).subscribe(
        (data) =>{
          this.answer = data;
          this.answersMap = new Map(data.map((key: { questionId: any; correct: any; })=>[key.questionId, key]))
          
          
        }
      )
  }

  onSubmit()
  {
    
    let arr = (Array.from(this.answersMap));

    let keys:any = []

    for(let key of this.answersMap.keys())
      keys.push(key)
    

    for(let i=0; i<arr.length;i++){

      if(this.submittedAnswers[i] === this.answersMap.get(keys[i]).correct)
          this.totalPoints += 1

1    }
  
    window.alert("You received " + this.totalPoints + " points")
    this.router.navigate(['/user'])
this.toggle = true;
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }
 
}
