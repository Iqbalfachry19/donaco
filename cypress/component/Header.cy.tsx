import Header from '../../components/Header';
import '../../styles/globals.css';
describe('Header.cy.ts', () => {
  it('Header should have title "Donaco"', () => {
    // cy.mount()
    cy.viewport(1920, 1080);
    cy.mount(<Header />);
    cy.get('h1').contains('Donaco');
  });
});
