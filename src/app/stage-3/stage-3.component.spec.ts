import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IgxIconComponent, IgxBadgeComponent, IgxButtonDirective } from 'igniteui-angular';
import { Stage3Component } from './stage-3.component';

describe('Stage3Component', () => {
  let component: Stage3Component;
  let fixture: ComponentFixture<Stage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stage3Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IgxIconComponent, IgxBadgeComponent, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
