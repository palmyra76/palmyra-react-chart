import { ArrayScaleConverter } from "../../../src/palmyra/chart/chartjs/converters/base/ArrayScaleConverter";

test('Array Data Converter', () => {
  const c = ArrayScaleConverter({});
  const o = c([
    { name: 'n23', value: 23 },
    { name: 'n24', value: 24 },
  ])

  const data = o.datasets[0].data;  
  expect(data).toEqual(expect.arrayContaining([23, 24]))
  expect(o.labels).toEqual(expect.arrayContaining(['n23', 'n24']))
});