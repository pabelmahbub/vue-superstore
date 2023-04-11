import {createRouter, createWebHistory} from 'vue-router'
import SmallCompoOne from '../views/SmallCompoOne'
import SmallCompoTwo from '../views/SmallCompoTwo'
import NotFound from '../views/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/smallOne',
            name: 'smallOne',
            component: SmallCompoOne
        },
        {
            path:'/smallTwo',
            name:'smallTwo',
            component: SmallCompoTwo
        },
        {
            path:'/aboutCar',
            name:'AboutCar',
            component: ()=> import ("../components/AboutCar")
        },
        {
            path:'/posts/:id',
            name:'itemDetails',
            component: ()=> import ("../components/ItemDetails")
        },
        {
            path:'/:catchAll(.*)',
            name:'NotFound',
            component: NotFound
        },

    ]
})

export default router;