import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/common/user';
import { UsersService } from 'src/app/services/users.service';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;
  
  user: User[] = [];
  currentRoleId: number | undefined;
  private createUser!: CreateUserComponent;
  
  constructor(private userService: UsersService, private routes: Router) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){

  
     this.userService.getUsersList().subscribe(
       (data: User[]) =>{
        this.user = data;
       console.log(data);
       
       }
     );
   }
   updateUser(id: number)
   {
     console.log(id);
     this.routes.navigate(['edit-user', id]);  }
 
     deleteUser(id: number)
   {
     console.log(id);
     this.userService.deleteUser(id).subscribe(data => {
       this.listUsers();
     });
   }
 
   getMessage(): boolean{
     return this.createUser.message;
   }

}
