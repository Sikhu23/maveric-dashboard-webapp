import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userDetails:any={}
  constructor(private service: ApiservicesService) { }

  ngOnInit(): void {
  }



  signup(){
    let body={
      ...this.userDetails
    }
    console.log("*******Signup Details*****",body)

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
