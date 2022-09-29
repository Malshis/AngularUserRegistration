import { Component, OnInit } from '@angular/core';
import { ExternalserviceService } from '../services/externalservice.service';
import { Data } from '../models/Data';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {

  unknowm:any;

  constructor(private service:ExternalserviceService,
              private router: Router) { }

  ngOnInit() {

    this.service.getuUnknown()
    .subscribe(response =>{
      console.log(response);
  
      let clientWithType = Object.assign(new Data(), response);
      console.log(clientWithType.data)
      this.unknowm = clientWithType.data
    })
  }


  gotoUser2()
  {
    let user= {name:'Raja',age:20,email:'raja@mail.com'}
    let navigationExtras: NavigationExtras = {
      state: {
        user: user
      }
    };
    
    this.router.navigate(['/user/raja'], navigationExtras);
  }

}
