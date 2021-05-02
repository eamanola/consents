const temp = [
  {
    id: 1,
    name: 'fo bar baz',
    email: 'foo@barbarbarbar.baz',
    consents: {
      newsletter: false,
      ads: true,
      statistics: true,
    },
  },
  {
    id: 2,
    name: 'foo',
    email: 'bar',
    consents: {
      newsletter: false,
      ads: false,
      statistics: true,
    },
  },
  {
    id: 3,
    name: 'foo',
    email: 'bar',
    consents: {
      newsletter: true,
      ads: true,
      statistics: true,
    },
  },
  {
    id: 4,
    name: 'foo',
    email: 'bar',
    consents: {
      newsletter: true,
      ads: true,
      statistics: true,
    },
  },
];

const getAll = () => new Promise((resolve) => { resolve(temp); });

const createNew = (consent) => ({ ...consent, id: getAll().length + 1 });

export default { getAll, createNew };
