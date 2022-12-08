import { Component } from '@angular/core';

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
    this.api.addpateint(data).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }

}
