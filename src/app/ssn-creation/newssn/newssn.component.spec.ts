import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewssnComponent } from './newssn.component';

describe('NewssnComponent', () => {
  let component: NewssnComponent;
  let fixture: ComponentFixture<NewssnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewssnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewssnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
