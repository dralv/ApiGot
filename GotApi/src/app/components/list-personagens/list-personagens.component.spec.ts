import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonagensComponent } from './list-personagens.component';

describe('ListPersonagensComponent', () => {
  let component: ListPersonagensComponent;
  let fixture: ComponentFixture<ListPersonagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersonagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
