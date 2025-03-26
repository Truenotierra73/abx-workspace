import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AbxSideMenuComponent, TitleColor } from './abx-side-menu.component';

describe('AbxSideMenuComponent', () => {
  let component: AbxSideMenuComponent;
  let fixture: ComponentFixture<AbxSideMenuComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbxSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AbxSideMenuComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signIn when button is clicked', () => {
    spyOn(component.signIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();

    const btnSignIn: HTMLButtonElement | null =
      compiled.querySelector('[data-login]');

    expect(btnSignIn).not.toBeNull();

    btnSignIn?.click();

    expect(component.signIn.emit).toHaveBeenCalled();
  });

  it('should call signOut when button is clicked', () => {
    spyOn(component.signOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();

    const btnSignOut: HTMLButtonElement | null =
      compiled.querySelector('[data-logout]');

    expect(btnSignOut).not.toBeNull();

    btnSignOut?.click();

    expect(component.signOut.emit).toHaveBeenCalled();
  });

  it('should change title color', () => {
    expect(component.titleColor()).toBe(TitleColor.blue);

    fixture.componentRef.setInput('titleColor', TitleColor.red);
    fixture.detectChanges();
    const spanEl: HTMLSpanElement | null =
      compiled.querySelector('span[data-title]');

    expect(spanEl).toBeTruthy();
    expect(spanEl!.classList.value).toContain(TitleColor.red);
  });

  it('should change title text', () => {
    expect(component.title()).toBe('APX');

    fixture.componentRef.setInput('title', 'ABX');
    fixture.detectChanges();
    const spanEl: HTMLSpanElement | null =
      compiled.querySelector('span[data-title]');

    expect(spanEl).toBeTruthy();
    expect(spanEl!.innerText).toBe('ABX');
  });

  it('should change subtitle text', () => {
    expect(component.subtitle()).toBe('Corp');

    fixture.componentRef.setInput('subtitle', 'Company');
    fixture.detectChanges();
    const spanEl: HTMLSpanElement | null = compiled.querySelector(
      'span[data-subtitle]',
    );

    expect(spanEl).toBeTruthy();
    expect(spanEl!.innerText).toBe('Company');
  });
});
