import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-line-item',
  templateUrl: './chat-line-item.component.html',
  styleUrls: ['./chat-line-item.component.scss']
})
export class ChatLineItemComponent implements OnInit {
  @Input() name: string;
  @Input() fill: number;

  constructor() { }

  ngOnInit(): void {
  }

}
