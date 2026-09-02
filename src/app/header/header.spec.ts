import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;
  let component: Header;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        // Necessario perché il componente usa RouterLink/RouterLinkActive
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('dovrebbe creare il componente', () => {
    expect(component).toBeTruthy();
  });

  it('isOpen dovrebbe partire chiuso (false)', () => {
    expect(component.isOpen()).toBe(false);
  });

  it('toggleMenu() dovrebbe aprire il menu se era chiuso', () => {
    component.toggleMenu();
    expect(component.isOpen()).toBe(true);
  });

  it('toggleMenu() dovrebbe richiudere il menu se era aperto', () => {
    component.toggleMenu(); // apre
    component.toggleMenu(); // richiude
    expect(component.isOpen()).toBe(false);
  });

  it('closeMenu() dovrebbe chiudere il menu anche se già aperto', () => {
    component.toggleMenu(); // apre
    component.closeMenu();
    expect(component.isOpen()).toBe(false);
  });

  it('closeMenu() non dovrebbe dare errori se il menu è già chiuso', () => {
    component.closeMenu();
    expect(component.isOpen()).toBe(false);
  });

  it('il click sul bottone hamburger dovrebbe chiamare toggleMenu()', () => {
    let toggleMenuCalls = 0;
    component.toggleMenu = () => {
      toggleMenuCalls++;
    };
    const button = fixture.debugElement.query(By.css('.hamburger-btn'));

    button.nativeElement.click();

    expect(toggleMenuCalls).toBe(1);
  });

  it('il bottone dovrebbe avere aria-expanded="false" quando il menu è chiuso', () => {
    const button = fixture.debugElement.query(By.css('.hamburger-btn'));
    expect(button.nativeElement.getAttribute('aria-expanded')).toBe('false');
  });

  it('il bottone dovrebbe avere aria-expanded="true" quando il menu è aperto', () => {
    component.toggleMenu();
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.hamburger-btn'));
    expect(button.nativeElement.getAttribute('aria-expanded')).toBe('true');
  });

  it('la classe "open" dovrebbe comparire sull\'header quando il menu è aperto', () => {
    component.toggleMenu();
    fixture.detectChanges();

    const header = fixture.debugElement.query(By.css('.header'));
    expect(header.nativeElement.classList.contains('open')).toBe(true);
  });

  it('il click su un link di navigazione dovrebbe chiudere il menu', () => {
    component.toggleMenu(); // apre il menu
    fixture.detectChanges();
    expect(component.isOpen()).toBe(true);

    const firstLink = fixture.debugElement.query(By.css('.nav a'));
    firstLink.nativeElement.click();
    fixture.detectChanges();

    expect(component.isOpen()).toBe(false);
  });
});
