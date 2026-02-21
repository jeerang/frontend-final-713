import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../presentation/views/LoginView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../presentation/views/RegistrationView.vue'),
        },
    ],
});

export default router;
