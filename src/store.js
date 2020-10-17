// Vue
import { reactive, computed } from 'vue';

// Utils
import posts from './utils/posts'

class Store {
  constructor() {
    this.state = reactive({
      currentHashtag: null,
      posts
    });
  }

  getFilteredPosts() {
    return computed(() => {
      if (!this.state.currentHashtag) return this.state.posts;

      return this.state.posts.filter((post) =>
        post.hashtags.filter(h =>
          h.indexOf(this.state.currentHashtag) >= 0
        ).length > 0
      );
    });
  }

  incrementLike(post) {
    const match = this.state.posts.find(p => p.id === post.id)

    if (!match) return;

    match.likes += 1;
  }

  setHashtag(hashtag) {
    this.state.currentHashtag = hashtag
  }
}

const store = new Store();

export default store;
