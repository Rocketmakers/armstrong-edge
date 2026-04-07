import '@testing-library/jest-dom';

import { fireEvent, render, screen, within } from '@testing-library/react';

import { useForm } from '../../form';
import { NullOrUndefined } from '../../types';
import { CodeInput, ICodeInputProps } from './codeInput.component';

/**
 * Test harness that wires CodeInput to useForm, mirroring the Storybook template.
 * Exposes the combined value in a <p data-testid="value"> element so tests can assert on it.
 */
function CodeInputHarness(props: Omit<ICodeInputProps<NullOrUndefined<string>>, 'bind'>) {
  interface IFormData {
    code: NullOrUndefined<string>;
  }
  const { formProp, formState } = useForm<IFormData>({ code: '' });
  return (
    <>
      <CodeInput {...props} bind={formProp('code').bind()} />
      <p data-testid="value">{formState?.code}</p>
    </>
  );
}

/** Helper: get all text inputs inside the CodeInput wrapper */
function getInputs() {
  const wrapper = screen.getByTitle('Code input');
  return within(wrapper).getAllByRole('textbox', { hidden: true });
}

/** Helper: simulate typing a single character into an input (mirrors native change event) */
function typeChar(input: HTMLInputElement, char: string) {
  // Append the character to the current value (up to maxLength)
  const maxLength = input.maxLength > 0 ? input.maxLength : Infinity;
  const newValue = (input.value + char).slice(0, maxLength);

  // React's onChange fires on the native input event
  fireEvent.change(input, { target: { value: newValue } });
}

/** Helper: clear an input */
function clearInput(input: HTMLInputElement) {
  fireEvent.change(input, { target: { value: '' } });
}

describe('CodeInput', () => {
  describe('basic value binding', () => {
    it('should render the correct number of inputs for numeric parts', () => {
      render(<CodeInputHarness parts={[1, 1, 1]} />);
      expect(getInputs()).toHaveLength(3);
    });

    it('should render text separators and only inputs for numeric parts', () => {
      render(<CodeInputHarness parts={[2, '-', 2]} />);
      const inputs = getInputs();
      expect(inputs).toHaveLength(2);

      const wrapper = screen.getByTitle('Code input');
      expect(within(wrapper).getByText('-')).toBeTruthy();
    });

    it('should propagate typed values to the bound form state', () => {
      render(<CodeInputHarness parts={[1, 1, 1]} />);
      const inputs = getInputs() as HTMLInputElement[];

      typeChar(inputs[0], 'a');
      typeChar(inputs[1], 'b');
      typeChar(inputs[2], 'c');

      expect(screen.getByTestId('value').textContent).toBe('abc');
    });

    it('should combine multi-character parts correctly', () => {
      render(<CodeInputHarness parts={[3, 3]} />);
      const inputs = getInputs() as HTMLInputElement[];

      // Simulate typing character-by-character (each change event builds on previous value)
      fireEvent.change(inputs[0], { target: { value: 'a' } });
      fireEvent.change(inputs[0], { target: { value: 'ab' } });
      fireEvent.change(inputs[0], { target: { value: 'abc' } });

      fireEvent.change(inputs[1], { target: { value: 'd' } });
      fireEvent.change(inputs[1], { target: { value: 'de' } });
      fireEvent.change(inputs[1], { target: { value: 'def' } });

      expect(screen.getByTestId('value').textContent).toBe('abcdef');
    });
  });

  describe('clearing parts', () => {
    it('should update bound value when a part is cleared', () => {
      render(<CodeInputHarness parts={[1, 1, 1]} />);
      const inputs = getInputs() as HTMLInputElement[];

      // Type into all three
      typeChar(inputs[0], 'x');
      typeChar(inputs[1], 'y');
      typeChar(inputs[2], 'z');
      expect(screen.getByTestId('value').textContent).toBe('xyz');

      // Clear the middle part
      clearInput(inputs[1]);

      expect(screen.getByTestId('value').textContent).toBe('xz');
    });
  });

  describe('different part lengths', () => {
    it('should handle parts with different maxLength values', () => {
      render(<CodeInputHarness parts={[4, 3]} />);
      const inputs = getInputs() as HTMLInputElement[];

      typeChar(inputs[0], 'abcd');
      typeChar(inputs[1], 'efg');

      expect(screen.getByTestId('value').textContent).toBe('abcdefg');
    });
  });

  describe('parts with text separators', () => {
    it('should correctly combine values when text separators are present', () => {
      render(<CodeInputHarness parts={[2, '-', 2, '-', 2]} />);
      const inputs = getInputs() as HTMLInputElement[];

      typeChar(inputs[0], 'ab');
      typeChar(inputs[1], 'cd');
      typeChar(inputs[2], 'ef');

      expect(screen.getByTestId('value').textContent).toBe('abcdef');
    });
  });

  describe('non-sequential input', () => {
    it('should correctly combine values when parts are filled out of order', () => {
      render(<CodeInputHarness parts={[1, 1, 1]} />);
      const inputs = getInputs() as HTMLInputElement[];

      typeChar(inputs[0], 'a');
      typeChar(inputs[2], 'c');
      expect(screen.getByTestId('value').textContent).toBe('ac');

      typeChar(inputs[1], 'b');
      expect(screen.getByTestId('value').textContent).toBe('abc');
    });

    it('should preserve other parts when clearing and re-filling a middle part', () => {
      render(<CodeInputHarness parts={[1, 1, 1]} />);
      const inputs = getInputs() as HTMLInputElement[];

      typeChar(inputs[0], 'a');
      typeChar(inputs[1], 'b');
      typeChar(inputs[2], 'c');
      expect(screen.getByTestId('value').textContent).toBe('abc');

      // Clear the middle part
      clearInput(inputs[1]);
      expect(screen.getByTestId('value').textContent).toBe('ac');

      // Re-fill it with a different value
      typeChar(inputs[1], 'x');
      expect(screen.getByTestId('value').textContent).toBe('axc');
    });
  });

  describe('paste behavior', () => {
    /** Helper: simulate pasting text into an input */
    function pasteText(input: HTMLInputElement, text: string) {
      const clipboardData = {
        getData: () => text,
      };
      fireEvent.paste(input, { clipboardData });
    }

    it('should handle pasting a full value into the first part', () => {
      render(<CodeInputHarness parts={[3, 3]} />);
      const inputs = getInputs() as HTMLInputElement[];

      pasteText(inputs[0], 'abcdef');

      expect(screen.getByTestId('value').textContent).toBe('abcdef');
    });

    it('should handle pasting into a part when other parts have values', () => {
      render(<CodeInputHarness parts={[1, 1, 1]} />);
      const inputs = getInputs() as HTMLInputElement[];

      // Fill the outer parts via typing
      typeChar(inputs[0], 'a');
      typeChar(inputs[2], 'c');
      expect(screen.getByTestId('value').textContent).toBe('ac');

      // Paste into the empty middle part
      pasteText(inputs[1], 'b');

      expect(screen.getByTestId('value').textContent).toBe('abc');
    });

    it('should handle pasting into a sequentially pre-filled input', () => {
      render(<CodeInputHarness parts={[3, 3]} />);
      const inputs = getInputs() as HTMLInputElement[];

      // Fill the first part
      fireEvent.change(inputs[0], { target: { value: 'abc' } });
      expect(screen.getByTestId('value').textContent).toBe('abc');

      // Paste into the second part
      pasteText(inputs[1], 'def');

      expect(screen.getByTestId('value').textContent).toBe('abcdef');
    });

    it('should handle pasting a value that spans multiple parts', () => {
      render(<CodeInputHarness parts={[2, 2]} />);
      const inputs = getInputs() as HTMLInputElement[];

      pasteText(inputs[0], 'abcd');

      expect(screen.getByTestId('value').textContent).toBe('abcd');
    });

    it('should handle pasting with text separator parts', () => {
      render(<CodeInputHarness parts={[2, '-', 2]} />);
      const inputs = getInputs() as HTMLInputElement[];

      pasteText(inputs[0], 'abcd');

      expect(screen.getByTestId('value').textContent).toBe('abcd');
    });
  });

  describe('disabled state', () => {
    it('should disable inputs when disabled prop is true', () => {
      render(<CodeInputHarness parts={[1, 1]} disabled />);
      const inputs = getInputs() as HTMLInputElement[];
      inputs.forEach(input => {
        expect(input).toBeDisabled();
      });
    });
  });

  describe('label', () => {
    it('should render a label when provided', () => {
      render(<CodeInputHarness parts={[1, 1]} label="Enter code" />);
      expect(screen.getByText('Enter code')).toBeTruthy();
    });
  });

  describe('validation errors', () => {
    it('should show validation error messages', () => {
      render(<CodeInputHarness parts={[1, 1]} validationErrorMessages={['Code is required']} validationMode="both" />);
      expect(screen.getByText('Code is required')).toBeTruthy();
    });
  });
});
