import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGrupoComponent } from './lista-grupo.component';

describe('ListaGrupoComponent', () => {
  let component: ListaGrupoComponent;
  let fixture: ComponentFixture<ListaGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaGrupoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
