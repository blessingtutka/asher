const validation = (input: { type: string; name: string; label: string; required?: boolean }) => ({
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
                  value: 4,
                  message: 'Password must be at least 4 characters',
              }
            : undefined,
    validate: input.name === 'salary' ? (value: string) => !isNaN(Number(value)) || 'Salary must be a number' : undefined,
});

export default validation;
