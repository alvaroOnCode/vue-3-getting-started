<template>
  <div>
    <div class="like">
      <button @click="onLike">
        Like
      </button>
      <div>{{ post.likes }}</div>
    </div>

    <Hashtag
      v-for="(hashtag, i) in post.hashtags"
      :key="`hashtag-${i}`"
      :hashtag="hashtag"
    />
  </div>
</template>

<script>
// Components
import Hashtag from "./Hashtag.vue";

// Store
import store from "../store";

export default {
  components: {
    Hashtag,
  },

  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const onLike = () => store.incrementLike(props.post);

    return {
      onLike,
    };
  },
};
</script>

<style scoped>
.like {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
</style>