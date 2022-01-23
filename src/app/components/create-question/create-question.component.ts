import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/common/question';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  categories: any;

  constructor(private questionService: QuestionsService, private router: Router, private categoryService: CategoryService) { }

  question: Question = new Question();

  question1: any;

  ngOnInit(): void {
    this.getCategories()
  }


  onSubmit()
  {
   

    this.questionService.createQuestions(this.question).subscribe( data => {

      this.question1 = data;
      console.log(this.question1);
      localStorage.setItem('questionId', this.question1.questionId.toString())
     
      this.router.navigate(['create-answer'])
      
    },
    err => { console.log(err) }
  
    ); 
  }
  getCategories(): any
  {
    return this.categoryService.getCategoryAdmin().subscribe(
      (data) => {this.categories = data;
      console.log(data);
      
      }
    )
  }
}
