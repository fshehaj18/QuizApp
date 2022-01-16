import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLandmark, faMap } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-dashbaoard',
  templateUrl: './user-dashbaoard.component.html',
  styleUrls: ['./user-dashbaoard.component.css']
})
export class UserDashbaoardComponent implements OnInit {

  faMaps = faMap;
  category!: Category[];
  color = ["card text-white bg-success", "card text-white bg-danger",
   "card text-white bg-warning"];
   faLandMark = faLandmark;
   faMap = faMap;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
      this.categoryService.getCategory().subscribe(
        (data)=>{
          this.category = data;
          console.log(this.category)
        }
      )

  }

  startQuiz(id: number)
  {
    localStorage.setItem('categoryId', id.toString());
    this.router.navigate(['quiz'])
  }
}
