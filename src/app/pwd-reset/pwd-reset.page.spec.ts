import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PwdResetPage } from './pwd-reset.page';

describe('PwdResetPage', () => {
  let component: PwdResetPage;
  let fixture: ComponentFixture<PwdResetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdResetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PwdResetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
