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

  getQuestions(): Observable<any>
  
  {
      let getQuestionsUrl =  `http://localhost:8080/admin/questions/3`;

    return this.httpClient.get(`${getQuestionsUrl}`);
  }

  createQuestions(question: Question)
  {
    let getQuestionsUrl =  `http://localhost:8080/admin/questions/`;

    return this.httpClient.post(`${getQuestionsUrl}`, question );
  }

  assignQuestions(categoryId: number): Observable<any>
  {
    return this.httpClient.get(`http://localhost:8080/user/quiz/${categoryId}` );
  }
  
}
