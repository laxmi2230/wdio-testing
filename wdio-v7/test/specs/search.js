describe('text works correctly', () => {
    it('should have test fitness', () => {
        browser.url('https://content.werally.com/search?topic=Fitness')
        const infotitle = $('.has-text-wrap')
        expect(infotitle).toHaveTextContaining('Fitness')
    })
});

