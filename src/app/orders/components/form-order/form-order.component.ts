import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order;
  // pour envoyer au parent
  @Output() public submitted: EventEmitter<Order>;
  public form!: FormGroup;
  public states: string[];

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Order>();
    this.states = Object.values(StateOrder);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.init.typePresta, Validators.required],
      // pour plusieurs test validation
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(2)],
      ],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
