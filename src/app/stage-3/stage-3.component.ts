import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-stage-3',
  imports: [IgxIconComponent, IgxBadgeComponent, IgxButtonDirective, RouterLink],
  templateUrl: './stage-3.component.html',
  styleUrls: ['./stage-3.component.scss']
})
export class Stage3Component {}
