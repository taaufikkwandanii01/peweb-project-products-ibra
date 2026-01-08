<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const currentSlide = ref(0);
let slideInterval: number | undefined;

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80",
    title: "Capturing",
    highlight: "Moments",
    subtitle: "That Last Forever",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80",
    title: "Creating",
    highlight: "Memories",
    subtitle: "Through Our Lens",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    title: "Preserving",
    highlight: "Stories",
    subtitle: "With Every Shot",
  },
];

// Computed property untuk keamanan akses data
const activeSlide = computed(() => slides[currentSlide.value]);

const scrollToContact = () => {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
};

const scrollToGallery = () => {
  document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

const startSlideshow = () => {
  slideInterval = window.setInterval(nextSlide, 5000);
};

const stopSlideshow = () => {
  if (slideInterval) clearInterval(slideInterval);
};

onMounted(() => startSlideshow());
onUnmounted(() => stopSlideshow());
</script>

<template>
  <section
    id="hero"
    class="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
  >
    <div class="absolute inset-0 z-0">
      <transition-group
        enter-active-class="transition-opacity duration-1000"
        leave-active-class="transition-opacity duration-1000"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"
          ></div>
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover animate-ken-burns"
          />
        </div>
      </transition-group>
    </div>

    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 text-left">
          <transition
            mode="out-in"
            enter-active-class="transition-all duration-500"
            leave-active-class="transition-all duration-500"
            enter-from-class="opacity-0 translate-x-8"
            leave-to-class="opacity-0 -translate-x-8"
          >
            <div :key="currentSlide">
              <div
                class="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full mb-6"
              >
                <svg
                  class="w-4 h-4 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span
                  class="text-amber-500 text-sm font-semibold tracking-wider"
                  >PROFESSIONAL PHOTOGRAPHY</span
                >
              </div>

              <h1
                class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-none"
              >
                {{ activeSlide?.title }}<br />
                <span class="text-amber-500 inline-block">{{
                  activeSlide?.highlight
                }}</span>
              </h1>

              <p
                class="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
              >
                {{ activeSlide?.subtitle }}
              </p>

              <p class="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
                Transform your vision into stunning visual stories with our
                professional photography services.
              </p>

              <div class="flex flex-wrap items-center gap-4">
                <button
                  @click="scrollToContact"
                  class="group relative px-8 py-4 bg-amber-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/50"
                >
                  <span class="relative z-10 flex items-center space-x-2">
                    <span>Book a Session</span>
                    <svg
                      class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  ></div>
                </button>

                <button
                  @click="scrollToGallery"
                  class="group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
                >
                  <span>View Portfolio</span>
                </button>
              </div>
            </div>
          </transition>
        </div>

        <div class="lg:col-span-5 hidden lg:block">
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="(stat, i) in [
                ['500+', 'Projects Done'],
                ['10+', 'Years Experience'],
                ['300+', 'Happy Clients'],
                ['50+', 'Awards Won'],
              ]"
              :key="i"
              class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div class="text-5xl font-bold text-amber-500 mb-2">
                {{ stat[0] }}
              </div>
              <div class="text-gray-300 text-sm font-medium">{{ stat[1] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-6"
    >
      <div class="flex items-center space-x-3">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="group relative"
        >
          <div
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentSlide === index
                ? 'bg-amber-500 scale-125'
                : 'bg-white/30 hover:bg-white/50',
            ]"
          ></div>
          <div
            v-if="currentSlide === index"
            class="absolute inset-0 rounded-full bg-amber-500/30 animate-ping"
          ></div>
        </button>
      </div>

      <div class="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
        <div
          class="h-full bg-amber-500 transition-all duration-300"
          :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
        ></div>
      </div>

      <div class="flex items-center space-x-2">
        <button
          @click="prevSlide"
          class="w-10 h-10 bg-white/10 hover:bg-amber-500 border border-white/20 rounded-full flex items-center justify-center transition-all text-white"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="w-10 h-10 bg-white/10 hover:bg-amber-500 border border-white/20 rounded-full flex items-center justify-center transition-all text-white"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes ken-burns {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
.animate-ken-burns {
  animation: ken-burns 20s ease-out infinite alternate;
}
</style>
