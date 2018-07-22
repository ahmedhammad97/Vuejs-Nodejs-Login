<template>
  <div >
    <input v-model="username" type="text" name="username" value=""><br /><br />
    <input v-model="password" type="password" name="password" value=""><br /><br />
    <button type="button" name="button" v-on:click="log">Login!</button>
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
      async log () {
           var response = await Auth.login({
           username: this.username,
           password: this.password
         })
         console.log(response.data);
     }
  }
}
</script>

<style>

</style>
