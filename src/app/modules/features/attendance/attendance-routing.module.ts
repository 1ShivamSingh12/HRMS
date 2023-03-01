import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ATTENDANCE_CALENDER, MANUAL_PUNCH, PUNCH_LOG } from 'src/app/constants/routes';
import { AttendanceComponent } from './attendance.component';

const routes: Routes = [
  {path:"",component:AttendanceComponent},
  {
    path: ATTENDANCE_CALENDER.path,
    loadChildren: () =>
      import('./attendance-calender/attendance-calender.module').then((m) => m.AttendanceCalenderModule),
  },
  {
    path: MANUAL_PUNCH.path,
    loadChildren: () =>
      import('./manual-punch/manual-punch.module').then((m) => m.ManualPunchModule),
  },
  {
    path: PUNCH_LOG.path,
    loadChildren: () =>
      import('./punch-log/punch-log.module').then((m) => m.PunchLogModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
