import { Component, OnDestroy } from '@angular/core';
import { directoryStore } from './store/directory.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[directoryStore]
})
export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
    localStorage.clear()
  }
  title = 'HRMS';


}
