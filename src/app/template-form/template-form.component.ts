import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
model:any={}
resume:any
submitted = false;
  showAge!: number;
  prev_exp!:number;

  constructor() { }

  ngOnInit(): void {
    this.prev_exp = this.model.prev_exp
  }

  
  
  ageCalc(){
    if(this.model.dob){
      const convertage = new Date(this.model.dob);
      const timeDiff = Math.abs(Date.now() - convertage.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
      this.model.age = this.showAge
     
    }
  }

  onSubmit(){
    this.submitted=true
    console.log(this.model)
  }

}
