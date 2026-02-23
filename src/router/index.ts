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
        {
            path: '/dashboard',
            component: () => import('../presentation/components/layout/DashboardLayout.vue'),
            children: [
                {
                    path: 'profile',
                    name: 'profile',
                    component: () => import('../presentation/views/dashboard/UserProfileView.vue'),
                },
                {
                    path: 'system/constituencies',
                    name: 'system-constituencies',
                    component: () => import('../presentation/views/dashboard/ManageConstituenciesView.vue'),
                },
                {
                    path: 'system/users',
                    name: 'system-users',
                    component: () => import('../presentation/views/dashboard/ManageUsersView.vue'),
                },
                {
                    path: 'parties',
                    name: 'parties',
                    component: () => import('../presentation/views/dashboard/PoliticalPartiesView.vue'),
                },
                {
                    path: 'parties/candidates',
                    name: 'setup-candidates',
                    component: () => import('../presentation/views/dashboard/SetupCandidatesView.vue'),
                },
            ]
        }
    ],
});

export default router;
