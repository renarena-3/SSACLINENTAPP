import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newssn',
  templateUrl: './newssn.component.html',
  styleUrls: ['./newssn.component.css']
})
export class NewssnComponent implements OnInit {

  regForm:FormGroup;

  public states:any;

  constructor(
    private fb:FormBuilder,
    private apiservice:ApiService
    ) { }

  ngOnInit(): void {
    this.regForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:[''],
      gender:[''],
      dob:[''],
      state:[''],
    });

    this.getAllStates();
  
  }

  getAllStates(){
    
    this.apiservice.getData('http://localhost:2020/ssn/states').subscribe((data)=>{
      console.log('data '+data);
    })
  }

  saveForm(){
    let userInfo=this.regForm.value;
    console.log("userInof"+userInfo)
   this.apiservice.regSsn('http://localhost:2020/ssn/reg',userInfo).subscribe(
     (data:any)=>{
       console.log('data '+data);
       this.states=data;
       console.log('states '+this.states)
     }
   );
  
    
  }

}
