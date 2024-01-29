<template>
  <div class="bg-lea-blue py-16 sm:py-24 font-gellix">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-left md:text-center">
        <h2
          class="text-2xl font-semibold tracking-tight text-white sm:text-4xl uppercase mb-12"
        >
          Areas of Investment Focus
        </h2>
      </div>
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-3">
        <div
          v-for="sector in sectors"
          :key="sector.id"
          class="mx-auto flex max-w-xs flex-col gap-y-4 font-gellix"
        >
          <img :src="'/img/' + sector.visual" class="w-32 pl-8" />
          <h3
            class="font-semibold text-white text-xl sm:text-2xl tracking-tight"
          >
            <span class="text-black">0{{ sector.id }}&nbsp;</span>
            {{ sector.name }}
          </h3>
          <p class="leading-7 text-white text-base pl-8">
            {{ sector.description }}
          </p>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const sectors = [
  {
    id: 1,
    name: "DEEP TECH",
    description:
      "Next gen AI, Infrastructure, Quantum Sensing, Cybersecurity, Mobility, Communications, Industrial Robotics, Digital Health.",
    visual: "robot.png",
  },
  {
    id: 2,
    name: "WEB3",
    description: "Entire Crypto Stack except cryptocurrencies.",
    visual: "crypto.png",
  },
  {
    id: 3,
    name: "OPPORTUNISTIC",
    description:
      "Spinouts from Fortune 50: deep relationships with corp giants, access to already proven deep tech and customers. Spinouts from Worldclass Academia: deep relationships with Stanford, Caltech, MIT and others. Outstanding early stage opportunities",
    visual: "rocket.png",
  },
];
</script>
