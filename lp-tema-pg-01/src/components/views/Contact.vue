<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

const services = [
  "Wedding Photography",
  "Portrait Photography",
  "Event Photography",
  "Commercial Photography",
  "Fashion Photography",
  "Real Estate Photography",
];

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

const handleSubmit = async () => {
  isSubmitting.value = true;

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000));

  submitSuccess.value = true;
  isSubmitting.value = false;

  // Reset form
  formData.value = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  // Hide success message after 5 seconds
  setTimeout(() => {
    submitSuccess.value = false;
  }, 5000);
};
</script>

<template>
  <section id="contact" class="py-20 bg-black relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In <span class="text-amber-500">Touch</span>
        </h2>
        <div class="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to capture your special moments? Let's start a conversation
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8" data-aos="fade-right">
          <div class="bg-gray-900 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div class="space-y-6">
              <div
                v-for="info in contactInfo"
                :key="info.title"
                class="flex items-start space-x-4"
              >
                <div
                  class="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center"
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
                      :d="info.icon"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold mb-1">
                    {{ info.title }}
                  </h4>
                  <p class="text-gray-400 text-sm">{{ info.content }}</p>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="mt-8 rounded-xl overflow-hidden h-64 bg-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798464186301!2d107.60981097499758!3d-6.914744993086547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1704902400000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="grayscale"
              ></iframe>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-gray-900 rounded-2xl p-8">
            <h3 class="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a
                href="#"
                class="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <svg
                  class="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div data-aos="fade-left">
          <div class="bg-gray-900 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h3>

            <!-- Success Message -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="submitSuccess"
                class="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3"
              >
                <svg
                  class="w-6 h-6 text-green-500"
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
                <p class="text-green-500 font-semibold">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            </transition>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-gray-400 text-sm font-medium mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors duration-300 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="email"
                    class="block text-gray-400 text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors duration-300 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    class="block text-gray-400 text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors duration-300 outline-none"
                    placeholder="+62 123 4567 890"
                  />
                </div>
              </div>

              <div>
                <label
                  for="service"
                  class="block text-gray-400 text-sm font-medium mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  v-model="formData.service"
                  class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors duration-300 outline-none"
                >
                  <option value="">Select a service</option>
                  <option
                    v-for="service in services"
                    :key="service"
                    :value="service"
                  >
                    {{ service }}
                  </option>
                </select>
              </div>

              <div>
                <label
                  for="message"
                  class="block text-gray-400 text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-colors duration-300 outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 disabled:bg-gray-700 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/50 flex items-center justify-center space-x-2"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center space-x-2">
                  <svg
                    class="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
