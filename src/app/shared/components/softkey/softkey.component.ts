import { Component } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';

interface Softkey {
  left: string;
  center: string;
  right: string;
}

@Component({
  selector: 'app-softkey',
  templateUrl: './softkey.component.html',
  styleUrls: ['./softkey.component.css']
})
export class SoftkeyComponent {
  private inputSoftKey: Softkey = { left: '', center: 'Insert', right: '' };
  private toDoSoftKey: Softkey = { left: '', center: 'Toggle', right: 'Delete' };
  public softkey: Softkey = this.inputSoftKey;

  constructor(private navigationService: NavigationService) {
    this.toHearChangesInNavigation();
  }

  private toHearChangesInNavigation(): void {
    this.navigationService.currentItem.subscribe(current => {
      const isATask = current.nodeName === 'SPAN';
      if (isATask && this.softkey !== this.toDoSoftKey) {
        this.softkey = this.toDoSoftKey;
      } else if (!isATask && this.softkey !== this.inputSoftKey) {
        this.softkey = this.inputSoftKey;
      }
    });
  }
}
