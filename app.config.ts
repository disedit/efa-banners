export default defineAppConfig({
  ui: {
    primary: 'purple',
    gray: 'zinc',
    input: {
      placeholder: "placeholder-gray-400 dark:placeholder-gray-700",
      size: {
        md: 'text-lg'
      },
      default: {
        size: 'md',
        variant: 'none',
        padding: 'none'
      }
    },
    textarea: {
      placeholder: "placeholder-gray-400 dark:placeholder-gray-700",
      size: {
        md: 'text-lg'
      },
      default: {
        size: 'md',
        variant: 'none',
        padding: 'none'
      }
    },
    formGroup: {
      wrapper: 'border-b border-gray-500 focus-within:bg-gray-900',
      label: {
        wrapper: '-mb-1',
        base: 'w-full p-3 pb-0 text-gray-400 dark:text-gray-500 leading-none'
      },
      container: 'relative mt-0'
    },
    button: {
      variant: {
        solid: "text-white dark:text-white bg-{color}-700 dark:bg-{color}-700 hover:bg-{color}-800 dark:hover:bg-{color}-900 disabled:bg-gray-600 disabled:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500"
      }
    },
    toggle: {
      active: 'bg-{color}-600 dark:bg-{color}-600',
      container: {
        base: 'dark:bg-white',
        inactive: 'dark:bg-gray-900'
      }
    },
    range: {
      progress: {
        background: 'bg-{color}-600 dark:bg-{color}-600'
      },
      thumb: {
        color: 'text-white-600 dark:text-white-600',
        background: "[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:dark:bg-white [&::-moz-range-thumb]:bg-current",
      }
    }
  }
})
