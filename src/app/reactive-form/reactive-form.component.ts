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

  birth!:number;
  showAge!:number;

  prev_exp!:number;

  sslc_mrk!:number
  sslc_pc!:number;

  constructor(private formbuilder:FormBuilder) { }
  
  get f() { return this.job.controls; }

  ngOnInit(): void {
    this.job = this.formbuilder.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      dob:[null,Validators.required],
      age:[this.showAge, [Validators.min(18)]],
      gender:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      role:[null, Validators.required],
      experience:[null, [Validators.required,Validators.min(2), Validators.max(this.prev_exp)]],
      prev_comp:['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      prev_comp_exp:[null, [Validators.required,Validators.min(2), Validators.max(5)]],
      blood:[null, Validators.required],
      sslc_schl:['', [Validators.required, Validators.minLength(3)]],
      sslc_mark:['', [Validators.min(175), Validators.max(500)]],
      sslc_prc:[this.sslc_pc, [Validators.min(35), Validators.max(100)]],
    })
  }

  ageCalc(){
    if(this.birth){
      const convertbirth = new Date(this.birth);
      const timeDiff = Math.abs(Date.now() - convertbirth.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
      this.job.controls.age.setValue(this.showAge)
    }
  }

  sslcPercent(){
    if(this.sslc_mrk){
      this.sslc_pc = Math.round((this.sslc_mrk/500)*100)
      this.job.controls.sslc_prc.setValue(this.sslc_pc)
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.job.invalid) {
        return;
    }
   
    console.log(this.job.value)
}




}
