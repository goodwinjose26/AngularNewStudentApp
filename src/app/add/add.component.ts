import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  name=""
  admno=""
  rollno=""
  collegename=""
  constructor(private api:ApiService) {}

  addstudent=()=>
  {
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"collegename":this.collegename}
    console.log(data)
    this.api.addstudent(data).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }

}
