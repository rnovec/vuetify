<template>
  <div class="about">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" lg="8">
        <v-text-field
          filled
          hide-details
          rounded
          append-icon="mdi-magnify"
          label="Search songs..."
          v-model="query"
          @input="search()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in tracks" :key="item.id" cols="12" xs="12" md="6" lg="4">
        <TrackCard :track="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { searchTrack } from '@/api/tracks'
import TrackCard from '@/components/TrackCard'
export default {
  data() {
    return {
      query: 'rock',
      tracks: []
    }
  },
  components: {
    TrackCard
  },
  created() {
    this.search()
  },
  methods: {
    async search() {
      const res = await searchTrack(this.query)
      console.log(res)
      this.tracks = res.data.tracks.items
    }
  }
}
</script>