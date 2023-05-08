import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LUNCH_COUPON } from 'src/app/constants/routes';
import { calenderOptions } from 'src/app/constants/tableConfig';
import { FoodCalenderService } from 'src/app/services/food-calender/food-calender.service';

@Component({
  selector: 'app-food-calender',
  templateUrl: './food-calender.component.html',
  styleUrls: ['./food-calender.component.scss'],
})
export class FoodCalenderComponent implements OnInit {
  constructor(private foodService: FoodCalenderService , private route : Router) {}

  @Input() confiq!: calenderOptions;
  @Output() CalenderEmit = new EventEmitter<any>();
  @Output() couponCount = new EventEmitter<number>();
  @Output() couponValue = new EventEmitter<number>();


  week = [
    { value: 1, viewValue: 'Mon' },
    { value: 2, viewValue: 'Tue' },
    { value: 3, viewValue: 'Wed' },
    { value: 4, viewValue: 'Thur' },
    { value: 5, viewValue: 'Fri' },
    { value: 6, viewValue: 'Sat' },
    { value: 7, viewValue: 'Sun' },
  ];

  ngOnInit(): void {
    let newDate = new Date();
    let firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
    let lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
    // console.log(newDate, firstDay. , lastDay, '0000');
    this.getDate();
    this.daysInMonth();

    this.foodService.subject.subscribe((response: any) => {
     this.couponPurchase()
    });6
  }

  Calender: Array<any> = [];
  currentMonth!: string;
  currentYear!: number;
  getDate = () => {
    let newDate = new Date();
    let firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
    this.currentYear = newDate.getFullYear();
    this.currentMonth = this.month[newDate.getMonth()];
    let counter_dates = 1;
    for (let i = 0; i < 35; i++) {
      let dates: any = {};
      // console.log(this.Calender,)
      if (i >= firstDay.getDay() - 1 && counter_dates <= this.daysInMonth()) {
        let current_Day = this.getWeekDay(counter_dates);
        dates['Day'] = this.weekDayData[current_Day.getDay()];
        dates['Date'] = current_Day.getDate();
        if (
          dates.Day == 'Mon' ||
          dates.Day == 'Tue' ||
          dates.Day == 'Wed' ||
          dates.Day == 'Thu' ||
          dates.Day == 'Fri'
        ) {
          if (newDate.getDate() < dates.Date) {
            dates['couponPurchase'] = false;
            dates['booked'] = false;
          }
        }
        counter_dates++;
        this.Calender.push(dates);
      } else {
        this.Calender.push(dates);
      }
    }
    console.log(this.Calender, '*()');
    this.createCalender();
  };

  myCalendar: any;

  createCalender() {
    const finalCalender = [];
    for (let i = 0; i < this.Calender.length; i += 7) {
      const weekDates = this.Calender.slice(i, i + 7);
      finalCalender.push(weekDates);
    }
    this.myCalendar = finalCalender;
    console.log(finalCalender, 'wdkjcbweuic');
  }

  getWeekDay(day: number) {
    let date = new Date();
    let weekDay = new Date(date.getFullYear(), date.getMonth(), day);
    return weekDay;
  }
  weekDayData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  daysInMonth() {
    let d = new Date();
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  }

  locked(date: any): boolean {
    let d = new Date();
    if (d.getDate() >= date) {
      return true;
    }
    return false;
  }

  checkCount = 0;

  selectCheckbox(e: any, day: any) {
    if (e.checked == true) {
      this.checkCount++;
    } else {
      this.checkCount--;
    }
    this.Calender.map((item: any) => {
      if (day == item.Date) {
        if(e.checked){
          item['booked'] = true;
        }else{
          item['booked'] = false;
        }
        this.couponCount.emit(1 * this.checkCount);
        this.couponValue.emit(25 * this.checkCount);

      }

    });
    console.log(this.Calender,'')
  }

  couponPurchase() {
    console.log(this.Calender, '()())______1');

    this.Calender.map((item: any) => {
      if (item.booked == true) {
        item.couponPurchase = true;
        // this.route.navigate([LUNCH_COUPON.fullurl])
      }
    });
    console.log(this.Calender, '()())');
  }
}
