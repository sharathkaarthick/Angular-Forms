import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private authservice:AuthService) {}

  ngOnInit(): void {
  }


  onclickReactive()
  {
    this.route.navigateByUrl('reactive-form')
  }

  onclickTemplate()
  {
    this.route.navigateByUrl('template-form')
  }

  onclickLogin()
  {
    this.authservice.logout()
    this.route.navigateByUrl('login')
  }

}
