import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-section1-landing-page',
  templateUrl: './section1-landing-page.component.html',
  styleUrls: ['./section1-landing-page.component.scss']
})
export class Section1LandingPageComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor(private elem: ElementRef) {
    this.config = {
      // fullpage options
      licenseKey: 'YOUR_KEY_HERE',
      autoScrolling: true,
      scrollHorizontally: true,
    };
  }

  public grids: any;
  public headings: any;
  public gridColumns: any;
  nextIndex = 0;

  ngAfterViewInit(): void {
    this.grids = this.elem.nativeElement.querySelectorAll('.grid');
    this.headings = this.elem.nativeElement.querySelectorAll(
      '.heading .wrapper .text'
    );

    const timePerScreen = 4000; // ms
    const exitDelay = 200 * 7; // ms

    this.setupAnimationCycle(timePerScreen, exitDelay);
  }

  ngOnInit(): void { }

  public enterScreen(index: any) {
    const grid = this.grids[index];
    const heading = this.headings[index];
    const gridColumns = grid.querySelectorAll('.column');

    grid.classList.add('active');
    gridColumns.forEach((element: any) => {
      element.classList.remove('animate-before', 'animate-after');
    });
    heading.classList.remove('animate-before', 'animate-after');
  }

  public exitScreen(index: any, exitDelay: any) {
    const grid = this.grids[index];
    const heading = this.headings[index];
    const gridColumns = grid.querySelectorAll('.column');

    gridColumns.forEach((element: any) => {
      element.classList.add('animate-after');
    });

    heading.classList.add('animate-after');

    setTimeout(() => {
      grid.classList.remove('active');
      this.resetAnimation(index);
    }, exitDelay);
  }

  public resetAnimation(index: any) {
    const grid = this.grids[index];
    const heading = this.headings[index];
    const gridColumns = grid.querySelectorAll('.column');

    gridColumns.forEach((element: any) => {
      element.classList.remove('animate-after');
      element.classList.add('animate-before');
    });

    heading.classList.remove('animate-after');
    heading.classList.add('animate-before');
  }

  public setupAnimationCycle(timePerScreen: number, exitDelay: number) {
    const cycleTime = timePerScreen + exitDelay;
    this.nextCycle(this.nextIndex, exitDelay, timePerScreen);
    setInterval(
      () => this.nextCycle(this.nextIndex, exitDelay, timePerScreen),
      cycleTime
    );
  }

  public nextCycle(nextIndex: any, exitDelay: any, timePerScreen: any) {
    const currentIndex = nextIndex;
    this.enterScreen(currentIndex);
    setTimeout(() => this.exitScreen(currentIndex, exitDelay), timePerScreen);
    this.nextIndex =
      this.nextIndex >= this.grids.length - 1 ? 0 : this.nextIndex + 1;
  }
}
