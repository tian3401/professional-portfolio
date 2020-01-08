import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Portfolio from '@/components/FullPortfolio'
import Resume from '@/components/Resume'
import Moyo from '@/components/Moyo'
import MiningGame from '@/components/MiningGame'

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
      path: '/moyo',
      name: 'moyo',
      components: {
        default: Moyo,
        Nav: Nav
        
      }
    },
    {
      path: '/mining-game',
      name: 'mining-game',
      components: {
        default: MiningGame,
        Nav: Nav
        
      }
    }
  ]
})
