import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor() { }
  panelOpenState = false;
  ngOnInit(): void {
  }

}
