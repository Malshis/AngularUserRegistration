import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalserviceService } from '../services/externalservice.service';
import { UserRegisterResponse } from '../models/UserRegisterResponse';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private router: Router,
    private service:ExternalserviceService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data:any) {

    this.service.registerUser(data.name, data.job)
    .subscribe(response =>{
      console.log(response);

      let clientWithType = Object.assign(new UserRegisterResponse(), response);
      console.log(clientWithType.name)
      
    })
  }
}
