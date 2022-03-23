<template>
    <div>
        <h1>Axios Library 사용법(async로 Backend, Frontend API 통신-REST Api-)</h1>
        <h3>axios: 비동기(async) 통신을 위한 http 프로토콜 라이브러리</h3>
        <hr>
        <ol style="text-align: left;">
            <li>
                axios는 비동기 통신을 위한 라이브러리로 http 프로토콜을 사용하기에 RESTApi로 작성할 수 있다.
            </li>
            <li>
                컴포넌트의 라이프사이클에 따라 created()나 mounted()에 해도 되지만, 데이터의 특성에 따라 모듈로 뺀 다음 app.js에서 콜해야 하는 경우도 있다.
            </li>
            <li>
                파라미터 없는 경우:
                <code>
                axios.get('backend-url').then(response => {})
                </code>
            </li>
            <li>
                파라미터 있는 경우:
                <code>
                axios.get('backend-url', params).then(response => {})
                </code>
            </li>
        </ol>

        <h3 style="text-align: left; margin: 50px 0 10px 35px">jsonplaceholder 결과값(파라미터없음)</h3>

        <table style="width:800px; border: 1px solid gray; margin-left: 35px">
            <tr>
                <td style="width: 100px">userid</td>
                <td style="width: 100px">id</td>
                <td style="width: 500px">title</td>
                <td style="width: 100px">completed</td>
            </tr>
            <tr v-for="data in list" :key="data.id">
                <td>{{ data.userId }}</td>
                <td>{{ data.id }}</td>
                <td>{{ data.title }}</td>
                <td>{{ data.completed }}</td>
            </tr>
        </table>

        <h3 style="text-align: left; margin: 50px 0 10px 35px">jsonplaceholder 결과값(파라미터있음)</h3>

        <table style="width:800px; border: 1px solid gray; margin-left: 35px">
            <tr>
                <td style="width: 100px">userid</td>
                <td style="width: 100px">id</td>
                <td style="width: 500px">title</td>
                <td style="width: 100px">completed</td>
            </tr>
            <tr v-for="d in data" :key="d.userId + d.completed">
                <td>{{ d.userId }}</td>
                <td>{{ d.id }}</td>
                <td>{{ d.title }}</td>
                <td>{{ d.completed }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'AxiosSample',

    data(){
        return {
            list: [],
            id: 20,
            userId: 1,

            data: []
        }
    },

    mounted(){
        this.getData();
        this.sendData();
    },

    methods : {
        getData(){
            this.$axios.get("https://jsonplaceholder.typicode.com/users/1/todos").then(response => {
                console.log('response', response.data);

                this.list = response.data.slice(0,10);
            })
        },

        sendData(){
            // db 쿼리 여부에 따라 메소드 결정
            // axios의 경우 파라미터를 넘길 때는 정해진 규칙대로 넘기려는 파라미터를 오브젝트화 해야한다. 변수명은 params이여야 한다.(req의 params 오브젝트에 담아 보내기 때문. 메소드 별로 변수명이 다를 수 있다.)

            let params = {
                params: {
                    id: this.id
                }
            }

            this.$axios.get("https://jsonplaceholder.typicode.com/users/1/todos", params).then(response => {
                console.log('response', response.data);

                this.data = response.data;
            })
        }
    },
}
</script>