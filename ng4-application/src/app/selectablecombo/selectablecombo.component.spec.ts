import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectablecomboComponent } from './selectablecombo.component';

describe('SelectablecomboComponent', () => {
  let component: SelectablecomboComponent;
  let fixture: ComponentFixture<SelectablecomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectablecomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectablecomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
