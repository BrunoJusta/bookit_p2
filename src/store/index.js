import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

import bookitService from "@/apis/bookitService.js"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentKit: {
      kitname: "",
      kitType: "",
      menuIng: ""
    },
    currentArea: {
      areaName: ""
    },
    users: [],
    menus: [],
    areas: [],
    workshops: [],
    x: 0,
    logged: false,
    loggedUser: [],
    notLogged: "Entrar",
    userExists: false,
    userBlocked: false,
    bookings: [],
    areaBookings: [],
    menuTypes: [],
    ingredients: [],
    extras: [],
    decor: [],
    outfits: [],
    schools: [],
    token: [],
    currentMenu: []
  },
  mutations: {
    STORE_ITEMS(state) {
      if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(state.users));
      }
      if (!localStorage.getItem("kits")) {
        localStorage.setItem("kits", JSON.stringify(state.kits));
      }
      if (!localStorage.getItem("workshops")) {
        localStorage.setItem("workshops", JSON.stringify(state.workshops));
      }
      if (!localStorage.getItem("areas")) {
        localStorage.setItem("areas", JSON.stringify(state.areas));
      }
      if (!localStorage.getItem("bookings")) {
        localStorage.setItem("bookings", JSON.stringify(state.bookings));
      }
      if (!localStorage.getItem("ingredients")) {
        localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
      }
      if (!localStorage.getItem("extras")) {
        localStorage.setItem("extras", JSON.stringify(state.extras));
      }
      if (!localStorage.getItem("decor")) {
        localStorage.setItem("decor", JSON.stringify(state.decor));
      }
      if (!localStorage.getItem("outfits")) {
        localStorage.setItem("outfits", JSON.stringify(state.outfits));
      }
      localStorage.setItem("schools", JSON.stringify(state.schools));
    },
    ADD_USER(state, data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
      router.push({
        name: 'login'
      })

    },
    LOGIN(state, data) {

      state.loggedUser = data.user
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
      if (state.loggedUser.type === 0) {
        Swal.fire({
          icon: 'success',
          text: data.message
        })
        router.push("/adminHome")
      } else if (state.loggedUser.type === 1) {
        Swal.fire({
          icon: 'success',
          text: data.message
        })
        router.push("/")
      }

    },
    LOGOUT(state) {
      bookitService.logout()
      state.loggedUser = []
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser));
      router.push({
        name: 'home'
      })
    },
    ADD_KIT(state, payload) {
      if (!state.kits.some(kit => kit.name === payload.name)) {
        state.kits.push({
          id: payload.id,
          name: payload.name,
          type: payload.type,
          drinks: payload.drinks,
          food: payload.food,
          img: payload.img,
          popularity: 0
        });
        localStorage.setItem("kits", JSON.stringify(state.kits));
        router.push({
          name: 'menuGallery'
        })
      } else {
        Swal.fire({
          icon: 'warning',
          text: 'Já existe um menu com esse nome!'
        })
      }
    },
    ADD_WORKSHOP(state, payload) {
      if (!state.workshops.some(w => w.name === payload.name)) {
        state.workshops.push({
          id: payload.id,
          name: payload.name,
          teacher: payload.teacher,
          date: payload.date,
          time: payload.time,
          description: payload.description,
          img: payload.img
        });
        localStorage.setItem("workshops", JSON.stringify(state.workshops));
        router.push({
          name: 'workshops'
        })
      } else {
        Swal.fire({
          icon: 'warning',
          text: 'Já existe um workshop com esse nome!'
        })
      }
    },
    ADD_AREA(state, payload) {
      if (!state.areas.some(a => a.name === payload.name)) {
        state.areas.push({
          id: payload.id,
          name: payload.name,
          description: payload.description,
          img: payload.img
        });
        localStorage.setItem("areas", JSON.stringify(state.areas));
        router.push({
          name: 'areasGallery'
        })
      } else {
        Swal.fire({
          icon: 'warning',
          text: 'Já existe um espaço com esse nome!'
        })
      }
    },
    ADD_BOOKING(state, payload) {
      state.bookings.push({
        id: payload.id,
        userName: payload.userName,
        userEmail: payload.userEmail,
        kitName: payload.kitName,
        kitType: payload.kitType,
        kitImg: payload.kitImg,
        reason: payload.reason,
        date: payload.date,
        duration: payload.duration,
        numberPeople: payload.numberPeople,
        location: payload.location,
        drinks: payload.drinks,
        food: payload.food,
        extras: payload.extras,
        decor: payload.decor,
        outfit: payload.outfit,
        observation: payload.observation,
        state: payload.state,
        opinion: payload.opinion
      });
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
    ADD_AREA_BOOKING(state, payload) {
      state.areaBookings.push({
        id: payload.id,
        userName: payload.userName,
        userEmail: payload.userEmail,
        areaName: payload.areaName,
        areaImg: payload.areaImg,
        reason: payload.reason,
        date: payload.date,
        duration: payload.duration,
        state: payload.state,
        opinion: payload.opinion
      });
      localStorage.setItem("areaBookings", JSON.stringify(state.areaBookings));
    },
    ADD_INGREDIENT(state, payload) {
      if (!state.ingredients.some(ing => ing.name === payload.name)) {
        state.ingredients.push({
          id: payload.id,
          name: payload.name,
          type: payload.type,
        });
        localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
      } else {
        Swal.fire({
          icon: 'warning',
          text: 'Já existe este ingrediente!'
        })
      }
    },
    SET_MENUS(state, data) {
      state.menus = data
    },
    SET_MENU_TYPES(state, data) {
      state.menuTypes = data
    },
    SET_AREAS(state, data) {
      state.areas = data
    },
    SET_WORKSHOPS(state, data) {
      state.workshops = data
    },
    SET_USERS(state, data) {
      state.users = data
    },
    SET_CURRENT_MENU(state, data) {
      state.currentMenu = data.menu
      localStorage.setItem("currentMenu", JSON.stringify(state.currentMenu));
    }
  },
  actions: {
    async fetchMenus({
      commit
    }) {
      commit("SET_MENUS", await bookitService.getMenus())
    },
    async fetchUsers({
      commit
    }) {
      commit("SET_USERS", await bookitService.getUsers())
    },
    async fetchMenuTypes({
      commit
    }) {
      commit("SET_MENU_TYPES", await bookitService.getMenuTypes())
    },
    async fetchAreas({
      commit
    }) {
      commit("SET_AREAS", await bookitService.getAreas())
    },
    async fetchWorkshops({
      commit
    }) {
      commit("SET_WORKSHOPS", await bookitService.getWorkshops())
    },
    async postUser({
      commit
    }, payload) {
      commit("ADD_USER", await bookitService.registerUser(payload.name, payload.lastName, payload.number, payload.email, payload.birthDate, payload.gender, payload.password, payload.password2))
    },
    async login({
      commit
    }, payload) {
      commit("LOGIN", await bookitService.login(payload.email, payload.password))
    },
    async fetchCurrentMenu({
      commit
    }, payload) {
      commit("SET_CURRENT_MENU", await bookitService.getCurrentMenu(payload.id))
    }
  },
  getters: {
    getMenus: state => state.menus,
    getMenuTypes: state => state.menuTypes,
    getAreas: state => state.areas,
    getWorkshops: state => state.workshops,
    getAllUsers: state => state.users,
    getCurrentMenu: state => state.currentMenu,
    getUserOn(state) {
      if (state.loggedUser.length) {
        state.logged = true
        return state.logged;
      } else {
        state.logged = false
        return state.logged;
      }
    },
    getName(state) {
      if (state.loggedUser.length == 0) {
        return state.notLogged
      } else {
        return state.loggedUser.name
      }
    },
    getUserType(state) {
      return state.loggedUser.type
    },
    getLastName(state) {
      return state.loggedUser.lastName
    },
    getEmail(state) {
      return state.loggedUser.email
    },
    getContact(state) {
      return state.loggedUser.number
    },
    getSchool(state) {
      return state.loggedUser.school
    },
    getBirthDate(state) {
      return state.loggedUser.birthDate
    },
    getUserImg(state) {
      return state.loggedUser.img
    },
    getCurrentKitName(state) {
      return state.currentKit.kitname
    },
    getCurrentKitType(state) {
      return state.currentKit.kitType
    },
    getCurrentKitIng(state) {
      return state.currentKit.menuIng
    },
    getCurrentArea(state) {
      return state.currentArea.areaName
    },
    getCurrentKitImg(state) {
      return state.currentKit.kitImg
    },
    getCurrentAreaImg(state) {
      return state.currentArea.areaImg
    },
    getCurrentDate() {
      var today = new Date();
      var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      return date
    },
    getNumberNotifications(state) {
      if (state.loggedUser.notifications) {
        if (state.loggedUser.notifications.length != 0) {
          return true
        } else {
          return false
        }
      }
    }
  }
})