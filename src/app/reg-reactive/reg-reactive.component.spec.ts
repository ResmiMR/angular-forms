import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegReactiveComponent } from './reg-reactive.component';

describe('RegReactiveComponent', () => {
  let component: RegReactiveComponent;
  let fixture: ComponentFixture<RegReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
