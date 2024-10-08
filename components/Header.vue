<template>
  <header class="flex justify-between flex-row">
    <div class="date flex">
      <!--language-->
      <div class="flex gap-3 bg-transparent me-4">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1.5 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Fa
          <svg
            class="w-1.5 h-1 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200 ml-15"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="index-en.html"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >En</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!--Select Project-->
      <div class="flex gap-3 bg-transparent me-4">
        <button
          id="dropdownSelectProject"
          data-dropdown-toggle="SelectProject"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-1.5 py-1 text-center inline-flex items-center"
          type="button"
        >
          پروژه اول
          <svg
            class="w-1.5 h-1 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="SelectProject"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-100 p-4"
        >
          <ul
            class="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownSelectProject"
          >
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >پروژه دوم</a
              >
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >پروژه سوم</a
              >
            </li>

            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >پروژه چهارم</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="flex items-center">
        <p id="headertxt">چهارشنبه 25 تیرماه / 13:44</p>
        <div class="flex items-center" id="box-notifications">
          <i
            class="bi bi-bell-fill ms-7 me-5 fa-2xl text-amber-400 cursor-pointer relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            id="icon-notifications"
            data-dropdown-toggle="notifications"
            type="button"
          >
            <span
              id="number-notification"
              class="absolute bg-red-500 text-blue-100 w-[20px] py-2 text-2xs font-bold rounded-md text-center"
            ></span>
          </i>
          <!-- Dropdown menu -->
          <div
            id="notifications"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[500px] p-2"
          >
            <ul
              id="list-notifications"
              class="p-2 text-sm text-gray-700"
              aria-labelledby="icon-notifications"
            >
              <li class="my-2">
                <div class="flex items-center hover:bg-gray-100 rounded-md p-2">
                  <i
                    class="bi bi-x-circle-fill text-red-600 cursor-pointer"
                    onclick="closeNotification(this)"
                  ></i>
                  <span class="mx-2 cursor-default"
                    >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  </span>
                </div>
              </li>

              <li class="my-2">
                <div class="flex items-center hover:bg-gray-100 rounded-md p-2">
                  <i
                    class="bi bi-x-circle-fill text-red-600 cursor-pointer"
                    onclick="closeNotification(this)"
                  ></i>
                  <span class="mx-2 cursor-default"
                    >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  </span>
                </div>
              </li>

              <li class="my-2">
                <div class="flex items-center hover:bg-gray-100 rounded-md p-2">
                  <i
                    class="bi bi-x-circle-fill text-red-600 cursor-pointer"
                    onclick="closeNotification(this)"
                  ></i>
                  <span class="mx-2 cursor-default"
                    >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  </span>
                </div>
              </li>

              <li class="my-2">
                <div class="flex items-center hover:bg-gray-100 rounded-md p-2">
                  <i
                    class="bi bi-x-circle-fill text-red-600 cursor-pointer"
                    onclick="closeNotification(this)"
                  ></i>
                  <span class="mx-2 cursor-default"
                    >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="logo absolute left-[48%]">
      <img src="/assets/img/Logo.png" alt="" />
    </div>

    <div class="pagination gap-2 flex">
      <a href="3dPage/index-fa-3d.html" class="h-full text-center">
        <button
          class="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-1.5 py-1 text-center inline-flex items-center me-5"
        >
          سالن
        </button>
      </a>
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-1.5 py-1 text-center inline-flex items-center me-5"
        onclick="showCamera()"
      >
        نمایش دوربین
      </button>

      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-1.5 py-1 text-center inline-flex items-center me-5"
        onclick="LiveChart()"
      >
        چارت آنلاین
      </button>
      <div><a href="#">1 از 2</a></div>
      <div class="active"><a href="./index-fa-1.html">بعدی</a></div>
    </div>
  </header>
</template>
<script></script>
<style></style>
