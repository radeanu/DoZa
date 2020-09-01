import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

import { ActivityOption } from '@shared/types';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss'],
})
export class PickerComponent implements OnInit {
  displayItems = false;
  pickedItemsName = [];
  pickedItems = [];
  displayedOptions = [];

  @Input() options = Array<ActivityOption>();
  @Output() items = new EventEmitter<Array<ActivityOption>>();

  constructor() {}

  ngOnInit(): void {
    this.displayedOptions = this.options;
  }

  filterOptions(value: string): void {
    if (value === '') {
      this.displayedOptions = this.options;
    }
    this.displayItems = true;

    this.displayedOptions = this.options.filter(({ name }) =>
      name.toUpperCase().match(value.toUpperCase())
    );
  }

  bindItem({ checked }, item: ActivityOption): void {
    if (checked) {
      this.pickedItems = [item, ...this.pickedItems];
      this.items.emit(this.pickedItems);
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: ActivityOption): void {
    this.pickedItems = this.pickedItems.filter((val) => val !== item);
    this.items.emit(this.pickedItems);
    this.pickedItemsName = this.pickedItemsName.filter(
      (name) => name !== item.name
    );
  }

  selectAll({ checked }): void {
    if (checked) {
      this.pickedItems = this.options.map((item) => item);
      this.items.emit(this.pickedItems);
      this.pickedItemsName = this.options.map(({ name }) => name);
    } else {
      this.pickedItems = [];
      this.pickedItemsName = [];
      this.items.emit(this.pickedItems);
    }
  }
}
