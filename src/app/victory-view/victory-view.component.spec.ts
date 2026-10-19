import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective } from 'igniteui-angular';
import { VictoryViewComponent } from './victory-view.component';

describe('VictoryViewComponent', () => {
  let component: VictoryViewComponent;
  let fixture: ComponentFixture<VictoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VictoryViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VictoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
