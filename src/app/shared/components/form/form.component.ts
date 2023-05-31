import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../_services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
 createForm!:FormGroup;
 @Output() emitData : EventEmitter<any> = new EventEmitter<any>()
  constructor(private fb:FormBuilder, private apiServices:ApiService,private router:Router){}
  ngOnInit(): void {
    this.getForm()
  }
  // First Name
  // Last Name 
  // Email
  // Phone Number
  getForm(){
    this.createForm = this.fb.group({
      fistName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      phoneNumber : ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    })
  }
  onSubmit(){
    let obj = {
      ...this.createForm.value
    }
    this.apiServices.getObjData(obj).subscribe((res:any)=>{
      console.log(res);
      this.createForm.reset();
    })
    this.emitData.emit(obj);
  }
}
