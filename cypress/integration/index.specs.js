describe('index.js', () => {
  it('should redirect / to /give-consent', () => {
    cy
      .visit('http://localhost:3000')
      .url()
      .then((url) => {
        expect(url).to.eq('http://localhost:3000/give-consent');
      });
  });
});
