import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavabrComponent } from './navabr.component';

describe('NavabrComponent', () => {
  let component: NavabrComponent;
  let fixture: ComponentFixture<NavabrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavabrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
