<template>
  <v-app>
    <v-navigation-drawer v-if="!isMobile" permanent app>
      <v-list dense>
        <v-list-item class="mb-3">
          <v-icon class="mx-4" large>
            mdi-spotify
          </v-icon>
          <v-toolbar-title class="mr-12 align-center">
            <span class="title">Spotify</span>
          </v-toolbar-title>
        </v-list-item>

        <v-list-item to="/home" link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              Home
            </v-list-item-title>
            <v-list-item-subtitle>Ruta principal</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense dark flat app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-bottom-navigation v-model="bottomNav" v-if="isMobile" app>
      <v-btn to="/home" value="recent">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <!-- <router-link to="/home" tag="a">Home</router-link> -->

      <v-btn to="/favorites" value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn to="/search" value="nearby">
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
