import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngular, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faAlignJustify, faBookmark, faCode, faGlobe, faLandmark, faLaptop, faMap, faWifi } from '@fortawesome/free-solid-svg-icons';
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

  color = ["card text-white bg-success", "card text-white bg-warning",
   "card text-white bg-danger", "card text-white bg-primary lighten"];
   faLandMark = faLandmark;
   faMap = faGlobe;
   faJava = faJava
   faPython=faPython
   faAngular = faAngular
   faIcons=[this.faMap, this.faLandMark, this.faJava, this.faPython, this.faAngular]

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
      this.categoryService.getCategory().subscribe(
        (data)=>{
          this.category = data;
        }
      )

  }

  startQuiz(name: string, id: number)
  {
    localStorage.setItem('categoryName', name);
    localStorage.setItem('categoryId', id.toString());
    this.router.navigate(['quiz'])
  }
}
