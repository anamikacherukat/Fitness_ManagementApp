import { Component, OnInit } from '@angular/core';
import {InstructorserviceService} from '../instructorservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addinst',
  templateUrl: './addinst.component.html',
  styleUrls: ['./addinst.component.css']
})
export class AddinstComponent implements OnInit {

  constructor(private instructorService: InstructorserviceService,private router: Router) { }

  instructorItem={
    inst_name:'',
    specialisation:'',
    age:'',
    phone:'',
    email:''
  }

  AddInstructor()
  {
    this.instructorService.newInstructor(this.instructorItem);
    console.log("Called");
   alert("Success");
   this.router.navigate(['/instructors']);
  }
  ngOnInit(): void {
  }

}
