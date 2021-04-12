import { Component, OnInit } from '@angular/core';
import {InstructorserviceService} from '../instructorservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  public id='';
  pageTitle: string="Instructor";
  instructor=[{
    inst_name:'',
    specialisation:'',
    age:'',
    phone:'',
    email:''
  }]
  constructor(private instructorService: InstructorserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.instructorService.getInstructor(this.id).subscribe((data)=>{
      this.instructor = JSON.parse(JSON.stringify(data));
    })
  }
  delete(){
    this.instructorService.deleteInstructor(this.id);
    this.router.navigate(['instructors']);
  }
}
