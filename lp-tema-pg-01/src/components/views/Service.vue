<script setup lang="ts">
const services = [
  {
    title: "Wedding Photography",
    description:
      "Capturing your special day with timeless elegance and authentic emotion",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    features: [
      "Full day coverage",
      "Engagement session",
      "High-res images",
      "Custom album",
    ],
  },
  {
    title: "Portrait Photography",
    description:
      "Professional portraits that showcase your personality and style",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    features: [
      "Studio & outdoor",
      "Professional lighting",
      "Retouching included",
      "Multiple outfits",
    ],
  },
  {
    title: "Event Photography",
    description:
      "Documenting your corporate and private events with professional expertise",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    features: [
      "Corporate events",
      "Private parties",
      "Award ceremonies",
      "Product launches",
    ],
  },
  {
    title: "Commercial Photography",
    description:
      "High-quality images for your business, products, and marketing needs",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80",
    features: [
      "Product photos",
      "Brand imagery",
      "Advertising shots",
      "E-commerce ready",
    ],
  },
  {
    title: "Fashion Photography",
    description:
      "Editorial and commercial fashion photography that makes a statement",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    features: [
      "Lookbook shoots",
      "Editorial work",
      "Model portfolios",
      "Social media content",
    ],
  },
  {
    title: "Real Estate Photography",
    description: "Showcasing properties in their best light for maximum appeal",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    features: [
      "Interior & exterior",
      "Drone photography",
      "Virtual tours",
      "HDR processing",
    ],
  },
];
</script>

<template>
  <section id="service" class="py-35 bg-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span class="text-amber-500">Services</span>
        </h2>
        <div class="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive photography solutions tailored to your unique needs
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="group relative bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
        >
          <!-- Image -->
          <div class="relative h-64 overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
            ></div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3
              class="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300"
            >
              {{ service.title }}
            </h3>
            <p class="text-gray-400 mb-4 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Features List -->
            <ul class="space-y-2 mb-6">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center text-sm text-gray-400"
              >
                <svg
                  class="w-5 h-5 text-amber-500 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>

            <!-- Button -->
            <button
              class="w-full py-3 bg-amber-500/10 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 border border-amber-500/20"
            >
              Learn More
            </button>
          </div>

          <!-- Hover Effect -->
          <div
            class="absolute top-4 right-4 w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg
              class="w-6 h-6 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div
        class="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Need a Custom Package?
        </h3>
        <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          We offer tailored photography packages to meet your specific
          requirements
        </p>
        <button
          class="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Request Custom Quote
        </button>
      </div>
    </div>
  </section>
</template>
