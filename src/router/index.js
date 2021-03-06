import React from 'react'
import {Redirect} from 'react-router-dom'

import Discover from '@/pages/discover'
import Friends from '@/pages/friends'
import Mine from '@/pages/mine'
import Album from '@/pages/discover/c-pages/album'
import Artist from '@/pages/discover/c-pages/artist'
import Djradio from '@/pages/discover/c-pages/djradio'
import Ranking from '@/pages/discover/c-pages/ranking'
import Recommend from '@/pages/discover/c-pages/recommend'
import Songs from '@/pages/discover/c-pages/songs'



export const routes = [
  {
    path:'/',
    exact:true,
    render:()=>{
      return <Redirect to="/discover"/>
    }
  },
  {
    path:'/discover',
    component:Discover,
    routes:[
      {
        path:'/discover',
        component:Discover,
        exact:true,
        render:()=>{
          return <Redirect to="/discover/recommend"/>
        },
      },
      {
        path:'/discover/recommend',
        component:Recommend
      },
      {
        path:'/discover/ranking',
        component:Ranking
      },
      {
        path:'/discover/songs',
        component:Songs
      },
      {
        path:'/discover/djradio',
        component:Djradio
      },
      {
        path:'/discover/artist',
        component:Artist
      },
      {
        path:'/discover/album',
        component:Album
      }
    ]
  },
  {
    path:'/friends',
    component:Friends
  },
  {
    path:'/mine',
    component:Mine
  }
]