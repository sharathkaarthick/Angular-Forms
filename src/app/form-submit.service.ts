import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

  constructor() { }

  setData(data:any)
  {
    console.log(data)
  }
}
