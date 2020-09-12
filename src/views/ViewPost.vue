<template>
    <div>
        <header class="post-header">
            <h1 class="post-title">{{this.post[0].title}}</h1>
            <img class="post-img" :src="this.post[0].url" alt="">
            <section class="post-desc">
                <p>{{this.post[0].description}}</p>
            </section>
        </header>
        <p>{{$route.params.post_id}}</p>
        <h1 class="comment-title">Comments</h1>
        <section class="comment-form">
            <form>
                <b-field class="comment-field">
                    <b-input
                        size="is-small"
                        expanded=true
                        minlength="1"
                        maxlength="200"
                        placeholder="Maxlength automatically counts characters"
                        >
                    </b-input>
                </b-field>
                <b-button type="is-dark is-small">Comment</b-button>
            </form>
        </section>
        <section class="comment-list">
            <div class="comment-box">
                <figure  class="comment-user">
                    <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png">
                </figure>
                <b-message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce id fermentum quam.
                    Proin sagittis, nibh id hendrerit imperdiet, elit
                    sapien laoreet elit
                </b-message>
            </div>
            <div class="comment-box">
                <figure  class="comment-user">
                    <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png">
                </figure>
                <b-message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce id fermentum quam.
                    Proin sagittis, nibh id hendrerit imperdiet, elit
                    sapien laoreet elit
                </b-message>
            </div>
            <div class="comment-box">
                <figure  class="comment-user">
                    <img src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png">
                </figure>
                <b-message>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce id fermentum quam.
                    Proin sagittis, nibh id hendrerit imperdiet, elit
                    sapien laoreet elit
                </b-message>
            </div>
        </section>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  mounted() {
    this.initPostView(this.$route.params.post_id);
    this.initUsers();
  },
  computed: {
    ...mapState('comments', ['post']),
  },
  methods: {
    ...mapActions('comments', ['initPostView', 'initComments', 'createComments']),
    ...mapActions('users', ['initUsers']),
    ...mapGetters('users', ['usersWithId']),
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
.comment-user{
    width: 10%;
}
.comment-user img{
    width: 50%;
    height: auto;
}
</style>
