import axios from 'axios';
import consentService from './consent-service';

describe('getAll', () => {
  test('returns empty array initially', async () => {
    const consents = await consentService.getAll();
    expect(consents).toEqual([]);
  });

  test('returns saved consents', async () => {
    const consent = {
      name: 'foo',
      email: 'bar',
      consents: {
        newsletter: false,
        ads: false,
        statistics: false,
      },
    };

    await consentService.createNew(consent);

    let consents = await consentService.getAll();
    expect(consents).toEqual([{ ...consent, id: 1 }]);

    await consentService.createNew(consent);

    consents = await consentService.getAll();
    expect(consents.length).toBe(2);

    await axios.delete(`${consentService.baseUrl}/1`);
    await axios.delete(`${consentService.baseUrl}/2`);
  });
});

describe('createNew', () => {
  test('adds a new consent', async () => {
    const before = await consentService.getAll();
    expect(before).toEqual([]);

    const consent = {
      name: 'foo',
      email: 'bar',
      consents: {
        newsletter: false,
        ads: false,
        statistics: false,
      },
    };
    await consentService.createNew(consent);

    const after = await consentService.getAll();
    expect(after.length).toEqual(1);

    expect(after[0]).toEqual({ ...consent, id: 1 });

    await axios.delete(`${consentService.baseUrl}/1`);
  });
});
