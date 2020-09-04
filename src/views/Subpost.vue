<template>
  <div>
    <aside class="menu">
      <p class="menu-label">
        Subposts
      </p>
      <ul class="menu-list">
        <li v-for="post in subposts" :key="post.id">
          <router-link :to="{name: 'Post', params: {post: post.name}}">
            {{post.name}}
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.init();
  },
  computed: mapState('subposts', ['subposts']),
  methods: mapActions('subposts', ['init']),
};
</script>

<style lang="scss" scoped>
.menu{
  padding: 3rem;

  p {
    font-size: 30px;
    color: darkgreen;
  }
}

.menu-list{
  font-size: 20px;
  li {
    padding: 0.5rem;
  }
}
</style>
