import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient ) { }


  login(body:any){
    let url="https://apifromashu.herokuapp.com/api/login"

    return this.http.post(url,body)
  }
}
