import { Component, ViewChild } from '@angular/core';
import { Form, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StateComponent } from '../../components/state/state.component';
import { IState } from '../../interfaces/IState';
@Component({
  selector: 'app-automato',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    NgFor,
    FormsModule,
    StateComponent
  ],
  templateUrl: './automato.component.html',
  styleUrl: './automato.component.scss'
})
export class AutomatoComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  data: any = DATA;
  actions: string[] = [];
  states: IState[] = STATE_LIST;
  insertCard: boolean = false;
  valueOperation!: number;
  typeOperation!: 'SAQUE' | 'DEPOSITO';
  isDoned: boolean = true;

  onInsertCard() {
    this.insertCard = true;
    this.addAction('Cartão inserido.');
    this.states[1].status = 'ACTIVE';
    this.onNext();
  }

  onValidatePassword(string: string) {
    if (string === this.data.password) {
      this.addAction('Senha digitada correta.');
      this.states[2].status = 'ACTIVE';
      this.onNext();
    } else {
      this.states[2].status = 'ERROR';
      this.addAction('Senha digitada incorreta.');
    }
  }

  onOperation(type: string, value: number) {
    if (type === 'SAQUE') {
      if(value > this.data.balance) {
        this.addAction('Saldo insuficiente.');
        this.states[3].status = 'ERROR';
        return
      };
      this.data.balance -= value;
      this.states[3].status = 'ACTIVE';
      this.addAction(`Saque de R$ ${value} realizado.`);
    } else  {
      this.data.balance += value;
      this.states[3].status = 'ACTIVE';
      this.addAction(`Depósito de R$ ${value} realizado.`);
    }

    this.valueOperation = 0;
  }

  onReset() {
    this.insertCard = false;
    this.actions = [];
    this.isDoned = false;
    this.states = STATE_LIST;
  }

  private onNext() {
    this.stepper.next()
  }

  private onBack() {
    this.stepper.previous();
  }

  private addAction(action: string) {
    this.actions.push(action);
  }
}

export const DATA = {
  name: 'Josué Medino da silva',
  balance: 1000,
  password: '1234',
}

export const STATE_LIST: IState[] = [
  {
    id: 0,
    status: 'INACTIVE',
  },
  {
    id: 1,
    status: 'INACTIVE',
    arrow: 'Inserir cartão'
  },
  {
    id: 2,
    status: 'INACTIVE',
    arrow: 'Digitar senha'
  },
  {
    id: 3,
    status: 'INACTIVE',
    arrow: 'Sacar/Depositar'
  },
]
