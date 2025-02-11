<script setup>

import PortfolioSection from './PortfolioSection.vue';

/**
 * @typedef {{title?: string, over?: string, sub?: string, desc?: string}} CategoryElementDef
 */

const props = defineProps({
  title: {type: String},
  elems: {
    /**@type {import('vue').PropType<CategoryElementDef[]>} */
    type: Array,
    default: []
  }
});

</script>

<template>
  <PortfolioSection :title="props.title">
    <div class="category_elements">

      <div class="category_element" v-for="elem in props.elems">
        <div class="placque">
          <div class="overtitle" v-html="elem.over"></div>
          <div>
            <span class="title" v-html="elem.title"></span> <span class="nowrap">{{elem.sub ? '|\xA0' : ''}}<span class="subtitle" v-html="elem.sub"></span></span>
          </div>
          <div class="desc" v-html="elem.desc"></div>
        </div>
        
        <div class="links">

        </div>
      </div>

    </div>
  </PortfolioSection>
</template>

<style scoped>

.category_element {
  margin: 1ch;
  display: flex;
  flex-direction: row;
  /* border-bottom: 1px dashed goldenrod; */
}
.placque {
  text-align: left;
  /* text-wrap: nowrap; */
}
.links{
  margin-left: 3ch;
}

.overtitle {
  font-size: 0.7em;
  color: gray;
}
.title {
  font-size: 1.1em;
  color: var(--color-primary);
}
.subtitle {
  font-style: italic;
}
.desc {
  color: #fdf5c3;
  margin-left: 0.8ch;
}

.nowrap {
  text-wrap: nowrap;
}

</style>