<template>
  <div class="card">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="description">
      <slot name="description" />
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 8px;
  width: 256px;
  margin: 8px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 300ms;
}

.card:hover {
  box-shadow: 0px 1px 9px darkgrey;
}

.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}

.title, .content {
  border-bottom: 1px solid silver;
}

.title {
  font-size: 1.25em;
}
</style>
