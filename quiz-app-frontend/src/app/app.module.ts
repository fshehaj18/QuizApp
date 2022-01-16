import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { RouterModule } from '@angular/router';
import { JwtInterceptorInterceptor } from './interceptors/jwt-interceptor.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminDashbaordComponent } from './components/admin-dashbaord/admin-dashbaord.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { UserDashbaoardComponent } from './components/user-dashbaoard/user-dashbaoard.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CreateAnswerComponent } from './components/create-answer/create-answer.component';

    const routes = [
  {path: 'create-user', component: CreateUserComponent, canActivate: [AuthGuard, RoleGuard],  data: {role: 'ADMIN' }},
  {path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard, RoleGuard],  data: {role: 'ADMIN' } },
  {path: 'users', component: AdminDashbaordComponent, canActivate: [AuthGuard, RoleGuard],  data: {role: 'ADMIN' } },
  {path: 'admin/questions', component: QuestionsListComponent, canActivate: [AuthGuard, RoleGuard],  data: {role: 'ADMIN' } },
  {path: 'admin/questions/add-question', component: CreateQuestionComponent, canActivate: [AuthGuard, RoleGuard],  data: {role: 'ADMIN' } },
  {path: 'user', component: UserDashbaoardComponent, canActivate: [AuthGuard, RoleGuard],  data: {role: 'USER' } },
  {path: 'quiz', component: QuizComponent, canActivate: [AuthGuard, RoleGuard],  data: {role: 'USER' } },
  {path: 'create-answer', component: CreateAnswerComponent, canActivate: [AuthGuard, RoleGuard],  data: {role: 'ADMIN' } },


  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
    ]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    CreateUserComponent,
    EditUserComponent,
    AdminDashbaordComponent,
    HeaderComponent,
    SidenavComponent,
    QuestionsListComponent,
    CreateQuestionComponent,
    UserDashbaoardComponent,
    QuizComponent,
    CreateAnswerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    MatExpansionModule, 
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorInterceptor,
    multi: true,
  }],
  exports: [
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
