import Vue from 'vue';
import Router from 'vue-router';

const Home = (r) => {
  import('components/Home/Home').then(h => {
    r(h);
  });
};

const Main = (r) => {
  import('components/Main/Main').then(m => {
    r(m);
  });
};

const Quiz = (r) => {
  import('components/Quiz/Quiz').then(q => {
    r(q);
  });
};

const Release = (r) => {
  import('components/Release/Release').then(q => {
    r(q);
  });
};

const Me = (r) => {
  import('components/Me/Me').then(m => {
    r(m);
  });
};

const R = (r) => {
  import('components/Main/tabview/recommend/recommend').then(m => {
    r(m);
  });
};

const Q = (r) => {
  import('components/Main/tabview/quiz/quiz').then(m => {
    r(m);
  });
};

const Rel = (r) => {
  import('components/Main/tabview/release/release').then(m => {
    r(m);
  });
};

const Detail = (r) => {
  import('components/base/detail/detail').then(m => {
    r(m);
  });
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/main/recommend'
    },
    {
      path: '/home',
      component: Home,
      redirect: '/home/main',
      children: [
        {
          path: 'main',
          component: Main,
          redirect: '/home/main/recommend',
          children: [
            {
              path: 'recommend',
              component: R
            },
            {
              path: 'quiz',
              component: Q
            },
            {
              path: 'release',
              component: Rel
            },
          ]
        },
        {
          path: 'quiz',
          component: Quiz
        },
        {
          path: 'release',
          component: Release
        },
        {
          path: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ],
});
