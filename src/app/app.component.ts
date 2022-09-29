import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ExternalserviceService } from './services/externalservice.service';
import { Data } from './models/Data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
title = 'app-new';
firstName:string = "";

posts:any;
unknowm:any;

constructor(public http: HttpClient, 
            private service:ExternalserviceService,
            private router: Router) {
}

ngOnInit() {

  // this.service.getPosts()
  //   .subscribe(response => {
  //     this.posts = response;
  // });

  // this.service.getuUnknown()
  // .subscribe(response =>{
  //   console.log(response);

  //   let clientWithType = Object.assign(new Data(), response);
  //   console.log(clientWithType.data)
  //   this.unknowm = clientWithType.data
  // })
}


userRegisterOnClick(){
  this.router.navigate(['/userRegister'])
}

userGetOnClick(){
  this.router.navigate(['/userGet'])
}



















  // onSubmit(contactForm:NgForm){
  //   console.log(contactForm);
  //   // this.getData();
  //   // this.addDate();
  // }

  // public addDate(){

  //   this.http.post<any>('https://reqres.in/api/users', { name: 'morpheus', job: 'leader' }).subscribe(data => {
  //       // this.userId = data.id;
  //       // console.log(this.userId);
  //   })

  // }

  

  // public getData() {
  //   this.http.get<GetResponse>("https://reqres.in/api/unknown").subscribe(
  //     (response : GetResponse) => {
  //       console.log(response.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }


  // public getData1() {
  //   this.http.get("https://reqres.in/api/unknown").subscribe(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }
}