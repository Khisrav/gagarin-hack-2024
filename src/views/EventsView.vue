<script>
import UserNavbar from "../components/UserNavbar.vue";

export default {
  data() {
    return {
      avatarSVG: "",
    };
  },
  components: {
    UserNavbar,
  },
};
</script>

<template>
  <div>
    <UserNavbar></UserNavbar>

    <main
      class="p-4 md:ml-64 h-auto pt-20 bg-slate-200 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div class="flex items-center justify-between">
        <button
          type="button"
          class="inline-flex items-center mb-4 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <svg
            class="w-4 h-4 me-2 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M18.8 4H5.2a1 1 0 0 0-.7 1.7l5.3 6 .2.7v4.8c0 .2 0 .4.2.4l3 2.3c.3.2.8 0 .8-.4v-7.1c0-.3 0-.5.2-.7l5.3-6a1 1 0 0 0-.7-1.7Z"
            />
          </svg>
          Фильтр
        </button>
        <button
          type="button"
          class="inline-flex items-center mb-4 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <svg
            class="w-4 h-4 me-2 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clip-rule="evenodd"
            />
          </svg>
          На карте
        </button>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="articleID in [1, 2, 3, 4, 5, 6, 7]"
          class="p-4 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 dark:border-gray-800 dark:bg-gray-800 dark:border-gray-700"
        >
          <router-link :to="'/events/' + articleID">
            <img
              class="mb-5 rounded-md"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
              alt="office laptop working"
            />
          </router-link>
          <div class="flex items-center mb-3 space-x-2">
            <img
              class="w-8 h-8 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos avatar"
            />
            <div class="font-medium dark:text-white">
              <div>Jese Leos</div>
              <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Aug 15, 2021 · 16 min read
              </div>
            </div>
          </div>
          <h3
            class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white"
          >
            <router-link :to="'/events/' + articleID">Our first office</router-link>
          </h3>
          <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation and some hard work, we moved to our new
            office.
          </p>
          <router-link
          :to="'/events/' + articleID"
            class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline"
          >
            Read more
            <svg
              class="mt-px ml-1 w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </article>
      </div>

      <div class="text-center">
        <nav aria-label="Page navigation example">
          <ul
            class="flex items-center justify-center mt-5 -space-x-px h-10 text-base"
          >
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >4</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >5</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  </div>
</template>
