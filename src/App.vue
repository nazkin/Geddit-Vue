<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-expanded="false" data-target="#navdrop">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navdrop" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>
        </div>
        <div class="navbar-end">
          <section class="auth-display" v-if="isLoggedIn">
            <figure class="image">
              <img :src="user.image" alt="users image">
            </figure>
            <p>{{user.name}}</p>
          </section>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-danger" @click="login()" v-if="!isLoggedIn">
               Sign-in with Google
              </a>
              <a class="button is-light" @click="signout()" v-if="isLoggedIn">
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="container"/>
  </div>

</template>
<script>
import { mapActions, mapState } from 'vuex';
import './isAuth';

export default {
  methods: mapActions('auth', ['login', 'signout']),
  computed: mapState('auth', ['user', 'isLoggedIn']),
};
</script>
<style lang="scss">
#app {
  color: #2c3e50;
}
.image{
  width: 40px;
  height: 40px;
  border: 1px solid linen;
  border-radius: 50%;
  overflow: hidden;
}
.auth-display{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
}
</style>
