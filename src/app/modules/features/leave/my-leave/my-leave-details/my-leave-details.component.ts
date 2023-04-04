import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LEAVE_TABLEDATA } from 'src/app/constants/const_data';

@Component({
  selector: 'app-my-leave-details',
  templateUrl: './my-leave-details.component.html',
  styleUrls: ['./my-leave-details.component.scss']
})
export class MyLeaveDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  value: any;
  query_param: any;

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.query_param = res.id;
      console.log(res.id);
      this.value = LEAVE_TABLEDATA.filter((item) => item.id == res.id);
      console.log(this.value);
    });
  }
}
