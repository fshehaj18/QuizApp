import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashbaord',
  templateUrl: './admin-dashbaord.component.html',
  styleUrls: ['./admin-dashbaord.component.css']
})
export class AdminDashbaordComponent implements OnInit {

faUserPlus = faUserPlus;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createUser()
  {
    this.router.navigate(['create-user']);  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
