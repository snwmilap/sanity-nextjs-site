// /schemas/codeBlock.ts

const codeBlock = {
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'Python', value: 'python' },
          // Add more languages as needed
        ],
      },
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      description: 'Add your code here',
    },
  ],
};

export default codeBlock;
