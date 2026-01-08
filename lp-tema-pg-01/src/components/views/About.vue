<script setup lang="ts">
const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "300+", label: "Happy Clients" },
  { number: "50+", label: "Awards Won" },
];

const features = [
  {
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Professional Equipment",
    description:
      "State-of-the-art cameras and lighting equipment for perfect shots",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Creative Vision",
    description: "Unique artistic approach that brings your ideas to life",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Fast Delivery",
    description: "Quick turnaround time without compromising quality",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Passion Driven",
    description: "Every project is handled with care and dedication",
  },
];
</script>

<template>
  <section id="about" class="py-20 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span class="text-amber-500">Us</span>
        </h2>
        <div class="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          We are passionate photographers dedicated to capturing life's most
          precious moments
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <!-- Image -->
        <div data-aos="fade-right" class="relative">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
              alt="Photographer at work"
              class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div
            class="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -z-10"
          ></div>
        </div>

        <!-- Content -->
        <div data-aos="fade-left" class="space-y-6">
          <h3 class="text-3xl font-bold text-white">
            Creating Visual Stories Since 2014
          </h3>
          <p class="text-gray-400 leading-relaxed">
            With over a decade of experience in professional photography, we
            specialize in capturing authentic moments that tell compelling
            stories. Our team combines technical expertise with artistic vision
            to deliver exceptional results.
          </p>
          <p class="text-gray-400 leading-relaxed">
            From intimate portraits to grand events, we approach each project
            with fresh eyes and creative enthusiasm. We believe that every
            photograph should evoke emotion and preserve memories that last a
            lifetime.
          </p>
          <div class="flex items-center space-x-4 pt-4">
            <div class="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Team member"
                class="w-12 h-12 rounded-full border-2 border-gray-900"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                alt="Team member"
                class="w-12 h-12 rounded-full border-2 border-gray-900"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                alt="Team member"
                class="w-12 h-12 rounded-full border-2 border-gray-900"
              />
            </div>
            <div class="text-gray-400">
              <p class="font-semibold text-white">Expert Team</p>
              <p class="text-sm">10+ Professional Photographers</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="text-center"
        >
          <h4 class="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
            {{ stat.number }}
          </h4>
          <p class="text-gray-400">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Features -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300 group"
        >
          <div
            class="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300"
          >
            <svg
              class="w-7 h-7 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="feature.icon"
              />
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-white mb-2">
            {{ feature.title }}
          </h4>
          <p class="text-gray-400 text-sm">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
