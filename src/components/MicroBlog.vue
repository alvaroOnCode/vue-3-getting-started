<template>
  <input
    placeholder="Search post..."
    type="text"
    :value="currentHashtag"
    @input="setHashtag"
  />

  <div class="cards">
    <Card v-for="(post, i) in filteredPosts" :key="`post-${i}`">
      <template #title>
        {{ post.title }}
      </template>

      <template #content>
        {{ post.content }}
      </template>

      <template #description>
        <Controls :post="post" />
      </template>
    </Card>
  </div>
</template>

<script>
// Vue
import { ref, computed } from "vue";

// Components
import Card from "./Card.vue";
import Controls from "./Controls.vue";

// Store
import store from "../store.js";

export default {
  components: {
    Card,
    Controls,
  },

  setup() {
    const setHashtag = (event) => store.setHashtag(event.target.value);

    return {
      currentHashtag: computed(() => store.state.currentHashtag),
      filteredPosts: store.getFilteredPosts(),
      setHashtag,
    };
  },
};
</script>

<style scoped>
input {
  border: 2px solid #0af;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0,170,255,0.35);
  margin: 8px;
  padding: 4px;
}

input::placeholder {
    opacity: 0.85;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
