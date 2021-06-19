import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
job!:FormGroup
  submitted=false

  constructor(private formbuilder:FormBuilder) { }
  
  get f() { return this.job.controls; }

  ngOnInit(): void {
    this.job = this.formbuilder.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      age:[null, [Validators.required,Validators.min(18)]],
      gender:[null, [Validators.required]],
      dob:[null,Validators.required],
      
    })
  }

  

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.job.invalid) {
        return;
    }
    console.log(this.job.controls.name.value)
    console.log(this.job.value)
   
}

}
