import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Answer } from 'src/app/common/answer';
import { Category } from 'src/app/common/category';
import { Question } from 'src/app/common/question';
import { AnswersService } from 'src/app/services/answers.service';
import { CategoryService } from 'src/app/services/category.service';
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
  answersMap:any
  faPlus = faPlus;
  categories: Category[] = [];
  categoryName!: string;
  selectedCategory!: any;
  

  constructor(private questionService: QuestionsService, private answerSerivce: AnswersService,
    private router: Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listQuestions();
    this.listAnswers()
   this.getCategories()
   
   
    
  }

  listQuestions(){
    this.questionService.getQuestions("Java").subscribe(
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
       this.answersMap = new Map(data.map((key: { questionId: any; correct: any; })=>[key.questionId, key]))
        
      }
    )
    
  }

  onSubmit()
  {
    this.router.navigate(['admin/questions/add-question'])
    
  }

  addCategory()
  {
    this.router.navigate(['category'])
  }

  delete(id: number)
  {
    this.questionService.deleteQuestion(id)
    window.location.reload()
  }

  getCategories(): any
  {
    return this.categoryService.getCategoryAdmin().subscribe(
      (data) => {this.categories = data;}
    )
  }
  
  search()
  {
    this.questionService.getQuestions(this.categoryName).subscribe(
      (data)=>{ this.questions = data
      console.log(this.questions);}
      
    );
    console.log(this.selectedCategory);
    //this.questionService.getQuestions(this.selectedCategory.categoryId).subscribe()
 
  
  }
  
    
}
