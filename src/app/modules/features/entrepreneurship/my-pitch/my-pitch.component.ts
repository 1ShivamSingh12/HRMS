import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MY_PITCH_CONFIG } from 'src/app/constants/tableConfig';
import { MY_PITCH } from 'src/app/interfaces/table.interface';
import { PitchDataService } from 'src/app/services/pitch-data/pitch-data.service';

@Component({
  selector: 'app-my-pitch',
  templateUrl: './my-pitch.component.html',
  styleUrls: ['./my-pitch.component.scss'],
})
export class MyPitchComponent implements OnInit {
  dataSource = new MatTableDataSource<MY_PITCH>();
  myPitchConfig = MY_PITCH_CONFIG;
  constructor(private pitchService: PitchDataService) {}

  ngOnInit(): void {

    if(this.pitchService.data){
      this.tableData.push(this.pitchService.data)
      this.dataSource = new MatTableDataSource(this.tableData);
      console.log(this.tableData, 'sdfkhcweuif');
    }else{
      this.dataSource = new MatTableDataSource(this.tableData);
    }
  }

  tableColumns: Array<any> = [
    {
      columnDef: 's_no',
      header: '#',
      cell: (element: Record<string, any>) => `${element['s_no']}`,
    },
    {
      columnDef: 'title',
      header: 'Title',
      cell: (element: Record<string, any>) => `${element['title']}`,
      isLink: true,
    },
    {
      columnDef: 'industry',
      header: 'Industry',
      cell: (element: Record<string, any>) => `${element['industry']}`,
    },
    {
      columnDef: 'type',
      header: 'Technical / Non-Technical',
      cell: (element: Record<string, any>) => `${element['type']}`,
    },
    {
      columnDef: 'submitted',
      header: 'Submitted On',
      cell: (element: Record<string, any>) => `${element['submitted']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => `${element['action']}`,
    },
  ];

  tableData: Array<MY_PITCH> = [
    {
      s_no: 1,
      title: 'arpit',
      industry: '',
      type: 'efwe',
      submitted: '',
      action: '',
    },
    {
      s_no: 1,
      title: 'Shivam',
      industry: '',
      type: 'efwef',
      submitted: '',
      action: '',
    },
  ];
}
