import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import EditFormView from '../views/forms/EditFormView.vue'
import InsertFormView from '../views/forms/InsertFormView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView
    },
    {
        path: '/contacts/edit/:id',
        name: 'edit',
        component: EditFormView
    }
    ,
    {
        path: '/contacts/new',
        name: 'new',
        component: InsertFormView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router