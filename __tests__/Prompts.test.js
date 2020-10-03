const Prompts = require('../lib/Prompts.js');

test('checks to see if empty arrays are being constructed', () => {
    const prompts = new Prompts;

    expect(prompts.managerArr).toHaveLength(0);
    expect(prompts.engineerArr).toHaveLength(0);
    expect(prompts.internArr).toHaveLength(0);
});