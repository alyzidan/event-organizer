/* eslint-disable */
import Vue from "vue"
import Vuex from "vuex"
import * as Firebase from "firebase";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state:{
    loadedMeetups: [],
    user: null,
    loading: null,
    error:  null,
    success: null
  },
  mutations:{
    loadMeetUp (state, payload) {
      state.loadedMeetups = payload;
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload);
    },
    createNewUser(state,payload){
      state.user = payload;
    },
    signInUser(state,payload) {
      state.user = payload;
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setSuccess (state,payload) {
      state.success = payload
    },
    clearSuccess (state) {
      state.success = null
    }
  },
  actions:{
    clearSuccess ({commit}) {
      commit('clearSuccess');
    },
    loadMeetUp ({commit}) {
      Firebase.database().ref('meetups').once('value')
      .then((data) => {
        const allMeetUps = []
        const obj = data.val();
        for (let key in obj) {
          allMeetUps.push({
            id: key,
            title: obj[key].title,
            src: obj[key].src,
            date: obj[key].date,
            description: obj[key].description,
            loaction: obj[key].location
          });
        }
        commit('loadMeetUp',allMeetUps)
        //console.log(JSON.parse(JSON.stringify(allMeetUps)));
      })
      .catch(
        (error)=>{
          console.log(error)
        }
      )

    },
    clearError ({commit},payload) {
      commit("clearError");
    },
    createMeetup ({commit}, payload){
      commit('setLoading', true);
      const meetUp ={
        title : payload.title,
        loaction : payload.location,
        src : payload.photo,
        description : payload.description,
        date : payload.date,
      }
      Firebase.database().ref('meetups').push(meetUp)
      .then((response)=>{
        // console.log(JSON.parse(JSON.stringify(response.key)));
        const key = response.key;
        commit('createMeetup', {
          ...meetUp,
          id: key,
        });
        commit('setSuccess',{display:true,message:'Event added successfully'});
        commit('setLoading', false);
      })
      .catch((error) => {
        commit("setError", error.message);
      })
    },
    createNewUser ({commit}, payload) {
      commit("clearError");
      commit('setLoading', true)
      Firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
      commit('setLoading',false)
        console.log(user)
        const newUser = {
          id : user.user.uid,
          registeredMeetups : []
        }
          commit('createNewUser',newUser)
          commit('clearError')
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error.message)
          // console.log(error.message);
        })
    },
    signInUser({commit},payload){
      commit('setLoading',true)
      Firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((user)=>{
        commit('setLoading',false)
        const newUser ={
          id: user.user.uid,
          registeredMeetups: []
        }
        commit('signInUser', newUser);
        commit('setLoading',false)
        commit('setSuccess',{display:false,message:`signed in`})
      })
      .catch((error) => {
        commit('setLoading',false)
        console.log(error.message);
        commit('setError',error.message)
      })
    },
    autoSignIn ({commit}, payload) {
      commit('createNewUser', {id : payload.uid, registeredMeetups:[] })
    }
  },
  getters:{
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA,meetupB) => {
        return meetupA.date > meetupB.date;
      })
    },
    featuredMeetupForCarousel (state,getters) {
      return state.loadedMeetups.slice(0,4)
    },
    loadedMeetup (state) {
      return (meetupID) => {
        return state.loadedMeetups.find((meetUp) => {
          return meetUp.id === meetupID;
        })
      }
    },
    getUser (state) {
      return state.user;
    },
    getErrorState (state) {
      return state.error;
    },
    getLoadingState (state) {
      return state.loading;
    },
    getSuccessState (state) {
      return state.success;
    },
    getMainEventState(state){
      return state.loadedMeetups.length
    }
  }
})
