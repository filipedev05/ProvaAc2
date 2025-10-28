import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTarefa } from './cadastrar-tarefa';

describe('cadastrarTarefa', () => {
  let component: CadastrarTarefa;
  let fixture: ComponentFixture<CadastrarTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarTarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTarefa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
