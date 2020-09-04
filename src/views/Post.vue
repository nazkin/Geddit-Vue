<template>
    <section>
        <form class="new-post">
            <h1>Create a post</h1>
            <b-field>
                <b-input placeholder="name" type="text"></b-input>
            </b-field>
            <b-field>
                <b-input placeholder="URL" type="text"></b-input>
            </b-field>
            <b-field>
                <b-input type="textarea"
                    minlength="10"
                    maxlength="400"
                    placeholder="Describe your subpost">
                </b-input>
            </b-field>
            <b-button type="is-dark">Create</b-button>
        </form>
        <div>
            <p class="post">{{$route.params.post}}</p>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    post: {
      title: '',
      url: '',
      description: '',
    },
  }),
  mounted() {
    this.init();
  },
  computed: mapState('subposts', ['subposts']),
  methods: mapActions('subposts', ['init']),
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
    font-size: 30px;
    padding: 0.5rem;
}
.new-post{
    padding: 5rem;
    background: #fff9f9
}
</style>
