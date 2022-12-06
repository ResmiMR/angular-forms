import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTempComponent } from './reg-temp.component';

describe('RegTempComponent', () => {
  let component: RegTempComponent;
  let fixture: ComponentFixture<RegTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
