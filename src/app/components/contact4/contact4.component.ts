import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact4',
  templateUrl: 'contact4.component.html',
  styleUrls: ['contact4.component.css'],
})
export class Contact4 {
  @Input()
  content3: string =
    'Our team is dedicated to providing the best user experience and support.'
  @Input()
  imageSrc2: string = '/assets/download%20(1)-200h.png'
  @Input()
  imageAlt1: string = 'image'
  @Input()
  imageSrc1: string = 'be219a60-4611-4316-83bd-5d0b9497ccf7'
  @Input()
  content1: string =
    "We'd love to hear from you! Get in touch with us for any questions or feedback."
  @Input()
  imageAlt2: string = 'image'
  @Input()
  phone1: string = '+1-123-456-7890'
  @Input()
  imageAlt: string = 'image'
  @Input()
  content2: string =
    'For any inquiries or issues, please feel free to reach out to us.'
  @Input()
  content5: string =
    'Join our community and start connecting with people worldwide!'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content4: string = 'Follow us on social media for updates and announcements.'
  @Input()
  imageSrc: string = 'be219a60-4611-4316-83bd-5d0b9497ccf7'
  @Input()
  address1: string = '123 Video Sync Name Street, Random City, Worldwide'
  @Input()
  twitter: string = 'contact@videosyncname.com'
  constructor() {}
}
