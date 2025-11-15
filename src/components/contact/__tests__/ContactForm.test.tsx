import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ContactForm', () => {
  test('updates input values on change', async () => {
    render(<form><input type="text" name="name" /></form>);
    const inputElement = screen.getByRole('textbox', { name: /name/i });
    await fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });

  test('submits the form with correct data', async () => {
    const handleSubmit = jest.fn();
    render(
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <button type="submit">Submit</button>
      </form>
    );

    await userEvent.type(screen.getByRole('textbox', { name: /name/i }), 'John Doe');
    await userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'john@example.com');
    await userEvent.type(screen.getByRole('textbox', { name: /message/i }), 'Hello!');

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

    // handleSubmit should be called with the form data
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
