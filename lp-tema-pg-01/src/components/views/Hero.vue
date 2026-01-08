<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const currentSlide = ref(0);
let slideInterval: number | undefined;

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80",
    title: "Capturing Moments",
    subtitle: "Professional photography for your special days",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80",
    title: "Creating Memories",
    subtitle: "Turning today's moments into tomorrow's treasures",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    title: "Preserving Stories",
    subtitle: "Every frame tells a story worth telling",
  },
];

const activeSlide = computed(() => slides[currentSlide.value]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

onMounted(() => {
  slideInterval = window.setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval);
});

const scrollToContact = () =>
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
</script>

<template>
  <section
    id="hero"
    class="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
  >
    <div class="absolute inset-0 z-0">
      <transition-group
        enter-active-class="transition-opacity duration-[1500ms] ease-in-out"
        leave-active-class="transition-opacity duration-[1500ms] ease-in-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <div class="absolute inset-0 bg-black/40 z-10"></div>
          <img :src="slide.image" class="w-full h-full object-cover" />
        </div>
      </transition-group>
    </div>

    <div class="relative z-20 text-center px-6 max-w-4xl">
      <transition
        mode="out-in"
        enter-active-class="transition all duration-700 ease-out"
        leave-active-class="transition all duration-500 ease-in"
        enter-from-class="opacity-0 translate-y-8"
        leave-to-class="opacity-0 -translate-y-8"
      >
        <div :key="currentSlide" class="space-y-6">
          <h1
            class="text-5xl md:text-7xl font-light tracking-tight text-white uppercase"
          >
            {{ activeSlide?.title }}
          </h1>
          <p
            class="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto"
          >
            {{ activeSlide?.subtitle }}
          </p>
          <div class="pt-4">
            <button
              @click="scrollToContact"
              class="px-8 py-3 bg-white text-black text-sm font-medium tracking-widest uppercase hover:bg-gray-200 transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>
      </transition>
    </div>

    <div class="absolute bottom-10 z-30 flex space-x-3">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="group p-2 focus:outline-none"
      >
        <div
          class="h-1 transition-all duration-300 bg-white"
          :class="
            currentSlide === index
              ? 'w-12 opacity-100'
              : 'w-6 opacity-40 group-hover:opacity-70'
          "
        ></div>
      </button>
    </div>
  </section>
</template>
