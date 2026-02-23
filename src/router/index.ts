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
                    path: 'system',
                    redirect: '/dashboard/system/constituencies',
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
                    path: 'parties/:id/members',
                    name: 'admin-party-members',
                    component: () => import('../presentation/views/dashboard/AdminPartyMembersView.vue'),
                },
                {
                    path: 'parties/candidates',
                    name: 'setup-candidates',
                    component: () => import('../presentation/views/dashboard/SetupCandidatesView.vue'),
                },
                {
                    path: 'parties/public',
                    name: 'parties-public',
                    component: () => import('../presentation/views/dashboard/PublicPartiesView.vue'),
                },
                {
                    path: 'parties/public/members',
                    name: 'parties-members',
                    component: () => import('../presentation/views/dashboard/PublicPartyMembersView.vue'),
                },
                {
                    path: 'vote',
                    redirect: '/dashboard/vote/cast',
                },
                {
                    path: 'vote/cast',
                    name: 'vote-cast',
                    component: () => import('../presentation/views/dashboard/VoteView.vue'),
                },
                {
                    path: 'vote/results',
                    name: 'vote-results',
                    component: () => import('../presentation/views/dashboard/VoteResultView.vue'),
                },
                {
                    path: 'admin',
                    redirect: '/dashboard/parties/candidates',
                },
            ]
        }
    ],
});

export default router;
