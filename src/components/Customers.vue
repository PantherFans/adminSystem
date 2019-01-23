<template>
    <div class="customers container">
        <Alert v-if="alert" :message="alert"></Alert>
        <h2 class="page-header">用户管理系统</h2>
        <input type="text" placeholder="search" class="form-control" v-model="filterInput">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in filterBy(customers,filterInput)">
                    <td>{{customer.name}}</td>
                    <td>{{customer.phone}}</td>
                    <td>{{customer.email}}</td>
                    <td><router-link class="btn btn-default" :to="'/customer/'+customer.id">详情</router-link></td>
                </tr>
            </tbody>
        </table>
        <div>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                    ...
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
// import Api from '../api/userInformation'
import Alert from './Alert'
export default {
    name:'customers',
    data(){
        return {
            customers:[],
            alert:"",
            filterInput:""
        }
    },
    methods:{
        // getCustomer(){
        //     Api.userInfo ().then(res => {
        //         console.log('信息' , res)
        //         if (res.statusCode === 200){
        //             this.customers = res
        //         } else {
        //             console.log('请求数据失败')
        //         }
        //     })
        // }
        fetchCustomer(){
            this.$http.get("http://localhost:3000/users")
            .then((response) => {
                this.customers = response.data;
                // console.log(response.body)
            })
        },
        filterBy(customers,value){
            return customers.filter((customer) => {
                return customer.name.match(value);
            })
        }
    },
    components:{
        Alert
    },
    created(){
        if(this.$route.query.alert){
            this.alert = this.$route.query.alert;
        }
        this.fetchCustomer();
    },
    updated(){
        this.fetchCustomer();
    }
}
</script>
<style>

</style>