import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Portfolio from '@/components/FullPortfolio'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        Nav: Nav
      }
    },
    {
      path: '/full-portfolio',
      name: 'full portfolio',
      components: {
        default: Portfolio,
        Nav: Nav
        
      }
    },
    {
      path: '/resume',
      name: 'resume',
      components: {
        default: Resume,
        Nav: Nav
        
      }
    },
    {
      path: '/contact-me',
      name: 'contact me',
      components: {
        default: Contact,
        Nav: Nav
        
      }
    }
  ]
})
