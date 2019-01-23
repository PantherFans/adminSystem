<template>
    <div class="customersDetails container">
        <button class="btn btn-default" @click="goBack">返回</button>
        <h1 class="page-header">
            {{customer.name}}
            <span class="pull-right">
                <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
                <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk">{{customer.phone}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus">{{customer.email}}</span>
            </li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk">{{customer.education}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus">{{customer.graduationschool}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk">{{customer.profession}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus">{{customer.profile}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'customersDetails',
    data(){
        return {
            customer:""
        }
    },
    methods:{
        fetchCustomer(id){
            this.$http.get("http://localhost:3000/users/"+id)
            .then((response) => {
                this.customer = response.data;
                // console.log(response.body)
            })
        },
        goBack(){
            this.$router.push("/")
        },
        deleteCustomer(id){
            this.$http.delete("http://localhost:3000/users/"+id)
            .then((response) => {
                this.$router.push({
                    path:'/',
                    query:{ alert:"删除成功"}
                })
            })
        }
    },
    created(){
        this.fetchCustomer(this.$route.params.id);
    }
}
</script>
<style>

</style>