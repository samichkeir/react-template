import OneRoute from "../interfaces/OneRoute";

const allroutes:OneRoute[] = [
    {
        name:"Home",
        icon:"fa fa-home",
        children:[
            {
                name:"Home",
                path: "/",
                element: <div>Hello world!</div>,
            },
            {
                name:"Home",
                path: "/1",
                element: <div>Hello world1!</div>,
            },
            {
                name:"Home",
                path: "/2",
                element: <div>Hello world2!</div>,
            },
        ]
    },
    {
        name:"Dashboard",
        icon:"fa fa-edit",
        path: "/3",
        element: <div>Hello world3!</div>,
    }
];
export default allroutes;