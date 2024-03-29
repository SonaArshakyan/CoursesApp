import { Component , Input,  Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
 search = '';
 @Input() searchPlaceHolder = '';
 @Output() searchItemEvent = new EventEmitter<string>();
 searchItem(value: string) : void {
    this.searchItemEvent.emit(value);
  }
 }