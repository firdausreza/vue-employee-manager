import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../components/Dashboard";
import NewEmployee from "../components/NewEmployee";
import ViewEmployee from "../components/ViewEmployee";
import EditEmployee from "../components/EditEmployee";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'new-employee',
    component: NewEmployee
  },
  {
    path: '/edit/:employee_id',
    name: 'edit-employee',
    component: EditEmployee
  },
  {
    path: '/:employee_id',
    name: 'view-employee',
    component: ViewEmployee,
    props: {
      default: true,
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
