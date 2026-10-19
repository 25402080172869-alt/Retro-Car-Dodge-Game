import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [IGX_CARD_DIRECTIVES, IgxBadgeComponent, IgxAvatarComponent, IgxIconComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public speedKmh = 140;
  public currentScore = 350;
  public highScore = 1250;
}
