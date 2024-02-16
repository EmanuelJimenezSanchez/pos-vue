import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'block mb-1 font-bold text-lg',
        message: 'text-sm text-red-500 mb-3 mt- ',
        wrapper: 'space-y-2 mb-2',
        input: 'border border-gray-300 rounded p-3 w-full text-gray-700 placeholder-gray-400',
      },
      file: {
        noFiles: 'block m-2',
        fileItem: 'hidden'
      },
      submit: {
        input: '$reset bg-green-400 hover:bg-green-500 w-full p-2 font-bold uppercase disabled:opacity-50 mt-4'
      }
    })
  }
}

export default config