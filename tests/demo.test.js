describe('Pruebas en <DemoComponent />', () => {
  test('This Test Should Not Fail', () => {
    // Initialize

    const message1 = 'Hello World';

    // Stimulus

    const message2 = message1.trim();

    // Assertion

    expect(message1).toBe(message2);
  });
});
