const _ = require('./utils');

test('render', async () => {
  const componentId = _.load('index', 'comp');
  const component = _.render(componentId, {
    list: [{ id: 'us', text: '美国' }],
  });

  const parent = document.createElement('parent-wrapper');
  component.attach(parent);

  const view = component.querySelector('.ma-item'); // 获取子组件 view
  expect(view.dom.innerHTML).toBe(
    '<wx-text class="comp--ma-text">美国</wx-text>'
  );
  expect(window.getComputedStyle(view.dom).color).toBe('rgb(51, 51, 51)');
});
