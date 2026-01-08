<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

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

const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToGallery = () => {
  const element = document.querySelector("#gallery");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
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
  slideInterval = window.setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
};

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  stopSlideshow();
});
</script>

<template>
  <section
    id="hero"
    class="relative w-full h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Slideshow Background -->
    <div class="absolute inset-0 z-0">
      <transition-group
        enter-active-class="transition-opacity duration-1000"
        leave-active-class="transition-opacity duration-1000"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10"
          ></div>
          <img
            :src="slide.image"
            :alt="`Slide ${index + 1}`"
            class="w-full h-full object-cover animate-ken-burns"
          />
        </div>
      </transition-group>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 z-10 opacity-10">
      <div class="grid grid-cols-12 h-full">
        <div v-for="i in 12" :key="i" class="border-r border-white/20"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Left Content -->
        <div class="lg:col-span-7 text-left">
          <transition
            mode="out-in"
            enter-active-class="transition-all duration-500"
            leave-active-class="transition-all duration-500"
            enter-from-class="opacity-0 translate-x-8"
            enter-to-class="opacity-100 translate-x-0"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-8"
          >
            <div :key="currentSlide">
              <!-- Small Tag -->
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

              <!-- Main Heading -->
              <h1
                class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-none"
              >
                {{ slides[currentSlide]?.title }}<br />
                <span class="text-amber-500 inline-block">
                  {{ slides[currentSlide]?.highlight }}
                </span>
              </h1>

              <!-- Subtitle -->
              <p
                class="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light"
              >
                {{ slides[currentSlide]?.subtitle }}
              </p>

              <!-- Description -->
              <p class="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
                Transform your vision into stunning visual stories with our
                professional photography services. We capture emotions, preserve
                moments, and create timeless memories.
              </p>

              <!-- CTA Buttons -->
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>View Portfolio</span>
                </button>
              </div>
            </div>
          </transition>
        </div>

        <!-- Right Stats -->
        <div class="lg:col-span-5 hidden lg:block">
          <div class="grid grid-cols-2 gap-6">
            <div
              class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div class="text-5xl font-bold text-amber-500 mb-2">500+</div>
              <div class="text-gray-300 text-sm font-medium">Projects Done</div>
            </div>

            <div
              class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div class="text-5xl font-bold text-amber-500 mb-2">10+</div>
              <div class="text-gray-300 text-sm font-medium">
                Years Experience
              </div>
            </div>

            <div
              class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div class="text-5xl font-bold text-amber-500 mb-2">300+</div>
              <div class="text-gray-300 text-sm font-medium">Happy Clients</div>
            </div>

            <div
              class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div class="text-5xl font-bold text-amber-500 mb-2">50+</div>
              <div class="text-gray-300 text-sm font-medium">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider Controls -->
    <div
      class="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-6"
    >
      <!-- Dots -->
      <div class="flex items-center space-x-3">
        <button
          v-for="(slide, index) in slides"
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

      <!-- Progress Line -->
      <div class="w-24 h-1 bg-white/20 rounded-full overflow-hidden">
        <div
          class="h-full bg-amber-500 transition-all duration-300 rounded-full"
          :style="{ width: `${((currentSlide + 1) / slides.length) * 100}%` }"
        ></div>
      </div>

      <!-- Arrow Buttons -->
      <div class="flex items-center space-x-2">
        <button
          @click="prevSlide"
          class="w-10 h-10 bg-white/10 hover:bg-amber-500 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
        >
          <svg
            class="w-5 h-5 text-white"
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
          class="w-10 h-10 bg-white/10 hover:bg-amber-500 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
        >
          <svg
            class="w-5 h-5 text-white"
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

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 right-8 z-30 hidden lg:block">
      <div class="flex flex-col items-center space-y-2">
        <span
          class="text-white text-xs tracking-widest writing-vertical-rl transform"
          >SCROLL</span
        >
        <div class="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-20 right-10 w-32 h-32 border border-amber-500/20 rounded-full z-10 hidden lg:block"
    ></div>
    <div
      class="absolute bottom-40 left-10 w-24 h-24 border border-amber-500/20 rounded-full z-10 hidden lg:block"
    ></div>
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

.writing-vertical-rl {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>
