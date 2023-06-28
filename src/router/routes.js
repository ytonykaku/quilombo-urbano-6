const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'indexpage', component: () => import('pages/IndexPage.vue') },
      { path: 'activitytable', name: 'activitytable', component: () => import('pages/ActivitiesTable.vue') },
      { path: 'registeractivity', name: 'activityform', component: () => import('pages/ActivityFormPage.vue') },
      { path: 'signup', name: 'usersignuppage', component: () => import('pages/UserSignUpPage.vue') },
      { path: 'signin', name: 'usersigninpage', component: () => import('pages/UserSignInPage.vue') },
      { path: 'userregisteractivity', name: 'userregisteractivityform', component: () => import('pages/UserRegisterActivityForm.vue') },
      { path: 'availabilitytable', name: 'availabilitytable', component: () => import('pages/AvailabilityTable.vue') },
      { path: 'userstable', name: 'userstable', component: () => import('pages/UsersTable.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
