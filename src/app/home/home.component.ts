import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router ) {}

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
    this.route.navigateByUrl('login')
  }

}
