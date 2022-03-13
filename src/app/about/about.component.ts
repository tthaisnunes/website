import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  today: Date;

  getAge(year: number): number {
    this.today = new Date();

    if (this.today.getMonth() >= 6) {
      return this.today.getFullYear() - year;
    }

    return this.today.getFullYear() - year - 1;
  }

}
