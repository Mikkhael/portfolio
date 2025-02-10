<script setup>

const props = defineProps({
    title: {type: String}
});

</script>

<template>
    <div class="protfolio_section">
        <h3 class="title">{{ props.title }}</h3>

        <section class="contents">
            <slot></slot>
        </section>
    </div>

</template>

<style scoped>

    
.title {
  color: gold;
  font-size: 1.5em;
  margin-left: 4ch;
  text-decoration: underline;
}

.contents {
  text-align: justify;
}

</style>