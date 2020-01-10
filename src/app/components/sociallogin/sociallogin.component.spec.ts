import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialloginComponent } from './sociallogin.component';

describe('SocialloginComponent', () => {
  let component: SocialloginComponent;
  let fixture: ComponentFixture<SocialloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialloginComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
