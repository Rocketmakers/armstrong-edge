import { enGB } from 'date-fns/locale';

import { getMonths, getYears, minMaxCheckThrow } from './dateTimeInput.utils';

/** minMaxCheckThrow */
describe('minMaxCheckThrow', () => {
  it('should not throw an error when min date is before max date', () => {
    const minDate = new Date('2023-01-01');
    const maxDate = new Date('2023-12-31');

    expect(() => minMaxCheckThrow(minDate, maxDate)).not.toThrow();
  });

  it('should not throw an error when min date and max date are the same', () => {
    const date = new Date('2023-06-05');

    expect(() => minMaxCheckThrow(date, date)).not.toThrow();
  });

  it('should throw an error when max date is before min date', () => {
    const minDate = new Date('2023-12-31');
    const maxDate = new Date('2023-01-01');

    expect(() => minMaxCheckThrow(minDate, maxDate)).toThrow('Min date cannot be before max date!');
  });

  it('should not throw an error when either min date or max date is not provided', () => {
    const date = new Date('2023-06-05');

    expect(() => minMaxCheckThrow(undefined, date)).not.toThrow();
    expect(() => minMaxCheckThrow(date, undefined)).not.toThrow();
    expect(() => minMaxCheckThrow(undefined, undefined)).not.toThrow();
  });
});

/** getMonths */
describe('getMonths', () => {
  const locale = enGB;

  it('should return an array of 12 months for a valid year', () => {
    const year = 2023;
    const months = getMonths(year, locale);

    expect(months).toHaveLength(12);
    expect(months[0].name).toBe('January');
    expect(months[1].name).toBe('February');
    expect(months[2].name).toBe('March');
    expect(months[3].name).toBe('April');
    expect(months[4].name).toBe('May');
    expect(months[5].name).toBe('June');
    expect(months[6].name).toBe('July');
    expect(months[7].name).toBe('August');
    expect(months[8].name).toBe('September');
    expect(months[9].name).toBe('October');
    expect(months[10].name).toBe('November');
    expect(months[11].name).toBe('December');
  });

  it('should disable months before the min date', () => {
    const year = 2023;
    const minDate = new Date('2023-03-01');
    const months = getMonths(year, locale, minDate);

    expect(months[0].disabled).toBe(true);
    expect(months[1].disabled).toBe(true);
    expect(months[2].disabled).toBe(false);
    expect(months[3].disabled).toBe(false);
    expect(months[4].disabled).toBe(false);
    expect(months[5].disabled).toBe(false);
    expect(months[6].disabled).toBe(false);
    expect(months[7].disabled).toBe(false);
    expect(months[8].disabled).toBe(false);
    expect(months[9].disabled).toBe(false);
    expect(months[10].disabled).toBe(false);
    expect(months[11].disabled).toBe(false);
  });

  it('should disable months after the max date', () => {
    const year = 2023;
    const maxDate = new Date('2023-08-01');
    const months = getMonths(year, locale, undefined, maxDate);

    expect(months[0].disabled).toBe(false);
    expect(months[1].disabled).toBe(false);
    expect(months[2].disabled).toBe(false);
    expect(months[3].disabled).toBe(false);
    expect(months[4].disabled).toBe(false);
    expect(months[5].disabled).toBe(false);
    expect(months[6].disabled).toBe(false);
    expect(months[7].disabled).toBe(false);
    expect(months[8].disabled).toBe(true);
    expect(months[9].disabled).toBe(true);
    expect(months[10].disabled).toBe(true);
    expect(months[11].disabled).toBe(true);
  });

  it('should disable months before the min date and after the max date', () => {
    const year = 2023;
    const minDate = new Date('2023-03-01');
    const maxDate = new Date('2023-08-01');
    const months = getMonths(year, locale, minDate, maxDate);

    expect(months[0].disabled).toBe(true);
    expect(months[1].disabled).toBe(true);
    expect(months[2].disabled).toBe(false);
    expect(months[3].disabled).toBe(false);
    expect(months[4].disabled).toBe(false);
    expect(months[5].disabled).toBe(false);
    expect(months[6].disabled).toBe(false);
    expect(months[7].disabled).toBe(false);
    expect(months[8].disabled).toBe(true);
    expect(months[9].disabled).toBe(true);
    expect(months[10].disabled).toBe(true);
    expect(months[11].disabled).toBe(true);
  });
});

/** getYears */
describe('getYears', () => {
  it('should return an array of years from default min year to default max year', () => {
    const years = getYears();

    expect(years).toHaveLength(201);
    expect(years[0]).toBe(1900);
    expect(years[200]).toBe(2100);
  });

  it('should return an array of years from min year to default max year', () => {
    const minDate = new Date('2000-01-01');
    const years = getYears(minDate);

    expect(years).toHaveLength(101);
    expect(years[0]).toBe(2000);
    expect(years[100]).toBe(2100);
  });

  it('should return an array of years from default min year to max year', () => {
    const maxDate = new Date('2050-01-01');
    const years = getYears(undefined, maxDate);

    expect(years).toHaveLength(151);
    expect(years[0]).toBe(1900);
    expect(years[150]).toBe(2050);
  });

  it('should return an array of years from min year to max year', () => {
    const minDate = new Date('2000-01-01');
    const maxDate = new Date('2050-01-01');
    const years = getYears(minDate, maxDate);

    expect(years).toHaveLength(51);
    expect(years[0]).toBe(2000);
    expect(years[50]).toBe(2050);
  });
});
