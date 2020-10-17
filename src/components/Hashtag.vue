<template>
  <div
    class="hashtag"
    @click="setHashtag"
  >
    #️⃣ {{ hashtag }}
  </div>
</template>

<script>
// Store
import store from "../store";

export default {
  props: {
    hashtag: {
      type: String,
      default: "",
    },
  },

  setup(props, ctx) {
    const setHashtag = () => store.setHashtag(props.hashtag);

    return {
      setHashtag,
    };
  },
};
</script>

<style scoped>
.hashtag {
  text-decoration: underline;
  transition: 300ms;
}

.hashtag:hover {
  color: #0af;
}
</style>