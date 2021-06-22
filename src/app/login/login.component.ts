import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login!:FormGroup
  submitted=false

  constructor(private formbuilder : FormBuilder, private route:Router) { }

  ngOnInit(): void {
this.login = this.formbuilder.group({
username:['', Validators.required],
password:['', Validators.required]
})
  }

  get f() { return this.login.controls; }

  onSubmit(){
  this.submitted = true;
  this.route.navigateByUrl('home')

  // stop here if form is invalid
  if (this.login.invalid) {
      return;
  }
console.log(this.login.value)
}
}
