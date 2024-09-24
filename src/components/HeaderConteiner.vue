<template>
  <div class="header">
    <PrimevueMenubar :model="items" class="bg-beige">
      <template #start>
        <img src="../assets/images/alice-logo.png" alt="Logo Alice" class="logo" />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a
          v-ripple
          :href="item.url"
          :target="item.target"
          class="flex items-center"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>

          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }
            ]"
          ></i>
        </a>
      </template>

      <template #end>
        <div class="avatar">
          <PrimevueAvatar :image="avatarImage" shape="circle" />
        </div>
      </template>
    </PrimevueMenubar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import avatarImage from '../assets/images/avatar-logo.png'

interface MenuItem {
  label: string
  icon?: string
  items?: MenuItem[]
  url?: string
  target?: string
}

const items = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Experiências',
    icon: 'pi pi-star'
  },
  {
    label: 'Projetos',
    icon: 'pi pi-wallet',
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },

      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette'
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette'
          }
        ]
      }
    ]
  },
  {
    label: 'Contato',
    icon: 'pi pi-phone',
    items: [
      {
        label: 'Linkedin',
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/in/anaalicehonorio',
        target: '_blank'
      },
      {
        label: 'Github',
        icon: 'pi pi-github',
        url: 'https://github.com/Ana-Alice-Honorio',
        target: '_blank'
      },
      {
        label: 'Medium',
        icon: 'pi pi-book',
        url: 'https://anaalicehonorio.medium.com/',
        target: '_blank'
      },
      {
        label: 'Email',
        icon: 'pi pi-envelope',
        url: 'mailto:ana.alice.honorio@gmail.com'
      }
    ]
  }
])
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--p-bg-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header .PrimevueMenubar {
  max-width: 100%;
  padding: 0 1rem;
}

.logo {
  height: 60px;
  max-height: 100%;
  object-fit: contain;
}

.avatar {
  align-items: center;
  display: flex;
  gap: 5px;
}

body {
  padding-top: 60px;
}
</style>
