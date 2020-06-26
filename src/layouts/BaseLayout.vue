<template>
  <v-app>
    <v-navigation-drawer v-if="!isMobile" permanent app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar dense dark flat app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <v-bottom-navigation v-model="bottomNav" v-if="isMobile" app>
      <v-btn value="recent">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Search</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- <v-footer app>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return { bottomNav: 'favorites' }
  },

  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.mobile
    }
  }
}
</script>
