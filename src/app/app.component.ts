import { Component, HostListener, OnInit } from '@angular/core';
import { TodoService } from './shared/components/todo/todo.service';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService, private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.init();
  }

  @HostListener('document:keydown.enter')
  onEnter() {
    const [currentItem, currentIndex] = this.navigationService.getCurrentItem();
    if (currentItem.nodeName === 'INPUT' && 'value' in currentItem && currentItem.value) {
      this.todoService.add({ name: currentItem.value, completed: false });
      currentItem.value = '';
    } else {
      this.todoService.toggleComplete(currentIndex - 1);
    }
  }

  @HostListener('document:keydown.arrowdown')
  onArrowDown() {
    this.navigationService.Down();
  }

  @HostListener('document:keydown.arrowup')
  onArrowUp() {
    this.navigationService.Up();
  }

  @HostListener('document:keydown.softright')
  onSoftRight() {
    const [currentItem, currentIndex] = this.navigationService.getCurrentItem();
    if (currentItem.nodeName === 'SPAN') {
      this.todoService.remove(currentIndex - 1);
      this.navigationService.Up();
    }
  }
}
