<template>
  <div
    class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show"
    id="sidebar"
    v-if="$route.meta.sidebar"
  >
    <div class="c-sidebar-brand d-lg-down-none">
      <svg
        class="c-sidebar-brand-full"
        width="118"
        height="46"
        alt="CoreUI Logo"
      >
        <use xlink:href="assets/brand/coreui.svg#full"></use>
      </svg>
      <svg
        class="c-sidebar-brand-minimized"
        width="46"
        height="46"
        alt="CoreUI Logo"
      >
        <use xlink:href="assets/brand/coreui.svg#signet"></use>
      </svg>
    </div>
    <ul class="c-sidebar-nav">
      
      <li class="c-sidebar-nav-item">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-drop"
          ></use>
        </svg>
        <router-link class="c-sidebar-nav-link" to="/Product"
          >Product</router-link
        >
      </li>
      <li class="c-sidebar-nav-item">
        <svg class="c-sidebar-nav-icon">
          <use
            xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-drop"
          ></use>
        </svg>
        <router-link class="c-sidebar-nav-link" to="/"
          >account</router-link
        >
      </li>
    </ul>
    <button
      class="c-sidebar-minimizer c-class-toggler"
      type="button"
      data-target="_parent"
      data-class="c-sidebar-minimized"
    ></button>
  </div>
</template>