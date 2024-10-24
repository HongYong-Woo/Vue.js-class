import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

//라우터 구성 객체

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
        path:'',
        name: 'home',
        component: HomeView,    //정적 임포트(static import) :화면에 렌더링하는 시점을 어플리케이션 시작시점에서 컴포넌트를 메모리에 로드한다.
        },
        {
            path: '/about',
            name: 'about',
            component: ()=> import('../views/AboutView.vue'), //동적 임포트(dynamic import) : 해당 컴포넌트가 필요한 순간에 로드
        },
        {
            path: '/board',
            naame: 'board',
            component: ()=> import('../views/BoardView.vue')
        }
    ],
});

export default router;