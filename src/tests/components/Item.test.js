import { render } from '@testing-library/react';
import { Item } from '../../components/ItemScreen/Item';

describe('Pruebas en <Item/>', () => {
  let wrapper;
  test('debe de mostrar el componente correctamente', () => {
    const precio = 120;
    wrapper = render(<Item item={precio} nombreItem="Precio" />);
    wrapper.getByText('Precio:');
    wrapper.getByText('120');
  });

  test('debe de mostrar el componente correctamente', () => {
    wrapper = render(<Item item="" nombreItem="Precio" />);
    wrapper.getByText('No disponible');
  });
});
