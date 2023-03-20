import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-qualification',
  templateUrl: './delete-qualification.component.html',
  styleUrls: ['./delete-qualification.component.scss']
})
export class DeleteQualificationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data,'wcjejcveewucedye');
  }
}
