import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective } from 'igniteui-angular';
import { CrashViewComponent } from './crash-view.component';

describe('CrashViewComponent', () => {
  let component: CrashViewComponent;
  let fixture: ComponentFixture<CrashViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrashViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrashViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
