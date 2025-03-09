import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitmanhwaComponent } from './hitmanhwa.component';

describe('HitmanhwaComponent', () => {
  let component: HitmanhwaComponent;
  let fixture: ComponentFixture<HitmanhwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitmanhwaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitmanhwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
