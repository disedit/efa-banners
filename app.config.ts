export default defineAppConfig({
  ui: {
    primary: 'purple',
    gray: 'zinc',
    button: {
      variant: {
        solid: "text-white dark:text-white bg-{color}-700 dark:bg-{color}-700 hover:bg-{color}-800 dark:hover:bg-{color}-900 disabled:bg-gray-600 disabled:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500"
      }
    }
  }
})
