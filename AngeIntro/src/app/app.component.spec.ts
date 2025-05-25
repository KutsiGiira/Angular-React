import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarCompoenent } from './Navbar/navbar.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarCompoenent],
    }).compileComponents();
  });
});
