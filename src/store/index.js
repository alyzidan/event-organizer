/* eslint-disable */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
export const store = new Vuex.Store({
  state:{
    loadedMeetups: [{
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '98',
        title: 'Meet Up humborg',
        date: '2017-05-11'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '99',
        title: 'Meet Up Newzealand',
        date: '2017-07-11'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '100',
        title: 'Meet Up Austria',
        date: '2017-08-11'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '101',
        title: 'Meet Up',
        date: '2017-09-11'
      }
    ],
    user: {
      id:'001',
      registeredMeetup: ['101','100']
    }
  },
  mutations:{
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload);
    }
  },
  actions:{
    createMeetup ({commit}, payload){
      const meetUp ={
        title : payload.title,
        loaction : payload.loaction,
        src : payload.photo,
        description: payload.description,
        date: payload.date,
        id:'0701'
      }
      commit('createMeetup', meetUp);
    }
  },
  getters:{
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA,meetupB) => {
        return meetupA.date > meetupB.date;
      })
    },
    featuredMeetupForCarousel (state,getters) {
      return getters.loadedMeetups.slice(0,5)
    },
    loadedMeetup (state) {
      return (meetupID) => {
        return state.loadedMeetups.find((meetUp) => {
          return meetUp.id === meetupID;
        })
      }
    }
  }
})
