import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    user: localStorage.getItem('userP') || null,
    admin: localStorage.getItem('admin') || null,

    response: {
      type: "",
      message: "",
      hasApp: ''
    },
    profile: '',
    quiz: [],
    applications: [],
    scores: []
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },

    

    apiResponse: state => state.response,
    getUser: state => state.user,
    getProfile: state => state.profile,
    getQuiz: state => state.quiz,
    getAdmin: state => state.admin,
    getApps: state => state.applications,
    getScores: state => state.scores
  },

  mutations: {

    setResponse: (state, payload) => {
      state.response = {
        type: payload.type,
        message: payload.message,
        hasApp: payload.hasApp
      }
    },

    setUser(state, user) {
      state.user = user
    },

    setProfile(state, user) {
      state.profile = user
    },

    setQuiz(state, user) {
      state.quiz = user
    },

    setAdmin(state, user) {
      state.admin = user
    },

    setApps(state, user) {
      state.applications = user
    },

    setScores(state, user) {
      state.scores = user
    },

    retrieveToken(state, token) {
      state.token = token
    },

    destroyToken(state) {
      state.token = null
    },

    destroyUser(state) {
      state.user = null
    },

    destroyAdmin(state) {
      state.admin = null
    }

  },


  actions: {
    async signup({ commit }, userInfo) {
      try {
        const response = await axios.post('http://localhost:3000/api/user/register', userInfo);

        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        commit('setResponse', responseObject)
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(responseObject);
        
        commit('setResponse', responseObject)

      }
    },

    async login({ commit }, userInfo) {
      try {
        const response = await axios.post('http://localhost:3000/api/user/login', userInfo);
          let responseObject = {
            type: 'success',
            message: response.data.message,
            hasApp: response.data.hasApplied
          }

          console.log(response.data);
          

          const token = response.data.token
          localStorage.setItem('access_token', token)
          commit('retrieveToken', token)
          commit('setResponse', responseObject)
          
          // console.log(response.data.data._id);
          const user = await response.data.data._id
          localStorage.setItem('userP', user)
          commit('setUser',user)
        
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        
        commit('setResponse', responseObject)

      }
    },

    async application({ commit }, userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:3000/api/user/application', userInfo);

          let responseObject = {
            type: 'success',
            message: response.data.message
          }
          commit('setResponse', responseObject)
          console.log(response.data);
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        
        commit('setResponse', responseObject)

      }
    },

    async fetchProfile({ commit }) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        var id = localStorage.getItem('userP')
        const response = await axios.get(`http://localhost:3000/api/user/${id}`);
        // console.log(id);
        // console.log(response);
        commit('setProfile', response.data.data)

      } catch (error) {
        commit('setProfile', error.response)
      }
    },

    async fetchQuiz({commit}) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.get(
          `http://localhost:3000/api/questions`
        );

        commit('setQuiz', response.data)
        
      } catch (error) {
        commit('setQuiz', error.response)
      }
    },

    async answers({ commit }, userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:3000/api/user/question/submit', userInfo);

          let responseObject = {
            type: 'success',
            message: response.data.message
          }

          commit('setResponse', responseObject)
          console.log(response.data);
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        
        commit('setResponse', responseObject)

      }
    },

    async editProfile({ commit },  userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        var id = localStorage.getItem('userP')
        const response = await axios.put(`http://localhost:3000/api/user/profilepic/${id}`, userInfo);
        

        let responseObject = {
          type: 'success',
          message: response.data.message
        }
        commit('setResponse', responseObject)
       
  
      } catch (error) {
       
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        commit('setResponse', responseObject)
      }
    },

    async adminLogin({ commit }, userInfo) {
      try {
        const response = await axios.post('http://localhost:3000/api/admin/login', userInfo);

          let responseObject = {
            type: 'success',
            message: response.data.message
          }

          const token = response.data.token
          localStorage.setItem('access_token', token)

          commit('retrieveToken', token)
          commit('setResponse', responseObject)
          
          console.log(response.data.data._id);
          const user = await response.data.data._id
          localStorage.setItem('admin', user)
          commit('setAdmin',user)
        
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        commit('setResponse', responseObject)
      }
    },

    async fetchAdminProfile({ commit }) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        var id = localStorage.getItem('admin')
        const response = await axios.get(`http://localhost:3000/api/admin/${id}`);
        
        commit('setProfile', response.data)

      } catch (error) {
        commit('setProfile', error.response)
      }
    },

    async fetchApps({ commit }) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        
        const response = await axios.get(`http://localhost:3000/api/applications`);
        commit('setApps', response.data.data)

      } catch (error) {
        commit('setApps', error.response)
      }
    },

    async fetchScores({ commit }) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        
        const response = await axios.get(`http://localhost:3000/api/scores`);
        commit('setScores', response.data.answers)

      } catch (error) {
        commit('setScores', error.response)
      }
    },

    async createApp({ commit }, userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:3000/api/admin/create', userInfo);

          let responseObject = {
            type: 'success',
            message: response.data.message
          }

          commit('setResponse', responseObject)
          console.log(response.data);
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        
        commit('setResponse', responseObject)

      }
    },

    async createQstn({ commit }, userInfo) {
      try {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
        const response = await axios.post('http://localhost:3000/api/admin/question/create', userInfo);

          let responseObject = {
            type: 'success',
            message: response.data.message
          }

          commit('setResponse', responseObject)
          console.log(response.data);
      } catch (error) {
        let responseObject = {
          type: 'failed',
          message: error.response.data.message
        }
        console.log(error.response.data.message);
        
        commit('setResponse', responseObject)

      }
    },

    logout ({ commit }) {
      axios.defaults.headers.common['Authorization'] = {}
      localStorage.removeItem('access_token')
      localStorage.removeItem('userP')
      commit('destroyToken')
      commit('destroyUser')
    },


  },
  modules: {
  }
})
