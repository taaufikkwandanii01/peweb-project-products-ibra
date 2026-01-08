<script setup lang="ts">
import { ref } from "vue";

const activeFilter = ref("all");

const filters = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Wedding" },
  { id: "portrait", label: "Portrait" },
  { id: "event", label: "Event" },
  { id: "fashion", label: "Fashion" },
];

const galleryItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    category: "wedding",
    title: "Elegant Wedding Ceremony",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    category: "portrait",
    title: "Professional Portrait",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    category: "event",
    title: "Corporate Event",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    category: "fashion",
    title: "Fashion Editorial",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    category: "wedding",
    title: "Beautiful Bride",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "portrait",
    title: "Business Portrait",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    category: "event",
    title: "Award Ceremony",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea8f6e8d?w=800&q=80",
    category: "fashion",
    title: "Fashion Shoot",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    category: "wedding",
    title: "Wedding Reception",
  },
];

const filteredGallery = ref(galleryItems);

const filterGallery = (category: string) => {
  activeFilter.value = category;
  if (category === "all") {
    filteredGallery.value = galleryItems;
  } else {
    filteredGallery.value = galleryItems.filter(
      (item) => item.category === category
    );
  }
};

const selectedImage = ref<(typeof galleryItems)[0] | null>(null);

const openLightbox = (item: (typeof galleryItems)[0]) => {
  selectedImage.value = item;
};

const closeLightbox = () => {
  selectedImage.value = null;
};
</script>

<template>
  <section id="gallery" class="py-35 bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span class="text-amber-500">Gallery</span>
        </h2>
        <div class="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our portfolio of stunning photography work
        </p>
      </div>

      <!-- Filter Buttons -->
      <div
        class="flex flex-wrap justify-center gap-4 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="filterGallery(filter.id)"
          :class="[
            'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
            activeFilter === filter.id
              ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/50'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white',
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in filteredGallery"
          :key="item.id"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
          class="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
          @click="openLightbox(item)"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white text-xl font-bold mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-300 text-sm capitalize">
                {{ item.category }}
              </p>
            </div>
          </div>

          <!-- Zoom Icon -->
          <div
            class="absolute top-4 right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        @click="closeLightbox"
      >
        <button
          class="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          @click="closeLightbox"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="max-w-5xl w-full" @click.stop>
          <img
            :src="selectedImage.image"
            :alt="selectedImage.title"
            class="w-full h-auto rounded-2xl shadow-2xl"
          />
          <div class="mt-6 text-center">
            <h3 class="text-white text-2xl font-bold mb-2">
              {{ selectedImage.title }}
            </h3>
            <p class="text-gray-400 capitalize">{{ selectedImage.category }}</p>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>
