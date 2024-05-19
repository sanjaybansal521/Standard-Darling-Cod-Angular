import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero3',
  templateUrl: 'hero3.component.html',
  styleUrls: ['hero3.component.css'],
})
export class Hero3 {
  @Input()
  imageAlt: string = 'image'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1488998287214-1e668a8e0dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEzMjU2MXw&ixlib=rb-4.0.3&q=80&w=1400'
  @Input()
  action1: string = 'Learn More'
  @Input()
  image1Alt: string = 'Connect with people worldwide'
  @Input()
  heading1: string = 'Welcome to Video Sync'
  @Input()
  imageSrc: string = '/assets/pexels-photo-745045-1500w.jpeg'
  @Input()
  action2: string = 'Get Started'
  @Input()
  content1: string =
    'Join our platform to chat and video connect with random people from around the globe.'
  constructor() {}
}
