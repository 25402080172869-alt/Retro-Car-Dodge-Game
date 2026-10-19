import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { IgxBadgeComponent, IgxIconComponent, IgxButtonDirective } from 'igniteui-angular';
import { Stage1Component } from './stage-1.component';

describe('Stage1Component', () => {
  let component: Stage1Component;
  let fixture: ComponentFixture<Stage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stage1Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IgxBadgeComponent, IgxIconComponent, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
