import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalserviceService {

  private url = 'http://jsonplaceholder.typicode.com/posts';
  private apiUrl = "https://reqres.in/api/unknown";
  private userRegisterUrl = "https://reqres.in/api/users";
    
  constructor(private httpClient: HttpClient) { }
   
  getPosts(){
    return this.httpClient.get(this.url);
  }

  getuUnknown(){
    return this.httpClient.get<Data>(this.apiUrl);
  }

  registerUser(nameNew:string, jobNew:string){

    return this.httpClient.post<any>(this.userRegisterUrl, { name: nameNew, job: jobNew });
  }


}

export interface Data {
  data:any
}

