import './assets/main.css' //main.css 파일을 불러와서 컴포넌트에 스타일을 적용.

import { createApp } from 'vue' //vue 패키지에서 함수를 가져옴. 모든 뷰app은 하나의 인스턴스를 가진다. createApp()함수가 뷰app의 인스턴스를 생성하는 역할

import App from './App.vue' //App.vue 파일을 불러온다. root 컴포넌트가 된다.

createApp(App).mount('#app') //createApp()함수로 뷰app의 인스턴스가 생성되고, 이때 매개변수로 App.vue 파일을 전달한다.

