import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar4',
  templateUrl: 'navbar4.component.html',
  styleUrls: ['navbar4.component.css'],
})
export class Navbar4 {
  @Input()
  imageSrc: string =
    '/assets/whatsapp%20image%202024-05-19%20at%205.25.11%20pm-1500h.jpeg'
  @Input()
  action1: string = 'Sign Up'
  @Input()
  imageAlt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  action2: string = 'Log In'
  @Input()
  link3: string = 'Video'
  @Input()
  link2: string = 'Chat'
  @Input()
  link4: string = 'Connect'
  @Input()
  logoAlt: string = 'Video Sync Name'
  @Input()
  link5: string = 'About'
  @Input()
  logoSrc: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
  @Input()
  link1: string = 'Video Sync'
  constructor() {}
}
