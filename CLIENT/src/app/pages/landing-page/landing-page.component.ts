import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})

export class LandingPageComponent implements OnInit, AfterViewInit {

  constructor(private elem: ElementRef) { }

  public grids: any;
  public headings: any;

  ngAfterViewInit(): void {
    this.grids = this.elem.nativeElement.querySelectorAll('.grid')
    this.headings = this.elem.nativeElement.querySelectorAll('.heading .wrapper .text')

    const timePerScreen = 4000; // ms
    const exitDelay = 200 * 7 // ms

    let timeOut = timePerScreen + exitDelay;
    setInterval(() => {
      this.setupAnimationCycle(timePerScreen, exitDelay)
    }, timeOut);
  }

  ngOnInit(): void {
  }

  public enterScreen(index: any) {
    const grid = this.grids[index]
    const heading = this.headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    grid.classList.add('active')

    // gridColumns.forEach(element => {
    //   element.classList.remove('animate-before', 'animate-after')
    // })

    heading.classList.remove('animate-before', 'animate-after')
  }

  public exitScreen(index: any, exitDelay: any) {
    const grid = this.grids[index]
    const heading = this.headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    // gridColumns.forEach(element => {
    //   element.classList.add('animate-after')
    // })

    heading.classList.add('animate-after')

    setTimeout(() => {
      grid.classList.remove('active')
    }, exitDelay)
  }

  public setupAnimationCycle(timePerScreen: number, exitDelay: number) {
    const cycleTime = timePerScreen + exitDelay
    let nextIndex = 0
    this.nextCycle(nextIndex, exitDelay, timePerScreen)
  }

  public nextCycle(nextIndex: any, exitDelay: any, timePerScreen: any) {
    const currentIndex = nextIndex
    this.enterScreen(currentIndex)
    setTimeout(() => this.exitScreen(currentIndex, exitDelay), timePerScreen)
    nextIndex = nextIndex >= this.grids.length - 1 ? 0 : nextIndex + 1
  }
}