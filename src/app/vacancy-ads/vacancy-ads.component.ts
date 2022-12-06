import { Component } from '@angular/core';


@Component({
  selector: 'app-vacancy-ads',
  templateUrl: './vacancy-ads.component.html',
  styleUrls: ['./vacancy-ads.component.css']
})


export class VacancyAdsComponent
{
  responsiveOptions: any;
  images: Image[] = [];

  VacanyAdsComponent()
  {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.images = [
      {
        name: 'Image 1',
        imgSrc: 'src/assets/1_applied.jpg'
      },
      {
        name: 'Image 2',
        imgSrc: 'src/assets/2_business.jpg'
      },
      {
        name: 'Image 3',
        imgSrc: 'src/assets/3_engineering.jpg'
      },
    ];
}

  
}

interface Image {
  name: string;
  imgSrc: string;
};