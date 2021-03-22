import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },        
    ],
  },
  {
    label: 'Categories',
    main: [
      
      {
        state: 'allCategories',
        short_label: '0',
        name: 'All Categories',
        type: 'link',
        icon: 'ti-map-alt'
      },
     
    ]
  },
  {
    label: 'Users',
    main: [
      
      {
        state: 'allusers',
        short_label: '0',
        name: 'All Users',
        type: 'link',
        icon: 'ti-map-alt'
      },
     
    ]
  },
 
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
