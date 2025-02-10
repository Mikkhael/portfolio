<template>

<header class="header">
  <h1 class="gold">Michał Gold</h1>
  <div class="main_img">
    <img src="/favicon.ico">
  </div>
  <div class="info_grid">
    <!-- <div class="label">Płeć           </div> <div class="value">Mężczyzna                   </div> -->
    <!-- <div class="label">Data Urodzenia </div> <div class="value">30 Listopada 1999           </div> -->
    <div class="label">Miasto         </div> <div class="value">Gliwice, Polska             </div>
    <!-- <div class="label">Telefon        </div> <div class="value">***REMOVED***                 </div> -->
    <div class="label">E-mail         </div> <div class="value"><a href="mailto:mikkael.gold@gmail.com">mikkael.gold@gmail.com</a></div>
    <div class="label">GitHub         </div> <div class="value"><a href="https://github.com/Mikkhael">github.com/Mikkhael</a></div>
  </div>
</header>

</template>

<style scoped>

.header {
  display: grid;
  grid-template: auto / auto auto;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
}

@media screen and (max-width: 640px) {
  .header {
    grid-template: auto / auto;
  }
}

.gold {
  color: gold;
  text-shadow: 2px 2px goldenrod;
  font-family: sans-serif;
  font-size: 3em;
  margin: 0px;
  justify-self: right;
}
.main_img {
  grid-row: span 2;
  align-self: stretch;
  text-align: center;
}
.main_img > img {
  height: 100%;
}

.info_grid {
  display: grid;
  column-gap: 1ch;
  grid-template: auto / auto auto;
}
.info_grid > .label {
  color: gold;
  text-align: right;
}

</style>