import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-victory-view',
  imports: [IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, RouterLink],
  templateUrl: './victory-view.component.html',
  styleUrls: ['./victory-view.component.scss']
})
export class VictoryViewComponent {}
