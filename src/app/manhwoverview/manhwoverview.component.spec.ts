import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhwoverviewComponent } from './manhwoverview.component';

describe('ManhwoverviewComponent', () => {
  let component: ManhwoverviewComponent;
  let fixture: ComponentFixture<ManhwoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManhwoverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManhwoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
