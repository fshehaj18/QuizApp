import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../common/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getQuestions(name: string): Observable<any>
  
  {
      let getQuestionsUrl =  `http://localhost:8080/admin/questions/${name}`;

    return this.httpClient.get(`${getQuestionsUrl}`);
  }

  createQuestions(question: Question)
  {
    let createQuestionsUrl =  `http://localhost:8080/admin/questions/`;

    return this.httpClient.post(`${createQuestionsUrl}`, question );
  }

  assignQuestions(categoryId: number): Observable<any>
  {
    return this.httpClient.get(`http://localhost:8080/user/quiz/${categoryId}` );
  }

  deleteQuestion(id: number)
  {
    
    return this.httpClient.delete(`http://localhost:8080/admin/questions/${id}`).subscribe();
  }
  
}
