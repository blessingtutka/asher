const validation = (input: { type: string; label: string; required?: boolean }) => ({
    required: input.required ? `${input.label} is required` : undefined,
    pattern:
        input.type === 'email'
            ? {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
              }
            : undefined,
    minLength:
        input.type === 'password'
            ? {
                  value: 6,
                  message: 'Password must be at least 6 characters',
              }
            : undefined,
});

export default validation;
