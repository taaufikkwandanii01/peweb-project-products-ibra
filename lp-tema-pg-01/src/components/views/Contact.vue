<script setup lang="ts">
const contactInfo = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Visit Us",
    content: "123 Photography Street, Creative City, CC 12345",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Email Us",
    content: "hello@creativelens.com",
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    title: "Call Us",
    content: "+62 123 4567 890",
  },
];

const socials = [
  {
    name: "Instagram",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "Facebook",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Twitter",
    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
  },
];
</script>

<template>
  <section id="contact" class="py-24 bg-black relative overflow-hidden">
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight"
        >
          Get In <span class="text-amber-500">Touch</span>
        </h2>
        <div class="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Ready to capture your special moments? Let's start a conversation.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div
          class="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 class="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            <div class="space-y-6">
              <div
                v-for="info in contactInfo"
                :key="info.title"
                class="flex items-start space-x-4"
              >
                <div
                  class="flex-shrink-0 w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="info.icon"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold text-sm">
                    {{ info.title }}
                  </h4>
                  <p class="text-gray-400 text-sm mt-1">{{ info.content }}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-8 rounded-2xl overflow-hidden h-48 bg-gray-800 border border-white/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15843.067307040436!2d107.6191!3d-6.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              class="grayscale opacity-50 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>
        </div>

        <div
          class="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center"
        >
          <div class="mb-8">
            <div
              class="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg
                class="w-10 h-10 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">
              Follow Our Journey
            </h3>
            <p class="text-gray-400 max-w-xs mx-auto mb-10">
              Stay updated with our latest projects and behind-the-scenes
              moments on social media.
            </p>
          </div>

          <div class="flex space-x-6">
            <a
              v-for="social in socials"
              :key="social.name"
              href="#"
              class="w-14 h-14 bg-white/5 hover:bg-amber-500 rounded-2xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-amber-500/20"
            >
              <svg
                class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path :d="social.icon" />
              </svg>
            </a>
          </div>

          <div class="mt-12 pt-8 border-t border-white/5 w-full">
            <p class="text-gray-500 text-xs uppercase tracking-[0.2em]">
              Available for international projects
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
