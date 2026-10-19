import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IgxIconComponent, IgxBadgeComponent, IgxButtonDirective } from 'igniteui-angular';
import { Stage2Component } from './stage-2.component';

describe('Stage2Component', () => {
  let component: Stage2Component;
  let fixture: ComponentFixture<Stage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stage2Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IgxIconComponent, IgxBadgeComponent, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
