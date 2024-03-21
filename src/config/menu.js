export const MENU_CONFIG = [
    {
        title: "用户管理",
        index: "/uesr",
        icon: "",
        // 
        items: [
            {
                index: "/user/add",
                title: "添加用户"
            },
            {
                index: "/user/list",
                title: "查看用户"
            }
        ]
    },
    {
        title: "产品介绍",
        index: "/product",
        icon: "",
        subMenu: [
            {
                title: "水产品",
                index: "/product/aquatic",
                icon: "",
                items: [
                    {
                        index: "/product/aquatic/add",
                        title: "添加产品"
                    },
                    {
                        index: "/product/aquatic/list",
                        title: "查看产品"
                    }
                ]
            }
        ]
    }
]