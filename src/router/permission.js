import router from "./index";

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('usermsg');
  if (user) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})