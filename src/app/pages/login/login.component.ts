import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from '../apiservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={}

  constructor(private service: ApiservicesService,private route: Router) { }

  ngOnInit(): void {




  }

  login(){
    let body={
      ...this.user
    }
    console.log("*******Login Details*****",body)
    this.route.navigateByUrl('/dashboard')

    // this.service.login(body).subscribe((response:any)=>{
    //   if(response.token){
    //     localStorage.token=response.token
    //   }
    //   else{
    //     alert('Please enter correct Id and Pass')

    //   }
    //   console.log(response)
    // },(error)=>alert('Login erro'))


  }

}
