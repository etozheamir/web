import {Product} from './product';

export class Category {
  id: number;
  name: string;
  products: Product[];

  constructor(id: number, name: string, products: Product[]) {
    this.id = id;
    this.name = name;
    this.products = products;
  }
}


export const categories: Category[] = [
  new Category(1, 'IT', [
    new Product('BackEnd Razrab',
      3387.29, 'https://hh.kz',
      4.9,
      'https://hh.kz'
      ,
       ),
    new Product('Front End Razrab',
      3220.58,
      'https://hh.kz',
      3.6,
      'https://hh.kz'),
    new Product('Python Razrab',
      966172.31,
      'https://hh.kz',
      5,
      'https://hh.kz'),
    new Product('Sis Admin ' ,
      4175.38,
      'https://hh.kz',
      4,
      'https://hh.kz'
        ),
    ,
    new Product('Prepod po Web',
      9570.79,
      'https://hh.kz',
      4.6,
      'https://hh.kz')
  ]),



  new Category(2, 'Management', [
    new Product('Marketing',
      6021,
      'https://hh.kz',
      3,
      'https://hh.kz'),
    new Product('Useless SMM',
      98944,
      'https://hh.kz',
      4,
      'https://hh.kz'),
    new Product('Useless HR manager, kogda est HR-bot',
      25998,
      'https://hh.kz',
      5,
      'https://hh.kz'),
    new Product('Fin director',
      413714,
      'https://hh.kz',
      2,
      'https://hh.kz'),

  ]),

  new Category(3, 'Other', [
    new Product('Cleaning',
      51150.30,
      'https://hh.kz',
      1,
      'https://hh.kz')
  ])
];
