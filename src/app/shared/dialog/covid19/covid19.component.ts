import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NguCarouselConfig } from '@ngu/carousel';
import { COMMON_VALIDATION } from 'src/app/constants/Validations';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  constructor(private fb : FormBuilder) { }

  covidForm!: FormGroup;


  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.covidForm = this.fb.group({
      title: ['', [COMMON_VALIDATION]],
      mobileNo: ['', [COMMON_VALIDATION]],
      address: ['', [COMMON_VALIDATION]],
      description: ['', [COMMON_VALIDATION]],
    });
  }

  arr = [1,2,3]

  dataSource:any = [];
  render_child = false;
  @ViewChildren("listOfDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;

  buttonData = {
    button:false,
    dot : false
  }

  new_member_Config: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    gridBreakpoints:{sm: 750, md: 992, lg: 1200, xl: 1200},
    load: 5,
    interval: {timing: 2000, initialDelay: 1000},
    loop: false,
    touch: true,
    velocity: 0.2
  }

  ngAfterViewInit(){
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })

    setTimeout(()=>{
      this.render_child = true;
    },10)

  }

}
