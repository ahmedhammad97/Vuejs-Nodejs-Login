<template>
  <div >
    <input v-model="username" type="text" name="username" value=""><br /><br />
    <input v-model="password" type="password" name="password" value=""><br /><br />
    <button type="button" name="button" v-on:click="reg">Register!</button>
  </div>
</template>

<script>

import Auth from '@/services/auth'

export default {
  name: 'App',
  data() {
    return{
      username: '',
      password: ''
    }
  },
  methods: {
     async reg () {
          var response = await Auth.register({
          username: this.username,
          password: this.password
        })
        this.$router.push({name : 'Login'})
        console.log(response.data);
    }
  }
}
</script>

<style>

</style>
