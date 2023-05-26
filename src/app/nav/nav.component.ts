import { AfterViewInit, Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import { PlayHomeVideoService } from '../services/play-home-video.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements AfterViewInit {
  constructor(
    public modalService: ModalService,
    public auth: AuthService,
    private playHomeVideoService: PlayHomeVideoService
  ) {}

  openModal($event: Event) {
    $event.preventDefault();
    this.modalService.toggleModal('auth');
  }

  ngAfterViewInit() {
    if (!this.playHomeVideoService.isHomeVideoPlaying$)
      setTimeout(() => {
        const element: HTMLAnchorElement = document.getElementById(
          'play-video'
        ) as HTMLAnchorElement;
        this.playHomeVideoService.isHomeVideoPlaying$ = true;
        if (element) element.click();
      }, 0);
  }
}
