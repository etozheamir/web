export class Product {
  name: string;
  price: number;
  link: string;
  rating: number;
  imagesLinks: string;
  //likes: number;


  constructor(name: string, price: number, link: string, rating: number, imagesLink: string
           //   likes: number
  ) {
    this.price = price;
    this.imagesLinks = imagesLink;
    this.link = link;
    this.name = name;
    this.rating = rating;
  //  this.likes = likes;
  }
}
