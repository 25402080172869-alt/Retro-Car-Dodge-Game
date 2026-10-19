import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-crash-view',
  imports: [IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, RouterLink],
  templateUrl: './crash-view.component.html',
  styleUrls: ['./crash-view.component.scss']
})
export class CrashViewComponent {}
