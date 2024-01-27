<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div>
          <p
            class="mt-q text-2xl font-bold tracking-tight text-lea-blue sm:text-4xl font-gellix uppercase mb-2"
          >
            Fund Highlights
          </p>
          <p class="mt-1 text-lg font-light leading-7 text-gray-700">
            As investors we managed funds with ~1B AUM, as entrepreneurs we
            created multiple successful businesses, 4 of which scaled to over
            $1B.
          </p>
        </div>
        <dl
          class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base text-gray-600 sm:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="(feature, index) in features"
            :key="feature.name"
            class="relative pl-9"
          >
            <dt class="font-gellix font-semibold text-gray-800 uppercase">
              <span class="text-lea-blue font-bold">0{{ index + 1 }}</span>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 font-gellix text-sm text-gray-500 leading-7">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Optimal Risk Adjusted Returns",
    description:
      "Little to no loss in any individual investment and overall returns in top decile of growth funds. Shorter holding periods leading to better IRRs.",
  },
  {
    name: "Opportunity for geo-arbitrage",
    description:
      "Bring Silicon Valley scaling and tech expertise to startups in Europe and India. Help Silicon Valley startups penetrate  high growth  markets in Asia, MENA.",
  },
  {
    name: "Deep domain knowledge",
    description:
      "Extensive experience and knowledge of  AI & Crypto technology, strategy and market dynamics, M&A. Been investors and entrepreneurs for decades, successful in multiple business cycles",
  },
  {
    name: "Preferred partners to entrepreneurs",
    description:
      "Deep knowledge of every aspect of business scaling for global  settings. Steady, mature partners who roll with the punches.",
  },
  {
    name: "Unique Deal Access",
    description:
      "Our network and value-adds give us preferential access to many heavily sought after deals. We get invited to top tier deals by founders and co-investors",
  },
];
</script>
