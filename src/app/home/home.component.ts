import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  isMusicPlaying = false;

  musicControlButton?: HTMLVideoElement;

  @ViewChild('videoElement') target?: ElementRef;

  ngAfterViewInit(): void {
    this.musicControlButton = this.target?.nativeElement;
  }

  play() {
    this.isMusicPlaying = !this.isMusicPlaying;
    if (this.musicControlButton) this.musicControlButton.play();
  }

  pause() {
    this.isMusicPlaying = !this.isMusicPlaying;

    if (this.musicControlButton) this.musicControlButton.pause();
  }
}
