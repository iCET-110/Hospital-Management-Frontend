import { Component } from '@angular/core';

@Component({
  selector: 'app-update-success-message',
  standalone: true,
  imports: [],
  templateUrl: './update-success-message.component.html',
  styleUrl: './update-success-message.component.css'
})
export class UpdateSuccessMessageComponent {
  closeAlert() {
    console.log('closeAlert');
  }

}
