import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHitmanhwaComponent } from './list-hitmanhwa.component';

describe('ListHitmanhwaComponent', () => {
  let component: ListHitmanhwaComponent;
  let fixture: ComponentFixture<ListHitmanhwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHitmanhwaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHitmanhwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
