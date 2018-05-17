import { Component } from '@angular/core';
import { AppHeaderComponent } from '../common/app-header/app-header.component';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { NavbarService } from './service/navbar-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
      transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = 'MyBookDoctor';
  menuState = 'out';
  // backgroundImage = './assets/images/DoctorBackGroundImg.jpg';
  constructor(private router: Router, private nav: NavbarService) {
    this.router.navigate(['login']);
  }
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
