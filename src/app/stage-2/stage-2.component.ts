import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-stage-2',
  imports: [IgxIconComponent, IgxBadgeComponent, IgxButtonDirective, RouterLink],
  templateUrl: './stage-2.component.html',
  styleUrls: ['./stage-2.component.scss']
})
export class Stage2Component {}
