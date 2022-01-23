import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Answer } from '../common/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getAnswerById(id: number): Observable<any>
  
  {
      let getAlternativesUrl =  `http://localhost:8080/admin/alternatives/${id}`;

    return this.httpClient.get(`${getAlternativesUrl}`);
  }

  getAnswers(): Observable< any>
  {
    return this.httpClient.get(`http://localhost:8080/admin/answers/`).pipe(
      map((res: any) => 
      res.map((data: any) =>{
        return {
         
         alternativeId: data.alternativeId, questionId: data.question.questionId,
          correct: data.correct,
          wrong1: data.wrong1,
          wrong2: data.wrong2,
          wrong3: data.wrong3 , 
        };
        

        
      }))
      )
  }

  assignAnswers(categoryId: number): Observable<any>
  {
    return this.httpClient.get(`http://localhost:8080/user/quiz/${categoryId}/alternatives`).pipe(
      map((res: any) => 
      res.map((data: any) =>{
        return {
          alternativeId: data.alternativeId, questionId: data.question.questionId,
          correct: data.correct,
          wrong1: data.wrong1,
          wrong2: data.wrong2,
          wrong3: data.wrong3 , 
            
        };
        
      })
      )
        );
  }

  getAnswersByCategory(categoryId: number): Observable<any>
  {
      return this.httpClient.get(`http://localhost:8080/user/quiz/${categoryId}/alternatives`)
  }

  createAnswers(answer: Answer): Observable<any>
  {
    console.log("serivce");
    
    console.log(answer);
    
    return this.httpClient.post(`http://localhost:8080/admin/answers`, answer)
  }
}

  







