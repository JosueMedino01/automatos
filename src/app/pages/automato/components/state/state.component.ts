import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IState } from '../../interfaces/IState';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [NgIf],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class StateComponent {
  @Input() state!: IState;
}

