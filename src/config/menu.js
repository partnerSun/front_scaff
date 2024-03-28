export const MENU_CONFIG = [
    {
        title: "用户管理",
        index: "/uesr",
        icon: "iconfont icon-oftenyonghuguanli",
        // 
        items: [
            // {
            //     index: "/user/add",
            //     title: "添加用户"
            // },
            {
                index: "/user/list",
                title: "查看用户"
            }
        ]
    },
    {
        title: "产品分类",
        index: "/product",
        icon: "iconfont icon-oftenchanpinjieshao",
        subMenu: [
            {
                title: "水产品",
                index: "/product/aquatic",
                icon: "iconfont icon-oftenshuichanpin",
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
            },
            {
                title: "电子产品",
                index: "/product/elec",
                icon: "iconfont icon-oftendianzichanpin-",
                items: [
                    {
                        index: "/product/elec/add",
                        title: "添加产品"
                    },
                    {
                        index: "/product/elec/list",
                        title: "查看产品"
                    }
                ]
            }
        ]
    }
]