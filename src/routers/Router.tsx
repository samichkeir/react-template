import OneRoute from "../interfaces/OneRoute";
import Users from "../Pages/Users/Users";
import Dashboard from "../components/Dashboard";



const allroutes:OneRoute[] = [
    {
        name:"Home",
        icon:"fa fa-home",
        children:[
            {
                name:"Home",
                path: "/",
                element: <Users />,
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
        element: <Dashboard />,
    }
];
export default allroutes;