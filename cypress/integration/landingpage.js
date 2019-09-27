describe('Home | Justine kizhakkinedath', () => {
	it('successfully loads', function() {
		cy.visit('/') 
	});

	it('has navbar', () => {
		cy.contains('nav')
	});

	it('has main block', () => {
		cy.contains('main')
	});

	it('has footer', () => {
		cy.get('footer')
	});
	
});