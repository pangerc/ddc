<template>
  <div class="bg-white py-16 sm:py-24 font-gellix">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="mx-auto flex max-w-xs flex-col gap-y-4"
        >
          <dt class="text-base leading-7 text-gray-800">{{ stat.name }}</dt>
          <dd
            class="order-first text-3xl font-semibold tracking-tight text-lea-blue sm:text-5xl"
          >
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { id: 1, name: "DPI (top 10%)", value: "3.5x" },
  { id: 2, name: "Realized MOIC ", value: "6x" },
  { id: 3, name: "Realized Returns", value: "$450M" },
];
</script>
