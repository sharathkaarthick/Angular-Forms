import { Component, OnInit } from '@angular/core';

import { FormSubmitService } from '../form-submit.service';

interface FileUpload {
  fileId: number;
  fileName: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
model:any={}

submitted = false;
  showAge!: number;
  prev_exp!:number;

 
  files!: FileUpload[];

  constructor( private form_submit:FormSubmitService) { }

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

  sslcPercent(){
    if(this.model.sslc_mark){
      const sslc_mrk = this.model.sslc_mark;
      const sslc_pc = Math.round((sslc_mrk/500)*100)
      this.model.sslc_prc = (sslc_pc)
    }
  }

  hslcPercent(){
    if(this.model.hslc_mark){
      const hslc_mrk = this.model.hslc_mark;
      const hslc_pc = Math.round((hslc_mrk/1200)*100)
      this.model.hslc_prc = (hslc_pc)
    }
  }

  onFileSelect(event:any) {
    let f = event.target.files[0];
    let newFile: FileUpload = {
      fileId: 1,
      fileName: f.name
    }
    if (!this.files) {
      this.files = new Array();
    }
    this.files.push(newFile);
  }

  onSubmit(){
    this.submitted=true
    console.log(this.model)
    this.form_submit.setData(this.model)
  }

}
