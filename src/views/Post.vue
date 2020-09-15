<template>
    <section>
        <form v-if="isLoggedIn && displayForm"
              @submit.prevent="createPostHandler()"
              class="new-post"
        >
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
            <b-button native-type="submit" type="is-primary is-light is-large">Submit</b-button>
            <div class="close-form">
              <button @click="displayFormHandler()" class="delete is-large"></button>
            </div>
        </form>
        <div v-if="isLoggedIn && !displayForm" class="view-form">
          <form class="search-form">
            <font-awesome-icon icon="search" size="lg"/>
            <b-field>
                <b-input v-model="searchValue" placeholder="Search" type="search"></b-input>
            </b-field>
          </form>
          <span @click="displayFormHandler()">
            <font-awesome-icon size="lg" icon="plus" />
            <small> New</small>
          </span>
        </div>
        <div>
            <p class="post">{{this.subpost.name}}</p>
            <article class="media" v-for="post in filteredResults" :key="post.id">
              <figure class="media-left">
                <img class="post-avatar" :src="usersWithId[post.user_id].image" alt="">
                <small>{{usersWithId[post.user_id].name}}</small>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong class="post-title">{{post.title}}</strong>
                    <br>
                    {{post.description}}
                  </p>
                  <router-link :to="{name: 'ViewPost', params: {
                          post: $route.params.post,
                          post_id: post.id,
                        }}" >...More</router-link>
                </div>
                <hr>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item">
                      <div class="vote">
                        <font-awesome-icon icon="thumbs-up"/>
                        <small>0</small>
                      </div>
                    </a>
                    <a class="level-item">
                      <div class="vote">
                          <font-awesome-icon icon="comments" />
                        <small>0</small>
                      </div>
                    </a>
                  </div>
                </nav>
              </div>
              <figure class="media-right">
                  <img class="post-img" :src="post.url" @error="imageUrlAlt">
                  <p>
                    <a v-if="post.url" :href="post.url" target="_blank">View Source</a>
                  </p>
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
    displayForm: false,
    searchValue: '',
  }),
  mounted() {
    this.initSubpost(this.$route.params.post);
    this.initUsers();
  },
  watch: {
    subpost() {
      if (this.subpost.id) {
        this.initPost(this.subpost.id);
      }
    },
    $route() {
      this.initSubpost(this.$route.params.post);
    },
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapState('auth', ['user', 'isLoggedIn']),
    ...mapGetters('posts', ['subpost']),
    ...mapGetters('users', ['usersWithId']),
    filteredResults() {
      if (this.searchValue) {
        const regexFilter = new RegExp(this.searchValue, 'gi');
        return this.posts.filter((post) => post.title.match(regexFilter)
         || post.description.match(regexFilter));
      }
      return this.posts;
    },
  },
  methods: {
    ...mapActions('posts', ['createPost', 'initSubpost', 'initPost']),
    ...mapActions('users', ['initUsers']),
    async createPostHandler() {
      if (this.post.title && (this.post.description || this.post.url)) {
        await this.createPost(this.post);
        this.post = {
          title: '',
          description: '',
          url: '',
        };
      }
    },
    imageUrlAlt(event) {
      const e = event;
      e.target.src = 'https://bulma.io/images/placeholders/128x128.png';
    },
    displayFormHandler() {
      this.displayForm = !this.displayForm;
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
    color: darkslategray;
    font-size: 40px;
    padding: 0.5rem;
    width: 100%;
    font-weight: 300;
    background: rgba(189, 189, 189, 0.2);
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-left: 8px solid darkslategray;
}
.new-post{
    padding: 3rem;
    padding-bottom: 0.5rem;
    background: #f8f8f8;
    text-align: center;
    box-shadow: 1px 1px 2px 2px silver;
}
.new-post h1{
  font-weight: 400;
  color: darkslategray;
  letter-spacing: 2.0;
  font-size: 30px;
  text-transform: uppercase;
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
.close-form{
  margin-top: 3rem;
}
.view-form{
  width: 100%;
  padding: 0.5rem;
  background: rgb(190, 155, 190);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: linen;
}
.view-form span:hover {
  cursor: pointer;
  color: purple;
}
.post-avatar{
  height: 50px;
  width: 50px;
  overflow: hidden;
  border: 1px solid white;
}
.media-left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 6rem;
}
.media-left small {
  font-size: 14px;
  font-weight: 400;
  color: lightslategray;
  font-style: italic;
}

.vote{
  min-height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: darkslategray;
  padding: 1px 15px;
  background: linen;
}
.vote small{
  color: darkslategray;
  opacity: 0.8;

}
.search-form{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  float: left;
  width: 25%;

}
</style>
