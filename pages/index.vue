<template>
  <div>
    <Hero />
    <Stats />
    <Sectors />
    <Highlights />
    <footer class="bg-black py-12 text-center text-gray-500 text-sm">
      &copy; 2024 Deep Dive Capital, 335 Bryant Street, Palo Alto, 94301 CA
    </footer>
  </div>
</template>

<script setup>
import Hero from "@/components/hero.vue";
import Highlights from "@/components/highlights.vue";
import Stats from "@/components/stats.vue";
import Sectors from "@/components/sectors.vue";
</script>
