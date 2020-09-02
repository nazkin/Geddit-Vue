<template>
  <div class="home">
    <h1>Home</h1>
    <a class="button is-danger" @click="login()">Sign-in with Google</a>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'home',
  methods: mapActions('auth', ['login']),
};
</script>

<style lang="scss">
.home{
  color: #cdcdcd;
}
</style>
