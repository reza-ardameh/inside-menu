export const initialData = {
    menu: [
        {key: 1, item: 'home', submenu: null},
        {key: 2, item: 'about us', submenu: null},
        {key: 3, item: 'product', submenu: [
            {key: 1, item: 'mobile', submenu: null},
            {key: 2, item: 'lap top', submenu: [
                {key: 1, item: 'asus', submenu: null},
                {key: 2, item: 'acer', submenu: null},
            ]},
        ]},
    ]
}