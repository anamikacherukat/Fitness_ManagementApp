import { Component, OnInit } from '@angular/core';
import {InstructorserviceService} from '../instructorservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  pageTitle: string = "Instructor List"
  instructors=[{
    inst_name:'',
    specialisation:'',
    age:'',
    phone:'',
    email:'',
  }]
  constructor(private router:Router,private instructorService: InstructorserviceService) { }

  ngOnInit(): void {
    this.instructorService.getInstructors().subscribe((data)=>{
      this.instructors=JSON.parse(JSON.stringify(data));
    })
  }

}
