<template>
    <section>
        <form @submit.prevent="createPostHandler()" class="new-post">
            <h1>Create a post</h1>
            <b-field>
                <b-input v-model="post.title" placeholder="name" type="text"></b-input>
            </b-field>
            <b-field>
                <b-input v-model="post.url" placeholder="URL" type="url"></b-input>
            </b-field>
            <b-field>
                <b-input v-model="post.description" type="textarea"
                    minlength="10"
                    maxlength="400"
                    placeholder="Describe your subpost">
                </b-input>
            </b-field>
            <b-button native-type="submit" type="is-dark">Create</b-button>
        </form>
        <div>
            <p class="post">{{this.subpost.name}}</p>
            <article class="media" v-for="post in posts" :key="post.id">
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong class="post-title">{{post.title}}</strong>
                    <br>
                    {{post.description}}
                  </p>
                  <p>
                    <a v-if="post.url" :href="post.url" target="_blank">View Source</a>
                  </p>
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fas fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fas fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
              <figure class="media-right">
                  <img class="post-img" :src="post.url" @error="imageUrlAlt">
              </figure>
            </article>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    post: {
      title: '',
      url: '',
      description: '',
    },
  }),
  mounted() {
    this.initSubpost(this.$route.params.post);
  },
  watch: {
    subpost() {
      if (this.subpost.id) {
        this.initPost(this.subpost.id);
      }
    },
    'this.$route.params.post': function () {
      this.initSubpost(this.$route.params.post);
    },
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapGetters('posts', ['subpost']),
  },
  methods: {
    ...mapActions('posts', ['createPost', 'initSubpost', 'initPost']),
    async createPostHandler() {
      if (this.post.title && (this.post.description || this.post.url)) {
        await this.createPost(this.post);
      }
    },
    imageUrlAlt(event) {
      const e = event;
      e.target.src = 'https://bulma.io/images/placeholders/128x128.png';
    },
  },
};
</script>

<style lang="scss" scoped>
h1{
    font-size: 25px;
    margin: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;

 }
.post{
    color: darkgreen;
    font-size: 40px;
    padding: 0.5rem;
    width: 100%;
    font-weight: 300;
    background: rgba(189, 189, 189, 0.1);
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-left: 8px solid darkgreen;
}
.new-post{
    padding: 5rem;
    background: #fff9f9
}
.post-img{
  width: 10em;
  height: auto;
}
.media{
  width: 80%;
  float: right;
  padding: 1em;
}
.post-title {
  font-size: 34px;
  letter-spacing: 2px;
  font-weight: 200;
  color:darkslategray;
  width: 100%;
  background: linen;
  padding: 5px;
}
</style>
