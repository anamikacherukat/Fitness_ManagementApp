import { Component, OnInit } from '@angular/core';
import {InstructorserviceService} from '../instructorservice.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editinst',
  templateUrl: './editinst.component.html',
  styleUrls: ['./editinst.component.css']
})
export class EditinstComponent implements OnInit {
public id:string;
  constructor(private instructorService:InstructorserviceService,private router: Router,private route: ActivatedRoute) { }

  instructorItem={
    inst_name:'',
    specialisation:'',
    age:'',
    phone:'',
    email:''
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

  }
  editI()
 {
  this.instructorService.editInstructor(this.id,this.instructorItem);   
  alert("Success");
  this.router.navigate(['instructors']);
 }

}
