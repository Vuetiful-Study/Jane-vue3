# composition-api

## 1. Option API vs Composition API

### Option API
아래와 같이 각 데이터들, 메소드, 컴포넌트 주기 등 코드가 나눠져있다. <br>
다른 데이터들과 메소드들인데도 한 곳에 응집되어 있고, 
오히려 같은 기능을 위한 데이터 선언과 그에 관한 메소드가 여기저기 흩어져 있다.

* 상태값(data)
* 상태값을 사용하고 조작하는 함수(methods, watch, computed 등)
* 생명주기 훅(created, mounted 등)

=> 복잡하지 않은 컴포넌트일 땐 데이터 선언과 메소드가 분리되어있어 직관적이지만 한 컴포넌트 내에서 조금 많은 데이터와 메소드가 추가된다면 하나의 데이터 확인 및 수정을 위해 data, methods 등울 왔다갔다하니 오히려 코드 가독성이 떨어진다!

=> 그래서 나온게 **Composition API**라고 한다. <br>

<br>

## 2. Composition API

### Initial setting 
프로젝트가 Vue3라면 composition API를 따로 install 해줄 필욘 없지만, <br>
기존 코드가 Vue2라면 ``npm i @vue/composition-api``로 따로 설치해준다. <br>
그리고 프로젝트 전역에서 사용하기 위해 main.js에 플러그인 등록을 해준다.

```js 
// main.js
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-apo';
import App from './App.vue';

Vue.use(VueCompositionApi); // 플러그인 등록

new Vue({
    render: h => h(App)
}).$mount('#app');

```

## setup 함수

- CounterView2.vue 파일을 참고하면 특정 데이터값과 그와 관련된 메소드나 생명주기 로직이 useCount 함수에 모여있다. 즉, 목적에 맞게끔 코드를 모듈화할 수 있다.
- ```beforeCreate``` 과 ```created``` 대신  **setup**을 사용하면 된다.
- composition API를 사용하기 위한 진입점이다.

## 반응형 기초
- Computed
- class와 Style 바인딩