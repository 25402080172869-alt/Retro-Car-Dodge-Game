import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-stage-1',
  imports: [IgxBadgeComponent, IgxIconComponent, IgxButtonDirective, RouterLink],
  templateUrl: './stage-1.component.html',
  styleUrls: ['./stage-1.component.scss']
})
export class Stage1Component {}
