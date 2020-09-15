<template>
    <div>
        <header class="post-header">
            <h1 class="post-title">{{this.postObj.title}}</h1>
            <p v-if="this.postObj.url">
                <a :href="this.postObj.url">View Source</a>
            </p>
            <img class="post-img" :src="this.postObj.url" @error="imageUrlAlt"
             alt="Image representing the geddit post topic">
            <section class="post-desc">
                <p>{{this.postObj.description}}</p>
            </section>
        </header>
        <h1 class="comment-title"><span>{{this.comments.length}}</span> Comments</h1>
        <section v-if="this.isLoggedIn" class="comment-form">
            <div class="user-and-input">
                <figure  class="comment-user">
                    <img :src="this.user.image">
                </figure>
                <form @submit.prevent="createCommentHandler()">
                    <b-field class="comment-field">
                        <b-input
                            v-model="comment.body"
                            size="is-small"
                            expanded
                            minlength="1"
                            maxlength="200"
                            placeholder="Maxlength automatically counts characters"
                            >
                        </b-input>
                    </b-field>
                    <b-button native-type="submit" type="is-dark is-small">Comment</b-button>
                </form>
            </div>
        </section>
        <section class="comment-list">
            <div  v-for="comment in this.comments" :key="comment.id"  class="comment-box">
                <figure  class="comment-user">
                    <img :src="usersWithId[comment.user_id].image" alt="avatar of comment author">
                    <small>{{usersWithId[comment.user_id].name}}</small>
                </figure>
                <b-message class="comment-body">{{comment.body}}</b-message>
            </div>
        </section>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    comment: {
      body: '',
    },
  }),
  mounted() {
    this.initPostView(this.$route.params.post_id);
    this.initUsers();
    this.initComments(this.$route.params.post_id);
  },
  computed: {
    ...mapState('comments', ['post', 'comments']),
    ...mapState('auth', ['user', 'isLoggedIn']),
    ...mapState('users', ['users']),
    ...mapGetters('comments', ['postObj']),
    ...mapGetters('users', ['usersWithId']),
  },
  methods: {
    ...mapActions('comments', ['initPostView', 'initComments', 'createComment']),
    ...mapActions('users', ['initUsers']),
    async createCommentHandler() {
      if (this.comment.body) {
        await this.createComment(this.comment);
        this.comment.body = '';
      }
    },
    imageUrlAlt(event) {
      const e = event;
      e.target.src = 'https://images.unsplash.com/photo-1556401615-c909c3d67480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
    },
  },
};

</script>
<style scoped>
.post-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    min-height: 40em;
}
.post-title{
    font-size: 60px;
}
.post-img{
    width: 40%;
    height: auto;
    overflow: hidden;
}
.post-desc{
    width: 100%;
    text-align: center;
    font-size: 24px;
    color: darkslategray;
    background: linen;
    padding: 1rem;
}
.comment-form{
    width: 90%;
    min-height: 6em;
    padding: 1em;
    background: #c7c7c7;
}
.comment-form form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
}
.comment-field{
    width: 100%;
}
.comment-title{
    font-size: 32px;
}
.comment-list{
    padding: 2em;
    border-top: 1px solid purple;
    margin-top: 2em;
}
.comment-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1em;
}
.comment-body {
    width: 90%;
}
.comment-user{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 10%;
}
.comment-user img{
    width: 50%;
    height: auto;
}
.user-and-input{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
</style>
