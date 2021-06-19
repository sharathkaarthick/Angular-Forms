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
  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event:any) {
    this.resume = event.target.files[0];

    if (this.resume.type == 'application/pdf') {

    } else {
      alert("File type should be .pdf")
      return;
    }

  }

  onSubmit(){
    this.submitted=true
    console.log(this.model)
this.selectFile(event)
console.log(this.resume)

  }

}
