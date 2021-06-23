import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup
  submitted = false
  returnUrl!: string;
    error = '';

  constructor(private formbuilder: FormBuilder,  private route: ActivatedRoute,
    private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.login = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
    

  get f() { return this.login.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.login.invalid) {
      return;
    }
    console.log(this.login.value)
    this.authservice.login(this.f.username.value, this.f.password.value).subscribe(result =>{
      if(result){
        console.log(result)
        alert('success')
      }
      else{
        alert('invalid')
      }
    })

    
  }
}
