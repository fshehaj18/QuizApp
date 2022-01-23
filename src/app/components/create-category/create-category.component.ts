import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category()

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.categoryService.createCategory(this.category.name).subscribe();
  }
}
